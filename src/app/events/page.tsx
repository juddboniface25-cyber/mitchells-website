import type { Metadata } from "next";
import { performers, restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: `Live Music & Events — ${restaurant.name}`,
  description:
    "Live music on the lake at Mitchell's Restaurant & Pizzeria, Huddleston VA. See this week's lineup on Facebook.",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero — stage-at-sunset photo slot */}
      <section className="stripes border-b-[1.5px] border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 text-center">
          <h1 className="font-script font-bold text-4xl md:text-5xl text-ink">
            Live Music at the Lake ♪
          </h1>
          <p className="font-display font-medium text-muted mt-3 max-w-xl mx-auto">
            Bands on the water, sunsets over Smith Mountain Lake, and a table
            waiting for you.
          </p>
        </div>
      </section>

      {/* This week */}
      <section className="border-b-[1.5px] border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 flex flex-col md:flex-row gap-6 md:items-center">
          <div className="stripes w-full md:w-64 h-40 rounded-[9px] border-[1.5px] border-dashed border-[#cfccc2] shrink-0" />
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
                key={p}
                className="border-[1.5px] border-dashed border-[#cfccc2] rounded-[9px] p-4 bg-white/60"
              >
                <div className="stripes h-24 rounded-md mb-3" />
                <div className="font-display font-medium text-ink text-lg">
                  {p}
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
