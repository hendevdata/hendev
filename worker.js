import { onRequestPost as contactPost, onRequestOptions as contactOptions } from "./functions/api/contact.js";
import { onRequestGet as messagesGet, onRequestDelete as messagesDelete, onRequestOptions as messagesOptions } from "./functions/api/messages.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle Contact API
    if (url.pathname === "/api/contact") {
      if (request.method === "POST") {
        return contactPost({ request, env, ctx });
      }
      if (request.method === "OPTIONS") {
        return contactOptions();
      }
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*" 
        }
      });
    }

    // Handle Messages API (Nexus Admin)
    if (url.pathname === "/api/messages") {
      if (request.method === "GET") {
        return messagesGet({ request, env, ctx });
      }
      if (request.method === "DELETE") {
        return messagesDelete({ request, env, ctx });
      }
      if (request.method === "OPTIONS") {
        return messagesOptions();
      }
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*" 
        }
      });
    }

    // Fallback to Cloudflare static assets
    if (env.ASSETS && typeof env.ASSETS.fetch === "function") {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  }
};
