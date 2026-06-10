import React, { useState, useEffect, useRef } from 'react';
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
  ChevronRight,
  Quote,
  Loader2,
  LayoutDashboard
} from 'lucide-react';

// --- CUSTOM HOOK ---
const useScrollReveal = (view) => {
  useEffect(() => {
    // Scroll reveal logic
  }, [view]);
};

// --- TRADUCCIONES ---
const translations = {
  en: {
    nav: { expertise: "Expertise", projects: "Projects", testimonials: "Testimonials", newsletter: "Newsletter", contact: "Contact", bookCall: "Book a Call" },
    cookies: {
      msg: "This website uses cookies to ensure you get the best experience on our data-driven platform.",
      accept: "Accept All",
      decline: "Decline",
      settings: "Cookie Settings"
    },
    hero: {
      badge: "Available for Consulting & Contracts",
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
      nexus: { tag: "Platform", title: "Nexus Tactical Dashboard", desc: "An advanced tactical platform built to orchestrate complex data environments. It serves as the core interface where Ivanna, my custom Agentic AI, autonomously interacts to manage workflows, analyze data, and execute operations.", stack: "React, Agentic AI, Node.js, GCP" },
      ivanna: { tag: "In Development", title: "Ivanna: Agentic Assistant", desc: "A local, agentic personal assistant built to dynamically manage nexus.ai environments tailored to specific client needs. It leverages Model Context Protocol (MCP) for seamless and secure integration with 3rd-party tools.", stack: "Agentic AI, MCP, Local LLMs, Python" },
      pmo: { tag: "Speaker", title: "Nonprofit PMO Summit", desc: "Keynote presentation detailing the integration of Agentic AI. Demonstrated how autonomous workflows revolutionize PMO efficiency and resource allocation.", stack: "Agentic AI, LLMs, LangChain" },
      matrix: { tag: "Case Study", title: "Master Matrix System", desc: "Engineered a fully automated asset validation system. The architecture leverages Computer Vision models to verify conditions in real-time, reducing manual inspection hours.", stack: "Python, OpenCV, GCP, BigQuery" },
      opioid: { tag: "Data Science", title: "Opioid Crisis Analysis", desc: "Developed predictive models to analyze and forecast public health trends in the US. Processed large-scale healthcare datasets to extract epidemiological insights.", stack: "Python, Scikit-Learn, Pandas, SQL" },
      social: { tag: "Data Analytics", title: "Engagement Analytics", desc: "Built an interactive web application for marketing teams. The tool processes complex social metrics and visualizes trends to drive data-informed content strategies.", stack: "Streamlit, Python, Plotly, APIs" }
    },
    testimonials: {
      title: "What Others Say.",
      subtitle: "Trust built through execution and scientific foundations.",
      items: [
        {
          text: "Working alongside him during the Datatón FACh 2024 allowed me to see firsthand his ability to structure data science solutions from scratch. We focused on Objective 1, extracting intelligence from Landsat-8 sensors to model land use. In this process, his proficiency with Google Earth Engine's c2l2 collections and Python was key to accurately correlating vegetation with water demand. He has that analytical curiosity necessary to break down multifactorial problems without losing sight of deadlines. He is, essentially, a developer who builds with strong scientific foundations, which ensures the success of a project.",
          author: "Ing. Denyam Noguera",
          role: "DevOps Specialist & President at Player 3 Academy",
          link: "https://www.linkedin.com/in/dnoguera/?locale=en"
        },
        {
          text: "I just wanted to send a quick note to say thank you for the recent training on Agentic AI. I really enjoyed the session and found it incredibly helpful. Your approach of giving a brief, high-level introduction to the concept first was perfect—it set the stage without getting bogged down in the weeds. The follow-up session with real examples was definitely the highlight for me. Seeing the Agentic AI in action with practical use cases really bridged the gap between theory and practice, making it much easier to understand how we can actually use AI. Thanks again for putting together such a valuable and well-structured session!",
          author: "Yan Song",
          role: "PMP",
          link: "https://www.linkedin.com/in/yang-song-pmp-bb305546/"
        }
      ]
    },
    newsletter: {
      title: "The Orchestrator's Dispatch",
      desc: "Receive weekly insights on Agentic AI, GCP automation, and data strategies.",
      placeholder: "name@company.com",
      btnSubscribe: "Subscribe"
    },
    contact: { title: "Ready to scale?", desc: "If you need robust cloud environments, predictive models, or custom AI integrations, let's connect.", btnMail: "Get in Touch" },
    footer: "Supervised by Jalapeño 🐈"
  },
  es: {
    nav: { expertise: "Especialidad", projects: "Proyectos", testimonials: "Testimonios", newsletter: "Boletín", contact: "Contacto", bookCall: "Agendar Llamada" },
    cookies: {
      msg: "Este sitio utiliza cookies para asegurar que tengas la mejor experiencia en nuestra plataforma orientada a datos.",
      accept: "Aceptar Todas",
      decline: "Rechazar",
      settings: "Configuración"
    },
    hero: {
      badge: "Disponible para Consultoría y Contratos",
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
      nexus: { tag: "Plataforma", title: "Nexus Tactical Dashboard", desc: "Una plataforma táctica avanzada diseñada para orquestar entornos de datos complejos. Sirve como la interfaz central donde Ivanna, mi IA Agéntica, interactúa de forma autónoma para gestionar flujos de trabajo, analizar datos y ejecutar operaciones.", stack: "React, IA Agéntica, Node.js, GCP" },
      ivanna: { tag: "En Desarrollo", title: "Ivanna: Asistente Agéntica", desc: "Asistente personal local y agéntico para gestionar dinámicamente entornos de nexus.ai según los requerimientos del cliente. Integra de forma nativa herramientas de terceros mediante Model Context Protocol (MCP).", stack: "IA Agéntica, MCP, LLMs Locales, Python" },
      pmo: { tag: "Speaker", title: "Nonprofit PMO Summit", desc: "Presentación magistral detallando la integración de IA Agéntica. Demostré cómo los flujos de trabajo autónomos revolucionan la eficiencia y asignación de recursos.", stack: "IA Agéntica, LLMs, LangChain" },
      matrix: { tag: "Caso de Estudio", title: "Master Matrix System", desc: "Diseñé un sistema automatizado de validación de activos. Utiliza modelos de Visión por Computadora para verificar condiciones en tiempo real, reduciendo horas de inspección.", stack: "Python, OpenCV, GCP, BigQuery" },
      opioid: { tag: "Data Science", title: "Análisis Crisis Opioides", desc: "Desarrollé modelos predictivos para analizar y pronosticar tendencias de salud pública en EE.UU. Se procesaron bases de datos a gran escala para extraer insights clave.", stack: "Python, Scikit-Learn, Pandas, SQL" },
      social: { tag: "Data Analytics", title: "Engagement Analytics", desc: "Construí una aplicación web interactiva para marketing. Procesa métricas sociales complejas y visualiza tendencias para impulsar estrategias basadas en datos.", stack: "Streamlit, Python, Plotly, APIs" }
    },
    testimonials: {
      title: "Lo Que Dicen Otros.",
      subtitle: "Confianza construida a través de la ejecución y fundamentos científicos.",
      items: [
        {
          text: "Trabajar junto a él durante el Datatón FACh 2024 me permitió ver de cerca su capacidad para estructurar soluciones de ciencia de datos desde cero. Nos enfocamos en el Objetivo 1, extrayendo inteligencia de los sensores del Landsat-8 para modelar el uso del suelo. In esta dirección, su manejo de las colecciones c2l2 de Google Earth Engine y Python fue clave para correlacionar la vegetación con la demanda de agua de forma precisa. Tiene esa curiosidad analítica necesaria para desglosar problemas multifactoriales sin perder de vista los plazos de entrega. Es, en esencia, un desarrollador que construye con fundamentos científicos fuertes lo cual asegura el éxito en un proyecto.",
          author: "Ing. Denyam Noguera",
          role: "Especialista DevOps & Presidente Player 3 Academy",
          link: "https://www.linkedin.com/in/dnoguera/?locale=en"
        },
        {
          text: "Solo quería enviar una nota rápida para agradecerte por la reciente capacitación sobre IA Agéntica. Disfruté mucho la sesión y me pareció increíblemente útil. Tu enfoque de dar primero una breve introducción de alto nivel al concepto fue perfecto: preparó el escenario sin enredarse en los detalles. La sesión de seguimiento con ejemplos reales fue definitivamente lo más destacado para mí. Ver la IA Agéntica en acción con casos de uso prácticos realmente cerró la brecha entre la teoría y la práctica, haciendo mucho más fácil entender cómo podemos usar la IA en la realidad. ¡Gracias de nuevo por organizar una sesión tan valiosa y bien estructurada!",
          author: "Yan Song",
          role: "PMP",
          link: "https://www.linkedin.com/in/yang-song-pmp-bb305546/"
        }
      ]
    },
    newsletter: {
      title: "The Orchestrator's Dispatch",
      desc: "Recibe insights semanales sobre IA Agéntica, automatización en GCP y estrategias de datos.",
      placeholder: "nombre@empresa.com",
      btnSubscribe: "Suscribirse"
    },
    contact: { title: "¿Listo para escalar?", desc: "Si necesitas entornos cloud robustos, modelos predictivos o integraciones de IA a la medida, hablemos.", btnMail: "Contactar Ahora" },
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

// --- IVANNA INTERACTIVE ASSISTANT WIDGET ---
const FloatingIvanna = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const videoRef = useRef(null);
  const messagesEndRef = useRef(null);
  const isEn = lang === 'en';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        sender: 'Ivanna',
        text: isEn 
          ? "Hi! I'm Ivanna, Henry's AI assistant. Ask me anything about his expertise, background, or availability, or select a quick option below!" 
          : "¡Hola! Soy Ivanna, la asistente IA de Henry. ¡Pregúntame lo que quieras sobre su experiencia, habilidades o disponibilidad, o elige una opción rápida abajo!"
      }]);

      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
        setTimeout(() => {
          if (videoRef.current) videoRef.current.pause();
        }, 3000);
      }
    }
  }, [isOpen, isEn, messages.length]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    
    const newMsg = { sender: 'User', text: text };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);
    
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setTimeout(() => {
        if (videoRef.current) videoRef.current.pause();
      }, 4000);
    }
    
    setTimeout(() => {
      const lower = text.toLowerCase();
      let response = '';
      
      if (isEn) {
        if (lower.includes('stack') || lower.includes('python') || lower.includes('sql') || lower.includes('gcp') || lower.includes('techno') || lower.includes('tecnol')) {
          response = "Henry's core tech stack centers around Python, SQL, and Google Cloud Platform (GCP). He has deep experience working with BigQuery, Cloud Run, Cloud Functions, dbt, LangChain, and Model Context Protocol (MCP) for orchestrating Agentic AI workflows.";
        } else if (lower.includes('special') || lower.includes('expert') || lower.includes('do') || lower.includes('area') || lower.includes('focus')) {
          response = "Henry specializes in three key pillars:\n\n1. Data Engineering: ETL pipelines, API integrations, and orchestrating robust cloud architectures on GCP.\n2. Data Science: Predictive models, machine learning, and advanced Agentic AI & RAG pipelines.\n3. Data Analytics: BI solutions, Looker, and designing interactive executive dashboards that drive strategy.";
        } else if (lower.includes('hire') || lower.includes('work') || lower.includes('avail') || lower.includes('job') || lower.includes('contract') || lower.includes('dispon')) {
          response = "Yes, Henry is actively available for consulting engagements, contracts, and freelance projects. He works with companies worldwide to automate data flows and build AI ecosystems. You can write to admin@hendev.dev to talk business.";
        } else if (lower.includes('contact') || lower.includes('email') || lower.includes('calendly') || lower.includes('meet') || lower.includes('talk') || lower.includes('agenda') || lower.includes('llamada')) {
          response = "You can contact him directly at admin@hendev.dev, or click this link to schedule a 15-minute consultation on Calendly:\nhttps://calendly.com/henrylarreal27/ai-consultation";
        } else if (lower.includes('nexus') || lower.includes('ivanna') || lower.includes('agent')) {
          response = "Nexus is a tactical operations dashboard built to manage automation routines. I am Ivanna, Henry's custom Agentic AI assistant. I run autonomously to handle workflows, queries, and integrations using MCP (Model Context Protocol).";
        } else {
          response = "I appreciate your message! As Henry's agent, I can share that he has 4+ years of data experience, won the FACh Datatón 2024, and focuses on AI automation. Would you like to review his 'stack', see his 'specialties', or 'book a call'?";
        }
      } else {
        if (lower.includes('stack') || lower.includes('python') || lower.includes('sql') || lower.includes('gcp') || lower.includes('tecnol')) {
          response = "El stack tecnológico central de Henry se basa en Python, SQL y Google Cloud Platform (GCP). Cuenta con amplia experiencia en BigQuery, Cloud Run, Cloud Functions, dbt, LangChain y Model Context Protocol (MCP) para la orquestación de flujos de IA Agéntica.";
        } else if (lower.includes('especial') || lower.includes('expert') || lower.includes('hace') || lower.includes('area') || lower.includes('focus') || lower.includes('experiencia')) {
          response = "Henry se especializa en tres pilares principales:\n\n1. Data Engineering: Pipelines ETL, integración de APIs y orquestación de arquitecturas cloud robustas en GCP.\n2. Data Science: Modelos predictivos, aprendizaje automático y pipelines avanzados de IA Agéntica y RAG.\n3. Data Analytics: Soluciones de BI, Looker y diseño de dashboards ejecutivos interactivos para la toma de decisiones estratégicas.";
        } else if (lower.includes('contrat') || lower.includes('trabaj') || lower.includes('dispon') || lower.includes('proyect') || lower.includes('empleo')) {
          response = "¡Sí! Henry está disponible para consultorías, contratos y proyectos freelance. Ayuda a empresas a automatizar sus flujos de datos y estructurar ecosistemas de inteligencia artificial. Puedes escribirle a admin@hendev.dev.";
        } else if (lower.includes('contact') || lower.includes('correo') || lower.includes('email') || lower.includes('calendly') || lower.includes('reun') || lower.includes('hablar') || lower.includes('agenda') || lower.includes('llamada')) {
          response = "Puedes contactarlo directamente por correo en admin@hendev.dev, o bien agendar una llamada de 15 minutos en su Calendly usando este enlace:\nhttps://calendly.com/henrylarreal27/ai-consultation";
        } else if (lower.includes('nexus') || lower.includes('ivanna') || lower.includes('agent')) {
          response = "Nexus es un dashboard táctico para la gestión de tareas de automatización. Yo soy Ivanna, la IA asistente de Henry, diseñada para interactuar con herramientas, bases de datos y APIs mediante MCP.";
        } else {
          response = "¡Gracias por tu mensaje! Como la asistente de Henry, te puedo contar que él cuenta con más de 4 años de experiencia en datos, fue expositor/ganador en la Datatón FACh 2024 y automatiza flujos en la nube. ¿Te gustaría conocer su 'stack', ver sus 'especialidades' o 'agendar llamada'?";
        }
      }
      
      setMessages(prev => [...prev, { sender: 'Ivanna', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const quickPrompts = isEn 
    ? ["Show Tech Stack", "Core Specialties", "Availability for Hire", "Book a Consultation"]
    : ["Ver Stack Tecnológico", "Especialidades Core", "Disponibilidad", "Agendar Llamada"];

  const handleQuickPromptClick = (idx) => {
    let promptText = "";
    if (isEn) {
      if (idx === 0) promptText = "Tell me about your tech stack";
      else if (idx === 1) promptText = "What are your core specialties?";
      else if (idx === 2) promptText = "Are you available for freelance or contract roles?";
      else if (idx === 3) promptText = "How can I book a call with you?";
    } else {
      if (idx === 0) promptText = "¿Cuál es tu stack tecnológico?";
      else if (idx === 1) promptText = "¿Cuáles son tus especialidades core?";
      else if (idx === 2) promptText = "¿Estás disponible para contratos o proyectos?";
      else if (idx === 3) promptText = "¿Cómo puedo agendar una llamada contigo?";
    }
    handleSendMessage(promptText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end">
      {/* Expandable Chat Window */}
      <div 
        className={`mb-4 transition-all duration-500 ease-in-out origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="w-[340px] md:w-[385px] h-[520px] bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(34,211,238,0.15)] flex flex-col">
          
          {/* Header with Avatar Video */}
          <div className="relative h-36 w-full bg-black shrink-0 border-b border-white/[0.05] overflow-hidden">
            <video 
              ref={videoRef}
              muted 
              playsInline 
              loop
              className="w-full h-full object-cover opacity-80 mix-blend-screen scale-[1.05]"
            >
              <source src="/ivanna.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
            
            <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end">
              <div>
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative rounded-full h-2 w-2 bg-cyan-500"></span>
                  </div>
                  <span className="text-white font-bold tracking-wide text-sm">Ivanna</span>
                </div>
                <p className="text-cyan-400/80 text-[10px] font-mono tracking-wider uppercase mt-0.5">
                  {isEn ? 'Interactive AI Agent' : 'Agente IA Interactiva'}
                </p>
              </div>
              
              <button onClick={() => setIsOpen(false)} className="bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <X size={16} className="text-slate-300" />
              </button>
            </div>
          </div>
          
          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.sender === 'User' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-[13px] sm:text-[14px] font-light leading-relaxed whitespace-pre-wrap ${
                  msg.sender === 'User' 
                    ? 'bg-gradient-to-tr from-cyan-600 to-blue-600 text-white rounded-br-sm shadow-md' 
                    : 'bg-white/[0.04] border border-white/[0.06] text-slate-300 rounded-bl-sm'
                }`}>
                  {msg.text.includes('https://') ? (
                    (() => {
                      const urlRegex = /(https?:\/\/[^\s]+)/g;
                      const parts = msg.text.split(urlRegex);
                      return parts.map((part, i) => {
                        if (part.match(urlRegex)) {
                          return (
                            <a 
                              key={i} 
                              href={part} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-cyan-400 hover:underline break-all font-semibold"
                            >
                              {part}
                            </a>
                          );
                        }
                        return part;
                      });
                    })()
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Bubble */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.05] px-3.5 py-3 rounded-2xl rounded-bl-sm w-16">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Tag Bar */}
          <div className="px-4 py-2.5 flex flex-wrap gap-1.5 border-t border-white/[0.04] bg-black/30">
            {quickPrompts.map((prompt, idx) => (
              <button 
                key={idx}
                onClick={() => handleQuickPromptClick(idx)}
                disabled={isTyping}
                className="text-[10px] bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 hover:bg-cyan-500/5 text-slate-400 hover:text-cyan-400 px-2.5 py-1 rounded-full transition-all cursor-pointer truncate max-w-full"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3.5 bg-[#080808] border-t border-white/[0.05]">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="relative flex items-center"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isTyping}
                placeholder={isEn ? "Type a question..." : "Escribe una pregunta..."}
                className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-cyan-500/40 rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all"
              />
              <button 
                type="submit"
                disabled={isTyping || !inputText.trim()}
                className={`absolute right-1.5 p-1.5 rounded-full transition-all ${
                  inputText.trim() && !isTyping
                    ? 'bg-cyan-500 text-cyan-950 hover:bg-cyan-400 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full p-[2px] transition-all duration-500 hover:scale-105 z-50 overflow-hidden cursor-pointer ${
          isOpen 
            ? 'bg-white/10 rotate-180 shadow-none' 
            : 'bg-gradient-to-tr from-cyan-500/80 to-purple-500/80 shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]'
        }`}
      >
        <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center relative">
          {isOpen ? <X className="text-slate-400" size={24} /> : <Bot className="text-cyan-400 animate-pulse" size={24} />}
          
          {/* Notification Dot */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 border-2 border-[#0A0A0A]"></span>
            </span>
          )}
        </div>
      </button>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const t = translations[lang];
  const BEEHIIV_PUB_ID = "https://hendevwelcome.beehiiv.com/p/thanks-for-subscribing"; 
  
  useEffect(() => {
    // Show cookies banner if consent not given
    const consent = localStorage.getItem('hendev_cookie_consent');
    if (!consent) {
      setShowCookies(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCookieAction = (accepted) => {
    localStorage.setItem('hendev_cookie_consent', accepted ? 'accepted' : 'declined');
    setShowCookies(false);
  };

  const navigateToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Projects list metadata
  const projects = [
    {
      key: 'nexus',
      category: 'ai',
      icon: <LayoutDashboard size={140} />
    },
    {
      key: 'ivanna',
      category: 'ai',
      icon: <Bot size={140} />
    },
    {
      key: 'pmo',
      category: 'ai',
      icon: <Target size={140} />
    },
    {
      key: 'matrix',
      category: 'ds',
      icon: <Cpu size={140} />
    },
    {
      key: 'opioid',
      category: 'ds',
      icon: <Activity size={140} />
    },
    {
      key: 'social',
      category: 'da',
      icon: <LineChart size={140} />
    }
  ];

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All' : 'Todos' },
    { id: 'ai', label: lang === 'en' ? 'Agentic AI' : 'IA Agéntica' },
    { id: 'ds', label: lang === 'en' ? 'Data Science' : 'Ciencia de Datos' },
    { id: 'da', label: lang === 'en' ? 'Data Analytics' : 'Analítica' }
  ];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#020202] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden relative w-full pb-1">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 z-[100] transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Tech Grid Background & Moving Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-80" />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[10%] left-[15%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[110px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>

      {/* --- FLOATING NAVIGATION BAR --- */}
      <div className="fixed top-4 left-0 w-full z-50 px-4">
        <nav className="max-w-7xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/[0.08] rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          <div className="px-5 md:px-8 py-3.5 flex justify-between items-center relative">
            
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigateToSection('top')}>
              <Terminal className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={20} />
              <span className="font-bold text-lg text-white tracking-tight">
                hendev<span className="text-cyan-400">.dev</span>
              </span>
            </div>
            
            {/* Links and Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <button onClick={() => navigateToSection('expertise')} className="hover:text-white transition-colors cursor-pointer">{t.nav.expertise}</button>
                <button onClick={() => navigateToSection('projects')} className="hover:text-white transition-colors cursor-pointer">{t.nav.projects}</button>
                <button onClick={() => navigateToSection('testimonials')} className="hover:text-white transition-colors cursor-pointer">{t.nav.testimonials}</button>
                <button onClick={() => navigateToSection('newsletter')} className="hover:text-white transition-colors cursor-pointer">{t.nav.newsletter}</button>
              </div>

              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setShowLangMenu(!showLangMenu)} 
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08] transition-all cursor-pointer"
                >
                  <Globe size={14} /> <span>{lang.toUpperCase()}</span>
                </button>
                {showLangMenu && (
                  <div className="absolute right-0 mt-2 w-28 bg-[#0C0C0C] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-fade-in">
                    <button onClick={() => { setLang('en'); setShowLangMenu(false); }} className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-white/5 transition-colors cursor-pointer">English</button>
                    <button onClick={() => { setLang('es'); setShowLangMenu(false); }} className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-white/5 transition-colors cursor-pointer">Español</button>
                  </div>
                )}
              </div>

              {/* Book meeting Call Link */}
              <a 
                href="https://calendly.com/henrylarreal27/ai-consultation"
                target="_blank"
                rel="noreferrer"
                className="hidden md:block px-5 py-2 text-xs font-bold rounded-full bg-white text-black hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
              >
                {t.nav.bookCall}
              </a>

              {/* Mobile Menu Toggle */}
              <button className="md:hidden text-slate-300 p-1 hover:text-white transition-colors cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#0A0A0A]/95 border-t border-white/[0.06] rounded-b-[2rem] px-6 py-6 space-y-4 animate-fade-in">
              <button onClick={() => navigateToSection('expertise')} className="block w-full text-left text-sm font-semibold hover:text-white transition-colors">{t.nav.expertise}</button>
              <button onClick={() => navigateToSection('projects')} className="block w-full text-left text-sm font-semibold hover:text-white transition-colors">{t.nav.projects}</button>
              <button onClick={() => navigateToSection('testimonials')} className="block w-full text-left text-sm font-semibold hover:text-white transition-colors">{t.nav.testimonials}</button>
              <button onClick={() => navigateToSection('newsletter')} className="block w-full text-left text-sm font-semibold hover:text-white transition-colors">{t.nav.newsletter}</button>
              <a 
                href="https://calendly.com/henrylarreal27/ai-consultation"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-2.5 bg-white text-black font-bold rounded-full text-sm"
              >
                {t.nav.bookCall}
              </a>
            </div>
          )}
        </nav>
      </div>

      <div id="top" className="h-4" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-6 lg:px-12 z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Hero Details */}
          <div className="flex-1 space-y-6 lg:space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              <ScrambleText text={t.hero.title1} /> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                {t.hero.title2}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
              {t.hero.desc}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => navigateToSection('projects')} 
                className="px-6 py-3.5 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_10px_20px_rgba(255,255,255,0.05)] cursor-pointer"
              >
                {t.hero.btnProjects} 
                <ArrowRight size={16} className="animate-bounce-right" />
              </button>
              
              <a 
                href="https://calendly.com/henrylarreal27/ai-consultation"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/15 hover:to-blue-500/15 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 font-bold rounded-full transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <CalendarDays size={16} />
                {lang === 'en' ? 'Book Consultation' : 'Agendar Asesoría'}
              </a>

              <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0 items-center justify-start max-sm:border-t max-sm:border-white/5 max-sm:pt-4 max-sm:mt-4">
                <a href="https://www.linkedin.com/in/henry-larreal-carrera/" target="_blank" rel="noreferrer" className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-white/[0.02] border border-white/[0.05] rounded-full">LinkedIn</a>
                <a href="https://github.com/hendevdata/hendevdata" target="_blank" rel="noreferrer" className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-white/[0.02] border border-white/[0.05] rounded-full">GitHub</a>
                <a href="https://medium.com/@henrylarreal27" target="_blank" rel="noreferrer" className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-white/[0.02] border border-white/[0.05] rounded-full">Medium</a>
              </div>
            </div>
          </div>

          {/* Upgraded Floating Code block */}
          <div className="w-full lg:w-[480px] shrink-0 relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 to-indigo-500/5 opacity-80 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="bg-[#0A0A0A]/75 border border-white/[0.08] hover:border-cyan-500/30 rounded-[2rem] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-3xl font-mono text-sm relative transition-all duration-500 group">
              <div className="flex justify-between items-center mb-6 pb-3.5 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[10px] text-slate-500 tracking-widest font-sans font-semibold uppercase">architect.js</div>
              </div>
              <div className="space-y-2.5 text-cyan-50/90 tracking-wide text-[13px] sm:text-[14px]">
                <p><span className="text-pink-400">const</span> <span className="text-blue-400">architect</span> = {'{'}</p>
                <p className="pl-5">name: <span className="text-amber-300">'Henry Larreal'</span>,</p>
                <p className="pl-5">role: <span className="text-amber-300">'Data Scientist'</span>,</p>
                <p className="pl-5">stack: [<span className="text-emerald-400">'Python'</span>, <span className="text-emerald-400">'SQL'</span>, <span className="text-emerald-400">'GCP'</span>],</p>
                <p className="pl-5">automation: <span className="text-purple-400">true</span>,</p>
                <p className="pl-5">ai_agents: <span className="text-purple-400">true</span></p>
                <p>{'};'}</p>
                
                <div className="w-full h-px bg-white/[0.08] my-4" />
                <p className="text-slate-500 italic text-[11px] leading-relaxed">{t.hero.codeComment}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- METRICS / KEY VALUES --- */}
      <section className="border-y border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10 md:py-12">
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
      <section id="expertise" className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{t.expertise.title}</h2>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto">{t.expertise.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['de', 'ds', 'da'].map((key, i) => (
            <div 
              key={key} 
              className={`bg-[#0A0A0A]/50 border border-white/[0.08] hover:border-cyan-500/30 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group shadow-lg ${
                i === 2 ? 'md:col-span-2 lg:col-span-1 md:max-w-xl md:mx-auto lg:max-w-none' : ''
              }`}
            >
              <div className="w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center mb-8 border border-white/[0.05] group-hover:bg-cyan-500/10 transition-all">
                {key === 'de' ? <Database size={24} className="text-cyan-400" /> : key === 'ds' ? <BrainCircuit size={24} className="text-cyan-400" /> : <BarChart3 size={24} className="text-cyan-400" />}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{t.expertise[key].title}</h3>
              <p className="text-slate-400 font-light leading-relaxed mb-8 text-sm md:text-base">{t.expertise[key].desc}</p>
              <div className="mt-auto space-y-3">
                {t.expertise[key].tags.map(tag => (
                  <div key={tag} className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04] text-xs font-mono">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION WITH CATEGORY FILTER --- */}
      <section id="projects" className="py-20 lg:py-28 px-6 lg:px-12 border-t border-white/[0.04] max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{t.projects.title}</h2>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto">{t.projects.subtitle}</p>
        </div>

        {/* Filter bar */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-black border-white shadow-lg scale-105'
                  : 'bg-white/[0.02] text-slate-400 border-white/[0.06] hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const key = project.key;
            return (
              <div 
                key={key} 
                className="bg-[#0A0A0A]/50 border border-white/[0.08] hover:border-cyan-500/30 rounded-[2.5rem] overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 flex flex-col shadow-2xl animate-fade-in"
              >
                
                {/* Visual Header */}
                <div className="h-44 bg-gradient-to-br from-slate-950 to-black p-8 flex flex-col justify-end border-b border-white/[0.04] relative overflow-hidden shrink-0">
                  <div className="absolute right-[-20px] top-[-20px] opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-500 text-white">
                    {project.icon}
                  </div>
                  <span className="bg-white/[0.05] text-white border border-white/10 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-max mb-3 backdrop-blur-md">
                    {t.projects[key].tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight relative z-10">{t.projects[key].title}</h3>
                </div>

                {/* Body Content */}
                <div className="p-8 flex flex-col flex-grow justify-between min-h-[190px]">
                  <p className="text-slate-400 font-light leading-relaxed mb-6 text-[14px] sm:text-[15px]">
                    {t.projects[key].desc}
                  </p>
                  
                  <p className="text-xs font-mono text-cyan-400/90 border-t border-white/[0.04] pt-4 flex items-center flex-wrap gap-2">
                    <span className="text-slate-500 uppercase tracking-widest text-[9px] mr-1">Stack:</span>
                    {t.projects[key].stack}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-20 lg:py-28 px-6 lg:px-12 border-t border-white/[0.04] max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{t.testimonials.title}</h2>
          <p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {t.testimonials.items.map((testimonial, i) => (
            <div 
              key={i} 
              className={`flex flex-col h-full bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-2xl ${
                i % 2 !== 0 ? 'md:mt-10' : ''
              }`}
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-500" />
              <Quote size={80} className="absolute top-6 right-6 text-white/[0.01] -rotate-12 pointer-events-none group-hover:text-cyan-500/[0.03] transition-colors duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-cyan-400 mb-6 opacity-70">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21L16.439 14.504H11.531V3H21.531V14.504L18.439 21H14.017ZM3.01697 21L5.43897 14.504H0.530968V3H10.531V14.504L7.43897 21H3.01697Z" />
                    </svg>
                  </div>

                  <p className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-300 font-light leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/[0.08] pt-6 gap-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar Initials */}
                    <div className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/[0.1] flex items-center justify-center text-cyan-400 text-sm font-bold shrink-0">
                      {testimonial.author.split(' ').map(n => n[0]).join('').substring(0, 2).replace('I', '')}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-tight">{testimonial.author}</h4>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                  <a 
                    href={testimonial.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center w-9 h-9 bg-white/[0.03] hover:bg-cyan-500/10 border border-white/[0.05] hover:border-cyan-500/30 rounded-full transition-all duration-300 text-slate-400 hover:text-cyan-400 shrink-0"
                    title="LinkedIn Profile"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section id="newsletter" className="py-20 lg:py-28 px-6 lg:px-12 border-t border-white/[0.04] max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0A0A0A] to-black border border-white/[0.08] rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />
          
          {!isSubscribed ? (
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="flex-1 text-center md:text-left space-y-4">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">{t.newsletter.title}</h2>
                <p className="text-slate-400 font-light text-base md:text-lg">{t.newsletter.desc}</p>
              </div>
              <div className="flex-1 w-full max-w-md mx-auto">
                <form 
                  action="https://www.beehiiv.com/new-subscription" 
                  method="POST" 
                  target="_blank" 
                  className="flex flex-col gap-4" 
                  onSubmit={() => setTimeout(() => setIsSubscribed(true), 500)}
                >
                  <input type="hidden" name="publication_id" value={BEEHIIV_PUB_ID} />
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input type="email" name="email" required placeholder={t.newsletter.placeholder} className="w-full bg-black/60 border border-white/[0.1] rounded-full py-3.5 pl-14 pr-4 focus:border-cyan-500 outline-none transition-all text-white text-sm" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-white text-black font-bold rounded-full hover:scale-[1.02] hover:bg-cyan-50 transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer text-sm">
                    <Send size={16} /> {t.newsletter.btnSubscribe}
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 animate-fade-in">
              <CheckCircle2 size={54} className="text-cyan-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Subscription Confirmed!</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">Welcome to the Dispatch. Check your inbox for your first deep dive soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 lg:py-28 px-6 lg:px-12 border-t border-white/[0.04] max-w-5xl mx-auto">
        <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{t.contact.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">{t.contact.desc}</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a 
              href="mailto:admin@hendev.dev" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 hover:bg-cyan-50 transition-all shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer text-sm"
            >
              <Mail size={16} /> {t.contact.btnMail}
            </a>
            
            <a 
              href="https://calendly.com/henrylarreal27/ai-consultation"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/15 hover:to-blue-500/15 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 font-bold rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <CalendarDays size={16} />
              {lang === 'en' ? 'Schedule Free Call' : 'Agendar Llamada Gratis'}
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/[0.05] bg-[#020202] z-10 relative px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-cyan-400" />
            <span className="font-bold text-white text-sm">hendev<span className="text-cyan-400">.dev</span></span>
          </div>
          <p className="text-xs">© 2026 Henry Larreal. {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
          <p className="opacity-40 text-[10px] font-semibold uppercase tracking-widest">{t.footer}</p>
        </div>
      </footer>

      {/* --- COOKIE CONSENT BANNER --- */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 w-full z-[100] px-6 pb-6 animate-slide-up">
          <div className="max-w-4xl mx-auto bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_-15px_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                <Cookie size={20} />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light">{t.cookies.msg}</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto shrink-0">
              <button 
                onClick={() => handleCookieAction(false)}
                className="flex-1 md:flex-none px-5 py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {t.cookies.decline}
              </button>
              <button 
                onClick={() => handleCookieAction(true)}
                className="flex-1 md:flex-none px-6 py-2.5 bg-cyan-500 text-cyan-950 text-xs font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.25)] cursor-pointer"
              >
                {t.cookies.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- IVANNA INTERACTIVE AGENT --- */}
      <FloatingIvanna lang={lang} />
    </div>
  );
}
