import type { Metadata } from "next";
import Image from "next/image";
import { menuGroups, menuMeta, pizzaTable, type Section, type Item } from "@/data/menu";
import { restaurant, season } from "@/data/restaurant";
import Stamp from "@/components/Stamp";
import MenuNav from "@/components/MenuNav";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Hand-tossed pizza, calzones and stromboli, wings five ways, hand-pattied burgers, smoked brisket, crab cakes, salads and dinner plates at Mitchell's Restaurant & Pizzeria, Smith Mountain Lake.",
};

function Row({ item }: { item: Item }) {
  return (
    <li className="py-3">
      <div className="leader">
        <span className="display text-2xl tracking-wide flex items-center gap-2 flex-wrap">
          {item.name}
          {item.tags?.map((t) => <Stamp key={t} tag={t} />)}
        </span>
        {item.price && (
          <>
            <span className="dots" aria-hidden="true" />
            <span className="display text-xl tabular-nums text-moss">{item.price}</span>
          </>
        )}
      </div>
      {item.desc && <p className="text-sm text-ink-soft mt-0.5">{item.desc}</p>}
    </li>
  );
}

function SectionBlock({ s }: { s: Section }) {
  return (
    <section id={s.id} className="scroll-mt-32 reveal">
      <h3 className="display text-5xl">{s.title}</h3>
      <div className="mt-2 h-[3px] w-24 bg-leaf" />
      {s.note && <p className="text-sm text-smoke mt-3">{s.note}</p>}
      {s.items && <ul className="mt-4 divide-y divide-line">{s.items.map((it) => <Row key={it.name} item={it} />)}</ul>}
      {s.inline && (
        <p className="display text-xl tracking-wide leading-[1.9] mt-4">{s.inline}</p>
      )}
      {s.inlineNote && <p className="text-sm text-moss font-bold mt-1">{s.inlineNote}</p>}
      {s.footer && <p className="text-xs font-bold tracking-[0.12em] uppercase text-coral-deep mt-4">{s.footer}</p>}
    </section>
  );
}

function PizzaTable() {
  return (
    <section id="pizza-table" className="scroll-mt-32 reveal">
      <h3 className="display text-5xl">By the pie</h3>
      <div className="mt-2 h-[3px] w-24 bg-leaf" />
      <table className="w-full mt-4 text-left">
        <thead>
          <tr className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-smoke">
            <th scope="col" className="py-2 font-bold"></th>
            <th scope="col" className="py-2 w-24 text-right font-bold">Small</th>
            <th scope="col" className="py-2 w-24 text-right font-bold">Large</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {pizzaTable.rows.map((r) => (
            <tr key={r.name}>
              <th scope="row" className="py-2 display text-2xl tracking-wide font-medium">{r.name}</th>
              <td className="py-2 text-right display text-xl tabular-nums text-moss">{r.small}</td>
              <td className="py-2 text-right display text-xl tabular-nums text-moss">{r.large}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs font-bold tracking-[0.12em] uppercase text-coral-deep mt-4">{pizzaTable.glutenFree}</p>
      <p className="text-sm text-ink-soft mt-2">Toppings: {pizzaTable.toppings}</p>
    </section>
  );
}

const groupPhotos: Record<string, { src: string; alt: string }[]> = {
  starters: [
    { src: "/img/nachos.jpg", alt: "Nachos Grande" },
    { src: "/img/wings.jpg", alt: "A basket of sauced wings with celery and ranch" },
  ],
  pizza: [
    { src: "/img/margherita.jpg", alt: "Mitchell's margherita pizza on the deck" },
    { src: "/img/pizzas.jpg", alt: "Pepperoni pizzas on trays" },
    { src: "/img/pepperoni.jpg", alt: "A pepperoni pizza being cut" },
  ],
  sandwiches: [
    { src: "/img/steak-sub.jpg", alt: "Steak and cheese sub with fries" },
  ],
  plates: [
    { src: "/img/crew-porch.jpg", alt: "The pavilion at Mitchell's" },
    { src: "/img/sunset-docks.jpg", alt: "Sunset from the marina dock" },
  ],
};

export default function MenuPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-8 grain">
        <p className="eyebrow">The printed menu · {menuMeta.printedSeason}</p>
        <h1 className="display text-7xl sm:text-8xl lg:text-9xl mt-2">Menu</h1>
        <div className="rule2 left max-w-[10rem] mt-3 text-ink" />
        <p className="serif text-lg mt-6 max-w-2xl leading-relaxed">
          Lunch and dinner from 11, every day but Tuesday, {season.months}. Prices are the printed prices and can
          move with the season. Gluten-free crust on any small pizza. Specials and the festival food window are
          posted on{" "}
          <a href={restaurant.facebookUrl} target="_blank" rel="noopener" className="underline-run">Facebook</a>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={restaurant.orderOnlineUrl} target="_blank" rel="noopener" className="btn solid">Order online for pickup</a>
          <a href={restaurant.phoneHref} className="btn">Call in an order · {restaurant.phoneDisplay}</a>
        </div>
      </section>

      <MenuNav
        groups={menuGroups.map((g) => ({
          id: g.id,
          label: g.label,
          sections: [
            ...(g.id === "pizza" ? [{ id: "pizza-table", title: "By the pie" }] : []),
            ...g.sections.map((s) => ({ id: s.id, title: s.title })),
          ],
        }))}
      />

      {menuGroups.map((g, gi) => (
        <section key={g.id} id={g.id} className={`scroll-mt-28 ${gi % 2 === 1 ? "bg-cream border-y border-ink" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
              <div className="lg:sticky lg:top-32 self-start">
                <h2 className="display text-6xl">{g.label}</h2>
                <p className="serif italic text-smoke mt-2">{g.sub}</p>
                <div className="mt-8 grid grid-cols-3 lg:grid-cols-1 gap-3">
                  {groupPhotos[g.id]?.map((p, i) => (
                    <div key={p.src} className={`frame border border-ink ${i === 0 ? "aspect-[4/5] lg:aspect-[4/3]" : "aspect-[4/5] lg:aspect-[16/9]"}`}>
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 25vw, 33vw" />
                    </div>
                  ))}
                </div>
                {g.id === "pizza" && (
                  <Image src="/brand/badge.png" alt="" width={110} height={110} className="hidden lg:block mt-8 opacity-90" />
                )}
              </div>
              <div className="space-y-14">
                {g.id === "pizza" && <PizzaTable />}
                {g.sections.map((s) => <SectionBlock key={s.id} s={s} />)}
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-10 space-y-2 text-[0.7rem] uppercase tracking-[0.12em]">
        <p className="text-coral-deep">*{menuMeta.disclaimer}</p>
        <p className="text-smoke">{menuMeta.cardNote}</p>
      </div>
    </>
  );
}
