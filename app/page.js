import Link from "next/link";
import { games } from "./games/gamesData";
import AdsterraAd from "../components/AdsterraAd";

export const metadata = {
  title: "Matthew Web Free Game Hub | Free Browser Games Online",
  description:
    "Play free browser games online with no downloads. Free Game Hub is a Matthew Web project for casual games, mobile-friendly games, original game experiments, and future browser-game development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Matthew Web Free Game Hub | Free Browser Games Online",
    description:
      "Play free browser games online with no downloads. Free Game Hub is a Matthew Web project for casual games, mobile-friendly games, original game experiments, and future browser-game development.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Matthew Web Free Game Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Web Free Game Hub | Free Browser Games Online",
    description:
      "Play free browser games online with no downloads. Free Game Hub is a Matthew Web project for casual games, mobile-friendly games, original game experiments, and future browser-game development.",
    images: ["/twitter-image"],
  },
};

export default function Home() {
  const cleanCasualGames = games.filter(
    (game) => game.audience === "Clean Casual"
  );

  const mobileFriendlyGames = games.filter((game) => game.mobileFriendly);

  const newGames = [...games].slice(-8).reverse();

  const featuredGames = [
    "one-plus-two",
    "mini-golf-3d",
    "classic-checkers-forest",
    "offroad-truck-driving-simulator",
    "super-suv-driving",
    "fish-aquarium-game",
    "cookie-party-pop",
    "3d-billiard-8-ball-pool",
  ]
    .map((slug) => games.find((game) => game.slug === slug))
    .filter(Boolean);

  return (
    <main style={styles.page}>
      <section className="mw-home-hero" style={styles.hero}>
        <div style={styles.heroCopy}>
          <p style={styles.kicker}>A Matthew Web Project</p>

          <h1 style={styles.title}>
            Free Browser Games Built Into the Matthew Web Ecosystem
          </h1>

          <p style={styles.subtitle}>
            Play free online games with no downloads. Free Game Hub is a
            Matthew Web project for casual games, mobile-friendly games,
            original game experiments, and future browser-game development.
          </p>

          <div style={styles.buttons}>
            <Link href="/games" style={styles.primaryButton}>
              Play Games
            </Link>

            <Link href="/games/category/mobile-friendly" style={styles.secondaryButton}>
              Mobile-Friendly Games
            </Link>

            <Link href="/games/matthew-web" style={styles.darkButton}>
              Matthew Web Games
            </Link>
          </div>
        </div>

        <div style={styles.heroPanel}>
          <p style={styles.panelLabel}>Current Library</p>

          <div style={styles.statGrid}>
            <div style={styles.statBox}>
              <strong>{games.length}</strong>
              <span>Total Games</span>
            </div>

            <div style={styles.statBox}>
              <strong>{cleanCasualGames.length}</strong>
              <span>Clean Casual</span>
            </div>

            <div style={styles.statBox}>
              <strong>{mobileFriendlyGames.length}</strong>
              <span>Mobile Friendly</span>
            </div>
          </div>

          <p style={styles.panelText}>
            Ads are kept separate from game controls so the site can grow
            without covering navigation, play buttons, or game screens.
          </p>
        </div>
      </section>

      <section className="fg-mobile-ad" style={styles.mobileAd}>
        <AdsterraAd type="mobile320x50" />
      </section>

      <section className="fg-bottom-ad" style={styles.adBanner}>
        <AdsterraAd type="leaderboard728x90" />
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionKicker}>Start Playing</p>
          <h2 style={styles.sectionTitle}>Featured Free Games</h2>
          <p style={styles.sectionText}>
            Start with a mix of puzzle, sports, racing, relaxing, and casual
            browser games. Each game opens from a web page with no app download.
          </p>
        </div>

        <div className="mw-home-game-grid" style={styles.gameGrid}>
          {featuredGames.map((game) => (
            <Link
              href={`/games/${game.slug}`}
              key={game.slug}
              style={styles.gameCard}
            >
              <div
                style={{
                  ...styles.gameImage,
                  backgroundImage: `url(${game.thumbnail})`,
                }}
              />

              <div style={styles.gameBody}>
                <div style={styles.gameMeta}>
                  <span>{game.category}</span>
                  <span>{game.duration}</span>
                </div>

                <h3 style={styles.gameTitle}>{game.title}</h3>

                <p style={styles.gameText}>{game.description}</p>

                <div
                  style={
                    game.audience === "Clean Casual"
                      ? styles.cleanTag
                      : styles.actionTag
                  }
                >
                  {game.audience}
                </div>

                <div style={styles.playButton}>Play Now</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={styles.sectionDark}>
        <div style={styles.sectionHeaderDark}>
          <p style={styles.sectionKicker}>Browse by Type</p>
          <h2 style={styles.sectionTitleDark}>Game Categories</h2>
          <p style={styles.sectionTextDark}>
            Free Game Hub separates lighter casual games from action games so
            visitors can choose the kind of experience they want.
          </p>
        </div>

        <div className="mw-home-category-grid" style={styles.categoryGrid}>
          <Link href="/games/category/clean-casual" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Clean</span>
            <h3>Clean Casual Games</h3>
            <p>Puzzle, relaxing, match, math, hidden object, and casual games.</p>
          </Link>

          <Link href="/games/category/mobile-friendly" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Phone</span>
            <h3>Mobile-Friendly Games</h3>
            <p>Games that are better suited for phones, tablets, and touch screens.</p>
          </Link>

          <Link href="/games/category/puzzle" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Brain</span>
            <h3>Puzzle Games</h3>
            <p>Logic, match, hidden object, and problem-solving browser games.</p>
          </Link>

          <Link href="/games/category/racing" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Drive</span>
            <h3>Racing Games</h3>
            <p>Cars, SUVs, driving games, and browser vehicle games.</p>
          </Link>

          <Link href="/games/category/relaxing" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Calm</span>
            <h3>Relaxing Games</h3>
            <p>Slower games for quick breaks and simple casual play.</p>
          </Link>

          <Link href="/games/category/action" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Action</span>
            <h3>Action Games</h3>
            <p>Shooting, fighting, crash, military, and faster action games.</p>
          </Link>
        </div>
      </section>

      <section className="mw-home-project-section" style={styles.projectSection}>
        <div style={styles.projectCopy}>
          <p style={styles.sectionKicker}>Matthew Web Development</p>

          <h2 style={styles.sectionTitle}>Original Matthew Web Games</h2>

          <p style={styles.sectionText}>
            Free Game Hub will also become a place for Matthew Web original
            games and experiments. This can include simple HTML5 games, browser
            demos, educational games, and future projects connected to Matthew
            Webâ€™s game-development work.
          </p>

          <div style={styles.buttons}>
            <Link href="/games/matthew-web" style={styles.primaryButton}>
              View MW Games Page
            </Link>

            <a
              href="https://matthew-web.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.darkButton}
            >
              Visit Matthew Web
            </a>
          </div>
        </div>

        <div style={styles.roadmapBox}>
          <h3>Planned Direction</h3>

          <ul style={styles.roadmapList}>
            <li>Original Matthew Web browser games</li>
            <li>Mobile-friendly quick-play games</li>
            <li>Educational and business-related game ideas</li>
            <li>Future promotion for larger Matthew Web game projects</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.sectionKicker}>Recently Added</p>
          <h2 style={styles.sectionTitle}>New Games</h2>
          <p style={styles.sectionText}>
            These are recently added games from the current Free Game Hub
            library.
          </p>
        </div>

        <div className="mw-home-game-grid" style={styles.gameGrid}>
          {newGames.map((game) => (
            <Link
              href={`/games/${game.slug}`}
              key={game.slug}
              style={styles.gameCard}
            >
              <div
                style={{
                  ...styles.gameImage,
                  backgroundImage: `url(${game.thumbnail})`,
                }}
              />

              <div style={styles.gameBody}>
                <div style={styles.gameMeta}>
                  <span>{game.category}</span>
                  <span>{game.duration}</span>
                </div>

                <h3 style={styles.gameTitle}>{game.title}</h3>

                <p style={styles.gameText}>{game.description}</p>

                <div
                  style={
                    game.audience === "Clean Casual"
                      ? styles.cleanTag
                      : styles.actionTag
                  }
                >
                  {game.audience}
                </div>

                <div style={styles.playButton}>Play Now</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={styles.seoBlock}>
        <h2>Free No-Download Games Online</h2>

        <p>
          Free Game Hub helps visitors find free online games that work directly
          in a web browser. The site includes clean casual games for lighter
          play, puzzle games for problem solving, racing games for driving fans,
          relaxing games for slower sessions, educational games for brain
          practice, sports games for skill-based play, and action games for
          faster gameplay.
        </p>

        <p>
          Free Game Hub is connected to Matthew Web as a practical technology
          project. The goal is to build a cleaner game destination first, then
          measure traffic, game loads, fullscreen clicks, category interest, and
          referral clicks before adding more aggressive monetization.
        </p>

        <div style={styles.bottomButtons}>
          <Link href="/games" style={styles.primaryButton}>
            Browse All Games
          </Link>

          <Link href="/about" style={styles.darkButton}>
            Learn About Free Game Hub
          </Link>
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
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.2fr) 380px",
    gap: "34px",
    alignItems: "center",
    padding: "92px 7%",
    background:
      "radial-gradient(circle at top right, rgba(249,115,22,0.20), transparent 32%), linear-gradient(135deg, #020617 0%, #111827 54%, #0f172a 100%)",
    color: "#ffffff",
  },
  heroCopy: {
    minWidth: 0,
  },
  kicker: {
    display: "inline-block",
    color: "#f97316",
    fontWeight: "950",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    fontSize: "14px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "clamp(42px, 7vw, 82px)",
    lineHeight: "0.96",
    maxWidth: "980px",
    margin: "0 0 22px",
    fontWeight: "950",
    letterSpacing: "-1.8px",
  },
  subtitle: {
    fontSize: "20px",
    lineHeight: "1.75",
    maxWidth: "820px",
    color: "#d1d5db",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "30px",
  },
  primaryButton: {
    background: "#f97316",
    color: "#ffffff",
    padding: "15px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "950",
    display: "inline-block",
  },
  secondaryButton: {
    background: "#ffffff",
    color: "#111827",
    padding: "15px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "950",
    display: "inline-block",
  },
  darkButton: {
    background: "#111827",
    color: "#ffffff",
    padding: "15px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "950",
    display: "inline-block",
  },
  heroPanel: {
    background: "rgba(255,255,255,0.075)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "26px",
    padding: "24px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.24)",
  },
  panelLabel: {
    color: "#f97316",
    fontWeight: "950",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontSize: "13px",
    margin: "0 0 16px",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "12px",
  },
  statBox: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "18px",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    gap: "14px",
    alignItems: "center",
  },
  panelText: {
    color: "#cbd5e1",
    lineHeight: "1.6",
    margin: "16px 0 0",
  },
  mobileAd: {
    display: "none",
    margin: "20px auto 0",
    padding: "0 12px",
    maxWidth: "360px",
  },
  adBanner: {
    margin: "24px auto",
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
    overflow: "hidden",
  },
  section: {
    padding: "62px 7% 82px",
  },
  sectionDark: {
    padding: "62px 7% 82px",
    background:
      "linear-gradient(135deg, #111827 0%, #1f2937 52%, #0f172a 100%)",
    color: "#ffffff",
  },
  sectionHeader: {
    maxWidth: "900px",
    marginBottom: "28px",
  },
  sectionHeaderDark: {
    maxWidth: "900px",
    marginBottom: "28px",
  },
  sectionKicker: {
    color: "#f97316",
    fontWeight: "950",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    fontSize: "13px",
    margin: "0 0 10px",
  },
  sectionTitle: {
    fontSize: "clamp(34px, 5vw, 54px)",
    margin: "0 0 14px",
    fontWeight: "950",
    letterSpacing: "-1px",
  },
  sectionTitleDark: {
    fontSize: "clamp(34px, 5vw, 54px)",
    margin: "0 0 14px",
    fontWeight: "950",
    letterSpacing: "-1px",
    color: "#ffffff",
  },
  sectionText: {
    color: "#475569",
    lineHeight: "1.75",
    fontSize: "18px",
  },
  sectionTextDark: {
    color: "#cbd5e1",
    lineHeight: "1.75",
    fontSize: "18px",
  },
  gameGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "20px",
  },
  gameCard: {
    background: "#ffffff",
    borderRadius: "22px",
    overflow: "hidden",
    textDecoration: "none",
    color: "#111827",
    boxShadow: "0 14px 34px rgba(15,23,42,0.10)",
    border: "1px solid #e5e7eb",
  },
  gameImage: {
    height: "170px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  gameBody: {
    padding: "18px",
  },
  gameMeta: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: "800",
    marginBottom: "10px",
  },
  gameTitle: {
    fontSize: "22px",
    margin: "0 0 8px",
    fontWeight: "950",
  },
  gameText: {
    color: "#475569",
    lineHeight: "1.5",
    minHeight: "92px",
  },
  cleanTag: {
    display: "inline-block",
    background: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "950",
    marginTop: "8px",
  },
  actionTag: {
    display: "inline-block",
    background: "#ffedd5",
    color: "#9a3412",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "950",
    marginTop: "8px",
  },
  playButton: {
    marginTop: "16px",
    background: "#111827",
    color: "#ffffff",
    textAlign: "center",
    padding: "12px",
    borderRadius: "14px",
    fontWeight: "950",
  },
  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
  },
  categoryCard: {
    background: "rgba(255,255,255,0.075)",
    color: "#ffffff",
    textDecoration: "none",
    padding: "24px",
    borderRadius: "22px",
    lineHeight: "1.65",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 16px 34px rgba(0,0,0,0.18)",
  },
  categoryLabel: {
    display: "inline-block",
    background: "#f97316",
    color: "#ffffff",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "950",
    marginBottom: "10px",
  },
  projectSection: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 360px",
    gap: "28px",
    alignItems: "center",
    padding: "70px 7%",
    background: "#ffffff",
  },
  projectCopy: {
    minWidth: 0,
  },
  roadmapBox: {
    background: "#111827",
    color: "#ffffff",
    borderRadius: "24px",
    padding: "26px",
    boxShadow: "0 18px 42px rgba(15,23,42,0.18)",
  },
  roadmapList: {
    color: "#d1d5db",
    lineHeight: "1.8",
    paddingLeft: "20px",
  },
  seoBlock: {
    padding: "56px 7% 90px",
    background: "#f8fafc",
    lineHeight: "1.8",
    fontSize: "17px",
  },
  bottomButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "24px",
  },
};
