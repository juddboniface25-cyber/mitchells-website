import Link from "next/link";
import { Logo } from "@/components/Logo";
import { restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="bg-ink text-cream-dark">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo size={44} />
            <span className="font-display font-medium text-lg text-white">
              {restaurant.shortName}
            </span>
          </div>
          <p className="text-sm text-[#b9b6ab] leading-relaxed">
            Pizza, lake-grill favorites &amp; live music on Smith Mountain
            Lake. Covered pavilion seating by the water.
          </p>
        </div>
        <div>
          <h3 className="font-script font-bold text-2xl text-butter mb-3">
            Hours
          </h3>
          <ul className="text-sm space-y-1.5 text-[#d7d4ca]">
            {restaurant.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 max-w-64">
                <span>{h.days}</span>
                <span className="text-white">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-[#b9b6ab] mt-2">
            Breakfast Saturday &amp; Sunday mornings.
          </p>
        </div>
        <div>
          <h3 className="font-script font-bold text-2xl text-butter mb-3">
            Find Us
          </h3>
          <ul className="text-sm space-y-2 text-[#d7d4ca]">
            <li>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline decoration-dotted underline-offset-4"
              >
                {restaurant.address}
              </a>
            </li>
            <li>
              <a href={restaurant.phoneHref} className="hover:text-white">
                {restaurant.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={restaurant.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook {restaurant.facebookHandle}
              </a>
            </li>
            <li>
              <a
                href={restaurant.orderOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Order online
              </a>
            </li>
            <li>
              <Link href="/menu" className="hover:text-white">
                Menu
              </Link>
              {" · "}
              <Link href="/events" className="hover:text-white">
                Events
              </Link>
              {" · "}
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-[#b9b6ab]">
          © {new Date().getFullYear()} {restaurant.name}. A 3% credit card
          charge applies to all credit transactions; a cash discount is
          available upon paying cash.
        </p>
      </div>
    </footer>
  );
}
