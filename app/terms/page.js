export const metadata = {
  title: "Terms | FreeGameHub",
  description: "Read the FreeGameHub terms of use.",
};

export default function TermsPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Terms of Use</h1>
        <p style={styles.subtitle}>
          These terms explain the rules for using FreeGameHub.
        </p>
      </section>

      <section style={styles.content}>
        <p>
          Last updated: April 2026
        </p>

        <h2>Use of This Website</h2>
        <p>
          By using FreeGameHub, you agree to use the website responsibly and
          follow all applicable laws and rules. You may not attempt to damage,
          disrupt, hack, copy, or misuse the website.
        </p>

        <h2>Games and Third-Party Content</h2>
        <p>
          Some games may be provided by third-party game publishers or
          distribution partners. Game rights remain with their respective
          owners. FreeGameHub does not claim ownership of third-party games
          unless clearly stated.
        </p>

        <h2>18+ / Action Games</h2>
        <p>
          Some games may contain action, shooting, fighting, crash, hunting, or
          intense themes. These games are separated from the clean casual section.
          Visitors are responsible for choosing appropriate games.
        </p>

        <h2>Advertising</h2>
        <p>
          This site may display ads. Ads help support the website and keep games
          free. We try to place ads in a way that does not interfere with game
          controls or mislead visitors.
        </p>

        <h2>No Guarantee of Availability</h2>
        <p>
          Games, pages, and features may be changed, removed, or unavailable at
          any time. We do not guarantee that every game will work on every
          device, browser, school network, or internet connection.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, contact us at matthewwweb@gmail.com.
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