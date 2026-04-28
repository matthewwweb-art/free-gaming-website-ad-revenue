import Link from "next/link";

export const metadata = {
  title: "Free Browser Games Online",
  description:
    "Play free browser games online with no downloads. Browse clean casual games, puzzle games, racing games, educational games, relaxing games, and action games.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FreeGameHub | Free Browser Games Online",
    description:
      "Play free browser games online with no downloads. Browse clean casual games, puzzle games, racing games, educational games, relaxing games, and action games.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeGameHub | Free Browser Games Online",
    description:
      "Play free browser games online with no downloads. Browse clean casual games, puzzle games, racing games, educational games, relaxing games, and action games.",
  },
};
export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.badge}>Free Browser Games</p>

        <h1 style={styles.title}>Play Free Online Games Instantly</h1>

        <p style={styles.subtitle}>
          No downloads. No installs. Just pick a game and start playing.
          Browse clean casual games, puzzle games, racing games, relaxing games,
          educational games, and action games.
        </p>

        <div style={styles.buttons}>
          <Link href="/games" style={styles.primaryButton}>
            Play Games
          </Link>

          <a href="#popular-categories" style={styles.secondaryButton}>
            Browse Categories
          </a>
        </div>
      </section>

      <section style={styles.adBanner}>Advertisement Placeholder</section>

      <section id="popular-categories" style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Popular Game Categories</h2>
          <p style={styles.sectionText}>
            Find free browser games by play style. Choose lighter casual games,
            brain games, driving games, relaxing games, or faster action games.
          </p>
        </div>

        <div style={styles.categoryGrid}>
          <Link href="/games/category/clean-casual" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Clean Casual</span>
            <h3>Clean Casual Games</h3>
            <p>
              Simple no-download games like puzzle, match, math, hidden object,
              relaxing, and casual games.
            </p>
          </Link>

          <Link href="/games/category/puzzle" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Puzzle</span>
            <h3>Puzzle Games</h3>
            <p>
              Play match games, hidden object games, logic games, and casual
              puzzle games in your browser.
            </p>
          </Link>

          <Link href="/games/category/racing" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Racing</span>
            <h3>Racing Games</h3>
            <p>
              Drive cars, SUVs, vehicles, and simulators directly online with no
              installation required.
            </p>
          </Link>

          <Link href="/games/category/action" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Action</span>
            <h3>Action Games</h3>
            <p>
              Browse faster games including shooting, fighting, crash, military,
              and intense action games.
            </p>
          </Link>

          <Link href="/games/category/educational" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Educational</span>
            <h3>Educational Games</h3>
            <p>
              Practice quick thinking, math, logic, and brain challenges through
              free browser games.
            </p>
          </Link>

          <Link href="/games/category/relaxing" style={styles.categoryCard}>
            <span style={styles.categoryLabel}>Relaxing</span>
            <h3>Relaxing Games</h3>
            <p>
              Play calm aquarium games, slow-paced puzzle games, and casual
              games for quick breaks.
            </p>
          </Link>
        </div>
      </section>

      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>Why Play Browser Games?</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>No Downloads</h3>
            <p>
              Browser games run directly online, so you do not need to install
              apps, files, or extra software to start playing.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Quick to Start</h3>
            <p>
              FreeGameHub is built for fast casual play. Open a game page, wait
              for the game to load, and start playing.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Organized by Category</h3>
            <p>
              Games are grouped into clean casual, puzzle, racing, relaxing,
              educational, and action categories so visitors can find games
              faster.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.seoBlock}>
        <h2>Free No-Download Games Online</h2>
        <p>
          FreeGameHub helps visitors find free online games that work directly in
          a web browser. The site includes clean casual games for lighter play,
          puzzle games for problem solving, racing games for driving fans,
          relaxing games for slower sessions, educational games for brain
          practice, and action games for faster gameplay.
        </p>

        <p>
          Each game page includes a playable browser game, game details, how to
          play information, related games, and links to similar categories.
          These pages are designed to be simple for visitors and easier for
          search engines to understand.
        </p>

        <div style={styles.bottomButtons}>
          <Link href="/games" style={styles.primaryButton}>
            Browse All Games
          </Link>

          <Link href="/about" style={styles.darkLink}>
            Learn About FreeGameHub
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
    padding: "90px 7%",
    background:
      "linear-gradient(135deg, #111827 0%, #1f2937 50%, #0f172a 100%)",
    color: "#ffffff",
  },
  badge: {
    display: "inline-block",
    background: "#f97316",
    padding: "8px 14px",
    borderRadius: "999px",
    fontWeight: "900",
    marginBottom: "18px",
  },
  title: {
    fontSize: "clamp(42px, 7vw, 78px)",
    lineHeight: "1",
    maxWidth: "900px",
    margin: "0 0 22px",
    fontWeight: "900",
  },
  subtitle: {
    fontSize: "20px",
    lineHeight: "1.7",
    maxWidth: "800px",
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
    padding: "15px 24px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
    display: "inline-block",
  },
  secondaryButton: {
    background: "#ffffff",
    color: "#111827",
    padding: "15px 24px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
    display: "inline-block",
  },
  darkLink: {
    background: "#111827",
    color: "#ffffff",
    padding: "15px 24px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
    display: "inline-block",
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
  },
  section: {
    padding: "56px 7% 80px",
  },
  sectionAlt: {
    padding: "56px 7% 80px",
    background: "#ffffff",
  },
  sectionHeader: {
    maxWidth: "880px",
    marginBottom: "28px",
  },
  sectionTitle: {
    fontSize: "36px",
    margin: "0 0 14px",
    fontWeight: "900",
  },
  sectionText: {
    color: "#475569",
    lineHeight: "1.7",
    fontSize: "18px",
  },
  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "20px",
  },
  categoryCard: {
    background: "#ffffff",
    color: "#111827",
    textDecoration: "none",
    padding: "26px",
    borderRadius: "22px",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
    lineHeight: "1.6",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
  },
  categoryLabel: {
    display: "inline-block",
    background: "#ffedd5",
    color: "#9a3412",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "900",
    marginBottom: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#f8fafc",
    padding: "26px",
    borderRadius: "22px",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
    lineHeight: "1.6",
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