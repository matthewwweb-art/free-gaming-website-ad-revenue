export const metadata = {
  title: "DMCA and Game Removal | FreeGameHub",
  description:
    "Submit a DMCA notice or game removal request for FreeGameHub.",
};

export default function DmcaPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>DMCA & Game Removal</h1>
        <p style={styles.subtitle}>
          If you are a rights holder and believe content should be removed from
          FreeGameHub, please contact us with the details listed below.
        </p>
      </section>

      <section style={styles.content}>
        <p>Last updated: April 2026</p>

        <h2>Game Removal Requests</h2>
        <p>
          FreeGameHub respects the rights of game developers, publishers, and
          copyright owners. If you believe a game or other content on this site
          should not appear here, contact us and we will review the request.
        </p>

        <h2>How to Submit a Request</h2>
        <p>
          Please email your request to{" "}
          <a
            href="mailto:matthewwweb@gmail.com?subject=DMCA%20%2F%20Game%20Removal%20Request"
            style={styles.emailLink}
          >
            matthewwweb@gmail.com
          </a> with the subject line:
        </p>

        <p style={styles.emailBox}>DMCA / Game Removal Request</p>

        <h2>Please Include</h2>
        <ul>
          <li>Your name or company name.</li>
          <li>Your contact email address.</li>
          <li>The title of the game or content you want reviewed.</li>
          <li>The URL of the page on FreeGameHub.</li>
          <li>Proof that you own the rights or are authorized to act.</li>
          <li>A clear explanation of why the content should be removed.</li>
        </ul>

        <h2>Review Process</h2>
        <p>
          After receiving a valid request, we will review the information and
          may remove, disable, or update the content. We may also contact you if
          more information is needed.
        </p>

        <h2>Third-Party Embedded Games</h2>
        <p>
          Some games may be embedded from third-party providers. If a game is
          hosted by another platform, you may also need to contact the original
          hosting provider or game distribution platform directly.
        </p>

        <h2>Good Faith Notice</h2>
        <p>
          Please only submit removal requests if you are the rights holder or
          authorized to act on behalf of the rights holder. False or misleading
          claims may cause delays or legal issues.
        </p>

        <h2>Contact Email</h2>
        <p>
          Send removal requests to{" "}
          <a
            href="mailto:matthewwweb@gmail.com?subject=DMCA%20%2F%20Game%20Removal%20Request"
            style={styles.emailLink}
          >
            matthewwweb@gmail.com
          </a>.
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
    maxWidth: "820px",
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
  emailBox: {
    display: "inline-block",
    background: "#f97316",
    color: "#ffffff",
    padding: "12px 16px",
    borderRadius: "14px",
    fontWeight: "900",
  },
    emailLink: {
    color: "#f97316",
    fontWeight: "900",
    textDecoration: "none",
  },
};