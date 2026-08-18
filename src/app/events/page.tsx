import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/Button";
import { weeklyLineup } from "@/data/events";
import { performers, restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Live Music & Events",
  description:
    "This week's live-music lineup at Mitchell's Restaurant & Pizzeria, Huddleston VA — who's playing, which night, what time. Booking inquiries welcome.",
};

export default function EventsPage() {
  const { weekOf, shows } = weeklyLineup;

  return (
    <>
      {/* Hero — sunset over the water */}
      <section className="relative border-b-[1.5px] border-line overflow-hidden">
        <Image
          src="/images/hero-events.jpg"
          alt="Smith Mountain Lake and the mountains beyond Mitchell's Point Marina"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/55" />
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

      {/* This week's lineup — hand-maintained in src/data/events.ts */}
      <section className="border-b-[1.5px] border-line">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-olive text-white rounded-md font-display font-medium text-sm">
              THIS WEEK&apos;S LINEUP
            </span>
            {weekOf && (
              <span className="font-display font-medium text-muted">
                Week of {weekOf}
              </span>
            )}
          </div>

          {shows.length > 0 ? (
            <>
              <ul className="divide-y divide-dashed divide-line border-y-[1.5px] border-dashed border-line-strong">
                {shows.map((s) => (
                  <li
                    key={`${s.night}-${s.act}`}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4"
                  >
                    <div className="font-display font-semibold text-sm uppercase tracking-wide text-pine sm:w-40 shrink-0">
                      {s.night}
                      {s.date && (
                        <span className="text-faint normal-case font-medium">
                          {" "}
                          · {s.date}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-display font-medium text-ink text-lg">
                        {s.act}
                      </div>
                      {s.note && (
                        <div className="text-sm text-faint">{s.note}</div>
                      )}
                    </div>
                    <div className="font-menu font-semibold text-[15px] text-ink shrink-0">
                      {s.start}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button href={restaurant.phoneHref}>Call to Reserve</Button>
                <Button
                  href={restaurant.facebookUrl}
                  variant="secondary"
                  external
                >
                  More on Facebook
                </Button>
              </div>
            </>
          ) : (
            /* No lineup posted yet — say so plainly rather than show an empty
               table or last week's acts. */
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="relative w-full md:w-64 h-40 rounded-[9px] overflow-hidden border-[1.5px] border-line shrink-0">
                <Image
                  src="/images/social-lake.jpg"
                  alt="Mitchell's Point Marina docks on Smith Mountain Lake"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 256px, 100vw"
                />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h2 className="font-script font-bold text-3xl text-ink">
                  This week&apos;s shows are still coming together
                </h2>
                <p className="text-muted max-w-lg">
                  We post each week&apos;s acts — who&apos;s playing, which
                  night and what time — right here as soon as they&apos;re
                  confirmed. Facebook gets them too, so follow along there if
                  you&apos;d rather not check back.
                </p>
                <div className="flex flex-wrap gap-3 mt-1">
                  <Button href={restaurant.facebookUrl} external>
                    See the Lineup on Facebook
                  </Button>
                  <Button href={restaurant.phoneHref} variant="secondary">
                    Call to Reserve
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Regulars — names only. The card grid this replaced showed a striped
          placeholder tile for every act without a photo. */}
      <section className="border-b-[1.5px] border-line bg-cream-alt">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="font-script font-bold text-2xl md:text-3xl text-ink mb-4">
            Acts you&apos;ll catch on our stage
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {performers.map((p) => (
              <li
                key={p.name}
                className="px-4 py-1.5 rounded-full border-[1.5px] border-line-strong bg-white/70 font-display font-medium text-body"
              >
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking / inquiries */}
      <section>
        <div className="mx-auto max-w-3xl px-5 py-12">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
