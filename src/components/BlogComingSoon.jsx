import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function BlogComingSoon({ t, onBackToProjects }) {
  return (
    <section
      aria-labelledby="blog-heading"
      className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-24"
    >
      <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-cyan-400 sm:text-xs">
        {t.badge}
      </div>

      <h1
        id="blog-heading"
        className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl"
      >
        {t.h1}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
        {t.description}
      </p>

      <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <a
          href="https://instagram.com/hendev.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-bold text-cyan-950 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-colors hover:bg-cyan-400 sm:w-auto"
        >
          <span>{t.ctaPrimary}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <a
          href="/#projects"
          onClick={(e) => {
            e.preventDefault();
            onBackToProjects();
          }}
          className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-500/40 hover:bg-white/[0.07] sm:w-auto"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>{t.ctaSecondary}</span>
        </a>
      </div>
    </section>
  );
}
