import React from 'react';
import { ArrowDownRight, Mail } from 'lucide-react';

export default function Hero({ t, onNavigate }) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28"
    >
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-neutral-300">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>{t.badge}</span>
        </div>

        <h1
          id="hero-title"
          className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.12]"
        >
          {t.h1}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          {t.subtitle}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowDownRight size={16} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/[0.07]"
          >
            <Mail size={16} aria-hidden="true" />
            <span>{t.ctaSecondary}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
