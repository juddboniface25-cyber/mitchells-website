import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import OpenNow from "@/components/OpenNow";
import { restaurant, madeHere, musicRhythm, performers, happenings, season } from "@/data/restaurant";

const favorites = [
  { name: "Mitchell's Margherita", desc: '12" pie, fresh mozzarella, basil and sauce, on the deck with the lake behind it.', img: "/img/margherita.jpg", alt: "Mitchell's margherita pizza on a stand on the deck, the marina behind it", tag: "Favorite" },
  { name: "Nachos Grande", desc: "Tortilla chips under chili, fresh-made pico, lettuce, cheese and sour cream.", img: "/img/nachos.jpg", alt: "Nachos Grande piled with chili, cheese, lettuce, tomato and sour cream", tag: "Favorite" },
  { name: "Wings, five ways", desc: "Classic or boneless, by the 6, 12 or 24. Hot, Mild, BBQ, Sweet Chili, or Hopp'd Up Bourbon.", img: "/img/wings.jpg", alt: "A basket of sauced wings with celery and ranch" },
  { name: "Steak & Cheese Sub", desc: '8" sub, thinly sliced beef, green peppers and onions, provolone. The green-star pick on the printed menu.', img: "/img/steak-sub.jpg", alt: "Steak and cheese sub with fries in a basket", tag: "Favorite" },
  { name: "Pizza by the pie", desc: "Hand-tossed, small or large, up to four toppings. Gluten-free crust on the small.", img: "/img/pepperoni.jpg", alt: "A pepperoni pizza being cut" },
];

export default function Home() {
  return (
    <>
      {/* ───────────── Hero: the hashtag, blown up to page size ───────────── */}
      <section className="relative overflow-hidden grain">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-8 sm:pt-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-end">
          <div className="reveal relative">
            <p className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ink" /> Smith Mountain Lake · Huddleston, Virginia
            </p>
            <h1 className="display leading-[0.82]">
              <span className="block text-[clamp(2rem,6vw,4.5rem)] text-moss">Meet me at</span>
              <span className="block text-[clamp(4.5rem,15vw,12.5rem)]">Mitchell&rsquo;s</span>
            </h1>
            <div className="rule2 left max-w-[14rem] mt-4 text-ink" />
            <p className="serif text-xl sm:text-2xl mt-6 max-w-xl leading-snug">
              A pizzeria and lake grill at the end of the point at Mitchell&rsquo;s Point Marina. Hand-tossed pies,
              wings five ways, pit-smoked brisket, homemade crab cakes, and live music on the pavilion stage four
              nights a week, May through September. Come by road or come by boat.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/menu" className="btn solid">See the menu</Link>
              <a href={restaurant.orderOnlineUrl} target="_blank" rel="noopener" className="btn">Order online</a>
              <a href={restaurant.phoneHref} className="btn red">Call {restaurant.phoneDisplay}</a>
            </div>
            <div className="mt-6">
              <OpenNow />
            </div>
          </div>

          {/* Photo stack: three frames, slightly offset like plates on a table. */}
          <div className="relative h-[24rem] sm:h-[30rem] lg:h-[36rem] reveal">
            <div className="frame absolute left-0 bottom-0 w-[62%] aspect-[3/4] border border-ink shadow-[10px_10px_0_0_var(--color-leaf)]">
              <Image src="/img/margherita.jpg" alt="Mitchell's margherita pizza on the deck, the marina and lake behind it" fill sizes="(min-width:1024px) 30vw, 60vw" priority />
            </div>
            <div className="frame absolute right-0 top-0 w-[48%] aspect-[4/3] border border-ink bg-cream">
              <Image src="/img/marina-point.jpg" alt="Docks and boat slips at Mitchell's Point Marina on a clear day" fill sizes="(min-width:1024px) 24vw, 48vw" />
            </div>
            <div className="frame absolute right-[6%] bottom-[12%] w-[36%] aspect-square rounded-full border-2 border-paper shadow-[0_0_0_2px_var(--color-ink)]">
              <Image src="/img/nachos.jpg" alt="Nachos Grande" fill sizes="(min-width:1024px) 18vw, 36vw" />
            </div>
            <Image
              src="/brand/badge.png"
              alt=""
              width={120}
              height={120}
              className="absolute -top-4 left-[8%] w-20 sm:w-28 h-auto rotate-[-8deg] drop-shadow-[3px_3px_0_var(--color-ink)]"
            />
          </div>
        </div>

        {/* Exterior band: the owner's aerial of the point */}
        <div className="relative h-[34vw] max-h-[26rem] min-h-[11rem] border-y border-ink">
          <Image src="/img/marina-aerial.jpg" alt="Aerial view of the point at Mitchell's Point Marina: the campground loop, the covered docks and the pavilion at the tip, surrounded by the lake" fill className="object-cover object-[50%_45%]" sizes="100vw" priority />
          <p className="absolute left-4 sm:left-6 bottom-4 bg-paper text-ink px-3 py-2 text-xs font-bold tracking-[0.18em] uppercase border border-ink">
            3553 Trading Post Rd · the pavilion at the end of the point · marker C3
          </p>
        </div>
      </section>

      {/* ───────────── Made here marquee ───────────── */}
      <section aria-label="Made in house" className="border-b border-ink bg-ink text-paper py-3">
        <div className="marquee">
          <div>
            {[...madeHere, ...madeHere].map((m, i) => (
              <span key={i} className="display text-2xl sm:text-3xl px-6 flex items-center gap-6">
                {m}
                <span className="inline-block h-2 w-2 rounded-full bg-leaf" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
        <p className="sr-only">Made in house: {madeHere.join(", ")}.</p>
      </section>

      {/* ───────────── The pitch ───────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 reveal">
          <SectionTitle eyebrow="A summer place" title="Pizza night, on the water." />
          <p className="serif text-lg leading-relaxed mt-6">
            Mitchell&rsquo;s sits at the tip of the point at Mitchell&rsquo;s Point Marina: a covered pavilion with
            the lake on three sides, a tiki bar, a stage, and a dock to tie up to. The dough is hand-tossed, the
            burgers are hand-pattied, the brisket is pit-smoked and the crab cakes are made here.
          </p>
          <p className="serif text-lg leading-relaxed mt-4">
            The season runs {season.months}, and most nights of the week somebody is playing on the stage. Come
            by road off Trading Post Road, or come by boat.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="border border-ink p-4">
              <p className="display text-4xl text-moss">15</p>
              <p className="eyebrow mt-1">seasons on the point</p>
            </div>
            <div className="border border-ink p-4">
              <p className="display text-4xl text-moss">4</p>
              <p className="eyebrow mt-1">nights of live music a week</p>
            </div>
            <div className="border border-ink p-4">
              <p className="display text-4xl text-moss">50+</p>
              <p className="eyebrow mt-1">things on the menu</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 reveal">
          <div className="frame aspect-[4/5] border border-ink">
            <Image src="/img/festival-lawn.jpg" alt="A crowd in lawn chairs on the grass at the Point, tents up and the lake behind, during a festival" fill sizes="(min-width:1024px) 28vw, 50vw" />
          </div>
          <div className="frame aspect-[4/5] border border-ink mt-10">
            <Image src="/img/stage-duo.jpg" alt="A guitarist and a singer on the pavilion stage at Mitchell's" fill sizes="(min-width:1024px) 28vw, 50vw" />
          </div>
          <div className="frame aspect-[4/5] border border-ink -mt-10">
            <Image src="/img/crew-porch.jpg" alt="The Mitchell's crew lined up on the pavilion in front of the sign wall" fill sizes="(min-width:1024px) 28vw, 50vw" />
          </div>
          <div className="frame aspect-[4/5] border border-ink">
            <Image src="/img/sunset-docks.jpg" alt="Sunset over the lake from the marina, kayaks stacked by the dock" fill sizes="(min-width:1024px) 28vw, 50vw" />
          </div>
        </div>
      </section>

      {/* ───────────── Favorites ───────────── */}
      <section className="bg-cream border-y border-ink py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Off the 2026 menu" title="What people order twice" align="center" className="reveal" />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {favorites.map((f) => (
              <li key={f.name} className="reveal group">
                <div className="frame aspect-[4/3] border border-ink relative">
                  <Image src={f.img} alt={f.alt} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.03]" />
                  {f.tag && <span className="absolute top-3 left-3 stamp green bg-paper">{f.tag}</span>}
                </div>
                <h3 className="display text-3xl mt-4">{f.name}</h3>
                <p className="text-sm text-ink-soft mt-1 leading-relaxed">{f.desc}</p>
              </li>
            ))}
            {/* The rest of the shortlist, set like the chalkboard by the bar. */}
            <li className="reveal bg-ink text-paper border border-ink p-6 flex flex-col justify-between aspect-[4/3] sm:aspect-auto">
              <div>
                <p className="eyebrow !text-leaf">Also on the shortlist</p>
                <ul className="mt-4 space-y-3">
                  {[
                    ["Mitchell's Burger", "hand-pattied, with a fried egg"],
                    ["Fish & Chips", "two cod filets, fries and slaw"],
                    ["The Primetime Burger", "8 oz brisket short-rib blend, new"],
                    ["Smoked Brisket Plate", "pit-smoked, two sides"],
                    ["Crab Cake Plate", "two homemade cakes, two sides"],
                  ].map(([n, d]) => (
                    <li key={n} className="border-b border-paper/15 pb-2">
                      <span className="display text-2xl">{n}</span>
                      <span className="block text-xs text-paper/70">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/menu" className="btn mt-6 !border-paper !text-paper hover:!bg-paper hover:!text-ink self-start">
                Full menu, with prices
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ───────────── Three places to be ───────────── */}
      <section id="rooms" className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionTitle eyebrow="One point, three places to spend an evening" title="The pavilion, the stage, the dock" className="reveal" />
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <article className="reveal">
            <div className="frame aspect-[4/3] border border-ink">
              <Image src="/img/crew-porch.jpg" alt="The covered pavilion at Mitchell's, sign wall behind the crew" fill sizes="(min-width:1024px) 33vw, 100vw" />
            </div>
            <p className="eyebrow mt-5">Under the roof</p>
            <h3 className="display text-4xl mt-1">The pavilion</h3>
            <p className="text-sm leading-relaxed mt-2 text-ink-soft">
              Covered seating at the end of the point with water on three sides, a tiki bar, and a wall of signs
              collected over fifteen seasons. Kids&rsquo; menu, 12 and under.
            </p>
          </article>
          <article className="reveal">
            <div className="frame aspect-[4/3] border border-ink">
              <Image src="/img/dock-wizards.jpg" alt="The Dock Wizards on the stage at Mitchell's in tie-dye, under the lights" fill sizes="(min-width:1024px) 33vw, 100vw" />
            </div>
            <p className="eyebrow mt-5">Thursday to Sunday</p>
            <h3 className="display text-4xl mt-1">The stage</h3>
            <p className="text-sm leading-relaxed mt-2 text-ink-soft">
              Local bands and duos all season: the Dock Wizards on Fridays, Sunday afternoons with Annalyse or JD
              Ross, and a festival on the lawn in July. The lineup is posted each week.
            </p>
          </article>
          <article className="reveal">
            <div className="frame aspect-[4/3] border border-ink">
              <Image src="/img/sunset-lake.jpg" alt="Sunset over Smith Mountain Lake from the marina" fill sizes="(min-width:1024px) 33vw, 100vw" />
            </div>
            <p className="eyebrow mt-5">By water</p>
            <h3 className="display text-4xl mt-1">The dock</h3>
            <p className="text-sm leading-relaxed mt-2 text-ink-soft">
              Tie up at the marina dock and walk straight up to the pavilion. The marina runs the gas dock, boat
              rentals and striper charters from the same point, so a lake day and dinner are one stop.
            </p>
          </article>
        </div>
      </section>

      {/* ───────────── Music ───────────── */}
      <section id="music" className="bg-ink text-paper py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="frame aspect-[4/3] lg:aspect-square border border-paper/30 reveal">
            <Image src="/img/annalyse-stage.jpg" alt="Annalyse Marie singing at the microphone on the stage at Mitchell's" fill sizes="(min-width:1024px) 40vw, 100vw" />
          </div>
          <div className="reveal">
            <p className="eyebrow !text-paper/60">Four nights a week, all season</p>
            <h2 className="display text-6xl sm:text-7xl mt-2">Live music on the point</h2>
            <div className="rule2 left max-w-[8rem] mt-3 text-leaf" />
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {musicRhythm.map((m) => (
                <li key={m.night} className="border border-paper/25 p-3">
                  <p className="display text-2xl">{m.night}</p>
                  <p className="text-xs text-paper/70 mt-1">{m.time}</p>
                </li>
              ))}
            </ul>
            <p className="serif text-lg mt-6 text-paper/85 leading-relaxed">
              On the stage this past season: {performers.slice(0, 8).join(", ")} and more.
            </p>
            <p className="text-sm mt-4 text-paper/60">
              The week&rsquo;s lineup is posted on Facebook and on the music page here. Rain moves it, and the page
              says so first.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/events" className="btn !border-paper !text-paper hover:!bg-paper hover:!text-ink">The lineup</Link>
              <a href={restaurant.facebookUrl} target="_blank" rel="noopener" className="btn !border-paper/40 !text-paper/80 hover:!bg-paper hover:!text-ink">
                This week on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── A season on the point ───────────── */}
      <section id="season" className="bg-cream border-b border-ink py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow={`Open ${season.months}`} title="What a season looks like" className="reveal" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink border border-ink">
            {happenings.map((c) => (
              <div key={c.title} className="bg-cream p-6 reveal">
                <h3 className="display text-3xl">{c.title}</h3>
                <p className="text-sm leading-relaxed mt-2 text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/events" className="btn solid">Music &amp; events</Link>
            <Link href="/events#form" className="btn">Book a party or play a date</Link>
          </div>
        </div>
      </section>

      {/* ───────────── Come by boat ───────────── */}
      <section id="marina" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="frame aspect-[16/9] border border-ink reveal">
          <Image src="/img/marina-point.jpg" alt="Boat slips and the gas dock at Mitchell's Point Marina" fill sizes="(min-width:1024px) 50vw, 100vw" />
        </div>
        <div className="reveal">
          <SectionTitle eyebrow="Mitchell's Point Marina" title="Float all day, then eat" />
          <p className="serif text-lg leading-relaxed mt-6">
            The restaurant shares the point with the marina: tritoon and deck boat rentals, kayaks and paddleboards,
            a gas dock, and striper charters with a captain who knows the creek. Rent in the morning, tie up for
            lunch, stay for the band.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              { name: "Boat rentals", note: "tritoons, deck boats, kayaks, SUPs", url: restaurant.rentalsUrl },
              { name: "Mitchell's Point Marina", note: "the gas dock and slips", url: restaurant.marinaUrl },
              { name: "Directions", note: "3553 Trading Post Rd, Huddleston", url: restaurant.mapsUrl },
            ].map((n) => (
              <li key={n.name} className="flex items-baseline gap-3 border-b border-line pb-2">
                <span className="text-moss">▸</span>
                <a href={n.url} target="_blank" rel="noopener" className="underline-run font-bold">{n.name}</a>
                <span className="text-sm text-smoke">{n.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
