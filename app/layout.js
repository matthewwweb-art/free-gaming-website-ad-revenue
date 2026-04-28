import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://free-gaming-website-ad-revenue.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FreeGameHub | Free Browser Games Online",
    template: "%s | FreeGameHub",
  },
  description:
    "Play free browser games online with no downloads. Browse clean casual games, puzzle games, racing games, relaxing games, educational games, and action games.",
  keywords: [
    "free browser games",
    "free online games",
    "no download games",
    "clean casual games",
    "puzzle games",
    "racing games",
    "relaxing games",
    "educational games",
    "action games",
  ],
  authors: [{ name: "FreeGameHub" }],
  creator: "FreeGameHub",
  publisher: "FreeGameHub",
  verification: {
    google: "wTIW2yUuPvgch1RqVJGQ7E2IIaTYzsaYybR2T4Qzo0M",
  },
    openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "FreeGameHub",
    title: "FreeGameHub | Free Browser Games Online",
    description:
      "Play free browser games online with no downloads. Browse clean casual games, puzzle games, racing games, relaxing games, educational games, and action games.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FreeGameHub | Free Browser Games Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeGameHub | Free Browser Games Online",
    description:
      "Play free browser games online with no downloads. Browse clean casual games, puzzle games, racing games, relaxing games, educational games, and action games.",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}