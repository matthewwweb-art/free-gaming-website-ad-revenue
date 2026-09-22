import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://games.matthew-web.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matthew Web Free Game Hub | Free Browser Games Online",
    template: "%s | Matthew Web Free Game Hub",
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
    "Matthew Web free game hub",
  ],
  authors: [{ name: "Matthew Web Free Game Hub" }],
  creator: "Matthew Web Free Game Hub",
  publisher: "Matthew Web Free Game Hub",
  icons: {
    icon: [
      {
        url: "/icon",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: [
      {
        url: "/icon",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/icon",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
  verification: {
    google: "P4hEKwe7pRsMn2kYuOQzHjSk8vFiu7bkoifMpSmUl_c",
  },
  other: {
    "google-adsense-account": "ca-pub-3247864013895587",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Matthew Web Free Game Hub",
    title: "Matthew Web Free Game Hub | Free Browser Games Online",
    description:
      "Play free browser games online with no downloads. Browse clean casual games, puzzle games, racing games, relaxing games, educational games, and action games.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Matthew Web Free Game Hub | Free Browser Games Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Web Free Game Hub | Free Browser Games Online",
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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3247864013895587"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
