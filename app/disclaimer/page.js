export const metadata = {
  title: "Disclaimer | FreeGameHub",
  description: "Read the FreeGameHub website disclaimer.",
};

export default function DisclaimerPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Disclaimer</h1>
        <p style={styles.subtitle}>
          This disclaimer explains how FreeGameHub provides games, links, ads,
          and third-party content.
        </p>
      </section>

      <section style={styles.content}>
        <p>Last updated: April 2026</p>

        <h2>General Information</h2>
        <p>
          FreeGameHub is a free browser games website created for entertainment
          purposes. We try to keep the website useful, clean, and easy to use,
          but we do not guarantee that every game, page, feature, or third-party
          embed will work at all times.
        </p>

        <h2>Third-Party Games</h2>
        <p>
          Some games on FreeGameHub may be embedded from third-party game
          providers, distribution platforms, or publishers. These games remain
          the property of their respective owners. FreeGameHub does not claim
          ownership of third-party games unless clearly stated.
        </p>

        <h2>Game Availability</h2>
        <p>
          Games may load from external providers. Because of this, a game may
          stop working, load slowly, show an error, or become unavailable if the
          third-party provider changes or removes the game.
        </p>

        <h2>Advertising</h2>
        <p>
          FreeGameHub may display advertisements to help support the website and
          keep games free. Advertisements may be served by third-party ad
          networks. We try to place ads away from game controls and play buttons
          to reduce confusion and accidental clicks.
        </p>

        <h2>External Links</h2>
        <p>
          This website may include links to third-party websites. FreeGameHub is
          not responsible for the content, policies, privacy practices, or
          actions of third-party websites.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          Content on this website is provided for general entertainment and
          informational purposes only. It should not be considered legal,
          financial, educational, or professional advice.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this disclaimer, contact us at{" "}
          <strong>matthewwweb@gmail.com</strong>.
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