import Link from "next/link";

const logoUrl =
  "https://cdn.imageurlgenerator.com/uploads/5e0d9325-ad82-4f88-8409-1e063ed7cc9f.png";

export default function SiteHeader() {
  return (
    <header style={styles.header}>
      <Link href="/" style={styles.brandWrap}>
        <img
          src={logoUrl}
          alt="mathew-web Free Game Hub logo"
          style={styles.logoImage}
        />

        <span style={styles.brandTextWrap}>
          <span style={styles.brandTop}>mathew-web</span>
          <span style={styles.brandBottom}>Free Game Hub</span>
        </span>
      </Link>

      <nav style={styles.nav}>
        <Link href="/" style={styles.navLink}>
          Home
        </Link>

        <Link href="/games" style={styles.navLink}>
          Games
        </Link>

        <Link href="/about" style={styles.navLink}>
          About
        </Link>

        <Link href="/contact" style={styles.navLink}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
    padding: "16px 7%",
    background: "#111827",
    color: "#ffffff",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    flexWrap: "wrap",
  },
  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
    minWidth: 0,
  },
  logoImage: {
    width: "54px",
    height: "54px",
    borderRadius: "999px",
    objectFit: "cover",
    display: "block",
    flexShrink: 0,
    boxShadow: "0 0 0 2px rgba(255,255,255,0.08)",
  },
  brandTextWrap: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.05",
  },
  brandTop: {
    color: "#f97316",
    fontWeight: "900",
    fontSize: "15px",
    letterSpacing: "0.3px",
    textTransform: "lowercase",
  },
  brandBottom: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: "24px",
    letterSpacing: "-0.3px",
  },
  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    alignItems: "center",
  },
  navLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "15px",
  },
};