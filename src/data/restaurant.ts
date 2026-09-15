/**
 * Every fact on the site traces to a source the restaurant controls: the
 * printed 2026 menu (photographed July 2026), the @meetmeatmitchells Facebook
 * page (posts and photos pulled 2026-09-15), the owner-supplied marina aerial,
 * and Toast. Nothing here is invented. Anything Mitchell has not confirmed is
 * marked in TASKS.md.
 */

export const restaurant = {
  name: "Mitchell's Restaurant & Pizzeria",
  shortName: "Mitchell's",
  tagline: "Pizza and live music on the point at Smith Mountain Lake.",
  // Canonical origin. Swap to the custom domain once one is registered:
  // metadataBase, the sitemap, robots and the JSON-LD all read from here.
  // The Facebook page advertises www.MeetMeAtMitchells.com; it is not live.
  siteUrl: "https://mitchells-website.vercel.app",
  address: "3553 Trading Post Rd, Huddleston, VA 24104",
  addressShort: "3553 Trading Post Rd, Huddleston, VA",
  streetAddress: "3553 Trading Post Rd",
  city: "Huddleston",
  region: "VA",
  postalCode: "24104",
  phoneDisplay: "(540) 296-0664",
  phoneHref: "tel:+15402960664",
  facebookHandle: "@meetmeatmitchells",
  facebookUrl: "https://www.facebook.com/meetmeatmitchells/",
  orderOnlineUrl:
    "https://www.toasttab.com/local/order/mitchells-restaurant-lakeside-pizzeria-3553-trading-post-rd/r-282fad48-ce33-4214-b3ff-2e254166a626",
  mapsUrl:
    "https://maps.google.com/?q=3553+Trading+Post+Rd,+Huddleston,+VA+24104",
  mapsEmbed:
    "https://www.google.com/maps?q=3553+Trading+Post+Rd,+Huddleston,+VA+24104&z=15&output=embed",
  marinaUrl: "http://www.mitchellspoint.com",
  rentalsUrl: "https://smlboatrentals.com",
  // Destination for the booking / inquiry form. The form composes a mailto:
  // (no backend, no secrets) so this one string is the whole configuration.
  // Currently Judd's address, set 2026-08-18 to test the form end to end.
  // TODO(Mitchell): swap for the restaurant's inbox before handoff.
  // Empty string disables the form behind its phone/Facebook notice.
  bookingEmail: "juddboniface25@gmail.com" as string,
  priceRange: "$$",
} as const;

/**
 * The restaurant is seasonal. Dates come from the page's own posts:
 * "Opening Day May 1st 11 AM - 9 PM" (2026), "This is our final day of the
 * 2026 season" (2026-09-13), "See you April 30, 2027" (2026-09-15).
 */
export const season = {
  opens: "2027-04-30",
  opensLabel: "April 30, 2027",
  closed: "2026-09-13",
  months: "May through mid-September",
  // Set to true once Mitchell confirms the 2027 opening date.
  confirmed: false,
};

/**
 * Hours as the page posted them on 2026-06-02:
 *   Sunday, Monday, Wednesday & Thursday: 11 AM - 8 PM
 *   Friday & Saturday: 11 AM - 9 PM
 *   Closed Tuesdays
 * Directory listings (SinglePlatform, Visit SML) still show the older
 * 11-9 / 11-10 / 8-9 / 8-8 schedule with weekend breakfast. The owner's own
 * post wins; the conflict is flagged in TASKS.md for Mitchell to confirm.
 */
export type DayHours = { open: number; close: number } | null; // 24h decimal
export const hours: { day: string; short: string; h: DayHours; note?: string }[] = [
  { day: "Monday", short: "Mon", h: { open: 11, close: 20 } },
  { day: "Tuesday", short: "Tue", h: null },
  { day: "Wednesday", short: "Wed", h: { open: 11, close: 20 } },
  { day: "Thursday", short: "Thu", h: { open: 11, close: 20 }, note: "Music 5-8" },
  { day: "Friday", short: "Fri", h: { open: 11, close: 21 }, note: "Music 6-9" },
  { day: "Saturday", short: "Sat", h: { open: 11, close: 21 }, note: "Music 6-9" },
  { day: "Sunday", short: "Sun", h: { open: 11, close: 20 }, note: "Music 1-4" },
];
export const hoursShort = "Sun, Mon, Wed & Thu 11-8 · Fri & Sat 11-9 · closed Tuesday";

export const fmtHour = (h: number) => {
  const whole = Math.floor(h);
  const min = Math.round((h - whole) * 60);
  const suffix = whole >= 12 ? "PM" : "AM";
  const twelve = whole % 12 === 0 ? 12 : whole % 12;
  return min ? `${twelve}:${String(min).padStart(2, "0")} ${suffix}` : `${twelve} ${suffix}`;
};

/** Machine-readable mirror of `hours` for schema.org openingHoursSpecification. */
export const hoursSpec = [
  { days: ["Sunday", "Monday", "Wednesday", "Thursday"], opens: "11:00", closes: "20:00" },
  { days: ["Friday", "Saturday"], opens: "11:00", closes: "21:00" },
];

/**
 * The weekly music rhythm, read off a summer of Facebook posts: Thursday
 * 5-8, Friday and Saturday 6-9, Sunday 1-4. Occasional Wednesdays.
 */
export const musicRhythm = [
  { night: "Thursday", time: "5 to 8 PM" },
  { night: "Friday", time: "6 to 9 PM" },
  { night: "Saturday", time: "6 to 9 PM" },
  { night: "Sunday", time: "1 to 4 PM" },
];

/** Acts that played the 2026 season, as the page spelled them. */
export const performers = [
  "The Dock Wizards",
  "Annalyse Marie",
  "JD Ross",
  "Big Matt & The Time Machine",
  "Tate Tuck",
  "Solacustix",
  "Kam'ron",
  "Landon Holcomb",
  "Robin & Doug Settles",
  "Kelly & The Willy Nillys",
  "Jerry Wimmer",
  "Bob Smarrelli",
  "Dave & Jodi",
  "Crawlspace",
];

/** Things the kitchen makes itself, each traceable to a menu line. */
export const madeHere = [
  "Hand-tossed pizza dough",
  "Homemade pizza sauce",
  "Hand-pattied burgers",
  "Pit-smoked brisket",
  "Homemade crab cakes",
  "Homemade chicken salad",
  "Fresh-made pico",
  "Wings tossed five ways",
  "Calzones and stromboli",
  "Gluten-free crust on request",
];

/** Season happenings named on the page in 2026. */
export const happenings = [
  {
    title: "Live music, four nights a week",
    body: "Thursday evenings, Friday and Saturday nights, Sunday afternoons, on the pavilion stage from opening day to the last weekend of the season.",
  },
  {
    title: "Sunshine Daydream Festival",
    body: "A July festival on the lawn at the Point, 2 to 10 PM, with a festival food window: pizza by the slice, cheeseburgers, hot dogs.",
  },
  {
    title: "Legends of Music costume contest",
    body: "Dress as your favorite musician between sets on a Dock Wizards Friday. Cash and Mitchell's gift certificates for the top three.",
  },
  {
    title: "Music with a Mission",
    body: "A May afternoon of bands for the Youth Outdoor Experience, with Bedford Parks & Rec and Virginia DWR.",
  },
];
