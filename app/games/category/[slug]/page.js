import Link from "next/link";
import { notFound } from "next/navigation";
import { games } from "../../gamesData";

const categoryPages = {
  "clean-casual": {
    title: "Clean Casual Games",
    heading: "Free Clean Casual Games",
    description:
      "Play clean casual browser games online with no downloads. Browse puzzle games, relaxing games, math games, hidden object games, and simple games for quick breaks.",
    filterType: "audience",
    filterValue: "Clean Casual",
  },
  action: {
    title: "Action Games",
    heading: "Free Action Games",
    description:
      "Play free action browser games online. Browse shooting games, fighting games, crash games, military games, and intense games with no downloads.",
    filterType: "audience",
    filterValue: "Action",
  },
  puzzle: {
    title: "Puzzle Games",
    heading: "Free Puzzle Games",
    description:
      "Play free puzzle games online. Find match games, hidden object games, logic games, and casual puzzle games you can play instantly in your browser.",
    filterType: "category",
    filterValue: "Puzzle",
  },
  racing: {
    title: "Racing Games",
    heading: "Free Racing Games",
    description:
      "Play free racing and driving games online. Drive cars, SUVs, vehicles, and simulators directly in your browser with no downloads.",
    filterType: "category",
    filterValue: "Racing",
  },
  educational: {
    title: "Educational Games",
    heading: "Free Educational Games",
    description:
      "Play free educational browser games online. Practice math, quick thinking, logic, and brain games directly in your browser.",
    filterType: "category",
    filterValue: "Educational",
  },
  relaxing: {
    title: "Relaxing Games",
    heading: "Free Relaxing Games",
    description:
      "Play free relaxing browser games online. Enjoy calm casual games, aquarium games, puzzle games, and slow-paced games with no downloads.",
    filterType: "category",
    filterValue: "Relaxing",
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const page = categoryPages[resolvedParams.slug];

  if (!page) {
    return {
      title: "Category Not Found | FreeGameHub",
    };
  }

  return {
    title: `${page.title} | FreeGameHub`,
    description: page.description,
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const page = categoryPages[resolvedParams.slug];

  if (!page) {
    notFound();
  }

  const categoryGames = games.filter((game) => {
    if (page.filterType === "audience") {
      return game.audience === page.filterValue;
    }

    return game.category === page.filterValue;
  });

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <p style={styles.badge}>Free Browser Games</p>
        <h1 style={styles.title}>{page.heading}</h1>
        <p style={styles.subtitle}>{page.description}</p>

        <div style={styles.buttons}>
          <Link href="/games" style={styles.primaryButton}>
            Browse All Games
          </Link>

          <Link href="/" style={styles.secondaryButton}>
            Back Home
          </Link>
        </div>
      </section>

      <section style={styles.adBanner}>Advertisement Placeholder</section>

      <section style={styles.content}>
        <div style={styles.intro}>
          <h2>{page.heading}</h2>
          <p>
            This page collects games from the FreeGameHub library that match
            this topic. These pages help visitors find games faster and help
            search engines understand the different types of games available on
            the site.
          </p>
        </div>

        {categoryGames.length === 0 ? (
          <div style={styles.empty}>
            No games found in this category yet.
          </div>
        ) : (
          <div style={styles.grid}>
            {categoryGames.map((game) => (
              <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                style={styles.card}
              >
                <div
                  style={{
                    ...styles.thumbnail,
                    backgroundImage: `url(${game.thumbnail})`,
                  }}
                />

                <div style={styles.cardBody}>
                  <div style={styles.cardMeta}>
                    <span>{game.category}</span>
                    <span>{game.duration}</span>
                  </div>

                  <h3 style={styles.cardTitle}>{game.title}</h3>

                  <p style={styles.cardText}>{game.description}</p>

                  <div
                    style={
                      game.audience === "Clean Casual"
                        ? styles.cleanTag
                        : styles.actionTag
                    }
                  >
                    {game.audience}
                  </div>

                  <div style={styles.playButton}>Play Now</div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div style={styles.seoText}>
          <h2>Why Play {page.title}?</h2>
          <p>
            Browser games are quick to start, easy to share, and do not require
            downloads or installations. FreeGameHub organizes games by category
            so visitors can find clean casual games, puzzle games, relaxing
            games, racing games, educational games, and action games faster.
          </p>

          <h2>More Game Categories</h2>
          <div style={styles.categoryLinks}>
            <Link href="/games/category/clean-casual" style={styles.categoryLink}>
              Clean Casual
            </Link>

            <Link href="/games/category/puzzle" style={styles.categoryLink}>
              Puzzle
            </Link>

            <Link href="/games/category/racing" style={styles.categoryLink}>
              Racing
            </Link>

            <Link href="/games/category/action" style={styles.categoryLink}>
              Action
            </Link>

            <Link href="/games/category/educational" style={styles.categoryLink}>
              Educational
            </Link>

            <Link href="/games/category/relaxing" style={styles.categoryLink}>
              Relaxing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(categoryPages).map((slug) => ({
    slug,
  }));
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
  badge: {
    display: "inline-block",
    background: "#f97316",
    color: "#ffffff",
    padding: "8px 14px",
    borderRadius: "999px",
    fontWeight: "900",
    fontSize: "14px",
    marginBottom: "18px",
  },
  title: {
    fontSize: "clamp(40px, 6vw, 72px)",
    lineHeight: "1",
    margin: "0 0 20px",
    fontWeight: "900",
  },
  subtitle: {
    fontSize: "19px",
    lineHeight: "1.7",
    color: "#d1d5db",
    maxWidth: "800px",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "28px",
  },
  primaryButton: {
    background: "#f97316",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
  },
  secondaryButton: {
    background: "#ffffff",
    color: "#111827",
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
  },
  adBanner: {
    margin: "24px auto 0",
    maxWidth: "1100px",
    minHeight: "90px",
    borderWidth: "2px",
    borderStyle: "dashed",
    borderColor: "#cbd5e1",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontWeight: "900",
    background: "#ffffff",
  },
  content: {
    padding: "56px 7% 80px",
  },
  intro: {
    maxWidth: "900px",
    background: "#ffffff",
    padding: "26px",
    borderRadius: "22px",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
    lineHeight: "1.7",
    marginBottom: "28px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "22px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "22px",
    overflow: "hidden",
    textDecoration: "none",
    color: "#111827",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
  },
  thumbnail: {
    height: "190px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardBody: {
    padding: "18px",
  },
  cardMeta: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: "800",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "24px",
    margin: "0 0 8px",
    fontWeight: "900",
  },
  cardText: {
    color: "#475569",
    lineHeight: "1.5",
    minHeight: "74px",
  },
  cleanTag: {
    display: "inline-block",
    background: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "900",
    marginTop: "8px",
  },
  actionTag: {
    display: "inline-block",
    background: "#ffedd5",
    color: "#9a3412",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "900",
    marginTop: "8px",
  },
  playButton: {
    marginTop: "16px",
    background: "#111827",
    color: "#ffffff",
    textAlign: "center",
    padding: "12px",
    borderRadius: "14px",
    fontWeight: "900",
  },
  empty: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "18px",
    color: "#64748b",
    textAlign: "center",
    fontWeight: "800",
  },
  seoText: {
    marginTop: "34px",
    background: "#ffffff",
    padding: "28px",
    borderRadius: "22px",
    boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
    lineHeight: "1.7",
  },
  categoryLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "16px",
  },
  categoryLink: {
    background: "#111827",
    color: "#ffffff",
    padding: "10px 14px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "900",
  },
};