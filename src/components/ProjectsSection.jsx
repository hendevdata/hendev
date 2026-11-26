import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Film } from 'lucide-react';

function LazyVideoDemo({ videoWebm, videoMp4, posterAlt, placeholderLabel }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasVideo = Boolean(videoWebm || videoMp4);

  useEffect(() => {
    if (!hasVideo || !containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '150px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasVideo]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={posterAlt}
      className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#0a0a0a]"
    >
      {hasVideo && isVisible ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={posterAlt}
        >
          {videoWebm && <source src={videoWebm} type="video/webm" />}
          {videoMp4 && <source src={videoMp4} type="video/mp4" />}
        </video>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] p-4 text-center">
          <Film size={20} className="text-neutral-500" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
            {placeholderLabel}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection({ t }) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-24"
    >
      <div className="mb-12 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          {t.eyebrow}
        </p>
        <h2
          id="projects-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          {t.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {t.items.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#070707] p-6 transition-colors hover:border-white/20"
          >
            <div>
              <LazyVideoDemo
                videoWebm={project.videoWebm}
                videoMp4={project.videoMp4}
                posterAlt={project.posterAlt}
                placeholderLabel={t.labels.videoPlaceholder}
              />

              <div className="mt-5 flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                  {project.category}
                </span>
                {project.slug && (
                  <a
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs text-neutral-400 transition-colors hover:text-white"
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
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                    {t.labels.problem}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-neutral-300">
                    {project.problem}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                    {t.labels.architecture}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-neutral-300">
                    {project.architecture}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-emerald-400/90">
                    {t.labels.result}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-neutral-200">
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
                  className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-neutral-300"
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
