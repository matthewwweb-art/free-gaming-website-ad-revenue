"use client";

import Link from "next/link";

export default function GamePlayClient({ game, games }) {
  const relatedGames = games
    .filter((item) => item.slug !== game.slug && item.audience === game.audience)
    .slice(0, 3);

  const gameHeight = game.height > game.width ? 760 : 620;

  return (
    <main style={styles.page}>
      <section style={styles.topBar}>
        <Link href="/games" style={styles.backLink}>
          ← Back to Games
        </Link>

        <div style={styles.adSmall}>Ad Space</div>
      </section>

      <section style={styles.hero}>
        <p
          style={
            game.audience === "Clean Casual"
              ? styles.cleanBadge
              : styles.actionBadge
          }
        >
          {game.audience}
        </p>

        <h1 style={styles.title}>{game.title}</h1>
        <p style={styles.description}>{game.description}</p>

        <div style={styles.metaRow}>
          <span>Category: {game.category}</span>
          <span>Mood: {game.mood}</span>
          <span>Play time: {game.duration}</span>
        </div>
      </section>

      {game.audience === "Action" && (
        <section style={styles.warning}>
          This game is in the Action section and may include shooting, fighting,
          crash, military, hunting, or intense action themes.
        </section>
      )}

      <section style={styles.gameShell}>
        <div style={styles.sideAd}>Advertisement</div>

        <div style={styles.gameBox}>
          <iframe
            src={game.iframeUrl}
            title={game.title}
            style={{
              ...styles.iframe,
              height: `${gameHeight}px`,
            }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div style={styles.sideAd}>Advertisement</div>
      </section>

      <section style={styles.bottomAd}>Advertisement Placeholder</section>

      <section style={styles.about}>
        <h2>About {game.title}</h2>
        <p>{game.description}</p>

        <h3>How to play</h3>
        <p>{game.instructions}</p>

        <h3>Ad layout note</h3>
        <p>
          Ads should stay outside the game controls and should not look like
          play buttons. This keeps the page cleaner and helps reduce accidental
          ad clicks.
        </p>
      </section>

      <section style={styles.related}>
        <h2>More {game.audience} Games</h2>

        <div style={styles.relatedGrid}>
          {relatedGames.map((item) => (
            <Link
              key={item.slug}
              href={`/games/${item.slug}`}
              style={styles.relatedCard}
            >
              <div
                style={{
                  ...styles.relatedImage,
                  backgroundImage: `url(${item.thumbnail})`,
                }}
              />

              <div style={styles.relatedBody}>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </Link>
          ))}
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
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "18px 7%",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
  },
  backLink: {
    color: "#111827",
    textDecoration: "none",
    fontWeight: "900",
  },
  adSmall: {
    border: "2px dashed #cbd5e1",
    borderRadius: "12px",
    padding: "10px 18px",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: "800",
  },
  hero: {
    padding: "44px 7%",
    background:
      "linear-gradient(135deg, #111827 0%, #1f2937 50%, #0f172a 100%)",
    color: "#ffffff",
  },
  cleanBadge: {
    display: "inline-block",
    background: "#22c55e",
    padding: "7px 12px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "900",
    marginBottom: "14px",
  },
  actionBadge: {
    display: "inline-block",
    background: "#f97316",
    padding: "7px 12px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "900",
    marginBottom: "14px",
  },
  title: {
    fontSize: "clamp(36px, 6vw, 64px)",
    lineHeight: "1",
    margin: "0 0 14px",
    fontWeight: "900",
  },
  description: {
    color: "#d1d5db",
    maxWidth: "780px",
    fontSize: "18px",
    lineHeight: "1.7",
  },
  metaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "20px",
  },
  warning: {
    margin: "24px 7% 0",
    background: "#ffedd5",
    color: "#7c2d12",
    padding: "18px",
    borderRadius: "16px",
    fontWeight: "800",
    lineHeight: "1.5",
  },
  gameShell: {
    display: "grid",
    gridTemplateColumns: "160px minmax(0, 1fr) 160px",
    gap: "16px",
    padding: "28px 7%",
    alignItems: "stretch",
  },
  gameBox: {
    background: "#111827",
    borderRadius: "24px",
    overflow: "hidden",
    minHeight: "620px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.18)",
  },
  iframe: {
    width: "100%",
    border: "0",
    display: "block",
    background: "#000000",
  },
  sideAd: {
    border: "2px dashed #cbd5e1",
    borderRadius: "18px",
    minHeight: "620px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontWeight: "900",
    background: "#ffffff",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
  },
  bottomAd: {
    margin: "0 auto 28px",
    maxWidth: "1100px",
    minHeight: "90px",
    border: "2px dashed #cbd5e1",
    borderRadius: "18px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontWeight: "900",
  },
  about: {
    background: "#ffffff",
    padding: "40px 7%",
    lineHeight: "1.7",
  },
  related: {
    padding: "44px 7% 70px",
  },
  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
  },
  relatedCard: {
    background: "#ffffff",
    borderRadius: "18px",
    overflow: "hidden",
    textDecoration: "none",
    color: "#111827",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
  },
  relatedImage: {
    height: "150px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  relatedBody: {
    padding: "16px",
  },
};