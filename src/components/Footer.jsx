import React from 'react';

export default function Footer({ t }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#020202]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-neutral-500 sm:flex-row">
        <p className="font-mono">
          © {year} {t.rights} · {t.brand}
        </p>
        <p className="font-mono text-neutral-400">{t.tagline}</p>
      </div>
    </footer>
  );
}
