"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const siteUrl = "https://games.matthew-web.com";

function getCategorySlug(game) {
  if (game.audience === "Clean Casual") {
    return "clean-casual";
  }

  if (game.audience === "Action") {
    return "action";
  }

  return String(game.category || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function GamePlayClient({ game, games }) {
  const gameBoxRef = useRef(null);
  const [gameLoaded, setGameLoaded] = useState(false);

  const relatedGames = games
    .filter((item) => item.slug !== game.slug && item.audience === game.audience)
    .slice(0, 3);

  const gameWidth = Number(game.width || 800);
  const gameHeightValue = Number(game.height || 600);
  const isPortraitGame = gameHeightValue > gameWidth;
  const gameAspectRatio = `${gameWidth} / ${gameHeightValue}`;

  const gameUrl = `${siteUrl}/games/${game.slug}`;
  const categorySlug = getCategorySlug(game);

  function handleFullscreen() {
    const element = gameBoxRef.current;

    if (!element) return;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description,
    image: game.thumbnail,
    url: gameUrl,
    gamePlatform: "Web Browser",
    applicationCategory: "Browser Game",
    genre: game.category,
    playMode: "SinglePlayer",
    isAccessibleForFree: true,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "FreeGameHub",
      url: siteUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Games",
        item: `${siteUrl}/games`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: game.audience,
        item: `${siteUrl}/games/category/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: game.title,
        item: gameUrl,
      },
    ],
  };

  return (
    <main style={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoGameSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <section style={styles.topBar}>
        <Link href="/games" style={styles.backLink}>
          ← Back to Games
        </Link>

        <div style={styles.adSmall}>Sponsored Area</div>
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
          <span>No download</span>
        </div>

        <div style={styles.heroButtons}>
          <a href="#play-game" style={styles.primaryButton}>
            Play Now
          </a>

          <Link
            href={`/games/category/${categorySlug}`}
            style={styles.secondaryButton}
          >
            More {game.audience} Games
          </Link>
        </div>
      </section>

      {game.audience === "Action" && (
        <section style={styles.warning}>
          This game is in the Action section and may include shooting, fighting,
          crash, military, hunting, or intense action themes.
        </section>
      )}

      <section id="play-game" className="fg-game-shell" style={styles.gameShell}>
        <div className="fg-side-ad" style={styles.sideAd}>
          Ad space reserved
        </div>

        <div
          ref={gameBoxRef}
          className={
            isPortraitGame
              ? "fg-game-box fg-game-box-portrait"
              : "fg-game-box fg-game-box-landscape"
          }
          style={{
            ...styles.gameBox,
            ...(isPortraitGame ? styles.portraitGameBox : styles.landscapeGameBox),
            aspectRatio: gameAspectRatio,
          }}
        >
          {!gameLoaded ? (
            <div
              style={{
                ...styles.gameStart,
                backgroundImage: `linear-gradient(rgba(15,23,42,0.72), rgba(15,23,42,0.72)), url(${game.thumbnail})`,
              }}
            >
              <h2 style={styles.gameStartTitle}>{game.title}</h2>
              <p style={styles.gameStartText}>
                Tap below to load and play this browser game.
              </p>

              <button
                type="button"
                onClick={() => setGameLoaded(true)}
                style={styles.loadGameButton}
              >
                Load Game
              </button>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={handleFullscreen}
                style={styles.fullscreenButton}
              >
                Full Screen
              </button>

              <iframe
                src={game.iframeUrl}
                title={game.title}
                style={styles.iframe}
                allowFullScreen
                loading="eager"
              />
            </>
          )}
        </div>

        <div className="fg-side-ad" style={styles.sideAd}>
          Ad space reserved
        </div>
      </section>

      <section className="fg-bottom-ad" style={styles.bottomAd}>
        Ad space reserved
      </section>

      <section style={styles.about}>
        <div className="fg-about-grid" style={styles.aboutGrid}>
          <div className="fg-game-copy" style={styles.copyColumn}>
            <h2>Play {game.title} Online</h2>
            <p>
              {game.title} is a free browser game you can play online without
              downloading or installing anything. This game is listed in the{" "}
              {game.category} category and is part of the {game.audience} game
              collection on FreeGameHub.
            </p>

            <h3>About This Game</h3>
            <p>{game.description}</p>

            <h3>How to Play</h3>
            <p>{game.instructions}</p>

            <h3>Why Play Browser Games?</h3>
            <p>
              Browser games are quick to open, simple to play, and work directly
              from a web page. FreeGameHub organizes games by category and play
              style so visitors can quickly find clean casual games, puzzle
              games, relaxing games, racing games, educational games, and action
              games.
            </p>
          </div>

          <aside className="fg-info-card" style={styles.infoCard}>
            <h2>Game Details</h2>

            <div style={styles.infoRow}>
              <strong>Title</strong>
              <span>{game.title}</span>
            </div>

            <div style={styles.infoRow}>
              <strong>Category</strong>
              <span>{game.category}</span>
            </div>

            <div style={styles.infoRow}>
              <strong>Collection</strong>
              <span>{game.audience}</span>
            </div>

            <div style={styles.infoRow}>
              <strong>Mood</strong>
              <span>{game.mood}</span>
            </div>

            <div style={styles.infoRow}>
              <strong>Play Time</strong>
              <span>{game.duration}</span>
            </div>

            <div style={styles.infoRow}>
              <strong>Download</strong>
              <span>Not required</span>
            </div>
          </aside>
        </div>

        <div style={styles.reportBox}>
          <h2>Report or Request Game Removal</h2>
          <p>
            If you are a game developer, publisher, or rights holder and believe
            a game should be reviewed or removed, please contact us through the
            DMCA and game removal page.
          </p>

          <Link href="/dmca" style={styles.reportButton}>
            DMCA / Game Removal
          </Link>
        </div>

        <div style={styles.categoryLinksBox}>
          <h2>Browse More Game Categories</h2>

          <div style={styles.categoryLinks}>
            <Link href="/games/category/clean-casual" style={styles.categoryLink}>
              Clean Casual Games
            </Link>

            <Link href="/games/category/puzzle" style={styles.categoryLink}>
              Puzzle Games
            </Link>

            <Link href="/games/category/racing" style={styles.categoryLink}>
              Racing Games
            </Link>

            <Link href="/games/category/action" style={styles.categoryLink}>
              Action Games
            </Link>

            <Link href="/games/category/educational" style={styles.categoryLink}>
              Educational Games
            </Link>

            <Link href="/games/category/relaxing" style={styles.categoryLink}>
              Relaxing Games
            </Link>
          </div>
        </div>

        <div style={styles.adNote}>
          <h3>Advertising note</h3>
          <p>
            Sponsored areas are kept separate from game controls and play
            buttons. This helps keep the page clear and reduces accidental
            clicks.
          </p>
        </div>
      </section>

      <section style={styles.related}>
        <h2>More {game.audience} Games</h2>

        <div className="fg-related-grid" style={styles.relatedGrid}>
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
    borderWidth: "2px",
    borderStyle: "dashed",
    borderColor: "#cbd5e1",
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
  heroButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "24px",
  },
  primaryButton: {
    background: "#f97316",
    color: "#ffffff",
    padding: "13px 20px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
  },
  secondaryButton: {
    background: "#ffffff",
    color: "#111827",
    padding: "13px 20px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
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
    gridTemplateColumns: "150px minmax(0, 1fr) 150px",
    gap: "16px",
    padding: "28px 7%",
    alignItems: "stretch",
  },
  gameBox: {
    position: "relative",
    background: "#111827",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 18px 45px rgba(15,23,42,0.18)",
  },
  portraitGameBox: {
    width: "100%",
    maxWidth: "520px",
    margin: "0 auto",
  },
  landscapeGameBox: {
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  gameStart: {
    width: "100%",
    height: "100%",
    minHeight: "360px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#ffffff",
    padding: "28px",
  },
  gameStartTitle: {
    fontSize: "clamp(30px, 6vw, 54px)",
    margin: "0 0 12px",
    fontWeight: "900",
  },
  gameStartText: {
    color: "#e5e7eb",
    fontSize: "18px",
    lineHeight: "1.5",
    maxWidth: "520px",
  },
  loadGameButton: {
    marginTop: "18px",
    border: "0",
    background: "#f97316",
    color: "#ffffff",
    padding: "15px 24px",
    borderRadius: "14px",
    fontWeight: "900",
    fontSize: "16px",
    cursor: "pointer",
  },
  fullscreenButton: {
    position: "absolute",
    top: "12px",
    right: "12px",
    zIndex: 5,
    border: "0",
    background: "rgba(15,23,42,0.9)",
    color: "#ffffff",
    padding: "10px 14px",
    borderRadius: "12px",
    fontWeight: "900",
    cursor: "pointer",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "0",
    display: "block",
    background: "#000000",
  },
  sideAd: {
    borderWidth: "2px",
    borderStyle: "dashed",
    borderColor: "#cbd5e1",
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
    borderWidth: "2px",
    borderStyle: "dashed",
    borderColor: "#cbd5e1",
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
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 320px",
    gap: "28px",
    alignItems: "start",
  },
  copyColumn: {
    minWidth: 0,
    maxWidth: "760px",
  },
  infoCard: {
    background: "#f8fafc",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    borderRadius: "20px",
    padding: "22px",
    boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "14px",
    padding: "12px 0",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "#e5e7eb",
  },
  reportBox: {
    marginTop: "34px",
    background: "#f8fafc",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    borderRadius: "20px",
    padding: "22px",
  },
  reportButton: {
    display: "inline-block",
    marginTop: "10px",
    background: "#111827",
    color: "#ffffff",
    padding: "12px 16px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
  },
  categoryLinksBox: {
    marginTop: "34px",
    background: "#f8fafc",
    borderRadius: "20px",
    padding: "22px",
  },
  categoryLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "14px",
  },
  categoryLink: {
    background: "#111827",
    color: "#ffffff",
    padding: "10px 14px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "900",
  },
  adNote: {
    marginTop: "24px",
    background: "#f8fafc",
    borderRadius: "20px",
    padding: "22px",
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