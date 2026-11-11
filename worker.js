import { onRequestPost as contactPost, onRequestOptions as contactOptions } from "./functions/api/contact.js";
import { onRequestGet as messagesGet, onRequestDelete as messagesDelete, onRequestOptions as messagesOptions } from "./functions/api/messages.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Technical SEO: Ensure robots.txt is strictly served with text/plain (never SPA HTML)
    if (url.pathname === "/robots.txt") {
      const robotsTxt = `User-agent: *\nAllow: /\nDisallow: /api/\n\n# AI Search & Reasoning Crawlers (GEO)\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nUser-agent: Applebot-Extended\nAllow: /\n\nSitemap: https://hendev.dev/sitemap.xml\n`;
      return new Response(robotsTxt, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }

    // Google Search Console Site Verification: Dynamically serve ANY google*.html verification file
    if (/^\/google[a-f0-9]+\.html$/i.test(url.pathname)) {
      const filename = url.pathname.slice(1);
      return new Response(`google-site-verification: ${filename}`, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }

    // IndexNow Key Protocol (Instant Discovery & Ranking on Bing, Seznam, Yandex & Partner Engines)
    const INDEXNOW_KEY = "7ecdf98135894b92b6040854adfa9841";
    if (url.pathname === "/indexnow.txt" || url.pathname === `/${INDEXNOW_KEY}.txt`) {
      return new Response(INDEXNOW_KEY, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }

    // Generative Engine Optimization (GEO): Serve llms.txt directly for AI search engines
    if (url.pathname === "/llms.txt") {
      const llmsTxt = `# Henry Larreal (hendev.dev)\n\n> Data Scientist & Cloud Automation Engineer specializing in Google Cloud Platform (GCP), Agentic AI, BigQuery, and enterprise automated data architectures.\n\n## Profile Summary\n- Name: Henry Larreal\n- Handle: hendev / hendevdata\n- Location: Remote / Worldwide\n- Email: admin@hendev.dev\n- Portfolio: https://hendev.dev\n- LinkedIn: https://www.linkedin.com/in/henry-larreal-carrera/\n- GitHub: https://github.com/hendevdata/hendevdata\n- Calendly: https://calendly.com/henrylarreal27/ai-consultation\n\n## Core Pillars & Expertise\n1. Data Engineering (GCP & BigQuery): End-to-end serverless ETL pipelines, event-driven architectures, dbt, high-availability data warehouses.\n2. Data Science & Agentic AI: Autonomous AI systems via Model Context Protocol (MCP), LLM orchestration, RAG, and predictive models.\n3. Data Analytics: Executive reporting, Looker Studio dashboards, PowerBI, real-time KPI pipelines.\n\n## Featured Projects & Case Studies\n- Automated QA Tracker & Script Validator (The Home Depot / PRO Campaigns): Real-time tracking and script validator integrated into marketing campaign QA workflows.\n- Nexus Tactical Operations Center: Enterprise dashboard orchestrating distributed workflows and Agentic AI operations.\n- Ivanna (Agentic Assistant): Autonomous Model Context Protocol assistant for workflow automation.\n- Datatón FACh 2024 (Winner): Landsat-8 remote sensor modeling on Google Earth Engine.\n\n## Contact & Engagement\nDirect inquiries: admin@hendev.dev | 15-min discovery: https://calendly.com/henrylarreal27/ai-consultation\n`;
      return new Response(llmsTxt, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=86400"
        }
      });
    }

    // Technical SEO: Ensure sitemap.xml is strictly served with application/xml
    if (url.pathname === "/sitemap.xml") {
      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://hendev.dev/</loc>
    <lastmod>2026-11-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://hendev.dev/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://hendev.dev/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://hendev.dev/" />
    <image:image>
      <image:loc>https://hendev.dev/social.png</image:loc>
      <image:title>Henry Larreal — Data Scientist &amp; Cloud Automation Engineer</image:title>
      <image:caption>Google Cloud Platform (GCP), Agentic AI, and enterprise automated data architectures portfolio</image:caption>
    </image:image>
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
