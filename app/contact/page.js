export const metadata = {
  title: "Contact | FreeGameHub",
  description: "Contact FreeGameHub for questions, feedback, or game removal requests.",
};

export default function ContactPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          Have a question, feedback, or a game removal request? Contact us here.
        </p>
      </section>

      <section style={styles.content}>
        <div style={styles.card}>
          <h2>Contact Email</h2>
          <p>
          </p>

          <a
            href="mailto:matthewwweb@gmail.com?subject=FreeGameHub%20Contact"
            style={styles.email}
          >
            matthewwweb@gmail.com
          </a>

          <h2>Game Removal Requests</h2>
          <p>
            If you are a game developer or rights holder and believe a game
            should not appear on this site, please contact us with the game
            title, URL, and proof of ownership or rights.
          </p>

          <h2>Advertising Questions</h2>
          <p>
            For advertising or partnership questions, please use the same
            contact email above.
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
    padding: "54px 7% 80px",
  },
  card: {
    maxWidth: "850px",
    background: "#ffffff",
    borderRadius: "22px",
    padding: "32px",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
    lineHeight: "1.8",
    fontSize: "17px",
  },
  email: {
    display: "inline-block",
    background: "#f97316",
    color: "#ffffff",
    padding: "12px 16px",
    borderRadius: "14px",
    fontWeight: "900",
    textDecoration: "none",
  },
};