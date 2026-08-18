import Image from "next/image";
import { Button } from "@/components/Button";
import { restaurant } from "@/data/restaurant";

export default function Home() {
  return (
    <>
      {/* Hero — aerial sunrise over Mitchell's Point Marina, Smith Mountain Lake */}
      <section className="relative border-b-[1.5px] border-line overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Aerial view of Mitchell's Point Marina at sunrise on Smith Mountain Lake"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/55" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32 flex flex-col items-center text-center gap-6">
          <h1 className="font-script font-bold text-5xl md:text-6xl leading-[1.05] text-white max-w-2xl [text-shadow:0_2px_14px_rgba(0,0,0,.45)]">
            The Lake Is Calling and We&apos;ve Got the Table.
          </h1>
          <p className="font-display font-medium text-lg text-cream max-w-xl [text-shadow:0_1px_8px_rgba(0,0,0,.5)]">
            Pizza, lake-grill favorites &amp; live music on Smith Mountain
            Lake — Huddleston, VA
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Button href={restaurant.phoneHref} size="lg">
              Call to Reserve
            </Button>
            <Button href="/events" variant="secondary" size="lg">
              See Live Music ♪
            </Button>
          </div>
        </div>
      </section>

      {/* Menu teaser */}
      <section className="border-b-[1.5px] border-line bg-white/50">
        <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 md:grid-cols-2 items-center">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border-[1.5px] border-line">
            <Image
              src="/images/margherita.jpg"
              alt="Mitchell's margherita pizza on the deck overlooking the marina"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-script font-bold text-3xl md:text-4xl text-ink mb-3">
              Pizza night, done right.
            </h2>
            <p className="text-muted max-w-xl mb-6">
              Hand-tossed pies, wings five ways, smoked brisket, crab cakes
              and lake-day baskets — plus breakfast on weekend mornings.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-7 font-display font-medium text-sm">
              <span className="px-4 py-1.5 rounded-full text-ink bg-gold">
                starters
              </span>
              <span className="px-4 py-1.5 rounded-full text-white bg-terracotta-deep">
                salads
              </span>
              <span className="px-4 py-1.5 rounded-full text-butter bg-teal-deep">
                pizza
              </span>
              <span className="px-4 py-1.5 rounded-full text-butter bg-pine-deep">
                sandwiches
              </span>
              <span className="px-4 py-1.5 rounded-full text-white bg-lake-deep">
                sides
              </span>
            </div>
            <Button href="/menu" size="lg">
              See the Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Facebook / social proof */}
      <section className="bg-cream-alt border-b-[1.5px] border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 text-center">
          <h2 className="font-script font-bold text-3xl md:text-4xl text-ink mb-2">
            Catch the vibe on Facebook
          </h2>
          <p className="text-sm text-faint mb-7">
            Follow {restaurant.facebookHandle} for specials, sunsets &amp; show
            announcements
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { src: "/images/social-pizza.jpg", alt: "Margherita pizza fresh out of Mitchell's oven" },
              { src: "/images/social-lake.jpg", alt: "Mitchell's Point Marina on Smith Mountain Lake from the air" },
              { src: "/images/social-nachos.jpg", alt: "Nachos Grande at Mitchell's" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative h-28 rounded-lg overflow-hidden border-[1.5px] border-line"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 25vw, 50vw"
                />
              </div>
            ))}
            <div className="h-28 rounded-lg bg-pine flex items-center justify-center border-[1.5px] border-line">
              <Image
                src="/images/logo.png"
                alt="Mitchell's Restaurant & Pizzeria logo"
                width={84}
                height={84}
              />
            </div>
          </div>
          <Button href={restaurant.facebookUrl} external className="mt-7">
            Follow on Facebook
          </Button>
        </div>
      </section>

      {/* Visit strip */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-faint">
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-body"
          >
            {restaurant.addressShort}
          </a>
          <span className="font-display">{restaurant.hoursShort}</span>
          <a href={restaurant.phoneHref} className="hover:text-body">
            {restaurant.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
