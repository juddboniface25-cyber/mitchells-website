import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { restaurant, hours, fmtHour, season } from "@/data/restaurant";
import OpenNow from "@/components/OpenNow";
import PointMap from "@/components/PointMap";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description: `${restaurant.address}. Call ${restaurant.phoneDisplay}. Hours, directions by road and by boat, and how to reach the restaurant about parties and bookings.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-10 grain">
        <p className="eyebrow">Come see us</p>
        <h1 className="display text-7xl sm:text-8xl lg:text-9xl mt-2">Contact &amp; Hours</h1>
        <div className="rule2 left max-w-[10rem] mt-3 text-ink" />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10">
        {/* Left: the facts */}
        <div className="lg:col-span-5 space-y-10">
          <div className="border border-ink p-6 bg-paper">
            <h2 className="display text-4xl">Where</h2>
            <address className="not-italic serif text-lg mt-3 leading-relaxed">
              {restaurant.streetAddress}
              <br />
              {restaurant.city}, {restaurant.region} {restaurant.postalCode}
            </address>
            <p className="text-sm text-ink-soft mt-2">
              Follow Trading Post Road all the way down the point, through the campground loop, to the pavilion at
              the end. Parking is on site. By water, tie up at the marina dock and walk up.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={restaurant.mapsUrl} target="_blank" rel="noopener" className="btn solid">Directions</a>
              <a href={restaurant.phoneHref} className="btn red">{restaurant.phoneDisplay}</a>
            </div>
          </div>

          <div className="border border-ink p-6 bg-paper">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="display text-4xl">When</h2>
              <OpenNow />
            </div>
            <table className="w-full mt-4 text-sm">
              <tbody>
                {hours.map((d) => (
                  <tr key={d.day} className="border-b border-line">
                    <th scope="row" className="text-left font-bold py-2">{d.day}</th>
                    <td className="py-2 text-right tabular-nums">
                      {d.h ? `${fmtHour(d.h.open)} – ${fmtHour(d.h.close)}` : <span className="text-smoke">Closed</span>}
                      {d.note && <span className="block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-moss">{d.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-ink-soft mt-4">
              Open {season.months}; the 2027 season opens {season.opensLabel}. Hours move with the season, the
              weather and the odd holiday, and the kitchen runs later on band nights. The phone is always right.
            </p>
          </div>

          <div className="border border-ink p-6 bg-paper">
            <h2 className="display text-4xl">Follow along</h2>
            <p className="text-sm text-ink-soft mt-2">
              The week&rsquo;s music, festival food windows, rain calls and early closes are posted on Facebook
              first.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={restaurant.facebookUrl} target="_blank" rel="noopener" className="underline-run">{restaurant.facebookHandle} on Facebook</a></li>
              <li><a href={restaurant.orderOnlineUrl} target="_blank" rel="noopener" className="underline-run">Order online for pickup</a></li>
              <li><a href={restaurant.marinaUrl} target="_blank" rel="noopener" className="underline-run">Mitchell&rsquo;s Point Marina</a></li>
              <li><a href={restaurant.rentalsUrl} target="_blank" rel="noopener" className="underline-run">SML Boat Rentals, same point</a></li>
            </ul>
          </div>
        </div>

        {/* Right: the map, three ways */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border border-ink bg-cream p-4">
            <p className="eyebrow mb-3">The point, by road and by water</p>
            <PointMap />
          </div>
          <div className="border border-ink overflow-hidden aspect-[4/3]">
            <iframe
              title="Map to Mitchell's Restaurant & Pizzeria"
              src={restaurant.mapsEmbed}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <figure>
            <div className="frame aspect-[3/2] border border-ink">
              <Image src="/img/marina-aerial.jpg" alt="Aerial view of the point at Mitchell's Point Marina, showing the road in, the parking loop, the covered docks and the pavilion at the tip" fill sizes="(min-width:1024px) 58vw, 100vw" />
            </div>
            <figcaption className="text-sm text-smoke mt-2">
              The point from above: the road and parking loop, the covered slips on the left, the pavilion and gas
              dock at the tip.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 border border-ink bg-cream p-6 sm:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <p className="eyebrow">Parties, bands, big orders</p>
          <h2 className="display text-5xl mt-2">Tell us what you have in mind</h2>
          <p className="text-sm text-ink-soft mt-3 max-w-xl">
            The inquiry form lives on the music page and opens an email straight to the restaurant.
          </p>
        </div>
        <Link href="/events#form" className="btn solid">Open the form</Link>
      </section>
    </>
  );
}
