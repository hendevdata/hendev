import React from 'react';

export default function AuthorityBar({ items }) {
  return (
    <section
      aria-label="Authority metrics"
      className="border-y border-white/[0.06] bg-[#050505]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item, idx) => {
          const borderClasses = [
            idx < 3 ? 'border-b border-white/[0.06]' : '',
            idx < 2 ? 'sm:border-b' : 'sm:border-b-0',
            idx % 2 === 0 ? 'sm:border-r sm:border-white/[0.06] sm:pr-6 sm:pl-0' : 'sm:pl-6 sm:pr-0',
            'lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:pr-0',
            idx < 3 ? 'lg:border-r lg:border-white/[0.06]' : 'lg:border-r-0',
          ].join(' ');

          return (
            <div key={idx} className={`py-5 sm:py-6 ${borderClasses}`}>
              <p className="font-mono text-sm font-semibold text-cyan-400">{item.value}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
