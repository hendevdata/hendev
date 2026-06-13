export async function onRequestGet(context) {
  const { env } = context;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const kv = env.SUBSCRIBERS || env.SUBSCRIBERS_KV;
    if (!kv) {
      // Return a simulated mock list of leads if KV is not yet configured (helps testing out-of-the-box)
      const mockLeads = [
        { email: "john.doe@techcorp.com", subscribedAt: new Date(Date.now() - 3600000 * 2).toISOString() },
        { email: "sarah.connor@cyberdyne.io", subscribedAt: new Date(Date.now() - 3600000 * 24).toISOString() },
        { email: "h.potter@hogwarts.edu", subscribedAt: new Date(Date.now() - 3600000 * 48).toISOString() }
      ];
      return new Response(JSON.stringify({ success: true, subscribers: mockLeads, isMock: true }), { status: 200, headers });
    }

    // List keys with prefix 'sub:'
    const listResult = await kv.list({ prefix: "sub:" });
    const subscribers = [];

    for (const key of listResult.keys) {
      const val = await kv.get(key.name);
      if (val) {
        try {
          subscribers.push(JSON.parse(val));
        } catch (e) {
          subscribers.push({ email: key.name.replace("sub:", ""), subscribedAt: new Date().toISOString() });
        }
      }
    }

    // Sort by subscription date desc
    subscribers.sort((a, b) => new Date(b.subscribedAt) - new Date(a.subscribedAt));

    return new Response(JSON.stringify({ success: true, subscribers, isMock: false }), { status: 200, headers });
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
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return new Response(JSON.stringify({ success: false, error: "Missing email parameter" }), { status: 400, headers });
    }

    const kv = env.SUBSCRIBERS || env.SUBSCRIBERS_KV;
    if (kv) {
      await kv.delete(`sub:${email}`);
    }

    return new Response(JSON.stringify({ success: true, message: `Deleted subscriber ${email}` }), { status: 200, headers });
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
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
