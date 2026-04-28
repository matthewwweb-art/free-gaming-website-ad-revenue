import Link from "next/link";

export default function SiteHeader() {
  return (
    <header style={styles.header}>
      <Link href="/" style={styles.logo}>
        FreeGameHub
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
  },
  logo: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "24px",
    fontWeight: "900",
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