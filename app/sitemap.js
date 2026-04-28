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

  const categoryPages = [
    "/games/category/clean-casual",
    "/games/category/puzzle",
    "/games/category/racing",
    "/games/category/action",
    "/games/category/educational",
    "/games/category/relaxing",
  ];

  const gamePages = games.map((game) => `/games/${game.slug}`);

  return [...staticPages, ...categoryPages, ...gamePages].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/games/") ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/games"
        ? 0.9
        : path.startsWith("/games/category/")
        ? 0.85
        : 0.7,
  }));
}