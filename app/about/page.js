export const metadata = {
  title: "About | FreeGameHub",
  description:
    "Learn about FreeGameHub, a free browser games website focused on casual online games.",
};

export default function AboutPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>About FreeGameHub</h1>
        <p style={styles.subtitle}>
          FreeGameHub is a free browser games website built for quick, simple,
          and easy online play.
        </p>
      </section>

      <section style={styles.content}>
        <h2>What We Offer</h2>
        <p>
          Our goal is to make it easy for visitors to find free browser games
          without downloads or installs. Games are organized by category, mood,
          and play style so visitors can quickly find something fun to play.
        </p>

        <h2>Clean Casual Games</h2>
        <p>
          Our clean casual section focuses on puzzle, math, hidden object,
          relaxing, match, driving, and simple casual games. This section is for
          visitors who want lighter games without intense action themes.
        </p>

        <h2>Action Games</h2>
        <p>
          Our action section includes faster and more intense games, including
          shooting, fighting, crash, military, and action-style games. These are
          separated from the clean casual section so visitors can choose the type
          of game they prefer.
        </p>

        <h2>Game Sources</h2>
        <p>
          Games on this site are added using publisher-friendly game sources,
          embed links, or other games we have permission to display. We do not
          intentionally host stolen games or unauthorized copies.
        </p>

        <h2>Advertising</h2>
        <p>
          This site may use advertising to keep the games free. Ads should be
          placed away from game controls and play buttons to reduce accidental
          clicks.
        </p>
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
    padding: "70px 7%",
    background:
      "linear-gradient(135deg, #111827 0%, #1f2937 50%, #0f172a 100%)",
    color: "#ffffff",
  },
  title: {
    fontSize: "clamp(40px, 6vw, 70px)",
    margin: "0 0 16px",
    fontWeight: "900",
  },
  subtitle: {
    maxWidth: "760px",
    fontSize: "20px",
    lineHeight: "1.7",
    color: "#d1d5db",
  },
  content: {
    maxWidth: "950px",
    padding: "54px 7% 80px",
    lineHeight: "1.8",
    fontSize: "17px",
  },
};