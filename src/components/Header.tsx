import Link from "next/link";
import Image from "next/image";
import { restaurant } from "@/data/restaurant";
import OpenNow from "./OpenNow";

const nav = [
  { href: "/", label: "Home", mobile: false },
  { href: "/menu", label: "Menu", mobile: true },
  { href: "/events", label: "Music", mobile: true },
  { href: "/contact", label: "Contact", mobile: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink">
      {/* Ticker strip: the facts a customer wants before anything else. */}
      <div className="bg-ink text-paper text-[0.7rem] font-bold tracking-[0.18em] uppercase">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-8 flex items-center justify-between gap-4">
          <span className="truncate">
            {restaurant.streetAddress}, {restaurant.city} · on the point at Mitchell&rsquo;s Point Marina
          </span>
          <span className="hidden sm:block">
            <OpenNow compact />
          </span>
          <a href={restaurant.phoneHref} className="hover:text-leaf whitespace-nowrap">
            {restaurant.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Mitchell's home">
            <Image
              src="/brand/badge.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-9 w-9 sm:h-11 sm:w-11 transition-transform group-hover:-rotate-6"
            />
            <span className="display text-xl sm:text-3xl tracking-wide whitespace-nowrap">Mitchell&rsquo;s</span>
            <span className="hidden lg:block eyebrow border-l border-line pl-3">
              Restaurant &amp; Pizzeria · Smith Mountain Lake
            </span>
          </Link>

          <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-7">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`underline-run text-[0.75rem] sm:text-sm tracking-[0.1em] sm:tracking-[0.12em] uppercase font-bold whitespace-nowrap ${n.mobile ? "" : "hidden sm:inline"}`}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={restaurant.marinaUrl}
              target="_blank"
              rel="noopener"
              className="underline-run hidden md:inline text-sm tracking-[0.12em] uppercase font-bold whitespace-nowrap text-smoke"
            >
              Marina
            </a>
            <a
              href={restaurant.orderOnlineUrl}
              target="_blank"
              rel="noopener"
              className="btn solid hidden sm:inline-flex !py-2.5 !px-4"
            >
              Order online
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
