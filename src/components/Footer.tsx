import Link from "next/link";
import Image from "next/image";
import { restaurant, hours, fmtHour, season } from "@/data/restaurant";
import { menuMeta } from "@/data/menu";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-[auto_1fr_1fr_1fr] items-start">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/brand/badge.png"
            alt="Mitchell's Restaurant & Pizzeria"
            width={120}
            height={120}
            className="bg-paper rounded-full p-1"
          />
          <p className="serif italic text-paper/80 max-w-[18rem]">{restaurant.tagline}</p>
        </div>

        <div>
          <h2 className="display text-2xl mb-3">Find us</h2>
          <address className="not-italic text-sm leading-6 text-paper/85">
            {restaurant.streetAddress}
            <br />
            {restaurant.city}, {restaurant.region} {restaurant.postalCode}
            <br />
            <a href={restaurant.phoneHref} className="underline-run">{restaurant.phoneDisplay}</a>
          </address>
          <div className="mt-4 flex flex-wrap gap-3 text-xs font-bold tracking-[0.14em] uppercase">
            <a href={restaurant.facebookUrl} target="_blank" rel="noopener" className="underline-run">Facebook</a>
            <a href={restaurant.orderOnlineUrl} target="_blank" rel="noopener" className="underline-run">Order online</a>
            <a href={restaurant.marinaUrl} target="_blank" rel="noopener" className="underline-run">The marina</a>
          </div>
        </div>

        <div>
          <h2 className="display text-2xl mb-3">Hours</h2>
          <ul className="text-sm text-paper/85 space-y-1">
            {hours.map((d) => (
              <li key={d.day} className="flex justify-between gap-4 border-b border-paper/10 pb-1">
                <span>{d.day}</span>
                <span className="tabular-nums">
                  {d.h ? `${fmtHour(d.h.open)} – ${fmtHour(d.h.close)}` : "Closed"}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-paper/60">
            Open {season.months}. Kitchen hours move with the season and the weather; the phone is the sure thing.
          </p>
        </div>

        <div>
          <h2 className="display text-2xl mb-3">Pages</h2>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="underline-run">Home</Link></li>
            <li><Link href="/menu" className="underline-run">Menu</Link></li>
            <li><Link href="/menu#pizza" className="underline-run">Pizza</Link></li>
            <li><Link href="/events" className="underline-run">Live music &amp; events</Link></li>
            <li><Link href="/contact" className="underline-run">Contact &amp; hours</Link></li>
            <li><Link href="/events#form" className="underline-run">Play here, or book a party</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-[0.7rem] tracking-[0.1em] uppercase text-paper/50">
          <span>© {new Date().getFullYear()} {restaurant.name} · {menuMeta.cardNote}</span>
          <span className="whitespace-nowrap">Site by Designs by Judd</span>
        </div>
      </div>
    </footer>
  );
}
