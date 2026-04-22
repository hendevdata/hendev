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
  ShieldCheck,
  Cookie,
  ChevronRight
} from 'lucide-react';

// --- TRADUCCIONES ---
const translations = {
  en: {
    nav: { expertise: "Expertise", projects: "Projects", newsletter: "Newsletter", contact: "Contact", pilot: "Pilot Program" },
    cookies: {
      msg: "This website uses cookies to ensure you get the best experience on our data-driven platform.",
      accept: "Accept All",
      decline: "Decline",
      settings: "Cookie Settings"
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
      title: "Featured Work.",
      subtitle: "Solutions built for impact.",
      pmo: { tag: "Speaker", title: "Nonprofit PMO Summit", desc: "Keynote presentation on 'Autonomous Workflows' and Agentic AI." },
      matrix: { tag: "Case Study", title: "Master Matrix System", desc: "Deployed entirely within GCP using Computer Vision for asset validation." },
      opioid: { tag: "Data Science", title: "Opioid Crisis Analysis", desc: "Predictive modeling to forecast future health crises in the US." },
      social: { tag: "Data Analytics", title: "Engagement Analytics", desc: "Interactive Streamlit app for processing complex social metrics." }
    },
    newsletter: {
      title: "The Orchestrator's Dispatch",
      desc: "Receive weekly insights on Agentic AI, GCP automation, and data strategies.",
      placeholder: "name@company.com",
      btnSubscribe: "Subscribe"
    },
    pilot: {
      badge: "Exclusive Initiative",
      title: "Agentic AI Pilot",
      subtitle: "Stop being the gear. Start being the orchestrator.",
      desc: "Transform your manual operations into autonomous workflows in just 4 weeks.",
      btnCalendly: "Book 15-Min Free Audit"
    },
    contact: { title: "Ready to scale?", desc: "If you need robust cloud environments or predictive models, let's connect.", btnMail: "Get in Touch" },
    footer: "Supervised by Jalapeño 🐈"
  },
  es: {
    nav: { expertise: "Especialidad", projects: "Proyectos", newsletter: "Boletín", contact: "Contacto", pilot: "Plan Piloto" },
    cookies: {
      msg: "Este sitio utiliza cookies para asegurar que tengas la mejor experiencia en nuestra plataforma orientada a datos.",
      accept: "Aceptar Todas",
      decline: "Rechazar",
      settings: "Configuración"
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
      title: "Proyectos Destacados.",
      subtitle: "Soluciones construidas para generar impacto.",
      pmo: { tag: "Speaker", title: "Nonprofit PMO Summit", desc: "Presentación magistral sobre 'Flujos de Trabajo Autónomos' e IA Agéntica." },
      matrix: { tag: "Caso de Estudio", title: "Master Matrix System", desc: "Desplegado completamente en GCP usando Computer Vision para validación." },
      opioid: { tag: "Data Science", title: "Análisis Crisis Opioides", desc: "Modelado predictivo para pronosticar crisis de salud pública en EE.UU." },
      social: { tag: "Data Analytics", title: "Engagement Analytics", desc: "App interactiva en Streamlit para procesamiento de métricas sociales." }
    },
    newsletter: {
      title: "The Orchestrator's Dispatch",
      desc: "Recibe insights semanales sobre IA Agéntica, automatización en GCP y estrategias de datos.",
      placeholder: "nombre@empresa.com",
      btnSubscribe: "Suscribirse"
    },
    pilot: {
      badge: "Iniciativa Exclusiva",
      title: "Piloto IA Agéntica",
      subtitle: "Deja de ser el engranaje. Conviértete en orquestador.",
      desc: "Transforma tus operaciones manuales en flujos autónomos en solo 4 semanas.",
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

  // Reemplaza con tu ID real de Beehiiv
  const BEEHIIV_PUB_ID = "REEMPLAZA_CON_TU_ID_AQUI"; 

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
      
      {/* Dynamic Background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1000px_circle_at_50%_0%,rgba(14,116,144,0.05),transparent_70%)]" />

      {/* --- NAVIGATION --- */}
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

            <button onClick={() => setCurrentView('pilot')} className="hidden sm:block px-6 py-2 text-sm font-semibold rounded-full bg-white text-black hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              {t.nav.pilot}
            </button>

            <button className="md:hidden text-slate-300 p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-[#0A0A0A]/95 backdrop-blur-3xl border-b border-white/[0.04] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
          <div className="flex flex-col gap-6 px-8">
            <button onClick={() => navigateToHomeSection('expertise')} className="text-left text-lg font-medium">{t.nav.expertise}</button>
            <button onClick={() => navigateToHomeSection('projects')} className="text-left text-lg font-medium">{t.nav.projects}</button>
            <button onClick={() => navigateToHomeSection('newsletter')} className="text-left text-lg font-medium">{t.nav.newsletter}</button>
            <button onClick={() => { setCurrentView('pilot'); setIsMobileMenuOpen(false); }} className="w-full py-3 bg-white text-black font-bold rounded-xl">{t.nav.pilot}</button>
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

              {/* Float Code Block */}
              <div className="w-full lg:w-[480px] animate-[float_6s_ease-in-out_infinite] relative">
                <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="bg-[#0A0A0A]/60 border border-white/[0.08] rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-3xl font-mono text-sm relative">
                  <div className="flex gap-2.5 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="space-y-2 text-cyan-50/80">
                    <p><span className="text-pink-400">const</span> <span className="text-blue-400">architect</span> = {'{'}</p>
                    <p className="pl-4">name: <span className="text-amber-300">'Henry Larreal'</span>,</p>
                    <p className="pl-4">role: <span className="text-amber-300">'Data Scientist'</span>,</p>
                    <p className="pl-4">cloud: <span className="text-emerald-400">'GCP'</span>,</p>
                    <p className="pl-4">ai: <span className="text-emerald-400">'Agentic AI'</span></p>
                    <p>{'};'}</p>
                    <p className="pt-4 text-slate-500 italic border-t border-white/5 mt-4 pt-4">{t.hero.codeComment}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- METRICS --- */}
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

          {/* --- EXPERTISE --- */}
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

          {/* --- PROJECTS --- */}
          <section id="projects" className="py-20 lg:py-28 px-5 lg:px-12 border-t border-white/[0.04]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{t.projects.title}</h2>
                <p className="text-lg text-slate-400 font-light">{t.projects.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {['matrix', 'opioid', 'pmo', 'social'].map((key) => (
                  <div key={key} className="bg-[#0A0A0A]/50 border border-white/[0.08] hover:border-cyan-500/30 rounded-[2.5rem] overflow-hidden group transition-all duration-500 hover:-translate-y-1">
                    <div className="h-48 bg-gradient-to-br from-slate-900 to-black p-8 flex flex-col justify-end border-b border-white/[0.04] relative overflow-hidden">
                      <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:scale-110 transition-transform">
                        {key === 'matrix' ? <Cpu size={140} /> : key === 'opioid' ? <Activity size={140} /> : key === 'pmo' ? <Target size={140} /> : <LineChart size={140} />}
                      </div>
                      <span className="bg-white/[0.05] text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max mb-3 backdrop-blur-md">
                        {t.projects[key].tag}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight relative z-10">{t.projects[key].title}</h3>
                    </div>
                    <div className="p-8">
                      <p className="text-slate-400 font-light leading-relaxed mb-6">{t.projects[key].desc}</p>
                      <button className="text-cyan-400 text-sm font-semibold flex items-center gap-2 group/btn">
                        View Case Study <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
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
                    <p className="text-slate-400 font-light text-lg">{t.newsletter.desc}</p>
                  </div>
                  <div className="flex-1 w-full max-md:max-w-md mx-auto">
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
                        <input type="email" name="email" required placeholder={t.newsletter.placeholder} className="w-full bg-black border border-white/[0.1] rounded-full py-4 pl-14 pr-4 focus:border-cyan-500 outline-none transition-all" />
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

          {/* --- CONTACT --- */}
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
        /* --- PILOT PROGRAM --- */
        <section className="relative pt-32 pb-24 px-5 lg:px-12 z-10 min-h-screen">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
              {t.pilot.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">{t.pilot.title}</h1>
            <p className="text-2xl text-slate-300 font-light mb-8">{t.pilot.subtitle}</p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">{t.pilot.desc}</p>
            
            <a href="https://calendly.com/henrylarreal27/ai-consultation" target="_blank" rel="noreferrer" className="px-10 py-5 bg-white text-black font-extrabold text-lg rounded-full hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 w-full sm:w-auto mx-auto">
              <CalendarDays size={20} /> {t.pilot.btnCalendly}
            </a>
          </div>
        </section>
      )}

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/[0.05] bg-[#020202] z-10 relative px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal size={20} className="text-cyan-400" />
            <span className="font-bold text-white">hendev<span className="text-cyan-400">.dev</span></span>
          </div>
          <p>© 2026 Henry Larreal. {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
          <p className="opacity-50 text-xs uppercase tracking-widest">{t.footer}</p>
        </div>
      </footer>

      {/* --- COOKIE CONSENT BANNER --- */}
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
              <button 
                onClick={() => handleCookieAction(false)}
                className="flex-1 md:flex-none px-6 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {t.cookies.decline}
              </button>
              <button 
                onClick={() => handleCookieAction(true)}
                className="flex-1 md:flex-none px-8 py-3 bg-cyan-500 text-cyan-950 font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                {t.cookies.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounceRight { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
      `}} />
    </div>
  );
}
