"use client";

import { useEffect, useState } from "react";
import { hours, fmtHour, season } from "@/data/restaurant";

type Status =
  | { state: "open"; until: string }
  | { state: "closed"; next: string }
  | { state: "season"; reopens: string };

function compute(now: Date): Status {
  // Restaurant time, regardless of where the visitor is.
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const iso = `${get("year")}-${get("month")}-${get("day")}`;

  // Off season: between the last day of one season and opening day of the next.
  if (iso > season.closed && iso < season.opens) {
    return { state: "season", reopens: season.opensLabel };
  }

  const dayIdx = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(get("weekday"));
  const t = (parseInt(get("hour"), 10) % 24) + parseInt(get("minute"), 10) / 60;

  const today = hours[dayIdx];
  if (today.h && t >= today.h.open && t < today.h.close) {
    return { state: "open", until: fmtHour(today.h.close) };
  }
  for (let i = 0; i < 7; i++) {
    const idx = (dayIdx + i) % 7;
    const d = hours[idx];
    if (!d.h) continue;
    if (i === 0 && t >= d.h.close) continue;
    if (i === 0) return { state: "closed", next: `opens today at ${fmtHour(d.h.open)}` };
    const label = i === 1 ? "tomorrow" : d.day;
    return { state: "closed", next: `opens ${label} at ${fmtHour(d.h.open)}` };
  }
  return { state: "closed", next: "see hours" };
}

export default function OpenNow({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const tick = () => setStatus(compute(new Date()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    return compact ? <span aria-hidden="true">&nbsp;</span> : null;
  }

  const dot = (
    <span
      aria-hidden="true"
      className={`inline-block h-2 w-2 rounded-full ${status.state === "open" ? "bg-leaf" : status.state === "season" ? "bg-coral" : "bg-smoke"}`}
    />
  );

  if (compact) {
    return (
      <span className="inline-flex items-center gap-2">
        {dot}
        {status.state === "open" && <>Open now · until {status.until}</>}
        {status.state === "closed" && <>Closed · {status.next}</>}
        {status.state === "season" && <>Closed for the season · back {status.reopens}</>}
      </span>
    );
  }

  return (
    <p className="flex items-center gap-2 text-sm">
      {dot}
      {status.state === "open" && (
        <span>
          <strong className="font-bold">Open now</strong> until {status.until}
        </span>
      )}
      {status.state === "closed" && (
        <span>
          <strong className="font-bold">Closed right now</strong>, {status.next}
        </span>
      )}
      {status.state === "season" && (
        <span>
          <strong className="font-bold">Closed for the season.</strong> Opening day is{" "}
          <span className="text-coral-deep font-bold">{status.reopens}</span>.
        </span>
      )}
    </p>
  );
}
