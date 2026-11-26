import React, { useState } from 'react';
import { Check, Copy, Mail, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../i18n/translations.js';
import { trackEvent } from '../utils/analytics.js';

export default function AboutContact({ t }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL_LINKS.email);
      setCopied(true);
      trackEvent('copy_email_direct');
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const input = document.createElement('input');
      input.value = SOCIAL_LINKS.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const socialItems = [
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
    { label: 'GitHub', href: SOCIAL_LINKS.github },
    { label: 'Instagram', href: SOCIAL_LINKS.instagram },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-white/[0.06] bg-[#050505] scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Bio */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              {t.eyebrow}
            </p>
            <h2
              id="contact-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {t.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {t.bio}
            </p>
          </div>

          {/* Direct Human Contact Block (No Cold Form) */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5 sm:p-8 lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {t.emailLabel}
            </p>

            <div className="mt-2">
              <span className="break-all font-mono text-lg font-semibold text-white sm:text-xl">
                {SOCIAL_LINKS.email}
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex min-h-[44px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-colors sm:flex-none ${
                  copied
                    ? 'bg-emerald-400 text-emerald-950'
                    : 'bg-cyan-500 text-cyan-950 hover:bg-cyan-400'
                }`}
              >
                {copied ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  <Copy size={16} aria-hidden="true" />
                )}
                <span>{copied ? t.copiedBtn : t.copyBtn}</span>
              </button>

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                onClick={() => trackEvent('mailto_direct')}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-500/40 hover:bg-white/[0.07] sm:flex-none"
              >
                <Mail size={16} aria-hidden="true" />
                <span>{t.mailtoBtn}</span>
              </a>
            </div>

            <div className="mt-7 border-t border-white/[0.06] pt-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {t.socialsLabel}
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {socialItems.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-400"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
