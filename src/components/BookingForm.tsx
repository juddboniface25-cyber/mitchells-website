"use client";

import { useState } from "react";
import { restaurant } from "@/data/restaurant";

/**
 * Booking / inquiry form for the Events page.
 *
 * There is no backend: the site is fully static, so submitting composes a
 * `mailto:` and hands off to the visitor's mail app. `restaurant.bookingEmail`
 * is the entire configuration — set it and the form goes live. While it is
 * empty the fields render disabled behind a notice, because a form that
 * silently drops a band's booking request is worse than no form at all.
 */

const topics = [
  "Booking a live-music date",
  "Private event or large party",
  "Something else",
];

const field =
  "w-full min-h-11 px-3 py-2.5 rounded-lg border-[1.5px] border-control bg-white text-body " +
  "focus:outline-none focus:border-olive focus:ring-2 focus:ring-olive/30 " +
  "disabled:bg-cream-dark disabled:text-faint disabled:cursor-not-allowed";

const label =
  "block font-display font-semibold text-sm uppercase tracking-wide text-pine mb-1";

export function BookingForm() {
  const configured = restaurant.bookingEmail !== "";
  const [handedOff, setHandedOff] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();

    const who = value("act") || value("name");
    const subject = `${value("topic")} — ${who}`;
    const body = [
      `Name: ${value("name")}`,
      `Act / band: ${value("act") || "—"}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "—"}`,
      `Preferred dates: ${value("dates") || "—"}`,
      "",
      value("message"),
      "",
      `— sent from ${restaurant.siteUrl}/events`,
    ].join("\n");

    window.location.href =
      `mailto:${restaurant.bookingEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    setHandedOff(true);
  }

  return (
    <div className="border-[1.5px] border-dashed border-line-strong rounded-[9px] bg-white/60 p-6">
      <h3 className="font-script font-bold text-3xl text-ink">
        Want to play at Mitchell&apos;s?
      </h3>
      <p className="text-muted mt-2 mb-5">
        Send us the details and we&apos;ll get back to you. Booking a private
        party or a big table works the same way — or just call{" "}
        <a
          href={restaurant.phoneHref}
          className="text-pine underline decoration-dotted underline-offset-4"
        >
          {restaurant.phoneDisplay}
        </a>
        .
      </p>

      {!configured && (
        <p
          role="status"
          className="mb-5 rounded-lg border-[1.5px] border-dashed border-terracotta-deep bg-gold/15 px-4 py-3 text-sm text-terracotta-deep"
        >
          <strong className="font-display font-semibold">
            This form isn&apos;t live yet.
          </strong>{" "}
          Until Mitchell&apos;s booking inbox is set up, reach us by phone at{" "}
          <a href={restaurant.phoneHref} className="underline">
            {restaurant.phoneDisplay}
          </a>{" "}
          or by message on{" "}
          <a
            href={restaurant.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Facebook
          </a>
          .
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="booking-name">
            Your name
          </label>
          <input
            id="booking-name"
            name="name"
            required
            disabled={!configured}
            autoComplete="name"
            className={field}
          />
        </div>

        <div>
          <label className={label} htmlFor="booking-act">
            Act or band <span className="text-faint normal-case">(if any)</span>
          </label>
          <input
            id="booking-act"
            name="act"
            disabled={!configured}
            className={field}
          />
        </div>

        <div>
          <label className={label} htmlFor="booking-email">
            Email
          </label>
          <input
            id="booking-email"
            name="email"
            type="email"
            required
            disabled={!configured}
            autoComplete="email"
            className={field}
          />
        </div>

        <div>
          <label className={label} htmlFor="booking-phone">
            Phone <span className="text-faint normal-case">(optional)</span>
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            disabled={!configured}
            autoComplete="tel"
            className={field}
          />
        </div>

        <div>
          <label className={label} htmlFor="booking-topic">
            What&apos;s this about?
          </label>
          <select
            id="booking-topic"
            name="topic"
            disabled={!configured}
            className={field}
            defaultValue={topics[0]}
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={label} htmlFor="booking-dates">
            Dates that work{" "}
            <span className="text-faint normal-case">(optional)</span>
          </label>
          <input
            id="booking-dates"
            name="dates"
            disabled={!configured}
            placeholder="Any Friday in September"
            className={field}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor="booking-message">
            Message
          </label>
          <textarea
            id="booking-message"
            name="message"
            required
            rows={5}
            disabled={!configured}
            placeholder="Tell us about your act, what you play, and a link if you have one."
            className={field}
          />
        </div>

        <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={!configured}
            className="inline-block text-center font-display font-medium rounded-lg border-2 px-6 py-3 min-h-11 bg-olive text-white border-olive-dark hover:bg-olive-dark cursor-pointer disabled:bg-line-strong disabled:border-line-strong disabled:text-white disabled:cursor-not-allowed"
          >
            Send Inquiry
          </button>
          {configured && (
            <p className="text-sm text-faint">
              Opens your email app with the details filled in.
            </p>
          )}
          {handedOff && (
            <p role="status" className="text-sm text-pine font-display">
              Your email app should have opened — hit send and we&apos;ll be in
              touch. Nothing happened? Call {restaurant.phoneDisplay}.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
