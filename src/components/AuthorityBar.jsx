import React from 'react';

export default function AuthorityBar({ items }) {
  return (
    <section
      aria-label="Authority metrics"
      className="border-y border-white/[0.08] bg-[#060606]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/[0.08] px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {items.map((item, idx) => (
          <div key={idx} className="py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
            <p className="font-mono text-sm font-semibold text-white">{item.value}</p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
