import React from 'react';
import { Workflow, Eye, Database } from 'lucide-react';

const ICONS = {
  automation: Workflow,
  'cv-ai': Eye,
  'data-cloud': Database,
};

export default function ServicesSection({ t }) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-white/[0.06] bg-[#050505] scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            {t.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.items.map((service) => {
            const Icon = ICONS[service.id] || Workflow;
            return (
              <article
                key={service.id}
                className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-6 transition-colors hover:border-cyan-500/30"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-white">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
