import React from 'react';
import { ArrowDownRight, Mail } from 'lucide-react';

export default function Hero({ t, onNavigate }) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-20 md:pb-24 md:pt-28"
    >
      <div className="max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] text-slate-300 sm:mb-6 sm:text-xs">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>{t.badge}</span>
        </div>

        <h1
          id="hero-title"
          className="text-[1.85rem] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.12]"
        >
          {t.h1}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
          {t.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-bold text-cyan-950 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-colors hover:bg-cyan-400 sm:w-auto"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowDownRight size={16} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-500/40 hover:bg-white/[0.07] sm:w-auto"
          >
            <Mail size={16} aria-hidden="true" />
            <span>{t.ctaSecondary}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
