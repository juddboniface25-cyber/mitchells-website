import { restaurant, hoursSpec } from "@/data/restaurant";

/**
 * schema.org Restaurant markup, what Google Local reads to build the
 * knowledge panel, hours strip and "open now" badge. Every value comes from
 * `@/data/restaurant`, so the page, the footer and the structured data can
 * never disagree.
 *
 * Deliberately omitted: `geo`. Coordinates for the marina have not been
 * verified, and wrong ones would misroute customers on a lake with limited
 * road access. Add once confirmed with Mitchell.
 */
export function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${restaurant.siteUrl}/#restaurant`,
    name: restaurant.name,
    url: restaurant.siteUrl,
    telephone: restaurant.phoneDisplay,
    priceRange: restaurant.priceRange,
    servesCuisine: ["Pizza", "American"],
    acceptsReservations: true,
    image: [`${restaurant.siteUrl}/opengraph-image.jpg`],
    logo: `${restaurant.siteUrl}/brand/badge.png`,
    hasMenu: `${restaurant.siteUrl}/menu`,
    sameAs: [restaurant.facebookUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.streetAddress,
      addressLocality: restaurant.city,
      addressRegion: restaurant.region,
      postalCode: restaurant.postalCode,
      addressCountry: "US",
    },
    openingHoursSpecification: hoursSpec.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...h.days],
      opens: h.opens,
      closes: h.closes,
    })),
    potentialAction: {
      "@type": "OrderAction",
      target: { "@type": "EntryPoint", urlTemplate: restaurant.orderOnlineUrl },
      deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModePickUp",
    },
  };

  return (
    <script
      type="application/ld+json"
      // Values are all first-party literals from our own data module.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
