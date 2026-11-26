import React from 'react';

export default function TechStack({ t }) {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="border-t border-white/[0.06] scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            {t.eyebrow}
          </p>
          <h2
            id="stack-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.categories.map((category, idx) => (
            <div
              key={category.name}
              className={`rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5 transition-colors hover:border-cyan-500/25 sm:p-6 ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                {category.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
