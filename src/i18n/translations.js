export const SOCIAL_LINKS = {
  email: 'admin@hendev.dev',
  linkedin: 'https://www.linkedin.com/in/henry-larreal-carrera/',
  github: 'https://github.com/hendevdata/hendevdata',
  instagram: 'https://www.instagram.com/hendev.dev/',
  upwork: 'https://www.upwork.com/freelancers/~01468f4f55c62eec72',
};

export const translations = {
  es: {
    seo: {
      title: 'Henry Larreal | Automatización Python, CV y Datos',
      description:
        'Python Automation Developer, Computer Vision Engineer y Consultor IA y Datos. Sistemas escalables con Python, Playwright, OpenCV, FastAPI y BigQuery.',
      ogLocale: 'es_ES',
    },
    nav: {
      projects: 'Proyectos',
      services: 'Servicios',
      stack: 'Stack',
      blog: 'Blog',
      contact: 'Contacto',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    hero: {
      badge: 'Disponible para proyectos B2B y roles remotos',
      h1: 'Automatización con Python, Visión por Computadora y Arquitecturas de Datos.',
      subtitle:
        'Diseño pipelines en Python, sistemas de Visión por Computadora y arquitecturas Cloud que reemplazan tareas manuales por software escalable.',
      ctaPrimary: 'Ver Proyectos',
      ctaSecondary: 'Contactar',
    },
    authority: [
      {
        value: 'Top Rated (100% JSS)',
        label: '+2,000 horas en Upwork',
      },
      {
        value: 'M.Sc. Data Analytics',
        label: 'Especialización en E-commerce',
      },
      {
        value: 'Escala Enterprise',
        label: 'Auditoría automatizada de +1,500 ítems/semana',
      },
      {
        value: 'Inglés C1/C2',
        label: 'Experiencia en equipos remotos globales',
      },
    ],
    projects: {
      eyebrow: 'Casos de Estudio',
      title: 'Proyectos Destacados',
      subtitle:
        'Arquitecturas reales en operación: problema, diseño técnico y resultado medible.',
      labels: {
        problem: 'Problema',
        architecture: 'Arquitectura',
        result: 'Resultado',
      },
      items: [
        {
          id: 'gauss-engine',
          title: 'Gauss Engine — QA Visual y Telemetría en Tiempo Real',
          category: 'QA AUTOMATION & COMPUTER VISION',
          flow: '[Campaigns & Web Assets] → [Python / Playwright / OpenCV] → [Slack Alerts + BigQuery]',
          problem:
            'Auditar manualmente campañas digitales de alto volumen (+1,500 ítems/semana) generaba retrasos, enlaces rotos y errores visuales en producción.',
          architecture:
            'Orquestador en Python, FastAPI y Playwright en Docker que ejecuta renders headless, validación de payloads (Pydantic), regresión visual con OpenCV y auditoría de UTMs.',
          result:
            'Despliegues sin defectos con alertas instantáneas vía Slack (Block Kit) y telemetría estructurada en Google BigQuery.',
          tags: ['Python', 'FastAPI', 'Playwright', 'OpenCV', 'Docker', 'BigQuery'],
        },
        {
          id: 'crm-bigquery-connector',
          title: 'Conector de Datos IA — CRM & Google BigQuery',
          category: 'DATA ENGINEERING & AI ETL',
          flow: '[Web Forms / Webhooks] → [FastAPI + Pandas / AI Rules] → [CRM REST API + BigQuery]',
          problem:
            'Los formularios web y landing pages generaban silos de datos, registros duplicados y leads mal formateados antes de llegar al CRM comercial.',
          architecture:
            'Microservicio en Python, FastAPI y Docker que ingesta webhooks sin pérdida de datos, normaliza, deduplica y califica leads con Pandas y reglas de IA/LLM.',
          result:
            'Sincronización dual en tiempo real con datos limpios hacia el CRM vía API REST y tablas particionadas en Google BigQuery listas para analítica.',
          tags: ['Python', 'FastAPI', 'Pydantic', 'Pandas', 'Docker', 'BigQuery'],
        },
      ],
    },
    services: {
      eyebrow: 'Capacidades B2B',
      title: 'Servicios de Ingeniería',
      subtitle:
        'Implementación técnica end-to-end enfocada en automatización operativa e integridad de datos.',
      items: [
        {
          id: 'automation',
          title: 'Automatización de Procesos (Python & APIs)',
          description:
            'Eliminación de tareas manuales repetitivas mediante scripts robustos, Playwright, integraciones REST/GraphQL y pipelines de QA automatizado.',
        },
        {
          id: 'cv-ai',
          title: 'Visión por Computadora e IA Aplicada',
          description:
            'Sistemas de inspección visual con OpenCV, OCR, regresión de layouts y flujos con LLMs contenerizados en Docker.',
        },
        {
          id: 'data-cloud',
          title: 'Ingeniería de Datos y Cloud (AWS / GCP)',
          description:
            'Diseño de pipelines ETL/ELT, modelado en SQL y BigQuery, y despliegue serverless de alta disponibilidad en AWS, GCP y Cloudflare.',
        },
      ],
    },
    stack: {
      eyebrow: 'Herramientas',
      title: 'Stack Técnico',
      subtitle: 'Herramientas principales en mi flujo diario de ingeniería.',
      categories: [
        {
          name: 'Lenguajes y Datos',
          items: ['Python', 'SQL', 'BigQuery', 'Pandas', 'OpenCV'],
        },
        {
          name: 'IA y Backend',
          items: ['FastAPI', 'LangChain', 'ChromaDB', 'Docker', 'APIs REST'],
        },
        {
          name: 'Cloud y DevOps',
          items: ['AWS', 'GCP', 'Git/GitHub', 'Linux', 'Cloudflare'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Recomendaciones',
      title: 'Lo Que Dicen Otros',
      subtitle: 'Confianza construida a través de la ejecución y fundamentos científicos.',
      items: [
        {
          text: 'Trabajar junto a él durante el Datatón FACh 2024 me permitió ver de cerca su capacidad para estructurar soluciones de ciencia de datos desde cero. Nos enfocamos en el Objetivo 1, extrayendo inteligencia de los sensores del Landsat-8 para modelar el uso del suelo. En esta dirección, su manejo de las colecciones c2l2 de Google Earth Engine y Python fue clave para correlacionar la vegetación con la demanda de agua de forma precisa. Tiene esa curiosidad analítica necesaria para desglosar problemas multifactoriales sin perder de vista los plazos de entrega. Es, en esencia, un desarrollador que construye con fundamentos científicos fuertes lo cual asegura el éxito en un proyecto.',
          author: 'Ing. Denyam Noguera',
          role: 'Especialista DevOps & Presidente Player 3 Academy',
          link: 'https://www.linkedin.com/in/dnoguera/?locale=en',
        },
        {
          text: 'Solo quería enviar una nota rápida para agradecerte por la reciente capacitación sobre IA Agéntica. Disfruté mucho la sesión y me pareció increíblemente útil. Tu enfoque de dar primero una breve introducción de alto nivel al concepto fue perfecto: preparó el escenario sin enredarse en los detalles. La sesión de seguimiento con ejemplos reales fue definitivamente lo más destacado para mí. Ver la IA Agéntica en acción con casos de uso prácticos realmente cerró la brecha entre la teoría y la práctica, haciendo mucho más fácil entender cómo podemos usar la IA en la realidad. ¡Gracias de nuevo por organizar una sesión tan valiosa y bien estructurada!',
          author: 'Yan Song',
          role: 'PMP',
          link: 'https://www.linkedin.com/in/yang-song-pmp-bb305546/',
        },
      ],
    },
    aboutContact: {
      eyebrow: 'Sobre mí y Contacto',
      title: '¿Tienes un proceso que automatizar? Hablemos.',
      bio: 'Soy Henry Larreal, Data & AI Automation Engineer. Construyo sistemas que funcionan en producción, no solo notebooks: APIs con FastAPI, validación con Pydantic, pipelines en BigQuery y automatización con Playwright listos para operar 24/7.',
      emailLabel: 'Correo directo',
      copyBtn: 'Copiar correo',
      copiedBtn: 'Copiado',
      mailtoBtn: 'Enviar email',
      socialsLabel: 'Perfiles y código',
    },
    blog: {
      seoTitle: 'Blog — En construcción | Henry Larreal',
      seoDescription:
        'Bitácora técnica de Henry Larreal: notas de ingeniería en Python, Computer Vision, Data Engineering y Cloud.',
      badge: 'BITÁCORA TÉCNICA • EN CONSTRUCCIÓN',
      h1: 'Próximamente: notas de ingeniería en producción.',
      description:
        'Estoy preparando este espacio para documentar arquitecturas en Python, Computer Vision, Data Engineering y Cloud sin teoría de relleno.',
      ctaPrimary: 'Seguir el proceso en Instagram',
      ctaSecondary: 'Volver a Proyectos',
    },
    footer: {
      brand: 'hendev.dev',
      tagline: 'Supervisado por Jalapeño 🐈',
      rights: 'Henry Larreal',
    },
  },

  en: {
    seo: {
      title: 'Henry Larreal | Python Automation, CV & Data Engineer',
      description:
        'Python Automation Developer, Computer Vision Engineer & Data Engineering Consultant. Scalable systems with Python, Playwright, OpenCV, FastAPI & BigQuery.',
      ogLocale: 'en_US',
    },
    nav: {
      projects: 'Projects',
      services: 'Services',
      stack: 'Stack',
      blog: 'Blog',
      contact: 'Contact',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      badge: 'Available for B2B projects & remote roles',
      h1: 'Python Automation, Computer Vision & Data Architectures.',
      subtitle:
        'I replace manual workflows with scalable Python pipelines, Computer Vision systems, and automated Cloud data architectures.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Contact',
    },
    authority: [
      {
        value: 'Top Rated (100% JSS)',
        label: '+2,000 hours on Upwork',
      },
      {
        value: 'M.Sc. Data Analytics',
        label: 'E-commerce Specialization',
      },
      {
        value: 'Enterprise Scale',
        label: 'Automated auditing of +1,500 items/week',
      },
      {
        value: 'English C1/C2',
        label: 'Experience in global remote teams',
      },
    ],
    projects: {
      eyebrow: 'Case Studies',
      title: 'Featured Projects',
      subtitle:
        'Production-grade architectures: business problem, system design, and measurable outcome.',
      labels: {
        problem: 'Problem',
        architecture: 'Architecture',
        result: 'Result',
      },
      items: [
        {
          id: 'gauss-engine',
          title: 'Gauss Engine — Visual QA & Real-Time Telemetry',
          category: 'QA AUTOMATION & COMPUTER VISION',
          flow: '[Campaigns & Web Assets] → [Python / Playwright / OpenCV] → [Slack Alerts + BigQuery]',
          problem:
            'Manually auditing high-volume digital campaigns (+1,500 items/week) created delays, broken outbound URLs, and visual layout defects.',
          architecture:
            'Containerized Python, FastAPI, and Playwright orchestrator running headless renders, Pydantic payload validation, OpenCV visual regression, and UTM audits.',
          result:
            'Zero-defect deployments with real-time Slack (Block Kit) alerts and structured QA telemetry streamed directly to Google BigQuery.',
          tags: ['Python', 'FastAPI', 'Playwright', 'OpenCV', 'Docker', 'BigQuery'],
        },
        {
          id: 'crm-bigquery-connector',
          title: 'AI-Powered CRM & BigQuery Data Connector',
          category: 'DATA ENGINEERING & AI ETL',
          flow: '[Web Forms / Webhooks] → [FastAPI + Pandas / AI Rules] → [CRM REST API + BigQuery]',
          problem:
            'Frontend lead forms and landing pages created data silos, duplicate records, and unstandardized traffic before reaching commercial CRMs.',
          architecture:
            'Modular Python, FastAPI, and Docker microservice capturing webhooks with zero data loss, running AI/LLM enrichment, Pandas cleansing, and deduplication.',
          result:
            'Real-time dual streaming of clean, scored records to operational CRM REST APIs and partitioned Google BigQuery analytical tables.',
          tags: ['Python', 'FastAPI', 'Pydantic', 'Pandas', 'Docker', 'BigQuery'],
        },
      ],
    },
    services: {
      eyebrow: 'B2B Capabilities',
      title: 'Engineering Services',
      subtitle:
        'End-to-end engineering focused on operational automation and data reliability.',
      items: [
        {
          id: 'automation',
          title: 'Process Automation (Python & APIs)',
          description:
            'Eliminating repetitive manual tasks through robust Python scripts, Playwright, REST/GraphQL integrations, and automated QA pipelines.',
        },
        {
          id: 'cv-ai',
          title: 'Computer Vision & Applied AI',
          description:
            'Visual inspection systems with OpenCV, OCR, layout regression, and LLM-driven enrichment workflows containerized in Docker.',
        },
        {
          id: 'data-cloud',
          title: 'Data & Cloud Engineering (AWS / GCP)',
          description:
            'Design of ETL/ELT pipelines, SQL and BigQuery modeling, and high-availability serverless deployments across AWS, GCP, and Cloudflare.',
        },
      ],
    },
    stack: {
      eyebrow: 'Tooling',
      title: 'Tech Stack',
      subtitle: 'Core tools across my daily engineering workflow.',
      categories: [
        {
          name: 'Languages & Data',
          items: ['Python', 'SQL', 'BigQuery', 'Pandas', 'OpenCV'],
        },
        {
          name: 'AI & Backend',
          items: ['FastAPI', 'LangChain', 'ChromaDB', 'Docker', 'REST APIs'],
        },
        {
          name: 'Cloud & DevOps',
          items: ['AWS', 'GCP', 'Git/GitHub', 'Linux', 'Cloudflare'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'Recommendations',
      title: 'What Others Say',
      subtitle: 'Trust built through execution and scientific foundations.',
      items: [
        {
          text: "Working alongside him during the Datatón FACh 2024 allowed me to see firsthand his ability to structure data science solutions from scratch. We focused on Objective 1, extracting intelligence from Landsat-8 sensors to model land use. In this process, his proficiency with Google Earth Engine's c2l2 collections and Python was key to accurately correlating vegetation with water demand. He has that analytical curiosity necessary to break down multifactorial problems without losing sight of deadlines. He is, essentially, a developer who builds with strong scientific foundations, which ensures the success of a project.",
          author: 'Ing. Denyam Noguera',
          role: 'DevOps Specialist & President at Player 3 Academy',
          link: 'https://www.linkedin.com/in/dnoguera/?locale=en',
        },
        {
          text: 'I just wanted to send a quick note to say thank you for the recent training on Agentic AI. I really enjoyed the session and found it incredibly helpful. Your approach of giving a brief, high-level introduction to the concept first was perfect—it set the stage without getting bogged down in the weeds. The follow-up session with real examples was definitely the highlight for me. Seeing the Agentic AI in action with practical use cases really bridged the gap between theory and practice, making it much easier to understand how we can actually use AI. Thanks again for putting together such a valuable and well-structured session!',
          author: 'Yan Song',
          role: 'PMP',
          link: 'https://www.linkedin.com/in/yang-song-pmp-bb305546/',
        },
      ],
    },
    aboutContact: {
      eyebrow: 'About & Contact',
      title: "Have a process to automate? Let's talk.",
      bio: "I'm Henry Larreal, Data & AI Automation Engineer. I build systems that run in production, not just notebooks: FastAPI services, Pydantic validation, BigQuery pipelines, and Playwright automation engineered to operate reliably 24/7.",
      emailLabel: 'Direct email',
      copyBtn: 'Copy email',
      copiedBtn: 'Copied',
      mailtoBtn: 'Send email',
      socialsLabel: 'Profiles & code',
    },
    blog: {
      seoTitle: 'Blog — Work in Progress | Henry Larreal',
      seoDescription:
        'Technical log by Henry Larreal: real-world Python, Computer Vision, Data Engineering, and Cloud notes.',
      badge: 'TECHNICAL LOG • WORK IN PROGRESS',
      h1: 'Coming soon: production engineering notes.',
      description:
        "I'm setting up this space to document real-world Python, Computer Vision, Data Engineering, and Cloud architectures—no fluff.",
      ctaPrimary: 'Follow the build on Instagram',
      ctaSecondary: 'Back to Projects',
    },
    footer: {
      brand: 'hendev.dev',
      tagline: 'Supervised by Jalapeño 🐈',
      rights: 'Henry Larreal',
    },
  },
};
