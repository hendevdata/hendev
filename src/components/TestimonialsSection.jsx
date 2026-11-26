import React from 'react';
import { Quote, ArrowUpRight } from 'lucide-react';

export default function TestimonialsSection({ t }) {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-t border-white/[0.06] scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            {t.eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {t.items.map((item) => {
            const initials = item.author
              .replace(/^Ing\.\s+/i, '')
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2);

            return (
              <figure
                key={item.author}
                className="m-0 flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5 transition-colors hover:border-cyan-500/30 sm:p-6"
              >
                <div>
                  <Quote size={20} className="mb-4 text-cyan-400/80" aria-hidden="true" />
                  <blockquote
                    cite={item.link}
                    className="m-0 text-sm leading-relaxed text-slate-300"
                  >
                    &ldquo;{item.text}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-4">
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] font-mono text-xs font-bold text-cyan-400"
                    >
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.author}</h3>
                      <p className="font-mono text-[11px] text-slate-400">{item.role}</p>
                    </div>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.author} LinkedIn`}
                    className="inline-flex min-h-[40px] shrink-0 items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-400"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
