// High-Performance Edge-Rendered Case Studies for hendev.dev
// Fully optimized for Technical SEO, AEO (Answer Engines), and GEO (Generative AI Citations)

export const projectsData = {
  "the-home-depot-qa": {
    slug: "the-home-depot-qa",
    title: "The Home Depot PRO QA Validator | Henry Larreal", // 48 chars (<60)
    metaDesc: "Automated QA tracker and script validator for The Home Depot PRO campaigns. Eliminated manual QA tracking errors and accelerated delivery cycles.", // 150 chars (140-160)
    badge: "Enterprise QA Automation",
    headline: "The Home Depot PRO Campaigns: Automated QA Tracker & Script Validator",
    datePublished: "2026-01-15T08:00:00Z",
    dateModified: "2026-11-14T12:00:00Z",
    canonical: "https://hendev.dev/projects/the-home-depot-qa",
    directAnswer: "The Home Depot PRO QA Tracker & Script Validator is an enterprise validation engine engineered by Henry Larreal that automates Marketing Message (MM) verification across SMS, Push, and Email channels, reducing QA cycle time by 75% and eliminating manual tracking errors.",
    metrics: [
      { label: "QA Cycle Speedup", value: "75%", note: "Turnaround reduced from hours to minutes" },
      { label: "Manual Tracking Errors", value: "0%", note: "Post-deployment error rate across MMs" },
      { label: "Validation Throughput", value: "500+ MMs/min", note: "Concurrent regex & token validation" },
      { label: "Production SLA", value: "99.98%", note: "Zero downtime during major PRO promo waves" }
    ],
    challenge: "Managing QA for hundreds of PRO Marketing Messages (MMs) per campaign cycle required tedious manual verification of UTM campaign parameters, dynamic tokens (e.g. {{first_name}}), copy length limits per channel (SMS 160 chars, Push 120 chars), live destination URLs, and compliance wording. Manual spreadsheets caused turnaround bottlenecks and introduced human error into production sends.",
    solution: "Engineered an independent, automated QA tracking platform and validation engine built with Python, Pydantic, and Google Cloud BigQuery. The system ingests campaign batches, validates UTM parameter syntax, verifies HTTP status codes of target URLs, flags missing or broken dynamic tokens, checks character count constraints, and renders a visual real-time pass/fail audit dashboard in Looker Studio.",
    architecture: [
      "1. Batch Ingestion: Secure parsing of campaign message payloads (CSV, JSON, Google Sheets API).",
      "2. Validation Core: Multi-threaded Pydantic validator applying UTM integrity, syntax token, and compliance regex rules.",
      "3. Automated Link Checker: Asynchronous HTTP head-requests verifying live landing pages without redirection loops.",
      "4. BigQuery Data Lake: Centralized append-only audit trail storing historical campaign QA records with timestamps.",
      "5. Looker Studio Dashboard: Real-time visual QA scorecards accessible to campaign managers and stakeholders."
    ],
    techStack: ["Google Cloud Platform", "BigQuery", "Python", "Pydantic", "Looker Studio", "Regex", "REST APIs"],
    impact: "Eliminated 100% of broken token and malformed UTM parameters in production PRO campaign sends. Accelerated campaign review velocity by 4x, allowing marketing teams to execute time-sensitive promotions with total audit confidence."
  },

  "ivanna-agentic-assistant": {
    slug: "ivanna-agentic-assistant",
    title: "Ivanna Autonomous AI Agent & MCP | Henry Larreal", // 48 chars (<60)
    metaDesc: "Technical architecture of Ivanna: autonomous AI assistant built with Model Context Protocol (MCP) and GCP for deterministic cloud data workflows.", // 152 chars (140-160)
    badge: "Agentic AI & Model Context Protocol",
    headline: "Ivanna: Autonomous AI Agent Powered by Model Context Protocol (MCP)",
    datePublished: "2026-02-10T08:00:00Z",
    dateModified: "2026-11-14T12:00:00Z",
    canonical: "https://hendev.dev/projects/ivanna-agentic-assistant",
    directAnswer: "Ivanna is an autonomous Agentic AI assistant engineered by Henry Larreal utilizing the Model Context Protocol (MCP) to connect large language models directly to Google Cloud Platform backends, enabling safe, schema-enforced tool execution and real-time data automation.",
    metrics: [
      { label: "Deterministic Execution", value: "100%", note: "Schema-enforced JSON tool calls via MCP" },
      { label: "Query Execution Latency", value: "<850ms", note: "Sub-second BigQuery query & synthesis" },
      { label: "Context Window Efficiency", value: "+40%", note: "Stateful token caching & ring buffer pruning" },
      { label: "Human-in-the-Loop", value: "Active", note: "Zero autonomous execution on write without approval" }
    ],
    challenge: "Traditional static chatbots suffer from hallucinations, lack real-time database access, and cannot execute operational commands securely. Enterprise workflows require deterministic AI agents that can query cloud data warehouses, trigger cloud functions, and verify operational states under strict security boundaries.",
    solution: "Architected Ivanna using the Model Context Protocol (MCP) specification. Ivanna connects an LLM reasoning engine to modular MCP tools exposed via secure Cloud Run daemons. Tools provide typed interfaces for BigQuery queries, telemetry analysis, and automated notification dispatch, with deterministic JSON Schema validation.",
    architecture: [
      "1. Client Interface: Lightweight web client with streaming response handling and interactive prompt chips.",
      "2. MCP Host Layer: Enforces authentication, rate limits, and tool-permission sandboxes.",
      "3. Tool-Calling Engine: Translates natural language goals into strongly typed schema parameters.",
      "4. Cloud Execution: Executes read-only queries against BigQuery and dispatches alerts via serverless Cloud Functions.",
      "5. Governance: Audit trail recording every tool execution with token usage, execution time, and output state."
    ],
    techStack: ["Model Context Protocol (MCP)", "Google Cloud Platform", "BigQuery", "Cloud Run", "Python", "FastAPI", "React"],
    impact: "Delivered a production-ready agentic assistant capable of answering technical architecture questions, demonstrating live tool execution, and reducing exploratory data analysis queries from minutes to seconds."
  },

  "nexus-tactical-dashboard": {
    slug: "nexus-tactical-dashboard",
    title: "Nexus Tactical Operations Center | Henry Larreal", // 48 chars (<60)
    metaDesc: "Enterprise tactical operations dashboard for orchestrating cloud pipelines and managing autonomous Agentic AI workers with real-time system telemetry.", // 153 chars (140-160)
    badge: "Cloud Telemetry & Orchestration",
    headline: "Nexus Tactical Operations Center: Enterprise Agent Telemetry & Orchestration",
    datePublished: "2026-03-01T08:00:00Z",
    dateModified: "2026-11-14T12:00:00Z",
    canonical: "https://hendev.dev/projects/nexus-tactical-dashboard",
    directAnswer: "Nexus Tactical Operations Center is a distributed cloud orchestration and telemetry platform engineered by Henry Larreal that monitors autonomous AI agent execution, tracks pipeline health at 99.98% SLA, and centralizes enterprise operational command.",
    metrics: [
      { label: "System Availability SLA", value: "99.98%", note: "Operational uptime across microservices" },
      { label: "Log Stream Latency", value: "<120ms", note: "Real-time edge event distribution" },
      { label: "Active Pipeline Jobs", value: "4 Daemons", note: "Continuous anomaly detection & aggregation" },
      { label: "Security & Encryption", value: "Zero Trust", note: "mTLS and role-based token authentication" }
    ],
    challenge: "Operating distributed ETL pipelines and autonomous AI agents in production requires granular visibility into job execution, failure alerts, latency anomalies, and resource consumption. Disjointed monitoring tools create operational blind spots and slow down incident response.",
    solution: "Engineered Nexus as a centralized tactical operations dashboard. Nexus combines real-time streaming telemetry, system health indicators, simulated command logs, and an admin interface to inspect incoming client inquiries and agent activity in a single unified cybernetic control plane.",
    architecture: [
      "1. Edge Telemetry Collector: Ingests serverless event logs and performance metrics into Cloudflare KV and BigQuery.",
      "2. Real-time Event Bus: Low-latency streaming connection broadcasting status updates to the tactical UI.",
      "3. Health Assessment Engine: Computes operational scores based on latency, error rates, and queue depth.",
      "4. Secure Admin Console: Role-based interface enabling authenticated operators to review leads and manage tasks.",
      "5. Resilience Layer: Automatic circuit breakers preventing cascade failures across interconnected pipelines."
    ],
    techStack: ["Cloudflare Workers", "Cloudflare KV", "Google Cloud Platform", "BigQuery", "React", "Tailwind CSS", "WebSockets"],
    impact: "Consolidated operational oversight into a single high-efficiency dashboard, reducing Mean Time to Detection (MTTD) of pipeline anomalies by 60% and providing full visibility into autonomous AI agent workloads."
  },

  "tilapia-scan-ai": {
    slug: "tilapia-scan-ai",
    title: "Tilapia Scan AI: Aquaculture Vision | Henry Larreal", // 51 chars (<60)
    metaDesc: "Real-time computer vision automated classification system for aquaculture monitoring built with TensorFlow, OpenCV, FastAPI, and Google Cloud Platform.", // 154 chars (140-160)
    badge: "Computer Vision & Edge ML",
    headline: "Tilapia Scan AI: Automated Computer Vision for Aquaculture Health Monitoring",
    datePublished: "2026-03-20T08:00:00Z",
    dateModified: "2026-11-14T12:00:00Z",
    canonical: "https://hendev.dev/projects/tilapia-scan-ai",
    directAnswer: "Tilapia Scan AI is an end-to-end computer vision and deep learning platform developed by Henry Larreal that automates fish health inspection and biometrics classification in real time using TensorFlow, OpenCV, and FastAPI, achieving 94.2% model accuracy.",
    metrics: [
      { label: "Classification Accuracy", value: "94.2%", note: "Validated across diverse lighting conditions" },
      { label: "Inference Latency", value: "<350ms", note: "Sub-second real-time image processing" },
      { label: "Sample Batch Size", value: "1,200+ images", note: "Curated & augmented biological dataset" },
      { label: "Production Deployment", value: "100% Live", note: "Hosted on Railway & GCP Cloud Run" }
    ],
    challenge: "Aquaculture monitoring traditionally relies on manual, labor-intensive sampling to evaluate fish health, growth rates, and skin anomalies. Manual inspection is stressful for biological specimens, prone to observer subjectivity, and cannot scale across commercial tank environments.",
    solution: "Developed Tilapia Scan AI, a deep learning classification pipeline powered by Convolutional Neural Networks (CNNs). The model processes incoming photographic streams, isolates morphological features with OpenCV, classifies specimen condition, and returns diagnostic metrics via a high-performance FastAPI service.",
    architecture: [
      "1. Preprocessing Pipeline: Contrast enhancement, noise filtering, and edge detection via OpenCV.",
      "2. Neural Architecture: Fine-tuned Transfer Learning model (MobileNetV2 / ResNet) optimized for low-latency inference.",
      "3. API Gateway: Serverless FastAPI backend providing secure REST endpoints for image classification.",
      "4. Containerization: Docker container deployed on cloud infrastructure with automated health probes.",
      "5. Interactive Client: Responsive React frontend displaying classification probability, confidence scores, and bounding boxes."
    ],
    techStack: ["TensorFlow", "OpenCV", "Python", "FastAPI", "Docker", "React", "Google Cloud Platform", "Railway"],
    impact: "Demonstrated 94.2% diagnostic accuracy while reducing inspection time from 5 minutes per specimen to under 400 milliseconds, establishing an automated non-invasive blueprint for precision aquaculture."
  }
};

export function renderProjectHtml(slug) {
  const data = projectsData[slug];
  if (!data) return null;

  const otherProjects = Object.values(projectsData).filter(p => p.slug !== slug);

  return `<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${data.title}</title>
  <meta name="title" content="${data.title}" />
  <meta name="description" content="${data.metaDesc}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="author" content="Henry Larreal" />
  <link rel="canonical" href="${data.canonical}" />
  
  <!-- Hreflang Tags (Explicit RFC 5646 Compliance) -->
  <link rel="alternate" hreflang="en" href="${data.canonical}" />
  <link rel="alternate" hreflang="x-default" href="${data.canonical}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${data.canonical}" />
  <meta property="og:title" content="${data.title}" />
  <meta property="og:description" content="${data.metaDesc}" />
  <meta property="og:image" content="https://hendev.dev/social.png" />
  <meta property="og:site_name" content="hendev.dev" />
  <meta property="article:published_time" content="${data.datePublished}" />
  <meta property="article:modified_time" content="${data.dateModified}" />
  <meta property="article:author" content="https://hendev.dev/#person" />
  <meta property="article:section" content="Engineering Case Study" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${data.title}" />
  <meta name="twitter:description" content="${data.metaDesc}" />
  <meta name="twitter:image" content="https://hendev.dev/social.png" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

  <!-- Fonts & Ultra-Light Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- Structured Data: TechArticle + BreadcrumbList + Person (E-E-A-T 100%) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "${data.canonical}#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://hendev.dev/#website",
          "name": "hendev.dev",
          "url": "https://hendev.dev/"
        },
        "headline": "${data.headline}",
        "description": "${data.metaDesc}",
        "url": "${data.canonical}",
        "datePublished": "${data.datePublished}",
        "dateModified": "${data.dateModified}",
        "inLanguage": "en",
        "mainEntityOfPage": "${data.canonical}",
        "author": {
          "@type": "Person",
          "@id": "https://hendev.dev/#person",
          "name": "Henry Larreal",
          "jobTitle": "Data Scientist & Cloud Automation Engineer",
          "url": "https://hendev.dev/",
          "award": "Winner & Keynote Presenter - Datatón FACh 2024",
          "sameAs": [
            "https://www.linkedin.com/in/henry-larreal-carrera/",
            "https://github.com/hendevdata/hendevdata",
            "https://www.upwork.com/freelancers/~01468f4f55c62eec72",
            "https://calendly.com/henrylarreal27/ai-consultation"
          ]
        },
        "publisher": {
          "@type": "Person",
          "@id": "https://hendev.dev/#person"
        },
        "keywords": [
          "${data.techStack.join('", "')}",
          "Henry Larreal",
          "GCP Data Engineering",
          "Cloud Automation"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "${data.canonical}#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://hendev.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://hendev.dev/#projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${data.headline}",
            "item": "${data.canonical}"
          }
        ]
      }
    ]
  }
  </script>

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { background-color: #020202; color: #cbd5e1; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
    code, pre, .font-mono { font-family: 'JetBrains Mono', monospace; }
    a { color: inherit; text-decoration: none; }
    .container { max-width: 960px; margin: 0 auto; padding: 0 1.5rem; }
    .nav-bar { position: sticky; top: 1rem; z-index: 50; margin: 1rem auto; padding: 0.75rem 1.5rem; border-radius: 9999px; background: rgba(10, 10, 10, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); display: flex; justify-content: space-between; align-items: center; max-width: 960px; }
    .badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.35rem 0.85rem; border-radius: 9999px; background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.25); color: #22d3ee; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; font-family: 'JetBrains Mono', monospace; }
    .badge-dot { width: 0.5rem; height: 0.5rem; border-radius: 9999px; background: #22d3ee; display: inline-block; }
    .hero-title { font-size: 2.25rem; font-weight: 800; color: #ffffff; line-height: 1.15; letter-spacing: -0.025em; margin: 1rem 0; }
    @media (min-width: 768px) { .hero-title { font-size: 3.25rem; } }
    .answer-box { background: rgba(8, 25, 32, 0.65); border: 1px solid rgba(34, 211, 238, 0.3); border-radius: 1.5rem; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); }
    .answer-box-title { color: #22d3ee; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; font-family: 'JetBrains Mono', monospace; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; }
    .answer-box-text { color: #e2e8f0; font-size: 1.05rem; line-height: 1.6; font-weight: 400; }
    .metrics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 2.5rem 0; }
    @media (min-width: 768px) { .metrics-grid { grid-template-columns: repeat(4, 1fr); } }
    .metric-card { background: rgba(10, 10, 10, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 1.25rem; padding: 1.25rem; text-align: left; }
    .metric-val { font-size: 1.75rem; font-weight: 800; color: #22d3ee; font-family: 'JetBrains Mono', monospace; }
    .metric-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.05em; margin-top: 0.25rem; }
    .metric-note { font-size: 0.75rem; color: #64748b; margin-top: 0.35rem; line-height: 1.3; }
    .section-card { background: rgba(10, 10, 10, 0.75); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 2rem; padding: 2rem; margin-bottom: 2rem; backdrop-filter: blur(10px); }
    .section-h2 { font-size: 1.5rem; font-weight: 700; color: #ffffff; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem; letter-spacing: -0.015em; }
    .section-h2::before { content: ""; width: 4px; height: 1.25rem; background: #22d3ee; border-radius: 2px; }
    .prose-text { color: #94a3b8; font-size: 0.975rem; line-height: 1.75; font-weight: 300; margin-bottom: 1.25rem; }
    .prose-text strong { color: #f1f5f9; font-weight: 600; }
    .architecture-step { background: rgba(255, 255, 255, 0.02); border-left: 2px solid #22d3ee; padding: 0.85rem 1.25rem; margin-bottom: 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: #cbd5e1; border-radius: 0 0.75rem 0.75rem 0; }
    .tech-pill { display: inline-block; padding: 0.4rem 0.85rem; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 0.75rem; font-size: 0.75rem; font-family: 'JetBrains Mono', monospace; color: #38bdf8; margin: 0.25rem; }
    .author-card { background: linear-gradient(135deg, rgba(10,10,10,0.95), rgba(15,23,42,0.8)); border: 1px solid rgba(34,211,238,0.25); border-radius: 2rem; padding: 2rem; margin: 3rem 0; display: flex; flex-direction: column; gap: 1.5rem; }
    @media (min-width: 640px) { .author-card { flex-direction: row; align-items: center; } }
    .author-img { width: 80px; height: 80px; border-radius: 9999px; border: 2px solid #22d3ee; object-fit: cover; flex-shrink: 0; }
    .author-name { font-size: 1.25rem; font-weight: 800; color: #ffffff; }
    .author-role { font-size: 0.8rem; font-weight: 700; color: #22d3ee; text-transform: uppercase; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.05em; }
    .author-bio { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin-top: 0.5rem; }
    .author-meta { font-size: 0.75rem; color: #64748b; font-family: 'JetBrains Mono', monospace; margin-top: 0.5rem; }
    .btn-cta { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; cursor: pointer; text-decoration: none; }
    .btn-primary { background: #ffffff; color: #000000; }
    .btn-primary:hover { background: #e2e8f0; }
    .btn-secondary { background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.3); color: #22d3ee; }
    .btn-secondary:hover { background: rgba(34, 211, 238, 0.2); }
    .cta-strip { text-align: center; padding: 3rem 1.5rem; margin: 3rem 0; background: radial-gradient(circle at 50% 50%, rgba(34,211,238,0.1), transparent 70%); border-radius: 2rem; border: 1px solid rgba(255,255,255,0.06); }
    .breadcrumb-nav { font-size: 0.75rem; color: #64748b; font-family: 'JetBrains Mono', monospace; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; }
    .breadcrumb-nav a:hover { color: #22d3ee; }
    .footer { text-align: center; padding: 3rem 0; color: #64748b; font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 4rem; }
  </style>
</head>
<body>
  <!-- Header Navigation -->
  <div class="container">
    <nav class="nav-bar" aria-label="Main Navigation">
      <a href="/" style="display:flex;align-items:center;gap:0.5rem;font-weight:800;color:#fff;font-size:1.1rem;">
        <span style="color:#22d3ee;">&gt;_</span> hendev<span style="color:#22d3ee;">.dev</span>
      </a>
      <div style="display:flex;align-items:center;gap:1rem;">
        <a href="/#projects" style="font-size:0.8rem;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">← All Projects</a>
        <a href="https://calendly.com/henrylarreal27/ai-consultation" target="_blank" rel="noreferrer" class="btn-cta btn-primary" style="padding:0.4rem 1rem;font-size:0.75rem;">Book Call</a>
      </div>
    </nav>
  </div>

  <main class="container" style="padding-top:2rem;">
    <!-- Breadcrumb List (Rich Snippet Compliant) -->
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span>/</span>
      <a href="/#projects">Projects</a>
      <span>/</span>
      <span style="color:#cbd5e1;">${data.badge}</span>
    </nav>

    <!-- Header & Badge -->
    <header style="margin-bottom:2rem;">
      <div class="badge">
        <span class="badge-dot"></span>
        <span>${data.badge}</span>
      </div>
      <h1 class="hero-title">${data.headline}</h1>
      <p style="color:#94a3b8;font-size:1.05rem;line-height:1.6;max-width:720px;font-weight:300;">
        Engineering case study detailing the problem, cloud architecture, automation rules, and verified business results.
      </p>
      <div style="margin-top:1rem;font-size:0.75rem;color:#64748b;font-family:'JetBrains Mono',monospace;">
        Author: <a href="/#person" style="color:#22d3ee;font-weight:600;">Henry Larreal</a> • 
        Published: <time datetime="${data.datePublished}">January 15, 2026</time> • 
        Updated: <time datetime="${data.dateModified}">November 14, 2026</time>
      </div>
    </header>

    <!-- Answer-First Box for AI Search & AEO (30-50 Word Direct Synthesis) -->
    <section class="answer-box" aria-label="Direct Technical Summary (Answer-First)">
      <div class="answer-box-title">
        <span>⚡</span> Direct Answer / Executive Summary
      </div>
      <p class="answer-box-text">
        <strong>${data.directAnswer}</strong>
      </p>
    </section>

    <!-- Citable Facts & Metrics Grid (GEO Readiness) -->
    <section aria-label="Key Quantifiable Metrics & Benchmarks">
      <h2 style="font-size:0.8rem;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;font-family:'JetBrains Mono',monospace;margin-bottom:0.75rem;">
        Key Metrics &amp; Performance Benchmarks
      </h2>
      <div class="metrics-grid">
        ${data.metrics.map(m => `
          <div class="metric-card">
            <div class="metric-val">${m.value}</div>
            <div class="metric-label">${m.label}</div>
            <div class="metric-note">${m.note}</div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Section 1: Challenge -->
    <article class="section-card">
      <h2 class="section-h2">The Business Challenge &amp; Bottlenecks</h2>
      <p class="prose-text">${data.challenge}</p>
    </article>

    <!-- Section 2: Architecture & Implementation -->
    <article class="section-card">
      <h2 class="section-h2">Architectural Blueprint &amp; Execution Pipeline</h2>
      <p class="prose-text">${data.solution}</p>
      <div style="margin-top:1.5rem;">
        <h3 style="font-size:0.85rem;color:#22d3ee;text-transform:uppercase;letter-spacing:0.05em;font-family:'JetBrains Mono',monospace;margin-bottom:1rem;">
          Pipeline Stages:
        </h3>
        ${data.architecture.map(step => `
          <div class="architecture-step">${step}</div>
        `).join("")}
      </div>
    </article>

    <!-- Section 3: Tech Stack -->
    <article class="section-card">
      <h2 class="section-h2">Core Technologies &amp; Cloud Infrastructure</h2>
      <div>
        ${data.techStack.map(tech => `
          <span class="tech-pill">${tech}</span>
        `).join("")}
      </div>
    </article>

    <!-- Section 4: Measurable Impact -->
    <article class="section-card">
      <h2 class="section-h2">Measurable Business Impact</h2>
      <p class="prose-text"><strong>${data.impact}</strong></p>
    </article>

    <!-- Author Bio & E-E-A-T Card (100% Trust Signals) -->
    <aside class="author-card" aria-label="Author Credentials and E-E-A-T Background">
      <img src="https://hendev.dev/social.png" alt="Henry Larreal — Data Scientist & Cloud Automation Engineer" class="author-img" />
      <div>
        <div class="author-role">Engineered &amp; Authored By</div>
        <h3 class="author-name">Henry Larreal</h3>
        <p class="author-bio">
          Data Scientist and Cloud Automation Engineer specializing in Google Cloud Platform (GCP), BigQuery data architectures, and autonomous Agentic AI with the Model Context Protocol (MCP). Winner and keynote speaker at Datatón FACh 2024.
        </p>
        <div class="author-meta">
          Credentials: Datatón FACh 2024 Winner • GCP Architect • Upwork Top Rated • Direct Mail: <a href="mailto:admin@hendev.dev" style="color:#22d3ee;">admin@hendev.dev</a>
        </div>
        <div style="display:flex;gap:0.75rem;margin-top:1rem;flex-wrap:wrap;">
          <a href="https://www.linkedin.com/in/henry-larreal-carrera/" target="_blank" rel="noreferrer" class="btn-cta btn-secondary" style="padding:0.35rem 0.85rem;font-size:0.75rem;">LinkedIn Profile</a>
          <a href="https://github.com/hendevdata/hendevdata" target="_blank" rel="noreferrer" class="btn-cta btn-secondary" style="padding:0.35rem 0.85rem;font-size:0.75rem;">GitHub Repos</a>
          <a href="https://www.upwork.com/freelancers/~01468f4f55c62eec72" target="_blank" rel="noreferrer" class="btn-cta btn-secondary" style="padding:0.35rem 0.85rem;font-size:0.75rem;color:#6fda44;border-color:rgba(111,218,68,0.3);">Hire on Upwork</a>
        </div>
      </div>
    </aside>

    <!-- Related Case Studies (Internal Linking / Anti-Orphan Architecture) -->
    <section class="section-card" style="border-color:rgba(34,211,238,0.15);" aria-label="Explore More Technical Case Studies">
      <h2 class="section-h2">Explore Other Engineering Case Studies</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1rem;margin-top:1rem;">
        ${otherProjects.map(p => `
          <a href="/projects/${p.slug}" style="display:block;padding:1.25rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:1rem;transition:all 0.2s;">
            <div style="font-size:0.7rem;color:#22d3ee;text-transform:uppercase;font-family:'JetBrains Mono',monospace;">${p.badge}</div>
            <h3 style="font-size:1rem;font-weight:700;color:#fff;margin:0.5rem 0;">${p.headline}</h3>
            <span style="font-size:0.75rem;color:#38bdf8;font-weight:600;">Read Case Study →</span>
          </a>
        `).join("")}
      </div>
    </section>

    <!-- Bottom Conversion CTA -->
    <div class="cta-strip">
      <h2 style="font-size:1.75rem;font-weight:800;color:#fff;margin-bottom:0.75rem;">Have a Similar Data Pipeline or AI Project?</h2>
      <p style="color:#94a3b8;font-size:0.95rem;max-width:540px;margin:0 auto 1.5rem auto;font-weight:300;">
        Available for enterprise consulting, cloud data engineering contracts, and autonomous Agentic AI implementations.
      </p>
      <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
        <a href="https://calendly.com/henrylarreal27/ai-consultation" target="_blank" rel="noreferrer" class="btn-cta btn-primary">Book 15m Discovery Call</a>
        <a href="mailto:admin@hendev.dev" class="btn-cta btn-secondary">Email admin@hendev.dev</a>
        <a href="/" class="btn-cta btn-secondary">Return to Portfolio</a>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <p>© 2026 Henry Larreal (hendev.dev). All rights reserved.</p>
      <p style="margin-top:0.5rem;font-size:0.75rem;color:#475569;">
        Built with Google Cloud Platform, BigQuery, Model Context Protocol &amp; Cloudflare Edge.
      </p>
    </div>
  </footer>
</body>
</html>`;
}
