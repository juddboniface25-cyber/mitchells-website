import type { Metadata } from "next";
import { Caveat, Fredoka, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RestaurantSchema } from "@/components/RestaurantSchema";
import { restaurant } from "@/data/restaurant";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const barlow = Barlow_Semi_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const description =
  "Pizza, lake-grill favorites & live music at Smith Mountain Lake. 3553 Trading Post Rd, Huddleston, VA — (540) 296-0664.";

export const metadata: Metadata = {
  // Without this, Next resolves social image URLs against localhost in dev
  // and against the per-deployment VERCEL_URL in production, which leaks
  // preview hostnames into OG tags.
  metadataBase: new URL(restaurant.siteUrl),
  title: {
    default: `${restaurant.name} — Huddleston, VA`,
    template: `%s — ${restaurant.shortName}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: restaurant.name,
    title: `${restaurant.name} — Huddleston, VA`,
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurant.name} — Huddleston, VA`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${fredoka.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-white focus:text-body focus:rounded-lg focus:border-2 focus:border-olive focus:font-display"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <RestaurantSchema />
      </body>
    </html>
  );
}
