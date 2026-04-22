import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Database, 
  Bot, 
  Code2, 
  Mail, 
  LineChart,
  BrainCircuit,
  Cpu, 
  ArrowRight,
  Globe, 
  BarChart3, 
  Activity, 
  CalendarDays, 
  Target, 
  Rocket, 
  Send, 
  Menu, 
  X, 
  CheckCircle2, 
  Cookie, 
  ChevronRight, 
  Sparkles,
  ClipboardList,
  Layers,
  Settings
} from 'lucide-react';

// --- TRADUCCIONES ---
const translations = {
  en: {
    nav: { expertise: "Expertise", projects: "Projects", newsletter: "Newsletter", contact: "Contact", pilot: "Pilot Program" },
    cookies: {
      msg: "This website uses cookies to ensure you get the best experience on our data-driven platform.",
      accept: "Accept All",
      decline: "Decline"
    },
    hero: {
      badge: "Available for Consulting",
      title1: "Data Scientist &",
      title2: "Cloud Automation Engineer",
      desc: "I bridge the gap between raw data and strategic execution. Specializing in Google Cloud Platform (GCP), Agentic AI, and building highly scalable, automated data architectures.",
      btnProjects: "Explore Work",
      codeComment: "// Transforming data into executive decisions."
    },
    metrics: { yoe: "Years of Exp", saved: "Avg Weekly Hours Saved", stack: "Core Stack", pipelines: "Pipelines Deployed", pipelinesVal: "50+" },
    expertise: {
      title: "Core Expertise.",
      subtitle: "Architecting intelligence at scale.",
      de: { title: "Data Engineering", desc: "Designing and orchestrating robust data environments in Google Cloud. End-to-end ETL processes and seamless API integrations.", tags: ["Python & SQL", "GCP & BigQuery", "APIs"] },
      ds: { title: "Data Science", desc: "Building intelligent systems and predictive models. Advanced LLM architectures and RAG implementations.", tags: ["NumPy, Pandas", "Algorithms", "RAG/LLMs"] },
      da: { title: "Data Analytics", desc: "Transforming complex datasets into actionable BI. Crafting executive dashboards that drive strategic decisions.", tags: ["Reporting", "Looker", "PowerBI"] }
    },
    projects: {
      title: "Impact Analysis.",
      subtitle: "Detailed technical solutions.",
      pmo: { 
        tag: "Speaker", 
        title: "Nonprofit PMO Summit", 
        desc: "Led a keynote session on 'Autonomous Workflows' using Agentic AI to solve chronic inefficiency in humanitarian sectors. The presentation detailed how Python-based agents can replace manual data entry, syncing WhatsApp field reports directly into secure cloud databases. This architecture allows project managers to recover up to 15 hours weekly, shifting focus from coordination to mission-critical strategy." 
      },
      matrix: { 
        tag: "Case Study", 
        title: "Master Matrix System", 
        desc: "Designed and deployed a computer vision validation system entirely within Google Cloud Platform. The solution processes high-volume asset imagery to verify logistics integrity in real-time, replacing manual auditing cycles that previously took weeks. It utilizes Vertex AI and custom GCF logic to ensure 95%+ accuracy, providing a robust backbone for large-scale social impact operations globally." 
      },
      opioid: { 
        tag: "Data Science", 
        title: "Opioid Crisis Forecast", 
        desc: "Developed a predictive modeling framework to identify high-risk demographic zones for public health crises across the US. By integrating disparate healthcare datasets and socioeconomic indicators, the model provides early-warning signals for local governments. This data-driven approach enables proactive resource allocation, ensuring that emergency services reach vulnerable communities before a crisis peaks." 
      },
      social: { 
        tag: "Data Analytics", 
        title: "Engagement Engine", 
        desc: "Built a real-time Streamlit analytics platform that processes complex social media and API metrics for strategic growth. The system automates the ingestion of raw audience data, applying custom NLP to categorize sentiment and engagement trends. This provides executives with a clean, actionable dashboard that visualizes ROI and audience retention, eliminating the need for manual CSV processing and report drafting." 
      }
    },
    newsletter: {
      title: "The Orchestrator's Dispatch",
      desc: "Join an exclusive list of PMs and tech leaders receiving weekly insights on Agentic AI, Google Cloud automation, and data strategies.",
      placeholder: "name@company.com",
      btnSubscribe: "Subscribe"
    },
    pilot: {
      badge: "Exclusive Initiative",
      title: "Agentic AI Pilot Program",
      subtitle: "Stop being the gear. Start being the orchestrator.",
      desc: "A high-impact, hands-on implementation program designed to transform your manual operations into autonomous workflows in just 4 weeks.",
      scarcityLabel: "Strictly Limited Capacity",
      scarcityDesc: "To ensure maximum quality, personalized architecture design, and successful deployment, this program is exclusively limited to 3 organizations this quarter.",
      stepsTitle: "The 4-Week Journey",
      step1Title: "1. The Free 15-Min Audit",
      step1Desc: "We start with a complimentary 15-minute consultation to map your operational bottlenecks and determine exactly how much time an AI Agent could save your team.",
      step2Title: "2. Custom Architecture",
      step2Desc: "If we're a good fit, I will design a tailored cloud automation workflow (GCP, Python, LLMs) specifically for your organization's unique challenges.",
      step3Title: "3. Deployment & Training",
      step3Desc: "We build, test, and deploy the agent. I will train your team on how to oversee the system, turning them into strategic orchestrators.",
      ctaTitle: "Claim Your Spot & Free Audit",
      ctaDesc: "Let's find your bottlenecks. Book your free 15-minute discovery call directly on my calendar.",
      btnCalendly: "Book 15-Min Free Audit"
    },
    contact: { title: "Ready to scale?", desc: "If you need robust cloud environments or predictive models, let's connect.", btnMail: "Get in Touch" },
    footer: "Supervised by Jalapeño 🐈"
  },
  es: {
    nav: { expertise: "Especialidad", projects: "Proyectos", newsletter: "Boletín", contact: "Contacto", pilot: "Plan Piloto" },
    cookies: {
      msg: "Este sitio utiliza cookies para asegurar que tengas la mejor experiencia en nuestra plataforma.",
      accept: "Aceptar Todas",
      decline: "Rechazar"
    },
    hero: {
      badge: "Disponible para Consultoría",
      title1: "Científico de Datos &",
      title2: "Ingeniero de Automatización",
      desc: "Construyo puentes entre datos crudos y ejecución estratégica. Especialista en Google Cloud Platform (GCP), IA Agéntica y arquitecturas de datos automatizadas.",
      btnProjects: "Explorar Trabajo",
      codeComment: "// Transformando datos en decisiones ejecutivas."
    },
    metrics: { yoe: "Años de Exp", saved: "Ahorro Semanal Promedio", stack: "Stack Principal", pipelines: "Pipelines Deployed", pipelinesVal: "50+" },
    expertise: {
      title: "Especialidad Core.",
      subtitle: "Arquitectando inteligencia a escala.",
      de: { title: "Data Engineering", desc: "Diseño y orquestación de entornos de datos robustos en Google Cloud. Procesos ETL e integraciones fluidas.", tags: ["Python & SQL", "GCP & BigQuery", "APIs"] },
      ds: { title: "Data Science", desc: "Creación de sistemas inteligentes y modelos predictivos. Arquitecturas avanzadas de LLMs e implementación de RAG.", tags: ["NumPy, Pandas", "Algoritmos", "RAG/LLMs"] },
      da: { title: "Data Analytics", desc: "Transformación de datos complejos en BI accionable. Dashboards ejecutivos para decisiones estratégicas.", tags: ["Reporting", "Looker", "PowerBI"] }
    },
    projects: {
      title: "Análisis de Impacto.",
      subtitle: "Soluciones técnicas detalladas.",
      pmo: { 
        tag: "Speaker", 
        title: "Nonprofit PMO Summit", 
        desc: "Lideré una sesión magistral sobre 'Flujos de Trabajo Autónomos' usando IA Agéntica para resolver la ineficiencia crónica en sectores humanitarios. Detallé cómo los agentes basados en Python reemplazan la entrada manual de datos, sincronizando reportes de campo de WhatsApp directamente en bases de datos cloud seguras. Esta arquitectura permite a los gestores recuperar hasta 15 horas semanales, moviendo el foco de la coordinación hacia la estrategia crítica." 
      },
      matrix: { 
        tag: "Caso de Estudio", 
        title: "Master Matrix System", 
        desc: "Diseñé y desplegué un sistema de validación por visión artificial íntegramente en Google Cloud Platform. La solución procesa imágenes de activos para verificar la integridad logística en tiempo real, reemplazando ciclos de auditoría manual que antes tomaban semanas. Utiliza Vertex AI y lógica personalizada en GCF para garantizar una precisión del 95%+, proporcionando una base robusta para operaciones de impacto social a gran escala a nivel global." 
      },
      opioid: { 
        tag: "Data Science", 
        title: "Pronóstico de Crisis de Opioides", 
        desc: "Desarrollé un marco de modelado predictivo para identificar zonas demográficas de alto riesgo para crisis de salud pública en EE.UU. Al integrar conjuntos de datos de salud dispares e indicadores socioeconómicos, el modelo proporciona señales de alerta temprana para los gobiernos locales. Este enfoque basado en datos permite una asignación proactiva de recursos, asegurando que los servicios de emergencia lleguen a las comunidades vulnerables antes de que una crisis alcance su pico." 
      },
      social: { 
        tag: "Data Analytics", 
        title: "Engagement Engine", 
        desc: "Construí una plataforma de analítica en Streamlit que procesa métricas complejas de APIs y redes sociales para el crecimiento estratégico. El sistema automatiza la ingesta de datos brutos de audiencia, aplicando NLP para categorizar tendencias de sentimiento. Esto proporciona a los ejecutivos un dashboard accionable que visualiza el ROI y la retención de audiencia, eliminando la necesidad de procesamiento manual de CSV y redacción de informes semanales." 
      }
    },
    newsletter: {
      title: "The Orchestrator's Dispatch",
      desc: "Únete a una lista exclusiva de líderes y PMs que reciben insights semanales sobre IA Agéntica, automatización en GCP y estrategias de datos.",
      placeholder: "nombre@empresa.com",
      btnSubscribe: "Suscribirse"
    },
    pilot: {
      badge: "Iniciativa Exclusiva",
      title: "Programa Piloto de IA Agéntica",
      subtitle: "Deja de ser el engranaje. Conviértete en orquestador.",
      desc: "Un programa de implementación táctica diseñado para transformar tus operaciones manuales en flujos autónomos en solo 4 semanas.",
      scarcityLabel: "Capacidad Estrictamente Limitada",
      scarcityDesc: "Para garantizar la máxima calidad y diseño personalizado, este programa está limitado exclusivamente a 3 organizaciones este trimestre.",
      stepsTitle: "El Viaje de 4 Semanas",
      step1Title: "1. Auditoría Gratuita",
      step1Desc: "Comenzamos con una consulta gratuita de 15 minutos para mapear tus cuellos de botella y determinar cuánto tiempo exacto podría ahorrarle un Agente de IA a tu equipo.",
      step2Title: "2. Arquitectura a Medida",
      step2Desc: "Diseñaré un flujo de automatización cloud (GCP, Python, LLMs) específico para los desafíos únicos de tu organización.",
      step3Title: "3. Despliegue y Orquestación",
      step3Desc: "Construimos, probamos y desplegamos el agente. Entrenaré a tu equipo para supervisar el sistema como orquestadores estratégicos.",
      ctaTitle: "Reclama tu Cupo & Auditoría",
      ctaDesc: "Encontremos tus cuellos de botella. Agenda tu llamada de descubrimiento de 15 minutos directamente en mi calendario.",
      btnCalendly: "Agendar Auditoría de 15 Min"
    },
    contact: { title: "¿Listo para escalar?", desc: "Si necesitas entornos cloud robustos o modelos predictivos, hablemos.", btnMail: "Contactar Ahora" },
    footer: "Supervisado por Jalapeño 🐈"
  }
};

// --- DATA SCRAMBLE EFFECT ---
const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let iterations = 0;
    const letters = "0101010101011110000X@#$%&*<>[]{}";
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((letter, index) => {
        if(index < iterations) return text[index];
        return letters[Math.floor(Math.random() * letters.length)];
      }).join(""));
      if(iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3; 
    }, 30);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{displayText || text}</span>;
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const t = translations[lang];

  // Beehiiv Pub ID Placeholder
  const BEEHIIV_PUB_ID = "REEMPLAZA_CON_TU_ID_AQUI"; 

  // SEO & Meta-tags handler
  useEffect(() => {
    document.title = lang === 'en' 
      ? "Henry Larreal | Data Scientist & Cloud Engineer" 
      : "Henry Larreal | Científico de Datos e Ingeniero Cloud";
      
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t.hero.desc);
    }
  }, [lang, t.hero.desc]);

  useEffect(() => {
    const consent = localStorage.getItem('hendev_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowCookies(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCookieAction = (accepted) => {
    localStorage.setItem('hendev_cookie_consent', accepted ? 'accepted' : 'declined');
    setShowCookies(false);
  };

  const navigateToHomeSection = (sectionId) => {
    setCurrentView('home');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden relative w-full">
      
      {/* Background dinámico */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1000px_circle_at_50%_0%,rgba(14,116,144,0.05),transparent_70%)]" />

      {/* --- NAVEGACIÓN --- */}
      <nav className="fixed w-full left-0 top-0 z-50 bg-[#020202]/80 backdrop-blur-3xl border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-4 flex justify-between items-center relative">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigateToHomeSection('top')}>
            <Terminal className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={24} />
            <span className="font-bold text-xl text-white tracking-tight">hendev<span className="text-cyan-400">.dev</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <button onClick={() => navigateToHomeSection('expertise')} className="hover:text-white transition-colors">{t.nav.expertise}</button>
              <button onClick={() => navigateToHomeSection('projects')} className="hover:text-white transition-colors">{t.nav.projects}</button>
              <button onClick={() => navigateToHomeSection('newsletter')} className="hover:text-white transition-colors">{t.nav.newsletter}</button>
            </div>

            <div className="relative">
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05]">
                <Globe size={16} /> <span>{lang.toUpperCase()}</span>
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-[fadeIn_0.2s_ease-out]">
                  <button onClick={() => { setLang('en'); setShowLangMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors">English</button>
                  <button onClick={() => { setLang('es'); setShowLangMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors">Español</button>
                </div>
              )}
            </div>

            <button onClick={() => setCurrentView('pilot')} className={`hidden sm:block px-6 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105 shadow-xl ${currentView === 'pilot' ? 'bg-amber-500 text-amber-950' : 'bg-white text-black'}`}>
              {t.nav.pilot}
            </button>

            <button className="md:hidden text-slate-300 p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden absolute w-full bg-[#0A0A0A]/95 backdrop-blur-3xl border-b border-white/[0.04] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
          <div className="flex flex-col gap-6 px-8">
            <button onClick={() => navigateToHomeSection('expertise')} className="text-left text-lg font-medium">{t.nav.expertise}</button>
            <button onClick={() => navigateToHomeSection('projects')} className="text-left text-lg font-medium">{t.nav.projects}</button>
            <button onClick={() => navigateToHomeSection('newsletter')} className="text-left text-lg font-medium">{t.nav.newsletter}</button>
            <button onClick={() => { setCurrentView('pilot'); setIsMobileMenuOpen(false); }} className="w-full py-3 bg-amber-500 text-amber-950 font-bold rounded-xl">{t.nav.pilot}</button>
          </div>
        </div>
      </nav>

      <div id="top" />

      {currentView === 'home' ? (
        <>
          {/* --- HERO --- */}
          <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-5 lg:px-12 z-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative rounded-full h-2 w-2 bg-cyan-500" />
                  </span>
                  {t.hero.badge}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                  <ScrambleText text={t.hero.title1} /> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-400">
                    {t.hero.title2}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">{t.hero.desc}</p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => navigateToHomeSection('projects')} className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-all shadow-xl">
                    {t.hero.btnProjects} <ArrowRight size={18} className="animate-[bounceRight_2s_infinite]" />
                  </button>
                  <a href="https://linkedin.com/in/henry-larreal-carrera/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/[0.03] border border-white/[0.08] text-white font-semibold rounded-full backdrop-blur-xl hover:bg-white/[0.08] transition-all">LinkedIn</a>
                </div>
              </div>

              {/* BLOQUE DE CÓDIGO TÉCNICO (STACK & MISSION) */}
              <div className="w-full lg:w-[540px] animate-[float_6s_ease-in-out_infinite] relative">
                <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="bg-[#0A0A0A]/60 border border-white/[0.08] rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-3xl font-mono text-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Cpu size={120} className="text-cyan-500" />
                  </div>
                  <div className="flex gap-2.5 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="space-y-2 text-cyan-50/80 relative z-10">
                    <p><span className="text-pink-400">const</span> <span className="text-blue-400">architect</span> = {'{'}</p>
                    <p className="pl-4">name: <span className="text-amber-300">'Henry Larreal'</span>,</p>
                    <p className="pl-4">mission: <span className="text-amber-300">'Automate Social Impact'</span>,</p>
                    <p className="pl-4">core_stack: [</p>
                    <p className="pl-8 text-emerald-400">'Python', 'SQL', 'GCP', 'BigQuery'</p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">ai_capabilities: {'{'}</p>
                    <p className="pl-8">engine: <span className="text-emerald-400">'Agentic AI (LLMs & RAG)'</span>,</p>
                    <p className="pl-8">frameworks: <span className="text-emerald-400">'LangChain / Vertex AI'</span>,</p>
                    <p className="pl-8">workflows: <span className="text-emerald-400">'Autonomous Logic Loops'</span></p>
                    <p className="pl-4">{'}'},</p>
                    <p className="pl-4">outputs: [</p>
                    <p className="pl-8 text-emerald-400">'Cloud Infrastructure', 'Predictive BI'</p>
                    <p className="pl-4">]</p>
                    <p>{'};'}</p>
                    <p className="pt-4 text-slate-500 italic border-t border-white/5 mt-4 pt-4">{t.hero.codeComment}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- MÉTRICAS --- */}
          <section className="border-y border-white/[0.04] bg-white/[0.01] backdrop-blur-3xl">
            <div className="max-w-6xl mx-auto px-5 lg:px-12 py-10 md:py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {['yoe', 'saved', 'stack', 'pipelines'].map((key) => (
                  <div key={key} className="space-y-1">
                    <h4 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                      {key === 'pipelines' ? t.metrics.pipelinesVal : key === 'yoe' ? '4+' : key === 'saved' ? '15h+' : 'PY/SQL'}
                    </h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{t.metrics[key]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- ESPECIALIDADES --- */}
          <section id="expertise" className="py-20 lg:py-28 px-5 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{t.expertise.title}</h2>
                <p className="text-lg text-slate-400 font-light">{t.expertise.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {['de', 'ds', 'da'].map((key, i) => (
                  <div key={key} className={`bg-[#0A0A0A]/50 border border-white/[0.08] hover:border-cyan-500/30 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group ${i === 2 ? 'md:col-span-2 lg:col-span-1 md:max-w-[calc(50%-1rem)] md:mx-auto lg:max-w-none' : ''}`}>
                    <div className="w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center mb-8 border border-white/[0.05] group-hover:bg-cyan-500/10 transition-all">
                      {key === 'de' ? <Database size={26} className="text-cyan-400" /> : key === 'ds' ? <BrainCircuit size={26} className="text-cyan-400" /> : <BarChart3 size={26} className="text-cyan-400" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t.expertise[key].title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed mb-8">{t.expertise[key].desc}</p>
                    <div className="mt-auto space-y-3">
                      {t.expertise[key].tags.map(tag => (
                        <div key={tag} className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04] text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- PROYECTOS (DETALLADOS SIN REDIRECCIÓN) --- */}
          <section id="projects" className="py-20 lg:py-28 px-5 lg:px-12 border-t border-white/[0.04]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{t.projects.title}</h2>
                <p className="text-lg text-slate-400 font-light">{t.projects.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {['matrix', 'opioid', 'pmo', 'social'].map((key) => (
                  <div key={key} className="bg-[#0A0A0A]/50 border border-white/[0.08] rounded-[2.5rem] overflow-hidden group transition-all duration-500 border-b-cyan-500/10 hover:border-cyan-500/30">
                    <div className="h-40 bg-gradient-to-br from-slate-900 to-black p-8 flex flex-col justify-end border-b border-white/[0.04] relative overflow-hidden">
                      <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:scale-110 transition-transform">
                        {key === 'matrix' ? <Cpu size={140} /> : key === 'opioid' ? <Activity size={140} /> : key === 'pmo' ? <Target size={140} /> : <LineChart size={140} />}
                      </div>
                      <span className="bg-white/[0.05] text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max mb-3 backdrop-blur-md">
                        {t.projects[key].tag}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight relative z-10">{t.projects[key].title}</h3>
                    </div>
                    <div className="p-8">
                      <p className="text-slate-400 font-light leading-relaxed text-sm lg:text-base">
                        {t.projects[key].desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- NEWSLETTER --- */}
          <section id="newsletter" className="py-20 lg:py-28 px-5 lg:px-12 border-t border-white/[0.04]">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0A0A0A] to-black border border-white/[0.08] rounded-[3rem] p-8 md:p-16 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
              
              {!isSubscribed ? (
                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{t.newsletter.title}</h2>
                    <p className="text-slate-400 font-light text-lg leading-relaxed">{t.newsletter.desc}</p>
                  </div>
                  <div className="flex-1 w-full max-w-md">
                    <form 
                      action="https://www.beehiiv.com/new-subscription" 
                      method="POST" 
                      target="_blank" 
                      className="flex flex-col gap-4" 
                      onSubmit={() => setTimeout(() => setIsSubscribed(true), 500)}
                    >
                      <input type="hidden" name="publication_id" value={BEEHIIV_PUB_ID} />
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                        <input type="email" name="email" required placeholder={t.newsletter.placeholder} className="w-full bg-black border border-white/[0.1] rounded-full py-4 pl-14 pr-4 focus:border-cyan-500 outline-none transition-all placeholder:text-slate-600" />
                      </div>
                      <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-full hover:scale-[1.02] transition-transform shadow-xl flex items-center justify-center gap-2">
                        <Send size={18} /> {t.newsletter.btnSubscribe}
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 animate-[fadeIn_0.5s_ease-out]">
                  <CheckCircle2 size={64} className="text-cyan-400 mx-auto mb-6" />
                  <h2 className="text-3xl font-extrabold text-white mb-4">Subscription Confirmed!</h2>
                  <p className="text-slate-400 text-lg max-w-2xl mx-auto">Welcome to the Dispatch. Check your inbox for your first deep dive soon.</p>
                </div>
              )}
            </div>
          </section>

          {/* --- CONTACTO --- */}
          <section id="contact" className="py-20 lg:py-28 px-5 lg:px-12 border-t border-white/[0.04]">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{t.contact.title}</h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed">{t.contact.desc}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="mailto:admin@hendev.dev" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2">
                  <Mail size={20} /> {t.contact.btnMail}
                </a>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* --- PILOT PROGRAM PAGE (CON DISEÑO VERTICAL RESTAURADO) --- */
        <section className="relative pt-32 pb-24 px-5 lg:px-12 z-10 min-h-screen">
          <div className="max-w-5xl mx-auto relative">
            <div className="text-center space-y-6 mb-20 animate-[fadeIn_1s_ease-out]">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
                <Sparkles size={16} className="animate-pulse" />
                {t.pilot.badge}
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">{t.pilot.title}</h1>
              <p className="text-2xl text-slate-300 font-light max-w-3xl mx-auto">{t.pilot.subtitle}</p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{t.pilot.desc}</p>
            </div>

            {/* SECCIÓN DE ESCASEZ */}
            <div className="bg-[#0A0A0A]/50 border border-amber-500/20 rounded-[2.5rem] p-8 md:p-12 mb-24 text-center backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-amber-500/10 transition-all duration-700" />
              <h3 className="text-amber-400 font-bold text-xl uppercase tracking-widest mb-4 flex items-center justify-center gap-3">
                <Target size={24} /> {t.pilot.scarcityLabel}
              </h3>
              <p className="text-slate-300 font-light text-lg max-w-2xl mx-auto leading-relaxed italic">
                {t.pilot.scarcityDesc}
              </p>
            </div>

            {/* VERTICAL STEPS JOURNEY */}
            <div className="relative mb-32 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-20 text-center">{t.pilot.stepsTitle}</h2>
              
              <div className="relative">
                {/* Línea vertical conectora */}
                <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/20 via-amber-500 to-amber-500/20 md:-translate-x-1/2" />

                {/* Paso 1 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-24 group">
                  <div className="hidden md:block w-[45%]" />
                  <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-[#020202] border-2 border-amber-500 rounded-2xl flex items-center justify-center z-10 md:-translate-x-1/2 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform">
                    <ClipboardList size={28} className="text-amber-500" />
                  </div>
                  <div className="w-full md:w-[45%] pl-24 md:pl-0 text-left">
                    <div className="bg-[#0A0A0A]/40 border border-white/[0.05] p-8 rounded-[2rem] hover:border-amber-500/30 transition-all backdrop-blur-xl shadow-lg">
                      <h4 className="text-2xl font-bold text-white mb-4">{t.pilot.step1Title}</h4>
                      <p className="text-slate-400 font-light leading-relaxed">{t.pilot.step1Desc}</p>
                    </div>
                  </div>
                </div>

                {/* Paso 2 */}
                <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center justify-between mb-24 group">
                  <div className="hidden md:block w-[45%]" />
                  <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-[#020202] border-2 border-amber-500 rounded-2xl flex items-center justify-center z-10 md:-translate-x-1/2 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform">
                    <Layers size={28} className="text-amber-500" />
                  </div>
                  <div className="w-full md:w-[45%] pl-24 md:pl-0 text-left md:text-right">
                    <div className="bg-[#0A0A0A]/40 border border-white/[0.05] p-8 rounded-[2rem] hover:border-amber-500/30 transition-all backdrop-blur-xl shadow-lg">
                      <h4 className="text-2xl font-bold text-white mb-4">{t.pilot.step2Title}</h4>
                      <p className="text-slate-400 font-light leading-relaxed">{t.pilot.step2Desc}</p>
                    </div>
                  </div>
                </div>

                {/* Paso 3 */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                  <div className="hidden md:block w-[45%]" />
                  <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-[#020202] border-2 border-amber-500 rounded-2xl flex items-center justify-center z-10 md:-translate-x-1/2 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform">
                    <Settings size={28} className="text-amber-500" />
                  </div>
                  <div className="w-full md:w-[45%] pl-24 md:pl-0 text-left">
                    <div className="bg-[#0A0A0A]/40 border border-white/[0.05] p-8 rounded-[2rem] hover:border-amber-500/30 transition-all backdrop-blur-xl shadow-lg">
                      <h4 className="text-2xl font-bold text-white mb-4">{t.pilot.step3Title}</h4>
                      <p className="text-slate-400 font-light leading-relaxed">{t.pilot.step3Desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA FINAL */}
            <div className="text-center space-y-8 bg-gradient-to-br from-white/[0.03] to-transparent p-12 md:p-20 rounded-[3rem] border border-white/[0.08] shadow-2xl backdrop-blur-sm">
               <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{t.pilot.ctaTitle}</h2>
               <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">{t.pilot.ctaDesc}</p>
               <a 
                 href="https://calendly.com/henrylarreal27/ai-consultation" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-extrabold text-xl rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
               >
                 <CalendarDays size={24} /> {t.pilot.btnCalendly}
               </a>
            </div>
          </div>
        </section>
      )}

      {/* --- PIE DE PÁGINA --- */}
      <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/[0.05] bg-[#020202] z-10 relative px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal size={20} className="text-cyan-400" />
            <span className="font-bold text-white">hendev<span className="text-cyan-400">.dev</span></span>
          </div>
          <p>© 2026 Henry Larreal. {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
          <div className="flex items-center gap-2 opacity-50 text-xs uppercase tracking-widest">
            <Code2 size={14} /> Data Scientist • {t.footer}
          </div>
        </div>
      </footer>

      {/* --- BANNER DE COOKIES --- */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 w-full z-[100] px-5 pb-8 animate-[slideUp_0.5s_ease-out]">
          <div className="max-w-4xl mx-auto bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0">
                <Cookie size={24} />
              </div>
              <p className="text-sm md:text-base text-slate-300 font-light">{t.cookies.msg}</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button onClick={() => handleCookieAction(false)} className="flex-1 md:flex-none px-6 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors">{t.cookies.decline}</button>
              <button onClick={() => handleCookieAction(true)} className="flex-1 md:flex-none px-8 py-3 bg-cyan-500 text-cyan-950 font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">{t.cookies.accept}</button>
            </div>
          </div>
        </div>
      )}

      {/* Estilos de Animación */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounceRight { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
      `}} />
    </div>
  );
}
