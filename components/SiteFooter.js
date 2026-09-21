import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="mw-game-footer" style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brandColumn}>
          <p style={styles.kicker}>A Matthew Web Project</p>

          <h2 style={styles.logo}>Free Game Hub</h2>

          <p style={styles.text}>
            Free Game Hub is a Matthew Web gaming project focused on free
            browser games, mobile-friendly games, original game experiments,
            and future Matthew Web game development.
          </p>

          <div style={styles.buttons}>
            <a
              href="https://matthew-web.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.primaryButton}
            >
              Visit Matthew Web
            </a>

            <Link href="/games/matthew-web" style={styles.secondaryButton}>
              MW Games
            </Link>
          </div>

          <p style={styles.copyright}>
            © {currentYear} Matthew Web / Free Game Hub. All rights reserved.
          </p>
        </div>

        <div className="mw-game-footer-links" style={styles.linksGrid}>
          <div style={styles.linkGroup}>
            <h3 style={styles.linkHeading}>Play</h3>

            <Link href="/games" style={styles.link}>
              All Games
            </Link>

            <Link href="/games/category/clean-casual" style={styles.link}>
              Clean Casual
            </Link>

            <Link href="/games/category/mobile-friendly" style={styles.link}>
              Mobile-Friendly
            </Link>

            <Link href="/games/category/action" style={styles.link}>
              Action Games
            </Link>
          </div>

          <div style={styles.linkGroup}>
            <h3 style={styles.linkHeading}>Project</h3>

            <Link href="/games/matthew-web" style={styles.link}>
              Games by Matthew Web
            </Link>

            <Link href="/about" style={styles.link}>
              About
            </Link>

            <Link href="/contact" style={styles.link}>
              Contact
            </Link>

            <a
              href="https://matthew-web.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Matthew Web Main Site
            </a>
          </div>

          <div style={styles.linkGroup}>
            <h3 style={styles.linkHeading}>Legal</h3>

            <Link href="/privacy-policy" style={styles.link}>
              Privacy Policy
            </Link>

            <Link href="/terms" style={styles.link}>
              Terms
            </Link>

            <Link href="/disclaimer" style={styles.link}>
              Disclaimer
            </Link>

            <Link href="/dmca" style={styles.link}>
              DMCA / Game Removal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background:
      "linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%)",
    color: "#ffffff",
    borderTop: "1px solid rgba(255,255,255,0.12)",
  },
  inner: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.15fr) minmax(360px, 0.85fr)",
    gap: "40px",
    padding: "52px 7%",
    maxWidth: "1500px",
    margin: "0 auto",
  },
  brandColumn: {
    minWidth: 0,
  },
  kicker: {
    color: "#f97316",
    fontWeight: "950",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    fontSize: "13px",
    margin: "0 0 10px",
  },
  logo: {
    margin: "0 0 14px",
    fontSize: "clamp(32px, 5vw, 52px)",
    lineHeight: "1",
    fontWeight: "950",
    letterSpacing: "-1px",
  },
  text: {
    maxWidth: "720px",
    color: "#cbd5e1",
    lineHeight: "1.75",
    fontSize: "17px",
    margin: 0,
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "22px",
  },
  primaryButton: {
    background: "#f97316",
    color: "#ffffff",
    padding: "13px 18px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "950",
  },
  secondaryButton: {
    background: "#ffffff",
    color: "#111827",
    padding: "13px 18px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "950",
  },
  copyright: {
    marginTop: "26px",
    color: "#94a3b8",
    fontSize: "14px",
  },
  linksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    alignItems: "start",
  },
  linkGroup: {
    background: "rgba(255,255,255,0.055)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "20px",
    padding: "18px",
    minHeight: "190px",
  },
  linkHeading: {
    margin: "0 0 12px",
    color: "#ffffff",
    fontSize: "17px",
    fontWeight: "950",
  },
  link: {
    display: "block",
    color: "#cbd5e1",
    textDecoration: "none",
    fontWeight: "800",
    lineHeight: "1.4",
    marginTop: "10px",
    fontSize: "14px",
  },
};