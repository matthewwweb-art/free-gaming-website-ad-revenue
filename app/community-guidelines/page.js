import Link from "next/link";

export const metadata = {
  title: "Community Guidelines | Free Game Hub",
  description:
    "Rules for participating in the Matthew Web Free Game Hub community chat.",
  alternates: { canonical: "/community-guidelines" },
};

const rules = [
  {
    title: "Adults only for posting",
    description:
      "You must be at least 18 years old to register and post in community chat. Games may be browsed without a chat account. The age checkbox is an attestation, not independent age verification.",
  },
  {
    title: "Be respectful",
    description:
      "Do not harass, threaten, bully, discriminate against, or abuse other people. Disagreements about games and technology are welcome when they stay civil.",
  },
  {
    title: "Keep personal information private",
    description:
      "Do not post personal contact details, addresses, passwords, financial information, or other people's private information. Public messages are visible to anyone, including visitors who have not signed in.",
  },
  {
    title: "No spam or impersonation",
    description:
      "No unsolicited promotions, scams, malicious content, links, or repeated disruptive messages. Only verified staff accounts have the ADMIN badge. Do not impersonate staff or other members.",
  },
  {
    title: "Report problems",
    description:
      "Use Report on a message when signed in, or contact Matthew Web about urgent issues. Reports are reviewed by administrators; chat is not continuously monitored.",
  },
  {
    title: "Moderation and access",
    description:
      "Administrators may remove messages or block accounts that violate these rules. Posting is rate-limited, and participation may be limited or suspended to protect the community.",
  },
];

const contact = "matthewwweb@gmail.com";

export default function CommunityGuidelinesPage() {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "48px 20px 88px", color: "#f1f5f9" }}>
      <div style={{ border: "1px solid #334155", borderRadius: 20, padding: "28px 24px", background: "#101827" }}>
        <p style={{ color: "#93c5fd", fontWeight: 700, letterSpacing: ".05em", marginTop: 0 }}>
          FREE GAME HUB COMMUNITY
        </p>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 44px)", marginBottom: 12 }}>Community Guidelines</h1>
        <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
          Free Game Hub is a place to discuss games, share feedback, and talk with the Matthew Web team.
          Reading the public chat does not require an account. Posting requires signing in and confirming you are 18 or older.
        </p>
        <p style={{ fontSize: 13, color: "#94a3b8" }}>Published November 5, 2026</p>
      </div>
      <div style={{ display: "grid", gap: 14, marginTop: 26 }}>
        {rules.map((rule) => (
          <section key={rule.title} style={{ border: "1px solid #334155", borderRadius: 14, padding: "20px 22px", background: "#152135" }}>
            <h2 style={{ fontSize: 20, margin: "0 0 8px" }}>{rule.title}</h2>
            <p style={{ color: "#cbd5e1", lineHeight: 1.75, margin: 0 }}>{rule.description}</p>
          </section>
        ))}
      </div>
      <section style={{ marginTop: 30, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 22 }}>Questions or removal requests?</h2>
        <p>Email <a href={`mailto:${contact}`} style={{ color: "#93c5fd" }}>{contact}</a> with the relevant details.
          Do not include sensitive personal information in a public chat message.</p>
        <p>See our <Link href="/privacy-policy" style={{ color: "#93c5fd" }}>Privacy Policy</Link> and{" "}
          <Link href="/terms" style={{ color: "#93c5fd" }}>Terms of Use</Link>. These pages explain how community accounts, messages, and moderation are handled.</p>
      </section>
    </main>
  );
}
