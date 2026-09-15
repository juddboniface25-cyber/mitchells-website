import type { Metadata } from "next";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center grain">
      <p className="eyebrow">404</p>
      <h1 className="display text-6xl sm:text-7xl mt-2">That page drifted off the dock.</h1>
      <div className="rule2 mx-auto max-w-[8rem] mt-4 text-moss" />
      <p className="serif text-lg text-ink-soft mt-6 max-w-md mx-auto">
        We couldn&rsquo;t find what you were looking for, but the kitchen is still here. Try the menu, or give us
        a call.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <Link href="/menu" className="btn solid">See the menu</Link>
        <Link href="/" className="btn">Back to the point</Link>
      </div>
      <p className="text-sm text-smoke mt-8">
        {restaurant.addressShort} ·{" "}
        <a href={restaurant.phoneHref} className="underline-run text-ink">{restaurant.phoneDisplay}</a>
      </p>
    </div>
  );
}
