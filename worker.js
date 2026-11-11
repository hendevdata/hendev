import { onRequestPost as contactPost, onRequestOptions as contactOptions } from "./functions/api/contact.js";
import { onRequestGet as messagesGet, onRequestDelete as messagesDelete, onRequestOptions as messagesOptions } from "./functions/api/messages.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Technical SEO: Ensure robots.txt is strictly served with text/plain (never SPA HTML)
    if (url.pathname === "/robots.txt") {
      const robotsTxt = `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: https://hendev.dev/sitemap.xml\n`;
      return new Response(robotsTxt, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }

    // Technical SEO: Ensure sitemap.xml is strictly served with application/xml
    if (url.pathname === "/sitemap.xml") {
      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://hendev.dev/</loc>
    <lastmod>2026-11-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://hendev.dev/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://hendev.dev/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://hendev.dev/" />
  </url>
</urlset>`;
      return new Response(sitemapXml, {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }

    // Handle Privacy-First Telemetry & Analytics API (Edge Connector for Looker Studio / BigQuery)
    if (url.pathname === "/api/analytics") {
      const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400"
      };

      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: corsHeaders });
      }

      if (request.method === "POST") {
        try {
          const body = await request.json().catch(() => ({}));
          const clientData = {
            type: body.type || "pageview",
            event: body.event || "view",
            path: body.path || url.pathname,
            referrer: body.referrer || "",
            dwellTime: Number(body.dwellTime || 0),
            isBounce: Boolean(body.isBounce),
            meta: body.meta || {},
            timestamp: new Date().toISOString(),
            geo: {
              country: request.cf?.country || "unknown",
              city: request.cf?.city || "unknown",
              region: request.cf?.region || "unknown",
              colo: request.cf?.colo || "unknown"
            },
            ua: request.headers.get("user-agent") || ""
          };

          // Structured log for Cloudflare Observability / Logpush to Google Cloud BigQuery & Looker Studio
          console.log("[HENDEV_ANALYTICS]", JSON.stringify(clientData));

          return new Response(null, {
            status: 204,
            headers: corsHeaders
          });
        } catch {
          return new Response(JSON.stringify({ error: "Invalid telemetry payload" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }
      }

      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

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
