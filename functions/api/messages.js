export async function onRequestGet(context) {
  const { env } = context;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  try {
    const kv = env.MESSAGES_KV || env.CONTACTS_KV || env.SUBSCRIBERS_KV || env.SUBSCRIBERS;
    if (!kv) {
      // Mock inquiries for demonstration when KV is unconfigured locally
      const mockMessages = [
        {
          id: "msg_demo_1",
          name: "Denyam Noguera",
          email: "dnoguera@player3.io",
          service: "Data Engineering & GCP Pipelines",
          subject: "FACh Datatón follow-up & cloud pipeline",
          message: "Hi Henry, we'd like to consult on orchestrating our sensor processing pipelines on GCP BigQuery and Cloud Run.",
          receivedAt: new Date(Date.now() - 3600000 * 3).toISOString(),
          clientCountry: "CL",
          status: "read",
          targetRecipient: "admin@hendev.dev"
        },
        {
          id: "msg_demo_2",
          name: "Yan Song",
          email: "yang.song.pmp@gmail.com",
          service: "Agentic AI & Autonomous Systems",
          subject: "Enterprise Agentic AI Integration",
          message: "Henry, the Agentic AI presentation was stellar. Our team is looking to automate our project tracking using local LLMs and MCP.",
          receivedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          clientCountry: "US",
          status: "unread",
          targetRecipient: "admin@hendev.dev"
        }
      ];
      return new Response(JSON.stringify({ success: true, messages: mockMessages, isMock: true }), { status: 200, headers });
    }

    // List all messages prefixed with msg:
    const listResult = await kv.list({ prefix: "msg:" });
    const messages = [];

    for (const key of listResult.keys) {
      const val = await kv.get(key.name);
      if (val) {
        try {
          messages.push(JSON.parse(val));
        } catch {
          // ignore malformed entries
        }
      }
    }

    // Sort by newest receivedAt desc
    messages.sort((a, b) => new Date(b.receivedAt) - new Date(a.receivedAt));

    return new Response(JSON.stringify({ success: true, messages, isMock: false }), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers });
  }
}

export async function onRequestDelete(context) {
  const { request, env } = context;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ success: false, error: "Missing message id parameter" }), { status: 400, headers });
    }

    const kv = env.MESSAGES_KV || env.CONTACTS_KV || env.SUBSCRIBERS_KV || env.SUBSCRIBERS;
    if (kv) {
      await kv.delete(`msg:${id}`);
    }

    return new Response(JSON.stringify({ success: true, message: `Deleted message ${id}` }), { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers });
  }
}

// Handle CORS preflight OPTIONS request
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
