import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Free Game Hub",
  description: "How Matthew Web handles Free Game Hub usage, chat accounts, and public messages.",
};

export default function PrivacyPolicyPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.subtitle}>
          How Free Game Hub uses information to operate games, advertising, and community chat.
        </p>
      </section>

      <section style={styles.content}>
        <p>Last updated: November 5, 2026</p>

        <h2>Website Usage and Analytics</h2>
        <p>
          Free Game Hub may process technical and usage information, including pages visited,
          games opened, gameplay interactions, browser or device information, and general
          analytics. We use this information to maintain the website and understand what
          visitors find useful. Our analytics tools may include Vercel Analytics.
        </p>

        <h2>Community Chat Accounts</h2>
        <p>
          Community chat is optional. Visitors can read the public chat without creating an
          account. To post, participants sign in using an email address and create a public
          display name. Account and community records may include a user ID, email address,
          display name, adult-age confirmation, messages, timestamps, reports, and moderation
          actions such as account restrictions. Your email address is not displayed in chat.
        </p>

        <h2>Public Messages and Moderation</h2>
        <p>
          Community messages and display names are visible to other visitors, including
          people who are not signed in. Do not post contact details, financial information,
          passwords, or other sensitive information. Other visitors may copy information
          that was posted publicly. Administrators can review reports, remove messages,
          and restrict participation when necessary to enforce community rules.
        </p>

        <h2>Service Providers and Email Delivery</h2>
        <p>
          Free Game Hub uses Supabase for community authentication, database storage,
          and live-message functionality. Authentication emails may be delivered through
          Brevo. These providers process information needed to provide their services
          under their own terms and privacy practices.
        </p>

        <h2>Cookies and Advertising</h2>
        <p>
          The website may use cookies, analytics tools, and advertising services, including
          Adsterra. Advertising partners may use cookies or comparable technologies to
          deliver or measure ads, subject to applicable settings and requirements.
          You may manage browser cookies and available ad preferences through the
          relevant browser or provider controls.
        </p>

        <h2>Third-Party Games</h2>
        <p>
          Some games are embedded from third-party providers. These providers may process
          usage data according to their own privacy policies and technical settings.
        </p>

        <h2>Optional Support Payments</h2>
        <p>
          Visitors may choose to support Matthew Web through a Stripe-hosted payment link.
          Stripe handles payment information on its own checkout service. Please review
          the information shown by Stripe before making a payment.
        </p>

        <h2>Data Retention and Requests</h2>
        <p>
          Account, message, security, and moderation information may be retained as needed
          to operate the community, address reports, comply with applicable requirements,
          and maintain service records. Provider logs and backups may have separate
          retention periods. You can request access, correction, or deletion of your
          community account information by contacting Matthew Web. Requests involving
          public messages will be reviewed, and information already copied by others
          may remain outside our control.
        </p>

        <h2>Children and Community Eligibility</h2>
        <p>
          The games website is intended for a general audience. Community chat posting
          is restricted to people age 18 or older; the age confirmation is a self-attestation,
          not independent age verification. We do not knowingly permit children to register
          for community chat. Please contact us about any suspected underage account or
          inappropriate disclosure of personal information.
        </p>

        <h2>Policy Changes and Contact</h2>
        <p>
          We may revise this policy as the site changes. For privacy questions or requests,
          contact <a href="mailto:matthewwweb@gmail.com">matthewwweb@gmail.com</a>.
          Community participants should also read our <Link href="/community-guidelines">Community Guidelines</Link>.
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
