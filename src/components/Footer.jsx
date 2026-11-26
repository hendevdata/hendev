import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer({ t }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#020202]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs text-slate-400 sm:flex-row">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-cyan-400" aria-hidden="true" />
          <span className="font-mono font-bold text-white">
            hendev<span className="text-cyan-400">.dev</span>
          </span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>© {year} {t.rights}</span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            {t.tagline}
          </p>
          <span className="select-none text-xs text-white/10" aria-hidden="true">•</span>

          {/* Minimalist Wink to The Legend of Zelda: Ocarina of Time */}
          <div
            className="group/oot relative inline-flex cursor-help select-none items-center gap-1.5"
            title="Song of Time // Ocarina of Time: ▶ A ▼ ▶ A ▼"
          >
            <svg
              className="h-3 w-3 text-amber-400/50 drop-shadow-[0_0_6px_rgba(251,191,36,0.3)] transition-all duration-300 group-hover/oot:scale-110 group-hover/oot:text-amber-300"
              viewBox="0 0 100 86.6"
              fill="currentColor"
              aria-hidden="true"
            >
              <polygon points="50,0 25,43.3 75,43.3" />
              <polygon points="25,43.3 0,86.6 50,86.6" />
              <polygon points="75,43.3 50,86.6 100,86.6" />
            </svg>
            <span className="font-mono text-[9px] tracking-widest text-slate-400 transition-colors group-hover/oot:text-amber-300/80">
              ▶ A ▼ ▶ A ▼
            </span>

            <div className="pointer-events-none absolute bottom-full right-0 z-50 mb-2.5 hidden flex-col items-center group-hover/oot:flex">
              <div className="whitespace-nowrap rounded-lg border border-amber-400/30 bg-[#0A0A0A] px-2.5 py-1 font-mono text-[10px] text-amber-300 shadow-[0_4px_20px_rgba(251,191,36,0.2)]">
                Song of Time // 1998 OOT
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
