import React, { useEffect, useState } from 'react';
import { translations } from './i18n/translations.js';
import { initAnalytics, trackEvent } from './utils/analytics.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AuthorityBar from './components/AuthorityBar.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import TechStack from './components/TechStack.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import AboutContact from './components/AboutContact.jsx';
import BlogComingSoon from './components/BlogComingSoon.jsx';
import Footer from './components/Footer.jsx';

const DEFAULT_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

function normalizePath(path) {
  if (!path || path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
}

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
  const [pathname, setPathname] = useState(() =>
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/'
  );

  const t = translations[lang] || translations.es;
  const isBlog = pathname === '/blog';

  useEffect(() => {
    const cleanup = initAnalytics();
    return cleanup;
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO & robots metadata synchronization
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = lang;

    const activeTitle = isBlog ? t.blog.seoTitle : t.seo.title;
    const activeDesc = isBlog ? t.blog.seoDescription : t.seo.description;
    const robotsValue = isBlog ? 'noindex, nofollow' : DEFAULT_ROBOTS;

    document.title = activeTitle;
    updateMeta('meta[name="title"]', activeTitle);
    updateMeta('meta[name="description"]', activeDesc);
    updateMeta('meta[property="og:title"]', activeTitle);
    updateMeta('meta[property="og:description"]', activeDesc);
    updateMeta('meta[property="og:locale"]', t.seo.ogLocale);
    updateMeta('meta[name="twitter:title"]', activeTitle);
    updateMeta('meta[name="twitter:description"]', activeDesc);

    updateMeta('meta[name="robots"]', robotsValue);
    updateMeta('meta[name="googlebot"]', robotsValue);
    updateMeta('meta[name="bingbot"]', robotsValue);
  }, [lang, isBlog, t.seo, t.blog]);

  const handleToggleLang = (nextLang) => {
    if (nextLang === lang) return;
    setLang(nextLang);
    trackEvent('language_switch', { lang: nextLang });
  };

  const navigateToSection = (sectionId) => {
    if (pathname !== '/') {
      window.history.pushState({}, '', sectionId === 'top' ? '/' : `/#${sectionId}`);
      setPathname('/');
      requestAnimationFrame(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      return;
    }

    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigateToBlog = () => {
    if (pathname !== '/blog') {
      window.history.pushState({}, '', '/blog');
      setPathname('/blog');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020202] font-sans text-slate-300 selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t.nav}
        pathname={pathname}
        onNavigate={navigateToSection}
        onNavigateBlog={navigateToBlog}
      />

      <main>
        {isBlog ? (
          <BlogComingSoon
            t={t.blog}
            onBackToProjects={() => navigateToSection('projects')}
          />
        ) : (
          <>
            <Hero t={t.hero} onNavigate={navigateToSection} />
            <AuthorityBar items={t.authority} />
            <ProjectsSection t={t.projects} />
            <ServicesSection t={t.services} />
            <TechStack t={t.stack} />
            <TestimonialsSection t={t.testimonials} />
            <AboutContact t={t.aboutContact} />
          </>
        )}
      </main>

      <Footer t={t.footer} />
    </div>
  );
}
