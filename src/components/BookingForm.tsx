"use client";

import { useState } from "react";
import { restaurant } from "@/data/restaurant";

/**
 * Booking / inquiry form for the Music page.
 *
 * There is no backend: the site is fully static, so submitting composes a
 * `mailto:` and hands off to the visitor's mail app. `restaurant.bookingEmail`
 * is the entire configuration. While it is empty the fields render disabled
 * behind a notice, because a form that silently drops a band's booking
 * request is worse than no form at all.
 */

const topics = [
  "Playing a date on the stage",
  "A private party or big table",
  "Catering or a pizza order for the dock",
  "Something else",
];

const field =
  "w-full bg-paper border border-ink px-3 py-2.5 text-sm placeholder:text-smoke/70 focus:border-moss disabled:bg-cream disabled:text-smoke disabled:cursor-not-allowed";
const label = "grid gap-1 text-xs font-bold tracking-[0.12em] uppercase";

export default function BookingForm() {
  const configured = restaurant.bookingEmail !== "";
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");
  const [act, setAct] = useState("");
  const [contact, setContact] = useState("");
  const [when, setWhen] = useState("");
  const [msg, setMsg] = useState("");
  const [handedOff, setHandedOff] = useState(false);

  const body = [
    `Name: ${name}`,
    act ? `Act / band: ${act}` : null,
    `Phone or email: ${contact}`,
    `About: ${topic}`,
    when ? `When: ${when}` : null,
    "",
    msg,
    "",
    `Sent from ${restaurant.siteUrl}/events`,
  ]
    .filter((l) => l !== null)
    .join("\n");
  const href = `mailto:${restaurant.bookingEmail}?subject=${encodeURIComponent(`${topic} — ${act || name || "website"}`)}&body=${encodeURIComponent(body)}`;

  return (
    <div>
      {!configured && (
        <p role="status" className="mb-5 border border-coral bg-cream px-4 py-3 text-sm text-coral-deep">
          <strong className="font-bold">This form isn&rsquo;t live yet.</strong> Until the booking inbox is set up,
          call{" "}
          <a href={restaurant.phoneHref} className="underline">{restaurant.phoneDisplay}</a> or message the page on{" "}
          <a href={restaurant.facebookUrl} target="_blank" rel="noopener" className="underline">Facebook</a>.
        </p>
      )}
      <form
        className="border border-ink bg-cream p-6 grid gap-4 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = href;
          setHandedOff(true);
        }}
      >
        <label className={label}>
          Your name
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} required disabled={!configured} autoComplete="name" />
        </label>
        <label className={label}>
          Act or band <span className="normal-case tracking-normal text-smoke">(if any)</span>
          <input className={field} value={act} onChange={(e) => setAct(e.target.value)} disabled={!configured} />
        </label>
        <label className={label}>
          Phone or email
          <input className={field} value={contact} onChange={(e) => setContact(e.target.value)} required disabled={!configured} autoComplete="tel" />
        </label>
        <label className={label}>
          This is about
          <select className={field} value={topic} onChange={(e) => setTopic(e.target.value)} disabled={!configured}>
            {topics.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          When <span className="normal-case tracking-normal text-smoke">(optional)</span>
          <input className={field} value={when} onChange={(e) => setWhen(e.target.value)} disabled={!configured} placeholder="Any Friday in June, around 6" />
        </label>
        <label className={`${label} sm:col-span-2`}>
          What you have in mind
          <textarea className={`${field} min-h-32`} value={msg} onChange={(e) => setMsg(e.target.value)} required disabled={!configured} placeholder="What you play, how many people, a link if you have one." />
        </label>
        <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
          <button type="submit" className="btn solid" disabled={!configured}>Send as email</button>
          <span className="text-xs text-smoke">
            Or call <a href={restaurant.phoneHref} className="underline-run text-ink">{restaurant.phoneDisplay}</a> and skip the typing.
          </span>
          {handedOff && (
            <p role="status" className="text-sm text-moss font-bold w-full">
              Your email app should have opened. Hit send and we&rsquo;ll be in touch. Nothing happened? Call {restaurant.phoneDisplay}.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
