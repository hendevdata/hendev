import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection({ t }) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mb-10 max-w-2xl sm:mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
          {t.eyebrow}
        </p>
        <h2
          id="projects-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          {t.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {t.items.map((project, idx) => (
          <article
            key={project.id}
            className={`flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5 transition-colors hover:border-cyan-500/30 sm:p-6 ${
              idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">
                  {project.category}
                </span>
                {project.slug && (
                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-flex min-h-[40px] items-center gap-1 rounded-md px-2 font-mono text-xs text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-cyan-300"
                  >
                    <span>{t.labels.caseStudyLink}</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                )}
              </div>

              <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
                {project.title}
              </h3>

              <dl className="mt-5 space-y-4 border-t border-white/[0.06] pt-4 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    {t.labels.problem}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-slate-300">
                    {project.problem}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    {t.labels.architecture}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-slate-300">
                    {project.architecture}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-cyan-400/90">
                    {t.labels.result}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-slate-200">
                    {project.result}
                  </dd>
                </div>
              </dl>
            </div>

            <ul
              aria-label="Technologies used"
              className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-4"
            >
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-cyan-300/90"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
