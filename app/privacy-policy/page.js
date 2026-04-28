export const metadata = {
  title: "Privacy Policy | FreeGameHub",
  description: "Read the FreeGameHub privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.subtitle}>
          This page explains how FreeGameHub may collect, use, and protect
          information.
        </p>
      </section>

      <section style={styles.content}>
        <p>
          Last updated: April 2026
        </p>

        <h2>Information We Collect</h2>
        <p>
          FreeGameHub may collect basic usage information such as pages visited,
          games played, browser type, device type, and general analytics data.
          This information helps us improve the website and understand which
          games are useful to visitors.
        </p>

        <h2>Cookies and Advertising</h2>
        <p>
          This site may use cookies, analytics tools, and advertising services.
          Advertising partners may use cookies or similar technologies to show
          ads and measure ad performance.
        </p>

        <h2>Google AdSense</h2>
        <p>
          If this site uses Google AdSense, Google and its partners may use
          cookies to serve ads based on a visitor&apos;s prior visits to this
          website or other websites. Visitors may manage ad personalization
          through their Google ad settings.
        </p>

        <h2>Third-Party Games</h2>
        <p>
          Some games may be embedded from third-party game providers. These
          providers may collect their own usage data according to their own
          privacy policies.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          This website is intended for general audiences. We do not knowingly
          collect personal information from children. If you believe personal
          information has been collected incorrectly, please contact us.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions, contact us at matthewwweb@gmail.com. Replace
          this email before launching the website publicly.
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