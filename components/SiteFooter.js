import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer style={styles.footer}>
      <div>
        <h2 style={styles.logo}>FreeGameHub</h2>
        <p style={styles.text}>
          Free browser games, clean casual games, puzzle games, racing games,
          action games, and no-download games you can play online.
        </p>
      </div>

      <div style={styles.links}>
        <Link href="/games" style={styles.link}>
          Games
        </Link>

        <Link href="/about" style={styles.link}>
          About
        </Link>

        <Link href="/contact" style={styles.link}>
          Contact
        </Link>

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
          DMCA
        </Link>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: "24px",
    padding: "36px 7%",
    background: "#0f172a",
    color: "#ffffff",
  },
  logo: {
    margin: "0 0 10px",
    fontSize: "24px",
    fontWeight: "900",
  },
  text: {
    maxWidth: "640px",
    color: "#cbd5e1",
    lineHeight: "1.7",
    margin: 0,
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    alignItems: "center",
    justifyContent: "flex-end",
    maxWidth: "520px",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "800",
  },
};