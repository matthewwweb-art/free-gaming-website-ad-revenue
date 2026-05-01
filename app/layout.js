import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://games.matthew-web.com";
const logoUrl =
  "https://cdn.imageurlgenerator.com/uploads/5e0d9325-ad82-4f88-8409-1e063ed7cc9f.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "mathew-web Free Game Hub | Free Browser Games Online",
    template: "%s | mathew-web Free Game Hub",
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
    "mathew-web free game hub",
  ],
  authors: [{ name: "mathew-web Free Game Hub" }],
  creator: "mathew-web Free Game Hub",
  publisher: "mathew-web Free Game Hub",
  icons: {
    icon: logoUrl,
    shortcut: logoUrl,
    apple: logoUrl,
  },
  verification: {
    google: "P4hEKwe7pRsMn2kYuOQzHjSk8vFiu7bkoifMpSmUl_c",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "mathew-web Free Game Hub",
    title: "mathew-web Free Game Hub | Free Browser Games Online",
    description:
      "Play free browser games online with no downloads. Browse clean casual games, puzzle games, racing games, relaxing games, educational games, and action games.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "mathew-web Free Game Hub | Free Browser Games Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mathew-web Free Game Hub | Free Browser Games Online",
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