/**
 * The current lineup, maintained by hand.
 *
 * HOW TO UPDATE (the whole job is this file):
 *   1. Set `label` to the stretch you're posting, e.g. "Week of May 3" or
 *      "May 2027".
 *   2. Replace `shows` with the acts, earliest night first.
 *   3. Commit and push. Vercel rebuilds and the Music page is current.
 *
 * Leave `shows` empty when nothing is booked or confirmed. The Music page
 * detects that and shows the off-season / "watch Facebook" card instead of
 * an empty table. No invented acts, no stale lineup left standing.
 */

export type Show = {
  /** Night of the week, e.g. "Friday". Optional when `date` is given. */
  night?: string;
  /** Calendar date, e.g. "May 7". Omit if you're not sure. */
  date?: string;
  /** Act or band name, spelled the way they spell it. */
  act: string;
  /** Start and end, e.g. "6 to 9 PM". */
  time: string;
  /** One-liner: "costume contest between sets", "weather permitting". */
  note?: string;
};

export type Lineup = {
  /** Shown above the table, e.g. "Week of May 3". Empty = unset. */
  label: string;
  shows: Show[];
};

export const lineup: Lineup = {
  label: "",
  shows: [],
};

/**
 * The last posted schedule of the 2026 season, kept as a record of what a
 * month at Mitchell's looks like. Source: the page's "August Music Schedule"
 * post, 2026-07-26, plus the September lineup posts.
 */
export const lastSeason = {
  label: "August & September 2026",
  shows: [
    { date: "Aug 2", act: "Annalyse", time: "1 to 4 PM" },
    { date: "Aug 6", act: "JD Ross", time: "5 to 8 PM" },
    { date: "Aug 7", act: "Solacustix", time: "6 to 9 PM" },
    { date: "Aug 8", act: "Big Matt & The Time Machine", time: "6 to 9 PM" },
    { date: "Aug 9", act: "Robin & Doug", time: "1 to 4 PM" },
    { date: "Aug 13", act: "Landon & Kam'ron", time: "5 to 8 PM" },
    { date: "Aug 14", act: "Dock Wizards", time: "6 to 9 PM" },
    { date: "Aug 15", act: "Kam'ron, then Tate Tuck", time: "1 to 4, 6 to 9 PM" },
    { date: "Aug 20", act: "Dave & Jodi", time: "5 to 8 PM" },
    { date: "Aug 21", act: "Big Matt & The Time Machine", time: "6 to 9 PM" },
    { date: "Aug 22", act: "Crawlspace", time: "6 to 9 PM" },
    { date: "Aug 23", act: "JD Ross", time: "1 to 4 PM" },
    { date: "Aug 28", act: "Dock Wizards", time: "6 to 9 PM" },
    { date: "Sep 12", act: "Big Matt & The Time Machine", time: "6 to 9 PM" },
    { date: "Sep 13", act: "Dock Wizards, last show of the season", time: "1 to 4 PM" },
  ] as Show[],
};
