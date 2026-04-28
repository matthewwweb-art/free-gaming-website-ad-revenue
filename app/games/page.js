import GamesPageClient from "./GamesPageClient";

export const metadata = {
  title: "Free Browser Games",
  description:
    "Play free browser games online. Browse clean casual games, puzzle games, relaxing games, racing games, educational games, and action games with no downloads.",
  alternates: {
    canonical: "/games",
  },
  openGraph: {
    title: "Free Browser Games | FreeGameHub",
    description:
      "Play free browser games online. Browse clean casual games, puzzle games, relaxing games, racing games, educational games, and action games with no downloads.",
    url: "/games",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Browser Games | FreeGameHub",
    description:
      "Play free browser games online. Browse clean casual games, puzzle games, relaxing games, racing games, educational games, and action games with no downloads.",
  },
};

export default function GamesPage() {
  return <GamesPageClient />;
}