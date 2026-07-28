import type { Metadata } from "next";
import {
  finePrint,
  menuCategories,
  menuSections,
  pizzaTable,
  type MenuItem,
  type MenuSection,
} from "@/data/menu";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Starters, salads, pizza, sandwiches, dinner plates and more at Mitchell's Restaurant & Pizzeria, Huddleston VA.",
};

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="break-inside-avoid mb-3.5">
      <div className="flex justify-between items-baseline gap-2">
        <span className="font-menu font-bold text-[15px] uppercase tracking-[.3px] text-ink">
          {item.isNew && (
            <span className="font-menu font-bold text-[9px] bg-terracotta text-white px-1.5 py-px rounded align-middle mr-1.5">
              NEW
            </span>
          )}
          {item.star && (
            <span className="text-olive mr-1" title="Mitchell's favorite">
              ★
            </span>
          )}
          {item.name}
        </span>
        <span className="flex-1 border-b-[1.5px] border-dotted border-leader translate-y-[-4px]" />
        <span className="font-menu font-bold text-[15px] text-pine whitespace-nowrap">
          {item.price}
        </span>
      </div>
      {item.desc && (
        <p className="text-[12.5px] leading-[1.38] text-muted mt-px">
          {item.desc}
        </p>
      )}
    </div>
  );
}

function Banner({ section }: { section: MenuSection }) {
  return (
    <div
      className="px-5 py-2.5 rounded-[9px] mb-4 flex items-baseline gap-3.5 flex-wrap"
      style={{ background: section.bannerBg }}
    >
      <span
        className="font-display font-medium text-[27px] leading-none"
        style={{ color: section.bannerColor }}
      >
        {section.title}
      </span>
      {section.note && (
        <span
          className="text-xs opacity-85"
          style={{ color: section.bannerColor }}
        >
          {section.note}
        </span>
      )}
    </div>
  );
}

function Section({ section }: { section: MenuSection }) {
  return (
    <section id={section.id} className="mb-8 scroll-mt-24">
      <Banner section={section} />
      {section.items && (
        <div className="sm:columns-2 gap-9">
          {section.items.map((item) => (
            <ItemRow key={item.name} item={item} />
          ))}
        </div>
      )}
      {section.inline && (
        <p className="font-menu font-semibold text-[15px] leading-[1.9] uppercase tracking-[.4px] text-ink">
          {section.inline}
        </p>
      )}
      {section.inlineNote && (
        <p
          className="mt-1.5 font-display font-semibold text-[15px] text-pine"
        >
          {section.inlineNote}
        </p>
      )}
      {section.footnote && (
        <p className="mt-2 font-menu font-semibold text-[13px] text-terracotta uppercase tracking-[.3px]">
          {section.footnote}
        </p>
      )}
    </section>
  );
}

function PizzaSection() {
  return (
    <section id="pizza" className="mb-8 scroll-mt-24">
      <div className="px-5 py-2.5 rounded-[9px] mb-4 bg-teal-brand">
        <span className="font-display font-medium text-[27px] leading-none text-butter">
          pizza
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-9 items-start">
        <div>
          <div className="flex pb-1 font-menu font-bold text-[11px] uppercase text-teal-brand">
            <span className="flex-1" />
            <span className="w-16 text-right">Small</span>
            <span className="w-16 text-right">Large</span>
          </div>
          {pizzaTable.rows.map((row) => (
            <div
              key={row.name}
              className="flex py-1.5 border-b border-dotted border-[#d9caa2]"
            >
              <span className="flex-1 font-menu font-bold text-[15px] uppercase tracking-[.3px] text-ink">
                {row.name}
              </span>
              <span className="w-16 text-right font-menu font-bold text-[15px] text-pine">
                {row.small}
              </span>
              <span className="w-16 text-right font-menu font-bold text-[15px] text-pine">
                {row.large}
              </span>
            </div>
          ))}
          <p className="font-menu font-bold text-xs text-terracotta uppercase mt-2.5 mb-1">
            {pizzaTable.glutenFree}
          </p>
          <p className="text-[12.5px] leading-[1.38] text-muted">
            {pizzaTable.toppings}
          </p>
        </div>
        <div>
          {pizzaTable.specials.map((item) => (
            <ItemRow key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MenuPage() {
  const before = menuSections.filter((s) =>
    ["starters", "salads"].includes(s.id)
  );
  const after = menuSections.filter(
    (s) => !["starters", "salads"].includes(s.id)
  );

  return (
    <>
      {/* Page banner */}
      <div className="bg-pine text-white text-center px-5 pt-8 pb-7">
        <h1 className="font-display font-semibold text-4xl md:text-5xl leading-none tracking-[.5px]">
          Our Menu
        </h1>
        <p className="mt-2.5 font-menu font-semibold text-[13px] tracking-widest uppercase text-[#eef7e8]">
          {restaurant.addressShort} · {restaurant.phoneDisplay}
        </p>
      </div>

      {/* Category chips */}
      <div className="sticky top-[calc(var(--nav-h)+1.5px)] z-40 bg-cream/95 backdrop-blur border-b-[1.5px] border-line overflow-x-auto">
        <div className="mx-auto max-w-5xl px-5 py-2.5 flex gap-2 whitespace-nowrap">
          {menuCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="font-display font-medium text-[13px] px-3 py-1 rounded-full border border-control text-body hover:border-olive hover:text-pine"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-9">
        {before.map((s) => (
          <Section key={s.id} section={s} />
        ))}
        <PizzaSection />
        {after.map((s) => (
          <Section key={s.id} section={s} />
        ))}
        <p className="mt-6 text-center italic text-[11px] text-faint max-w-2xl mx-auto">
          {finePrint}
        </p>
      </div>
    </>
  );
}
