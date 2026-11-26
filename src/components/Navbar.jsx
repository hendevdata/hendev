import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar({ lang, onToggleLang, t, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'projects', label: t.projects },
    { id: 'services', label: t.services },
    { id: 'stack', label: t.stack },
    { id: 'contact', label: t.contact },
  ];

  const handleNavClick = (id) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#020202]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-white transition-colors hover:text-cyan-300"
        >
          <Terminal size={16} className="text-cyan-400" aria-hidden="true" />
          <span>
            hendev<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="cursor-pointer text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}

          <div
            role="group"
            aria-label="Language selector"
            className="flex items-center rounded-lg border border-white/[0.08] bg-white/[0.03] p-0.5 font-mono text-xs"
          >
            <button
              type="button"
              onClick={() => onToggleLang('es')}
              aria-pressed={lang === 'es'}
              className={`cursor-pointer rounded-md px-2.5 py-1 transition-colors ${
                lang === 'es'
                  ? 'bg-cyan-500 text-cyan-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              aria-pressed={lang === 'en'}
              className={`cursor-pointer rounded-md px-2.5 py-1 transition-colors ${
                lang === 'en'
                  ? 'bg-cyan-500 text-cyan-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <div
            role="group"
            aria-label="Language selector"
            className="flex items-center rounded-lg border border-white/[0.08] bg-white/[0.03] p-0.5 font-mono text-xs"
          >
            <button
              type="button"
              onClick={() => onToggleLang('es')}
              aria-pressed={lang === 'es'}
              className={`cursor-pointer rounded-md px-2 py-1 transition-colors ${
                lang === 'es' ? 'bg-cyan-500 text-cyan-950 font-bold' : 'text-slate-400'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              aria-pressed={lang === 'en'}
              className={`cursor-pointer rounded-md px-2 py-1 transition-colors ${
                lang === 'en' ? 'bg-cyan-500 text-cyan-950 font-bold' : 'text-slate-400'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.menuClose : t.menuOpen}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:text-white"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/[0.06] bg-[#050505] px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="flex min-h-[44px] w-full cursor-pointer items-center rounded-lg px-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
