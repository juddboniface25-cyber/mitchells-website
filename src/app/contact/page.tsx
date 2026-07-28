import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description: `${restaurant.address} · ${restaurant.phoneDisplay}. Hours, directions and reservations.`,
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-pine text-white text-center px-5 pt-8 pb-7">
        <h1 className="font-display font-semibold text-4xl md:text-5xl leading-none tracking-[.5px]">
          Come See Us
        </h1>
        <p className="mt-2.5 font-menu font-semibold text-[13px] tracking-widest uppercase text-[#eef7e8]">
          On the water at Smith Mountain Lake
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-12 grid gap-8 md:grid-cols-2">
        {/* Find us */}
        <div className="border-[1.5px] border-dashed border-line-strong rounded-[9px] bg-white/60 p-6">
          <h2 className="font-script font-bold text-3xl text-ink mb-4">
            Find Us
          </h2>
          <ul className="space-y-4 text-body">
            <li>
              <div className="font-display font-semibold text-sm uppercase tracking-wide text-pine mb-1">
                Address
              </div>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-4 hover:text-pine"
              >
                {restaurant.address}
              </a>
              <div className="text-sm text-faint mt-1">
                Covered pavilion seating by the lake.
              </div>
            </li>
            <li>
              <div className="font-display font-semibold text-sm uppercase tracking-wide text-pine mb-1">
                Phone / Reservations
              </div>
              <a href={restaurant.phoneHref} className="hover:text-pine">
                {restaurant.phoneDisplay}
              </a>
            </li>
            <li>
              <div className="font-display font-semibold text-sm uppercase tracking-wide text-pine mb-1">
                Facebook
              </div>
              <a
                href={restaurant.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pine"
              >
                {restaurant.facebookHandle}
              </a>
            </li>
            <li>
              <div className="font-display font-semibold text-sm uppercase tracking-wide text-pine mb-1">
                Order Online
              </div>
              <a
                href={restaurant.orderOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pine"
              >
                Order pickup through Toast →
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="border-[1.5px] border-dashed border-line-strong rounded-[9px] bg-white/60 p-6">
          <h2 className="font-script font-bold text-3xl text-ink mb-4">
            Hours
          </h2>
          <ul className="divide-y divide-dashed divide-line">
            {restaurant.hours.map((h) => (
              <li
                key={h.days}
                className="flex justify-between py-3 font-menu font-semibold text-[15px]"
              >
                <span className="uppercase tracking-[.3px] text-ink">
                  {h.days}
                </span>
                <span className="text-pine">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted mt-4">
            Open for breakfast Saturday &amp; Sunday mornings. Kitchen hours
            can shift with the season — call ahead for large parties.
          </p>
          <Button href={restaurant.phoneHref} className="mt-5">
            Call to Reserve a Table
          </Button>
        </div>
      </div>
    </>
  );
}
