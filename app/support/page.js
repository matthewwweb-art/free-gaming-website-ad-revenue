import Link from "next/link";

export const metadata = {
  title: "Support Matthew Web",
  description:
    "Support original browser games, software development, and affordable technology research by Matthew Web.",
  alternates: {
    canonical: "/support",
  },
};

const projects = [
  {
    title: "Original Free Games",
    description:
      "Developing our own truck-driving game and future browser games, with free access for players.",
  },
  {
    title: "TankCPU and TankAI",
    description:
      "Researching custom CPU architectures, FPGA accelerators, prototype circuit boards, and supporting electronics.",
  },
  {
    title: "Development Equipment",
    description:
      "Improving our electronics workbench, FPGA testing equipment, computer hardware, cooling, storage, and backups.",
  },
  {
    title: "Affordable Technology",
    description:
      "Exploring ways to make useful software and computing technology more accessible and affordable.",
  },
];

export default function SupportPage() {
  const paymentUrl = "https://buy.stripe.com/5kQeVf0IT9HX75w2YW8og0k";
  const paymentReady =
    /^https:\/\/(?:buy|donate)\.stripe\.com\//.test(paymentUrl);

  return (
    <main
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "54px 20px 90px",
        color: "#f5f7fb",
      }}
    >
      <section
        style={{
          padding: "36px 25px",
          borderRadius: 22,
          background: "linear-gradient(135deg, #132640, #101827)",
          border: "1px solid #334155",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#93c5fd", fontWeight: 700 }}>
          SUPPORT INDEPENDENT DEVELOPMENT
        </p>

        <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", margin: "15px 0" }}>
          Help Us Keep Building
        </h1>

        <p
          style={{
            maxWidth: 680,
            margin: "0 auto 26px",
            lineHeight: 1.8,
            color: "#cbd5e1",
          }}
        >
          Matthew Web is building original games, experimenting with custom
          processors and AI hardware, and working toward making technology
          more affordable and accessible.
          Your optional support helps us continue that work.
        </p>

        {paymentReady ? (
          <a
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "15px 28px",
              borderRadius: 12,
              background: "#2563eb",
              color: "#ffffff",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Support Our Work
          </a>
        ) : (
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "15px 28px",
              borderRadius: 12,
              background: "#2563eb",
              color: "#ffffff",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Contact Us About Supporting
          </Link>
        )}

        <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 18 }}>
          Contributions are completely optional. Free games remain free.
        </p>
      </section>

      <h2 style={{ marginTop: 46, marginBottom: 22 }}>
        What Your Support Could Help Fund
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 18,
        }}
      >
        {projects.map((project) => (
          <article
            key={project.title}
            style={{
              background: "#151f30",
              border: "1px solid #334155",
              padding: 23,
              borderRadius: 16,
            }}
          >
            <h3 style={{ marginTop: 0, color: "#ffffff" }}>
              {project.title}
            </h3>
            <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
              {project.description}
            </p>
          </article>
        ))}
      </div>

      <p
        style={{
          color: "#94a3b8",
          lineHeight: 1.8,
          marginTop: 32,
          fontSize: 14,
        }}
      >
        Matthew Web is an independent business, not a charitable nonprofit.
        Support payments are not tax-deductible charitable donations.
        Equipment and development plans are goals, not guaranteed purchases
        or product releases.
      </p>
    </main>
  );
}
