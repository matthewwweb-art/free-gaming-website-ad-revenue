import Link from "next/link";

export const metadata = {
  title: "Free Gaming Website | Play Free Browser Games",
  description:
    "Play free online browser games instantly. No downloads, no installs, just fun games in your browser.",
};

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.badge}>Free Browser Games</p>

        <h1 style={styles.title}>
          Play Free Online Games Instantly
        </h1>

        <p style={styles.subtitle}>
          No downloads. No installs. Just pick a game and start playing.
          Built for quick games, relaxing games, arcade games, and more.
        </p>

        <div style={styles.buttons}>
          <Link href="/games" style={styles.primaryButton}>
            Play Games
          </Link>

          <a href="#how-it-works" style={styles.secondaryButton}>
            How It Works
          </a>
        </div>
      </section>

      <section style={styles.adBanner}>
        Advertisement Placeholder
      </section>

      <section id="how-it-works" style={styles.section}>
        <h2 style={styles.sectionTitle}>How This Site Makes Money</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Free Games</h3>
            <p>
              Visitors play games for free directly in the browser.
            </p>
          </div>

          <div style={styles.card}>
            <h3>Ad Revenue</h3>
            <p>
              As traffic grows, ad placements can earn revenue from impressions.
            </p>
          </div>

          <div style={styles.card}>
            <h3>SEO Traffic</h3>
            <p>
              Game pages can rank on Google for searches like free games,
              arcade games, puzzle games, and quick browser games.
            </p>
          </div>
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
    maxWidth: "850px",
    margin: "0 0 22px",
    fontWeight: "900",
  },
  subtitle: {
    fontSize: "20px",
    lineHeight: "1.7",
    maxWidth: "720px",
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
  },
  secondaryButton: {
    background: "#ffffff",
    color: "#111827",
    padding: "15px 24px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
  },
  adBanner: {
    margin: "24px auto",
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
  section: {
    padding: "56px 7% 80px",
  },
  sectionTitle: {
    fontSize: "36px",
    marginBottom: "24px",
    fontWeight: "900",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "26px",
    borderRadius: "22px",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
    lineHeight: "1.6",
  },
};