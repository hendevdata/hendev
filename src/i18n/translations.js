export const SOCIAL_LINKS = {
  email: 'admin@hendev.dev',
  linkedin: 'https://www.linkedin.com/in/henry-larreal-carrera/',
  github: 'https://github.com/hendevdata/hendevdata',
  instagram: 'https://www.instagram.com/henrylarreal27/',
  upwork: 'https://www.upwork.com/freelancers/~01468f4f55c62eec72',
};

export const translations = {
  es: {
    seo: {
      title: 'Henry Larreal | Automatización con Python, Computer Vision y Datos',
      description:
        'Python Automation Developer, Computer Vision Engineer y Consultor IA y Datos. Transformo procesos manuales en arquitecturas escalables en producción.',
      ogLocale: 'es_ES',
    },
    nav: {
      projects: 'Proyectos',
      services: 'Servicios',
      stack: 'Stack',
      contact: 'Contacto',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    hero: {
      badge: 'Disponible para proyectos B2B y roles remotos',
      h1: 'Automatización con Python, Visión por Computadora y Arquitecturas de Datos.',
      subtitle:
        'Transformo procesos manuales y cuellos de botella operativos en sistemas escalables en producción con Python, Computer Vision y Cloud.',
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
      title: 'Proyectos Destacados en Producción',
      subtitle:
        'Sistemas reales diseñados bajo arquitectura resiliente: problema de negocio, diseño técnico y resultado medible.',
      labels: {
        problem: 'Problema',
        architecture: 'Arquitectura',
        result: 'Resultado',
        videoPlaceholder: 'Demo visual (.webm / .mp4)',
        caseStudyLink: 'Caso técnico',
      },
      items: [
        {
          id: 'cv-ocr',
          slug: 'tilapia-scan-ai',
          title: 'Visión por Computadora y OCR Automatizado',
          category: 'Computer Vision',
          problem:
            'Inspección visual y extracción de datos en campo realizadas de forma manual, generando cuellos de botella, fatiga operativa y errores de transcripción.',
          architecture:
            'Microservicio contenerizado en Docker con pipeline de preprocesamiento en OpenCV, inferencia de modelos de visión y extracción OCR expuesta vía API.',
          result:
            'Automatización completa del análisis visual en tiempo real con alta precisión diagnóstica y despliegue reproducible en cualquier entorno.',
          tags: ['Python', 'OpenCV', 'Docker', 'FastAPI'],
          videoWebm: '',
          videoMp4: '',
          posterAlt: 'Demostración de sistema de Visión por Computadora y OCR con OpenCV y Docker',
        },
        {
          id: 'agentic-rag',
          slug: 'ivanna-agentic-assistant',
          title: 'IA Agéntica y RAG Local-First',
          category: 'Agentic AI & RAG',
          problem:
            'Equipos técnicos perdiendo horas buscando en documentación fragmentada y ejecutando consultas repetitivas sin control de privacidad ni trazabilidad.',
          architecture:
            'Backend en FastAPI con orquestación en LangChain, base vectorial local en ChromaDB y ejecución determinística de herramientas con validación de esquemas.',
          result:
            'Respuestas contextualizadas con latencia sub-segundo, cero exposición de datos sensibles a terceros y flujos operativos automatizados.',
          tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB'],
          videoWebm: '',
          videoMp4: '/ivanna.mp4',
          posterAlt: 'Demostración de asistente de IA Agéntica y arquitectura RAG local-first con FastAPI y ChromaDB',
        },
        {
          id: 'enterprise-qa',
          slug: 'the-home-depot-qa',
          title: 'Pipeline Enterprise de QA y Validación de Datos',
          category: 'Data Engineering',
          problem:
            'Auditoría manual de miles de piezas de campañas marketing y registros semanales con alto riesgo de enlaces rotos, tokens inválidos y retrasos de salida.',
          architecture:
            'Motor asíncrono en Python conectado a SQL y Cloud para validar reglas de negocio, integridad referencial, URLs y parámetros UTM antes de producción.',
          result:
            'Auditoría automatizada de +1,500 ítems/semana, reducción del tiempo de QA en 75% y eliminación de errores manuales en lanzamientos.',
          tags: ['Python', 'SQL', 'Cloud', 'BigQuery'],
          videoWebm: '',
          videoMp4: '',
          posterAlt: 'Demostración de pipeline enterprise de QA y validación automatizada de datos en Python y Cloud',
        },
      ],
    },
    services: {
      eyebrow: 'Capacidades B2B',
      title: 'Servicios de Ingeniería',
      subtitle:
        'Consultoría técnica y desarrollo end-to-end orientado a impacto operativo y retorno medible.',
      items: [
        {
          id: 'automation',
          title: 'Automatización de Procesos (Python & APIs)',
          description:
            'Eliminación de tareas manuales repetitivas mediante scripts robustos, scrapers resilientes, integraciones REST/GraphQL y pipelines de QA automatizado.',
        },
        {
          id: 'cv-ai',
          title: 'Visión por Computadora e IA Aplicada',
          description:
            'Sistemas de inspección visual, OCR, agentes autónomos y arquitecturas RAG privadas listas para operar en contenedores y entornos productivos.',
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
      subtitle: 'Tecnologías probadas en entornos de producción.',
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
    aboutContact: {
      eyebrow: 'Sobre mí y Contacto',
      title: 'Hablemos directo, sin formularios fríos.',
      bio: 'Soy Henry Larreal, Data & AI Automation Engineer. Construyo sistemas que funcionan en producción, no solo notebooks: arquitecturas limpias, observables y mantenibles pensadas para resolver cuellos de botella reales de negocio.',
      emailLabel: 'Correo directo',
      copyBtn: 'Copiar correo',
      copiedBtn: 'Copiado',
      mailtoBtn: 'Enviar email',
      socialsLabel: 'Perfiles y código',
    },
    footer: {
      brand: 'hendev.dev',
      tagline: 'Supervised by Jalapeño',
      rights: 'Henry Larreal',
    },
  },

  en: {
    seo: {
      title: 'Henry Larreal | Python Automation, Computer Vision & Data Engineer',
      description:
        'Python Automation Developer, Computer Vision Engineer & Data Engineering Consultant. Transforming manual workflows into scalable production systems.',
      ogLocale: 'en_US',
    },
    nav: {
      projects: 'Projects',
      services: 'Services',
      stack: 'Stack',
      contact: 'Contact',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      badge: 'Available for B2B projects & remote roles',
      h1: 'Python Automation, Computer Vision & Data Architectures.',
      subtitle:
        'I transform manual processes and operational bottlenecks into scalable production systems using Python, Computer Vision, and Cloud.',
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
      title: 'Featured Production Projects',
      subtitle:
        'Real-world systems engineered for resilience: business problem, technical architecture, and measurable outcome.',
      labels: {
        problem: 'Problem',
        architecture: 'Architecture',
        result: 'Result',
        videoPlaceholder: 'Visual demo (.webm / .mp4)',
        caseStudyLink: 'Case study',
      },
      items: [
        {
          id: 'cv-ocr',
          slug: 'tilapia-scan-ai',
          title: 'Computer Vision & Automated OCR',
          category: 'Computer Vision',
          problem:
            'Manual visual inspection and field data extraction created operational bottlenecks, human fatigue, and recurring transcription errors.',
          architecture:
            'Dockerized microservice featuring an OpenCV preprocessing pipeline, vision model inference, and OCR extraction exposed via REST API.',
          result:
            'Full automation of real-time visual analysis with high diagnostic accuracy and reproducible deployment across environments.',
          tags: ['Python', 'OpenCV', 'Docker', 'FastAPI'],
          videoWebm: '',
          videoMp4: '',
          posterAlt: 'Demo of Computer Vision and OCR system built with OpenCV and Docker',
        },
        {
          id: 'agentic-rag',
          slug: 'ivanna-agentic-assistant',
          title: 'Agentic AI & Local-First RAG',
          category: 'Agentic AI & RAG',
          problem:
            'Engineering teams spent hours searching fragmented documentation and running repetitive queries without data privacy or traceability.',
          architecture:
            'FastAPI backend with LangChain orchestration, local ChromaDB vector store, and deterministic schema-validated tool execution.',
          result:
            'Sub-second contextual responses, zero third-party exposure of sensitive data, and automated operational workflows.',
          tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB'],
          videoWebm: '',
          videoMp4: '/ivanna.mp4',
          posterAlt: 'Demo of Agentic AI and local-first RAG architecture with FastAPI and ChromaDB',
        },
        {
          id: 'enterprise-qa',
          slug: 'the-home-depot-qa',
          title: 'Enterprise QA & Data Validation Pipeline',
          category: 'Data Engineering',
          problem:
            'Manual auditing of thousands of weekly campaign assets and records carried high risk of broken links, invalid tokens, and launch delays.',
          architecture:
            'Asynchronous Python engine connected to SQL and Cloud to validate business rules, referential integrity, URLs, and UTM parameters pre-release.',
          result:
            'Automated auditing of +1,500 items/week, 75% reduction in QA turnaround time, and zero manual release errors.',
          tags: ['Python', 'SQL', 'Cloud', 'BigQuery'],
          videoWebm: '',
          videoMp4: '',
          posterAlt: 'Demo of Enterprise QA and automated data validation pipeline in Python and Cloud',
        },
      ],
    },
    services: {
      eyebrow: 'B2B Capabilities',
      title: 'Engineering Services',
      subtitle:
        'Technical consulting and end-to-end engineering focused on operational leverage and measurable ROI.',
      items: [
        {
          id: 'automation',
          title: 'Process Automation (Python & APIs)',
          description:
            'Eliminating repetitive manual work through robust Python scripts, resilient scrapers, REST/GraphQL integrations, and automated QA pipelines.',
        },
        {
          id: 'cv-ai',
          title: 'Computer Vision & Applied AI',
          description:
            'Visual inspection systems, OCR, autonomous agents, and private RAG architectures containerized and ready for production workloads.',
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
      subtitle: 'Battle-tested technologies in production environments.',
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
    aboutContact: {
      eyebrow: 'About & Contact',
      title: 'Direct communication, no cold forms.',
      bio: "I'm Henry Larreal, Data & AI Automation Engineer. I build systems that work in production, not just notebooks: clean, observable, and maintainable architectures engineered to eliminate real business bottlenecks.",
      emailLabel: 'Direct email',
      copyBtn: 'Copy email',
      copiedBtn: 'Copied',
      mailtoBtn: 'Send email',
      socialsLabel: 'Profiles & code',
    },
    footer: {
      brand: 'hendev.dev',
      tagline: 'Supervised by Jalapeño',
      rights: 'Henry Larreal',
    },
  },
};
