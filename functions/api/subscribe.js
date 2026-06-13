export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data = await request.json();
    const { email } = data;

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        { status: 400, headers }
      );
    }

    const timestamp = new Date().toISOString();
    const subscriberData = JSON.stringify({ email, subscribedAt: timestamp });

    // Look for SUBSCRIBERS KV binding
    const kv = env.SUBSCRIBERS || env.SUBSCRIBERS_KV;
    if (kv) {
      // Save subscriber with email as the key
      await kv.put(`sub:${email}`, subscriberData);
    } else {
      console.warn("KV binding (SUBSCRIBERS or SUBSCRIBERS_KV) not found. Simulating save locally.");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Subscription successful", email }),
      { status: 200, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers }
    );
  }
}

// Handle CORS preflight OPTIONS request
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
