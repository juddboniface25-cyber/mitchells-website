"use client";

import { useEffect, useState } from "react";

type Group = { id: string; label: string; sections: { id: string; title: string }[] };

export default function MenuNav({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState<string>(groups[0]?.id);

  useEffect(() => {
    const els = groups.map((g) => document.getElementById(g.id)).filter(Boolean) as HTMLElement[];
    if (!els.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [groups]);

  const current = groups.find((g) => g.id === active) ?? groups[0];

  return (
    <nav aria-label="Menu sections" className="sticky top-[6rem] sm:top-[7rem] z-30 bg-paper border-y border-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex gap-6 overflow-x-auto py-3 [scrollbar-width:none]">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              aria-current={g.id === active ? "true" : undefined}
              className={`display text-2xl whitespace-nowrap pb-0.5 border-b-2 transition-colors ${
                g.id === active ? "border-leaf text-ink" : "border-transparent text-smoke hover:text-ink"
              }`}
            >
              {g.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mt-1 [scrollbar-width:none] text-[0.7rem] font-bold tracking-[0.14em] uppercase text-smoke">
          {current.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap hover:text-moss">
              {s.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
