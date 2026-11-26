import React, { useEffect, useState } from 'react';
import { translations } from './i18n/translations.js';
import { initAnalytics, trackEvent } from './utils/analytics.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AuthorityBar from './components/AuthorityBar.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import TechStack from './components/TechStack.jsx';
import AboutContact from './components/AboutContact.jsx';
import Footer from './components/Footer.jsx';

function getInitialLang() {
  if (typeof window === 'undefined') return 'es';
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang === 'es' || urlLang === 'en') return urlLang;
  if (navigator.language && navigator.language.toLowerCase().startsWith('es')) {
    return 'es';
  }
  return 'en';
}

function updateMeta(selector, content) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', content);
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const t = translations[lang] || translations.es;

  useEffect(() => {
    const cleanup = initAnalytics();
    return cleanup;
  }, []);

  // Dynamic SEO metadata synchronization (title, description, Open Graph, Twitter)
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = lang;
    document.title = t.seo.title;

    updateMeta('meta[name="title"]', t.seo.title);
    updateMeta('meta[name="description"]', t.seo.description);
    updateMeta('meta[property="og:title"]', t.seo.title);
    updateMeta('meta[property="og:description"]', t.seo.description);
    updateMeta('meta[property="og:locale"]', t.seo.ogLocale);
    updateMeta('meta[name="twitter:title"]', t.seo.title);
    updateMeta('meta[name="twitter:description"]', t.seo.description);
  }, [lang, t.seo]);

  const handleToggleLang = (nextLang) => {
    if (nextLang === lang) return;
    setLang(nextLang);
    trackEvent('language_switch', { lang: nextLang });
  };

  const navigateToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] font-sans text-slate-300 selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t.nav}
        onNavigate={navigateToSection}
      />

      <main>
        <Hero t={t.hero} onNavigate={navigateToSection} />
        <AuthorityBar items={t.authority} />
        <ProjectsSection t={t.projects} />
        <ServicesSection t={t.services} />
        <TechStack t={t.stack} />
        <AboutContact t={t.aboutContact} />
      </main>

      <Footer t={t.footer} />
    </div>
  );
}
