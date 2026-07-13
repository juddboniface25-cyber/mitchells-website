import type { Metadata } from "next";
import Image from "next/image";
import { performers, restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: `Live Music & Events — ${restaurant.name}`,
  description:
    "Live music on the lake at Mitchell's Restaurant & Pizzeria, Huddleston VA. See this week's lineup on Facebook.",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero — sunset over the water */}
      <section className="relative border-b-[1.5px] border-line overflow-hidden">
        <Image
          src="/images/lake-sunset.jpg"
          alt="Sunset over Smith Mountain Lake at Mitchell's"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/45" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20 text-center">
          <h1 className="font-script font-bold text-4xl md:text-5xl text-white [text-shadow:0_2px_14px_rgba(0,0,0,.45)]">
            Live Music at the Lake ♪
          </h1>
          <p className="font-display font-medium text-cream mt-3 max-w-xl mx-auto [text-shadow:0_1px_8px_rgba(0,0,0,.5)]">
            Bands on the water, sunsets over Smith Mountain Lake, and a table
            waiting for you.
          </p>
        </div>
      </section>

      {/* This week */}
      <section className="border-b-[1.5px] border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 flex flex-col md:flex-row gap-6 md:items-center">
          <div className="relative w-full md:w-64 h-40 rounded-[9px] overflow-hidden border-[1.5px] border-line shrink-0">
            <Image
              src="/images/social-lake.jpg"
              alt="Evening on the water at Mitchell's"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 256px, 100vw"
            />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <span className="px-3 py-1 bg-olive text-white rounded-md font-display font-medium text-sm">
              THIS WEEK&apos;S LINEUP
            </span>
            <h2 className="font-script font-bold text-3xl text-ink">
              Announced every week on Facebook
            </h2>
            <p className="text-muted max-w-lg">
              Mitchell&apos;s posts each week&apos;s live-music schedule —
              who&apos;s playing, nights and start times — on the Facebook
              page. Give it a follow so you never miss a show.
            </p>
            <div className="flex flex-wrap gap-3 mt-1">
              <a
                href={restaurant.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-olive text-white rounded-lg border-2 border-olive-dark font-display font-medium hover:bg-olive-dark"
              >
                See the Lineup on Facebook
              </a>
              <a
                href={restaurant.phoneHref}
                className="px-5 py-2.5 bg-white border-2 border-[#cfccc2] rounded-lg font-display font-medium hover:border-olive"
              >
                Reserve a Table for the Show
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regulars */}
      <section className="bg-cream-alt">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-script font-bold text-3xl md:text-4xl text-ink mb-6">
            Acts you&apos;ll catch on our stage
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {performers.map((p) => (
              <div
                key={p.name}
                className="border-[1.5px] border-dashed border-[#cfccc2] rounded-[9px] p-4 bg-white/60"
              >
                {p.photo ? (
                  <div className="relative h-40 rounded-md mb-3 overflow-hidden">
                    <Image
                      src={p.photo}
                      alt={p.photoAlt ?? p.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="stripes h-40 rounded-md mb-3" />
                )}
                <div className="font-display font-medium text-ink text-lg">
                  {p.name}
                </div>
                <div className="text-sm text-faint">Live at Mitchell&apos;s</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted mt-6">
            Want to play at Mitchell&apos;s? Call{" "}
            <a href={restaurant.phoneHref} className="text-pine">
              {restaurant.phoneDisplay}
            </a>{" "}
            or message the page on Facebook.
          </p>
        </div>
      </section>
    </>
  );
}
