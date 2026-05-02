import Link from "next/link";
import { games } from "../gamesData";

const mathewWebGames = games.filter((game) => game.creator === "mathew-web");

export const metadata = {
  title: "Games by mathew-web",
  description:
    "Play original browser games created by mathew-web. This page will feature future games built by mathew-web for Free Game Hub.",
  alternates: {
    canonical: "/games/mathew-web",
  },
  openGraph: {
    title: "Games by mathew-web | mathew-web Free Game Hub",
    description:
      "Play original browser games created by mathew-web. This page will feature future games built by mathew-web for Free Game Hub.",
    url: "/games/mathew-web",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Games by mathew-web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Games by mathew-web | mathew-web Free Game Hub",
    description:
      "Play original browser games created by mathew-web. This page will feature future games built by mathew-web for Free Game Hub.",
    images: ["/twitter-image"],
  },
};

export default function MathewWebGamesPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.badge}>Original Games</p>

        <h1 style={styles.title}>Games by mathew-web</h1>

        <p style={styles.subtitle}>
          This page is reserved for original browser games created by
          mathew-web. Future games built for Free Game Hub will appear here.
        </p>

        <div style={styles.buttons}>
          <Link href="/games" style={styles.primaryButton}>
            Browse All Games
          </Link>

          <Link href="/" style={styles.secondaryButton}>
            Back Home
          </Link>
        </div>
      </section>

      <section style={styles.adBanner}>Ad space reserved</section>

      <section style={styles.content}>
        {mathewWebGames.length === 0 ? (
          <div style={styles.comingSoonBox}>
            <h2>Original mathew-web Games Coming Soon</h2>

            <p>
              No original mathew-web games are published yet. This page is ready
              for future games that are built directly by mathew-web, including
              simple browser games, mobile-friendly games, puzzle games, arcade
              games, and custom HTML5 games.
            </p>

            <p>
              When a mathew-web game is added to the game library, it can be
              marked with <strong>creator: "mathew-web"</strong> and it will
              appear on this page automatically.
            </p>

            <Link href="/games/category/mobile-friendly" style={styles.darkButton}>
              View Mobile-Friendly Games
            </Link>
          </div>
        ) : (
          <div style={styles.grid}>
            {mathewWebGames.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                style={styles.card}
              >
                <div
                  style={{
                    ...styles.thumbnail,
                    backgroundImage: `url(${game.thumbnail})`,
                  }}
                />

                <div style={styles.cardBody}>
                  <div style={styles.cardMeta}>
                    <span>{game.category}</span>
                    <span>{game.duration}</span>
                  </div>

                  <h3 style={styles.cardTitle}>{game.title}</h3>

                  <p style={styles.cardText}>{game.description}</p>

                  <div style={styles.originalTag}>Created by mathew-web</div>

                  <div style={styles.playButton}>Play Now</div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div style={styles.seoText}>
          <h2>About mathew-web Original Games</h2>

          <p>
            Games by mathew-web will focus on simple, fast, browser-based games
            that work without downloads. The goal is to create original games
            that are easy to open, easy to understand, and useful for quick play
            sessions.
          </p>

          <p>
            Future game ideas may include puzzle games, click games, typing
            games, memory games, casual arcade games, and mobile-friendly HTML5
            games.
          </p>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    color: "#111827",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  hero: {
    padding: "80px 7%",
    background:
      "linear-gradient(135deg, #111827 0%, #1f2937 50%, #0f172a 100%)",
    color: "#ffffff",
  },
  badge: {
    display: "inline-block",
    background: "#f97316",
    color: "#ffffff",
    padding: "8px 14px",
    borderRadius: "999px",
    fontWeight: "900",
    fontSize: "14px",
    marginBottom: "18px",
  },
  title: {
    fontSize: "clamp(42px, 7vw, 78px)",
    lineHeight: "1",
    margin: "0 0 20px",
    fontWeight: "900",
  },
  subtitle: {
    fontSize: "20px",
    lineHeight: "1.7",
    color: "#d1d5db",
    maxWidth: "820px",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "28px",
  },
  primaryButton: {
    background: "#f97316",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
  },
  secondaryButton: {
    background: "#ffffff",
    color: "#111827",
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
  },
  darkButton: {
    display: "inline-block",
    marginTop: "10px",
    background: "#111827",
    color: "#ffffff",
    padding: "14px 18px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
  },
  adBanner: {
    margin: "24px auto 0",
    maxWidth: "1100px",
    minHeight: "90px",
    borderWidth: "2px",
    borderStyle: "dashed",
    borderColor: "#cbd5e1",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontWeight: "900",
    background: "#ffffff",
  },
  content: {
    padding: "56px 7% 80px",
  },
  comingSoonBox: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "22px",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
    lineHeight: "1.7",
    maxWidth: "900px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "22px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "22px",
    overflow: "hidden",
    textDecoration: "none",
    color: "#111827",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
  },
  thumbnail: {
    height: "190px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardBody: {
    padding: "18px",
  },
  cardMeta: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: "800",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "24px",
    margin: "0 0 8px",
    fontWeight: "900",
  },
  cardText: {
    color: "#475569",
    lineHeight: "1.5",
    minHeight: "74px",
  },
  originalTag: {
    display: "inline-block",
    background: "#ffedd5",
    color: "#9a3412",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "900",
    marginTop: "8px",
  },
  playButton: {
    marginTop: "16px",
    background: "#111827",
    color: "#ffffff",
    textAlign: "center",
    padding: "12px",
    borderRadius: "14px",
    fontWeight: "900",
  },
  seoText: {
    marginTop: "34px",
    background: "#ffffff",
    padding: "28px",
    borderRadius: "22px",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
    lineHeight: "1.7",
    maxWidth: "900px",
  },
};