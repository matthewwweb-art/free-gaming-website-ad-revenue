import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Free Game Hub",
  description: "Terms for games, community participation, and optional support on Free Game Hub.",
};

export default function TermsPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Terms of Use</h1>
        <p style={styles.subtitle}>
          Rules for playing games and participating in the Free Game Hub community.
        </p>
      </section>

      <section style={styles.content}>
        <p>Last updated: November 5, 2026</p>

        <h2>Using This Website</h2>
        <p>
          Use Free Game Hub responsibly and in compliance with applicable laws. Do not
          disrupt the website, attempt unauthorized access, introduce harmful code,
          or misuse another person&apos;s account.
        </p>

        <h2>Games and Third-Party Content</h2>
        <p>
          Some games are provided by outside publishers or distribution partners. Rights
          in those games remain with their respective owners. Original Matthew Web games
          will be identified separately. Visitors are responsible for selecting games
          suitable for their age and preferences; some games contain action or intense themes.
        </p>

        <h2>Community Chat Eligibility</h2>
        <p>
          Reading public chat does not require an account. Posting requires a signed-in
          account and confirmation that you are at least 18 years old. Participants must
          provide a permissible public display name and must not impersonate Matthew Web
          staff or another user. Account holders are responsible for activity under their account.
        </p>

        <h2>Community Conduct</h2>
        <p>
          Chat is public. Do not post private information, harassment, threats, discriminatory
          abuse, scams, unsolicited promotions, malicious links, or repeated spam. Public
          posts may be seen or copied by anyone. Read the
          <Link href="/community-guidelines"> Community Guidelines</Link> for specific rules.
        </p>

        <h2>Moderation and Reporting</h2>
        <p>
          Members may report inappropriate messages. Matthew Web may remove messages,
          restrict posting, suspend accounts, or otherwise respond to violations. Chat
          is not continuously monitored. Reports do not guarantee an immediate response.
          Do not use community chat for emergencies or to disclose sensitive information.
        </p>

        <h2>Advertising and Optional Support</h2>
        <p>
          The site may display advertising to help keep games free. Supporting Matthew Web
          through the external Stripe payment link is optional and is not required to
          access free games or read community chat. Matthew Web is an independent business,
          not a charitable nonprofit; support payments are not charitable donations.
        </p>

        <h2>Availability and Changes</h2>
        <p>
          Features, games, chat access, and content may change or become unavailable.
          We cannot guarantee every game or feature will function on every device,
          network, or browser. We may update these terms as the service changes.
        </p>

        <h2>Contact</h2>
        <p>
          Questions or community concerns can be sent to
          <a href="mailto:matthewwweb@gmail.com"> matthewwweb@gmail.com</a>.
          Please also review the <Link href="/privacy-policy">Privacy Policy</Link>.
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
