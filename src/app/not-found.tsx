import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <p className="font-display font-semibold text-sm uppercase tracking-wide text-pine">
        404
      </p>
      <h1 className="font-script font-bold text-4xl md:text-5xl text-ink mt-2">
        That page drifted off the dock.
      </h1>
      <p className="text-muted mt-4 max-w-md mx-auto">
        We couldn&apos;t find what you were looking for — but the kitchen is
        still open. Try the menu, or give us a call.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <Button href="/menu" size="lg">
          See the Full Menu
        </Button>
        <Button href="/" variant="secondary" size="lg">
          Back to Home
        </Button>
      </div>
      <p className="text-sm text-faint mt-8">
        {restaurant.addressShort} ·{" "}
        <a href={restaurant.phoneHref} className="text-pine">
          {restaurant.phoneDisplay}
        </a>
      </p>
    </div>
  );
}
