import { games } from "./games/gamesData";

const siteUrl = "https://free-gaming-website-ad-revenue.vercel.app";

export default function sitemap() {
  const staticPages = [
    "",
    "/games",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/dmca",
  ];

  const gamePages = games.map((game) => `/games/${game.slug}`);

  return [...staticPages, ...gamePages].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/games/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/games" ? 0.9 : 0.7,
  }));
}