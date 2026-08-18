/**
 * This week's live-music lineup — maintained by hand.
 *
 * HOW TO UPDATE (the whole job is this file):
 *   1. Set `weekOf` to the Monday of the week you're posting, e.g. "August 24".
 *   2. Replace `shows` with this week's acts, earliest night first.
 *   3. Commit and push — Vercel rebuilds and the Events page is current.
 *
 * Leave `shows` empty when nothing is booked or confirmed yet. The Events page
 * detects that and falls back to the "watch Facebook" card rather than showing
 * an empty table — no invented acts, no stale lineup left standing.
 */

export type Show = {
  /** Night of the week, e.g. "Friday". */
  night: string;
  /** Optional calendar date, e.g. "Aug 22". Omit if you're not sure. */
  date?: string;
  /** Act or band name, spelled the way they spell it. */
  act: string;
  /** Start time, e.g. "6:00pm". */
  start: string;
  /** Optional one-liner — "on the pavilion stage", "weather permitting". */
  note?: string;
};

export type WeeklyLineup = {
  /** Week label shown above the table, e.g. "August 18". Empty = unset. */
  weekOf: string;
  shows: Show[];
};

export const weeklyLineup: WeeklyLineup = {
  weekOf: "",
  shows: [],
};
