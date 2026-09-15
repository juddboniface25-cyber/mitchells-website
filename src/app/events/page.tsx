import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import BookingForm from "@/components/BookingForm";
import { lineup, lastSeason, type Show } from "@/data/events";
import { restaurant, musicRhythm, performers, happenings, season } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Live Music & Events",
  description:
    "Live music four nights a week on the pavilion stage at Mitchell's Restaurant & Pizzeria, Smith Mountain Lake: who's playing, which night, what time. Festival on the lawn in July. Booking inquiries welcome.",
};

function ShowTable({ shows }: { shows: Show[] }) {
  return (
    <ul className="border-y border-ink divide-y divide-line">
      {shows.map((s) => (
        <li key={`${s.date ?? s.night}-${s.act}`} className="grid sm:grid-cols-[8rem_1fr_auto] gap-1 sm:gap-6 py-4 items-baseline">
          <span className="eyebrow !text-moss">
            {s.night}
            {s.night && s.date ? " · " : ""}
            {s.date}
          </span>
          <span>
            <span className="display text-3xl">{s.act}</span>
            {s.note && <span className="block text-sm text-smoke">{s.note}</span>}
          </span>
          <span className="display text-xl text-ink-soft tabular-nums">{s.time}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EventsPage() {
  const live = lineup.shows.length > 0;

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-8 grain">
        <p className="eyebrow">On the pavilion stage · {season.months}</p>
        <h1 className="display text-7xl sm:text-8xl lg:text-9xl mt-2">Live music</h1>
        <div className="rule2 left max-w-[10rem] mt-3 text-ink" />
        <p className="serif text-lg mt-6 max-w-2xl leading-relaxed">
          Bands and duos from around the lake, four nights a week all season, with the water behind the stage.
          No cover. Grab a table, order a pie, stay through the last set.
        </p>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
          {musicRhythm.map((m) => (
            <li key={m.night} className="border border-ink p-3">
              <p className="display text-2xl">{m.night}</p>
              <p className="text-xs text-smoke mt-1">{m.time}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* This week's lineup, maintained by hand in src/data/events.ts */}
      <section className="bg-cream border-y border-ink py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <SectionTitle eyebrow={live ? lineup.label : "The lineup"} title={live ? "This week" : "Back on opening day"} />
          </div>

          {live ? (
            <>
              <div className="mt-10">
                <ShowTable shows={lineup.shows} />
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href={restaurant.phoneHref} className="btn solid">Call for a table</a>
                <a href={restaurant.facebookUrl} target="_blank" rel="noopener" className="btn">More on Facebook</a>
              </div>
            </>
          ) : (
            <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
              <div className="frame aspect-[4/3] border border-ink">
                <Image src="/img/dock-wizards.jpg" alt="The Dock Wizards on the stage at Mitchell's, under the lights" fill sizes="(min-width:1024px) 40vw, 100vw" />
              </div>
              <div>
                <p className="serif text-xl leading-relaxed">
                  Mitchell&rsquo;s is closed for the winter. Opening day is{" "}
                  <strong className="text-coral-deep">{season.opensLabel}</strong>, and the first lineup of the
                  season will be posted here and on Facebook as soon as it&rsquo;s set.
                </p>
                <p className="text-sm text-ink-soft mt-4">
                  Bands looking for a date next summer: the form at the bottom of this page goes straight to the
                  restaurant.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href={restaurant.facebookUrl} target="_blank" rel="noopener" className="btn solid">Follow on Facebook</a>
                  <a href="#form" className="btn">Ask about a date</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* The regulars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 reveal">
          <SectionTitle eyebrow="On the stage this past season" title="The regulars" />
          <ul className="mt-8 flex flex-wrap gap-2">
            {performers.map((p) => (
              <li key={p} className="display text-2xl border border-ink px-3 py-1">{p}</li>
            ))}
          </ul>
          <p className="text-sm text-ink-soft mt-6 leading-relaxed">
            Folk, rock, blues and country, mostly acoustic on the weeknights, full bands on Friday and Saturday.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 reveal">
          <div className="frame aspect-[4/5] border border-ink">
            <Image src="/img/annalyse-stage.jpg" alt="Annalyse Marie singing on the stage at Mitchell's" fill sizes="(min-width:1024px) 28vw, 50vw" />
          </div>
          <div className="frame aspect-[4/5] border border-ink mt-10">
            <Image src="/img/stage-duo.jpg" alt="A guitarist and a singer on the pavilion stage" fill sizes="(min-width:1024px) 28vw, 50vw" />
          </div>
        </div>
      </section>

      {/* A month here */}
      <section className="bg-ink text-paper py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow !text-paper/60">For the record</p>
          <h2 className="display text-6xl sm:text-7xl mt-2">What a month here looks like</h2>
          <div className="rule2 left max-w-[8rem] mt-3 text-leaf" />
          <p className="serif text-lg mt-6 text-paper/85 max-w-2xl leading-relaxed">
            The last stretch of the 2026 season, as posted. Next year&rsquo;s calendar will read about like it.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/15 border border-paper/15">
            {lastSeason.shows.map((s) => (
              <li key={`${s.date}-${s.act}`} className="bg-ink p-4">
                <p className="eyebrow !text-leaf">{s.date}</p>
                <p className="display text-2xl mt-1">{s.act}</p>
                <p className="text-xs text-paper/60 mt-1">{s.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Beyond the stage */}
      <section className="bg-cream border-y border-ink py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Beyond the stage" title="The rest of the season" className="reveal" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink border border-ink">
            {happenings.map((c) => (
              <div key={c.title} className="bg-cream p-6 reveal">
                <h3 className="display text-3xl">{c.title}</h3>
                <p className="text-sm leading-relaxed mt-2 text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="frame aspect-[21/9] border border-ink mt-8 reveal">
            <Image src="/img/festival-lawn.jpg" alt="A festival crowd in lawn chairs on the grass at the Point, the lake behind" fill sizes="100vw" />
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 scroll-mt-32">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow">Bands, parties, big tables</p>
            <h2 className="display text-6xl mt-2">Want to play at Mitchell&rsquo;s?</h2>
            <div className="rule2 left max-w-[8rem] mt-3 text-ink" />
            <p className="serif text-lg mt-6 leading-relaxed">
              Send the details and the restaurant will get back to you. A private party, a big table for a band
              night, or a stack of pizzas for the dock works the same way. The form opens an email to the
              restaurant, so nothing you type goes anywhere else.
            </p>
            <p className="text-sm text-ink-soft mt-4">For a table tonight, just call.</p>
          </div>
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
