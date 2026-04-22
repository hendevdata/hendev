import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Database, 
  Bot, 
  Code2, 
  ChevronRight, 
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
  X
} from 'lucide-react';

// --- TRANSLATIONS DICTIONARY ---
const translations = {
  en: {
    nav: { expertise: "Expertise", projects: "Projects", newsletter: "Newsletter", contact: "Contact", pilot: "Pilot Program" },
    hero: {
      badge: "Available for Consulting",
      title1: "Certified Data Scientist &",
      title2: "Cloud Automation Engineer",
      desc: "I bridge the gap between raw data and strategic execution. Specializing in Google Cloud Platform (GCP), Agentic AI, and building highly scalable, automated data architectures.",
      btnProjects: "Explore Work",
      codeComment: "// Transforming data into executive decisions."
    },
    metrics: {
      yoe: "Years of Exp",
      saved: "Avg Weekly Hours Saved",
      stack: "Core Stack",
      pipelines: "Pipelines Deployed",
      pipelinesVal: "50+"
    },
    expertise: {
      title: "Core Expertise.",
      subtitle: "Architecting intelligence at scale.",
      de: {
        title: "Data Engineering",
        desc: "Designing and orchestrating robust data environments in Google Cloud. End-to-end ETL processes, automated extractions, and seamless API integrations.",
        tags: ["Python & SQL", "GCP & BigQuery", "Web Scraping & APIs"]
      },
      ds: {
        title: "Data Science",
        desc: "Building intelligent systems and predictive models. From classical algorithms to advanced LLM architectures and RAG implementations.",
        tags: ["NumPy, Pandas, Seaborn", "Predictive Algorithms", "LLMs & RAG Integration"]
      },
      da: {
        title: "Data Analytics",
        desc: "Transforming complex datasets into actionable Business Intelligence. Crafting executive dashboards that drive strategic corporate decisions.",
        tags: ["Reporting & BI", "Google Looker", "PowerBI & Excel"]
      }
    },
    projects: {
      title: "Featured Work.",
      subtitle: "Solutions built for impact.",
      pmo: {
        tag: "April 24, 2026",
        title: "Nonprofit PMO Summit Speaker",
        desc: "Keynote presentation on 'Autonomous Workflows'. Demonstrating how Agentic AI reshapes Project Management Offices, turning administrative gears into strategic orchestrators."
      },
      matrix: {
        tag: "Case Study",
        title: "Master Matrix Matching System",
        desc: "Deployed entirely within the Google Cloud (GCP) ecosystem. Utilized Computer Vision for content comparison, integrated with automated web scraping to cross-reference and validate assets by unique IDs, ensuring 100% QA accuracy."
      },
      opioid: {
        tag: "Data Science",
        title: "US Opioid Crisis Analysis",
        desc: "A comprehensive analysis of overdose trends across the US. Designed to identify geographic patterns, evaluate policy impacts, and feature predictive modeling to forecast future crises for public health intervention."
      },
      social: {
        tag: "Data Analytics",
        title: "Social Media Engagement App",
        desc: "An interactive Streamlit application. Processes raw metrics to uncover daily/weekly trends, calculates weighted engagement scores for top-performing content, and provides robust monthly comparative analytics."
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
      stepsTitle: "How the Journey Works",
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
    contact: {
      title: "Ready to scale your infrastructure?",
      desc: "If your organization requires robust cloud environments, advanced predictive modeling, or autonomous workflows to eliminate operational bottlenecks, let's connect.",
      btnMail: "Get in Touch"
    },
    footer: "Supervised by Jalapeño 🐈"
  },
  es: {
    nav: { expertise: "Especialidad", projects: "Proyectos", newsletter: "Boletín", contact: "Contacto", pilot: "Plan Piloto" },
    hero: {
      badge: "Disponible para Consultoría",
      title1: "Científico de Datos Certificado &",
      title2: "Ingeniero de Automatización",
      desc: "Construyo puentes entre datos crudos y ejecución estratégica. Especialista en Google Cloud Platform (GCP), Inteligencia Artificial Agéntica y arquitecturas de datos escalables.",
      btnProjects: "Explorar Trabajo",
      codeComment: "// Transformando datos en decisiones ejecutivas."
    },
    metrics: {
      yoe: "Años de Exp",
      saved: "Ahorro Semanal Promedio",
      stack: "Stack Principal",
      pipelines: "Pipelines Desplegados",
      pipelinesVal: "50+"
    },
    expertise: {
      title: "Especialidad Core.",
      subtitle: "Arquitectando inteligencia a escala.",
      de: {
        title: "Data Engineering",
        desc: "Diseño y orquestación de entornos de datos robustos en Google Cloud. Procesos ETL, extracciones automatizadas e integraciones fluidas de APIs.",
        tags: ["Python & SQL", "GCP & BigQuery", "Web Scraping & APIs"]
      },
      ds: {
        title: "Data Science",
        desc: "Creación de sistemas inteligentes y modelos predictivos. Desde algoritmos clásicos hasta arquitecturas avanzadas con LLMs e integraciones RAG.",
        tags: ["NumPy, Pandas, Seaborn", "Algoritmos Predictivos", "Integración LLM & RAG"]
      },
      da: {
        title: "Data Analytics",
        desc: "Transformación de conjuntos de datos complejos en Business Intelligence accionable. Creación de dashboards ejecutivos para decisiones estratégicas.",
        tags: ["Reporting & BI", "Google Looker", "PowerBI & Excel"]
      }
    },
    projects: {
      title: "Proyectos Destacados.",
      subtitle: "Soluciones construidas para generar impacto.",
      pmo: {
        tag: "Abril 24, 2026",
        title: "Speaker en Nonprofit PMO Summit",
        desc: "Presentación magistral sobre 'Flujos de Trabajo Autónomos'. Demostrando cómo la IA Agéntica redefine las PMO, convirtiendo operadores administrativos en orquestadores estratégicos."
      },
      matrix: {
        tag: "Caso de Estudio",
        title: "Master Matrix Matching System",
        desc: "Desplegado completamente en el entorno de Google Cloud (GCP). Utiliza Computer Vision para comparar contenido visual y web scraping automatizado para cruzar y validar activos según su ID único con precisión absoluta."
      },
      opioid: {
        tag: "Data Science",
        title: "Análisis: Crisis de Opioides en EE.UU.",
        desc: "Análisis exhaustivo de tendencias de sobredosis. Identifica patrones geográficos, evalúa el impacto de políticas y utiliza modelos predictivos para pronosticar crisis futuras y facilitar intervenciones de salud pública."
      },
      social: {
        tag: "Data Analytics",
        title: "Social Media Engagement App",
        desc: "Aplicación interactiva en Streamlit. Procesa métricas crudas para descubrir tendencias, calcula scores de engagement para destacar contenido top y proporciona analíticas comparativas mensuales."
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
      subtitle: "Deja de ser un engranaje. Conviértete en orquestador.",
      desc: "Un programa de implementación táctica diseñado para transformar tus operaciones manuales en flujos de trabajo autónomos en tan solo 4 semanas.",
      scarcityLabel: "Capacidad Estrictamente Limitada",
      scarcityDesc: "Para garantizar la máxima calidad, un diseño de arquitectura personalizado y un despliegue exitoso, este programa está limitado de manera exclusiva a solo 3 empresas este trimestre.",
      stepsTitle: "Cómo Funciona",
      step1Title: "1. Auditoría Gratuita (15 min)",
      step1Desc: "Comenzamos con una consulta gratuita de 15 minutos para mapear tus cuellos de botella operativos y determinar exactamente cuánto tiempo podría ahorrarle un Agente de IA a tu equipo.",
      step2Title: "2. Arquitectura a Medida",
      step2Desc: "Si determinamos que hay potencial, diseñaré un flujo de automatización cloud (GCP, Python, LLMs) específico para los desafíos únicos de tu organización.",
      step3Title: "3. Despliegue y Orquestación",
      step3Desc: "Construimos, probamos y desplegamos el agente. Entrenaré a tu equipo para supervisar el sistema, elevándolos al rol de orquestadores estratégicos.",
      ctaTitle: "Reclama tu Cupo & Auditoría",
      ctaDesc: "Encontremos esos cuellos de botella. Agenda tu llamada de descubrimiento gratuita de 15 minutos directamente en mi calendario.",
      btnCalendly: "Agendar Auditoría de 15 Minutos"
    },
    contact: {
      title: "¿Listo para escalar tu infraestructura?",
      desc: "Si tu organización requiere entornos cloud robustos, modelado predictivo avanzado o flujos de trabajo autónomos para eliminar cuellos de botella operativos, hablemos.",
      btnMail: "Contactar Ahora"
    },
    footer: "Supervisado por Jalapeño 🐈"
  }
};

// --- DATA SCRAMBLE EFFECT COMPONENT ---
const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let iterations = 0;
    const letters = "0101010101011110000X@#$%&*<>[]{}";
    
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(text.split("").map((letter, index) => {
          if(index < iterations) return text[index];
          return letters[Math.floor(Math.random() * letters.length)];
        }).join(""));
        
        if(iterations >= text.length) clearInterval(interval);
        iterations += 1 / 3; 
      }, 40);
      
      return () => clearInterval(interval);
    }, 600);
    
    return () => clearTimeout(startTimeout);
  }, [text]);
  
  return <span>{displayText || text.replace(/[A-Za-z]/g, '_')}</span>;
};

// --- CUSTOM HOOK FOR SCROLL ANIMATIONS ---
function useScrollReveal(currentView) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'scale-95');
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [currentView]); 
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const t = translations[lang];
  
  // --- CONFIGURACIÓN DE BEEHIIV ---
  // Reemplaza esto con tu Publication ID de Beehiiv
  const BEEHIIV_PUB_ID = "REEMPLAZA_CON_TU_PUB_ID"; 
  
  useScrollReveal(currentView);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const changeLanguage = (code) => {
    setLang(code);
    setShowLangMenu(false);
  };

  const navigateToHomeSection = (sectionId) => {
    setCurrentView('home');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden relative w-full">
      
      {/* Premium Dark Background Gradient */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 ease-out"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 116, 144, 0.06), transparent 40%)`
        }}
      />

      {/* --- Navigation --- */}
      <nav className="fixed w-full left-0 top-0 z-50 bg-[#020202]/80 backdrop-blur-3xl border-b border-white/[0.04] transition-all duration-300">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-4 flex justify-between items-center relative">
          
          <div className="flex items-center gap-2 z-10 cursor-pointer group" onClick={() => navigateToHomeSection('top')}>
            <Terminal className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={24} />
            <span className="font-bold text-xl text-white tracking-tight">hendev<span className="text-cyan-400">.dev</span></span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6 z-10">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <button onClick={() => navigateToHomeSection('expertise')} className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">{t.nav.expertise}</button>
              <button onClick={() => navigateToHomeSection('projects')} className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">{t.nav.projects}</button>
              <button onClick={() => navigateToHomeSection('newsletter')} className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">{t.nav.newsletter}</button>
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05] hover:border-white/[0.15]"
              >
                <Globe size={16} /> <span>{lang.toUpperCase()}</span>
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden py-1 backdrop-blur-xl z-50 animate-[fadeIn_0.2s_ease-out]">
                  <button onClick={() => changeLanguage('en')} className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">English</button>
                  <button onClick={() => changeLanguage('es')} className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">Español</button>
                </div>
              )}
            </div>

            {/* Pilot Button (Desktop) */}
            <button 
              onClick={() => setCurrentView('pilot')}
              className={`hidden sm:block px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                currentView === 'pilot' 
                ? 'bg-amber-500 text-amber-950 shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                : 'bg-white text-black hover:bg-cyan-50 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
              }`}
            >
              {t.nav.pilot}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="md:hidden text-slate-300 hover:text-white p-1 transition-transform" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className="rotate-90 transition-transform duration-300" /> : <Menu size={24} className="transition-transform duration-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden absolute left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-3xl border-b border-white/[0.04] transition-all duration-300 overflow-hidden shadow-2xl z-40 ${isMobileMenuOpen ? 'max-h-[400px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
          <div className="flex flex-col gap-6 px-6">
            <button onClick={() => navigateToHomeSection('expertise')} className="text-lg font-medium text-slate-300 hover:text-white text-left px-2 transition-colors">
              {t.nav.expertise}
            </button>
            <button onClick={() => navigateToHomeSection('projects')} className="text-lg font-medium text-slate-300 hover:text-white text-left px-2 transition-colors">
              {t.nav.projects}
            </button>
            <button onClick={() => navigateToHomeSection('newsletter')} className="text-lg font-medium text-slate-300 hover:text-white text-left px-2 transition-colors">
              {t.nav.newsletter}
            </button>
            <button onClick={() => navigateToHomeSection('contact')} className="text-lg font-medium text-slate-300 hover:text-white text-left px-2 transition-colors">
              {t.nav.contact}
            </button>
            <div className="pt-4 border-t border-white/[0.05]">
              <button 
                onClick={() => { setCurrentView('pilot'); setIsMobileMenuOpen(false); }}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 text-base font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
              >
                {t.nav.pilot}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div id="top" className="w-full h-0"></div>

      {currentView === 'home' ? (
        <>
          {/* --- Home View --- */}
          <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-5 sm:px-8 lg:px-12 z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
              
              <div className="flex-1 space-y-6 lg:space-y-8 animate-[fadeIn_1s_ease-out]">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-slate-300 text-xs font-medium backdrop-blur-xl shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  {t.hero.badge}
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                  <ScrambleText text={t.hero.title1} /> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-400 bg-[length:200%_auto] animate-[gradientPulse_8s_ease_infinite] block mt-2">
                    {t.hero.title2}
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
                  {t.hero.desc}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                  <button onClick={() => navigateToHomeSection('projects')} className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-sm sm:text-base">
                    {t.hero.btnProjects} <ArrowRight size={18} className="animate-[bounceRight_2s_infinite]" />
                  </button>
                  <a href="https://linkedin.com/in/henry-larreal-carrera/" target="_blank" rel="noreferrer" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 backdrop-blur-xl text-sm sm:text-base hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Floating Code Block Animation */}
              <div className="w-full lg:w-[480px] relative mx-auto lg:mx-0 mt-8 lg:mt-0 animate-[fadeInRight_1s_ease-out_0.3s_both]">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-3xl rounded-full"></div>
                <div className="bg-[#0A0A0A]/60 border border-white/[0.08] rounded-[2rem] p-6 md:p-8 shadow-2xl relative font-mono text-[10px] sm:text-xs md:text-sm backdrop-blur-3xl w-full hover:border-cyan-500/30 transition-colors duration-500 animate-[float_6s_ease-in-out_infinite]">
                  <div className="flex gap-2.5 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-white/10 shadow-[0_0_10px_rgba(255,95,86,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-white/10 shadow-[0_0_10px_rgba(255,189,46,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-white/10 shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
                  </div>
                  <div className="space-y-3 text-cyan-50/80 leading-relaxed overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <p><span className="text-pink-400 font-semibold">const</span> <span className="text-blue-400">architect</span> <span className="text-white">=</span> {'{'}</p>
                    <p className="pl-4">name: <span className="text-amber-300">'Henry Larreal'</span>,</p>
                    <p className="pl-4">role: <span className="text-amber-300">'Data Scientist'</span>,</p>
                    <p className="pl-4">cloud: <span className="text-amber-300">'Google Cloud Platform (GCP)'</span>,</p>
                    <p className="pl-4">skills: [<span className="text-emerald-400">'Python'</span>, <span className="text-emerald-400">'SQL'</span>, <span className="text-emerald-400">'Agentic AI'</span>],</p>
                    <p className="pl-4">languages: [<span className="text-emerald-400">'EN'</span>, <span className="text-emerald-400">'ES'</span>, <span className="text-emerald-400">'FR'</span>, <span className="text-emerald-400">'JP'</span>]</p>
                    <p className="text-white">{'};'}</p>
                    <p className="pt-4 text-slate-500 italic relative overflow-hidden">
                      <span className="inline-block border-r-2 border-slate-500 animate-[typing_3.5s_steps(40,end),blink-caret_.75s_step-end_infinite] whitespace-nowrap overflow-hidden">
                        {t.hero.codeComment}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Metrics Section --- */}
          <section className="border-y border-white/[0.04] bg-white/[0.01] backdrop-blur-3xl z-10 relative">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10 md:py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
                <div className="px-2 reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-700">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 md:mb-2 tracking-tight">4+</h4>
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{t.metrics.yoe}</p>
                </div>
                <div className="px-2 reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-700 delay-100">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 md:mb-2 tracking-tight">15h+</h4>
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{t.metrics.saved}</p>
                </div>
                <div className="px-2 reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-700 delay-200">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 md:mb-2 tracking-tight">PY/SQL</h4>
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{t.metrics.stack}</p>
                </div>
                <div className="px-2 reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-700 delay-300">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1 md:mb-2 tracking-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">{t.metrics.pipelinesVal}</h4>
                  <p className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{t.metrics.pipelines}</p>
                </div>
              </div>
            </div>
          </section>

          {/* --- Expertise Section --- */}
          {/* IPAD FIX: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, using md:col-span-2 lg:col-span-1 for the 3rd item to center it perfectly on iPad screens, and flex layout to guarantee identical heights */}
          <section id="expertise" className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 md:mb-20 text-center reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-1000 ease-out">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 md:mb-4 tracking-tight">{t.expertise.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light">{t.expertise.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                
                {/* DE */}
                <div className="bg-[#0A0A0A]/50 backdrop-blur-3xl border border-white/[0.08] hover:border-cyan-500/30 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] reveal-on-scroll opacity-0 translate-y-10 scale-95 group flex flex-col h-full">
                  <div className="w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center mb-8 border border-white/[0.05] group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-500">
                    <Database className="text-slate-300 group-hover:text-blue-400 transition-colors" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t.expertise.de.title}</h3>
                  <p className="text-base text-slate-400 leading-relaxed mb-8 font-light">
                    {t.expertise.de.desc}
                  </p>
                  <div className="space-y-3 text-sm text-slate-300 font-medium mt-auto">
                    {t.expertise.de.tags.map((tag, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div> {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* DS */}
                <div className="bg-[#0A0A0A]/50 backdrop-blur-3xl border border-white/[0.08] hover:border-cyan-500/30 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.2)] reveal-on-scroll opacity-0 translate-y-10 scale-95 delay-100 group relative overflow-hidden flex flex-col h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                  <div className="w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center mb-8 border border-white/[0.05] group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-500 relative z-10">
                    <BrainCircuit className="text-slate-300 group-hover:text-cyan-400 transition-colors" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight relative z-10">{t.expertise.ds.title}</h3>
                  <p className="text-base text-slate-400 leading-relaxed mb-8 font-light relative z-10">
                    {t.expertise.ds.desc}
                  </p>
                  <div className="space-y-3 text-sm text-slate-300 font-medium mt-auto relative z-10">
                    {t.expertise.ds.tags.map((tag, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div> {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* DA (Centered on iPad using col-span-2 and limiting width) */}
                <div className="bg-[#0A0A0A]/50 backdrop-blur-3xl border border-white/[0.08] hover:border-indigo-500/30 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)] reveal-on-scroll opacity-0 translate-y-10 scale-95 delay-200 group flex flex-col h-full md:col-span-2 lg:col-span-1 md:max-w-[calc(50%-1rem)] md:mx-auto lg:max-w-none lg:mx-0 w-full">
                  <div className="w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center mb-8 border border-white/[0.05] group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-500">
                    <BarChart3 className="text-slate-300 group-hover:text-indigo-400 transition-colors" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t.expertise.da.title}</h3>
                  <p className="text-base text-slate-400 leading-relaxed mb-8 font-light">
                    {t.expertise.da.desc}
                  </p>
                  <div className="space-y-3 text-sm text-slate-300 font-medium mt-auto">
                    {t.expertise.da.tags.map((tag, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div> {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Projects Section --- */}
          <section id="projects" className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 z-10 relative border-t border-white/[0.04]">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 md:mb-20 text-center reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-1000 ease-out">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 md:mb-4 tracking-tight">{t.projects.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light">{t.projects.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                
                {/* Master Matrix */}
                <div className="bg-[#0A0A0A]/50 border border-white/[0.08] hover:border-cyan-500/30 rounded-[2rem] overflow-hidden group hover:-translate-y-2 hover:shadow-[0_15px_50px_-15px_rgba(34,211,238,0.2)] reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-500">
                  <div className="h-48 bg-gradient-to-br from-slate-900 to-[#050505] relative p-8 flex flex-col justify-end border-b border-white/[0.04]">
                    <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                       <Cpu size={100} className="text-white" />
                    </div>
                    <div className="bg-white/[0.05] text-white border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max mb-4 backdrop-blur-md">
                      {t.projects.matrix.tag}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{t.projects.matrix.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-base text-slate-400 mb-8 leading-relaxed font-light">
                      {t.projects.matrix.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] text-slate-300 rounded-full text-xs font-medium">GCP</span>
                      <span className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] text-slate-300 rounded-full text-xs font-medium">Computer Vision</span>
                      <span className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] text-slate-300 rounded-full text-xs font-medium">Web Scraping</span>
                    </div>
                  </div>
                </div>

                {/* Opioid Crisis */}
                <div className="bg-[#0A0A0A]/50 border border-white/[0.08] hover:border-cyan-500/30 rounded-[2rem] overflow-hidden group hover:-translate-y-2 hover:shadow-[0_15px_50px_-15px_rgba(34,211,238,0.2)] reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-500 delay-100">
                  <div className="h-48 bg-gradient-to-br from-slate-900 to-[#050505] relative p-8 flex flex-col justify-end border-b border-white/[0.04]">
                    <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                       <Activity size={100} className="text-white" />
                    </div>
                    <div className="bg-white/[0.05] text-white border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max mb-4 backdrop-blur-md">
                      {t.projects.opioid.tag}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{t.projects.opioid.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-base text-slate-400 mb-8 leading-relaxed font-light">
                      {t.projects.opioid.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] text-slate-300 rounded-full text-xs font-medium">Predictive Modeling</span>
                      <span className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] text-slate-300 rounded-full text-xs font-medium">Python</span>
                    </div>
                  </div>
                </div>

                {/* PMO Summit */}
                <div className="bg-[#0A0A0A]/50 border border-white/[0.08] hover:border-cyan-500/30 rounded-[2rem] overflow-hidden group hover:-translate-y-2 hover:shadow-[0_15px_50px_-15px_rgba(34,211,238,0.2)] reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-500">
                  <div className="h-48 bg-gradient-to-br from-slate-900 to-[#050505] relative p-8 flex flex-col justify-end border-b border-white/[0.04]">
                    <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                       <Bot size={100} className="text-white" />
                    </div>
                    <div className="bg-white/[0.05] text-white border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max mb-4 backdrop-blur-md">
                      {t.projects.pmo.tag}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{t.projects.pmo.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-base text-slate-400 mb-8 leading-relaxed font-light">
                      {t.projects.pmo.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] text-slate-300 rounded-full text-xs font-medium">Agentic AI</span>
                      <span className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] text-slate-300 rounded-full text-xs font-medium">PMO Strategy</span>
                    </div>
                  </div>
                </div>

                {/* Social Media App */}
                <div className="bg-[#0A0A0A]/50 border border-white/[0.08] hover:border-cyan-500/30 rounded-[2rem] overflow-hidden group hover:-translate-y-2 hover:shadow-[0_15px_50px_-15px_rgba(34,211,238,0.2)] reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-500 delay-100">
                  <div className="h-48 bg-gradient-to-br from-slate-900 to-[#050505] relative p-8 flex flex-col justify-end border-b border-white/[0.04]">
                    <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                       <LineChart size={100} className="text-white" />
                    </div>
                    <div className="bg-white/[0.05] text-white border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-max mb-4 backdrop-blur-md">
                      {t.projects.social.tag}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{t.projects.social.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-base text-slate-400 mb-8 leading-relaxed font-light">
                      {t.projects.social.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] text-slate-300 rounded-full text-xs font-medium">Streamlit</span>
                      <span className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] text-slate-300 rounded-full text-xs font-medium">Data Visualization</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* --- Newsletter Section --- */}
          <section id="newsletter" className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 z-10 relative border-t border-white/[0.04]">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0A0A0A]/80 to-[#050505]/80 border border-white/[0.08] hover:border-cyan-500/20 rounded-[3rem] p-8 sm:p-12 md:p-16 relative overflow-hidden reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-1000 backdrop-blur-3xl group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {/* Subtle animated background glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700 delay-200"></div>
              
              <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center relative z-10">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    {t.newsletter.title}
                  </h2>
                  <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light">
                    {t.newsletter.desc}
                  </p>
                </div>
                
                <div className="flex-1 w-full max-w-md bg-white/[0.02] p-6 rounded-[2rem] border border-white/[0.05] backdrop-blur-md">
                  {/* --- INTEGRACIÓN CON BEEHIIV --- */}
                  <form 
                    action="https://www.beehiiv.com/new-subscription" 
                    method="POST" 
                    target="_blank" 
                    className="flex flex-col gap-4"
                  >
                    {/* ID de publicación para Beehiiv */}
                    <input type="hidden" name="publication_id" value={BEEHIIV_PUB_ID} />
                    
                    <div className="relative group/input">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" size={20} />
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder={t.newsletter.placeholder}
                        className="w-full bg-[#020202] border border-white/[0.1] text-white rounded-full py-4 pl-14 pr-5 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 text-base"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-base"
                    >
                      <Send size={18} /> {t.newsletter.btnSubscribe}
                    </button>
                  </form>
                  <p className="text-center text-xs text-slate-500 mt-5 font-light">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- Contact Section --- */}
          <section id="contact" className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 z-10 relative border-t border-white/[0.04]">
            <div className="max-w-4xl mx-auto bg-[#0A0A0A]/50 border border-white/[0.08] hover:border-white/[0.15] rounded-[3rem] p-10 sm:p-12 md:p-16 text-center relative overflow-hidden reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-1000 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.05)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                {t.contact.title}
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                {t.contact.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a href="mailto:admin@hendev.dev" className="px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-base">
                  <Mail size={18} /> {t.contact.btnMail}
                </a>
                <a href="https://linkedin.com/in/henry-larreal-carrera/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 border border-white/[0.08] hover:border-white/[0.2] text-base">
                  LinkedIn
                </a>
              </div>

              {/* Personal touch */}
              <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Code2 size={16} /> Certified Data Scientist
                </div>
                <span className="hidden md:block text-slate-700">•</span>
                <div className="flex items-center gap-2">
                  🎵 Músico (Teclado/Guitarra)
                </div>
                <span className="hidden md:block text-slate-700">•</span>
                <div className="flex items-center gap-2">
                  🎮 Retro-gaming Collector
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* --- PILOT PROGRAM VIEW --- */
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-5 sm:px-8 lg:px-12 z-10 min-h-screen">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="text-center reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-1000 ease-out">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]"></span>
                {t.pilot.badge}
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                {t.pilot.title}
              </h1>
              <p className="text-2xl sm:text-3xl text-slate-300 font-light tracking-tight mb-8">
                {t.pilot.subtitle}
              </p>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
                {t.pilot.desc}
              </p>
            </div>

            {/* SCARCITY BANNER */}
            <div className="mt-16 bg-[#0A0A0A]/50 border border-amber-500/20 rounded-[2.5rem] p-8 md:p-12 text-center reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-700 delay-100 backdrop-blur-2xl shadow-[0_0_40px_rgba(245,158,11,0.05)]">
              <h3 className="text-amber-400 font-bold text-lg md:text-xl uppercase tracking-widest mb-4 flex items-center justify-center gap-3">
                <Target size={24} /> {t.pilot.scarcityLabel}
              </h3>
              <p className="text-slate-300 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {t.pilot.scarcityDesc}
              </p>
            </div>

            {/* THE PROCESS */}
            <div className="mt-24 reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-1000 delay-200">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">{t.pilot.stepsTitle}</h3>
              
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-white/20 before:to-transparent">
                
                {/* Step 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#020202] bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shrink-0 z-10 transition-transform duration-500 group-hover:scale-110 ml-0 md:ml-0">
                    <CalendarDays size={24} />
                  </div>
                  <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-8 rounded-[2rem] bg-[#0A0A0A]/50 border border-white/[0.08] backdrop-blur-2xl transition-all duration-500 group-hover:bg-[#0A0A0A]/80 hover:-translate-y-2 hover:border-white/[0.2] hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)]">
                    <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{t.pilot.step1Title}</h4>
                    <p className="text-base text-slate-400 font-light leading-relaxed">
                      {t.pilot.step1Desc}
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#020202] bg-white/[0.05] text-white md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shrink-0 z-10 transition-transform duration-500 group-hover:scale-110 ml-0 md:ml-0 group-hover:bg-white group-hover:text-black">
                    <Cpu size={24} />
                  </div>
                  <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-8 rounded-[2rem] bg-[#0A0A0A]/50 border border-white/[0.08] backdrop-blur-2xl transition-all duration-500 group-hover:bg-[#0A0A0A]/80 hover:-translate-y-2 hover:border-white/[0.2] hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)]">
                    <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{t.pilot.step2Title}</h4>
                    <p className="text-base text-slate-400 font-light leading-relaxed">
                      {t.pilot.step2Desc}
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#020202] bg-white/[0.05] text-white md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shrink-0 z-10 transition-transform duration-500 group-hover:scale-110 ml-0 md:ml-0 group-hover:bg-amber-400 group-hover:text-amber-950 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                    <Rocket size={24} />
                  </div>
                  <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-8 rounded-[2rem] bg-[#0A0A0A]/50 border border-amber-500/[0.1] backdrop-blur-2xl transition-all duration-500 group-hover:bg-[#0A0A0A]/80 hover:-translate-y-2 hover:border-amber-500/[0.3] hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)]">
                    <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{t.pilot.step3Title}</h4>
                    <p className="text-base text-slate-400 font-light leading-relaxed">
                      {t.pilot.step3Desc}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA SECTION */}
            <div className="mt-32 text-center reveal-on-scroll opacity-0 translate-y-10 scale-95 transition-all duration-1000 delay-300">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                {t.pilot.ctaTitle}
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                {t.pilot.ctaDesc}
              </p>
              
              <a 
                href="https://calendly.com/henrylarreal27/ai-consultation" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] w-full sm:w-auto"
              >
                <CalendarDays size={20} /> {t.pilot.btnCalendly}
              </a>
            </div>

          </div>
        </section>
      )}

      {/* --- Footer --- */}
      <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/[0.05] bg-[#020202] z-10 relative">
        <p className="font-medium tracking-wide">© 2026 Henry Larreal. {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
        <p className="mt-3 text-xs opacity-50 font-light">{t.footer}</p>
      </footer>

      {/* Tailwind Custom Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes gradientPulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes bounceRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #64748b; }
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}