"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { games, categories, moods, audiences } from "./gamesData";
import AdsterraAd from "../../components/AdsterraAd";

export default function GamesPageClient() {
  const [search, setSearch] = useState("");
  const [audience, setAudience] = useState("Clean Casual");
  const [category, setCategory] = useState("All");
  const [mood, setMood] = useState("All");

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const searchText =
        `${game.title} ${game.description} ${game.category} ${game.mood} ${game.audience}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesAudience = audience === "All" || game.audience === audience;
      const matchesCategory = category === "All" || game.category === category;
      const matchesMood = mood === "All" || game.mood === mood;

      return matchesSearch && matchesAudience && matchesCategory && matchesMood;
    });
  }, [search, audience, category, mood]);

  const cleanCasualCount = games.filter(
    (game) => game.audience === "Clean Casual"
  ).length;

  const actionCount = games.filter((game) => game.audience === "Action").length;
  const mobileCount = games.filter((game) => game.mobileFriendly).length;

  return (
    <main style={styles.page}>
      <section className="mw-games-hero" style={styles.hero}>
        <div style={styles.heroCopy}>
          <p style={styles.kicker}>Matthew Web Free Game Hub</p>

          <h1 style={styles.title}>Browse Free Browser Games</h1>

          <p style={styles.subtitle}>
            Find free no-download games by category, mood, device friendliness,
            and play style. This catalog is part of the Matthew Web Free Game
            Hub project.
          </p>

          <div style={styles.heroButtons}>
            <button
              type="button"
              onClick={() => setAudience("Clean Casual")}
              style={{
                ...styles.primaryButton,
                opacity: audience === "Clean Casual" ? 1 : 0.75,
              }}
            >
              Clean Casual
            </button>

            <button
              type="button"
              onClick={() => setAudience("Action")}
              style={{
                ...styles.orangeButton,
                opacity: audience === "Action" ? 1 : 0.75,
              }}
            >
              Action Games
            </button>

            <button
              type="button"
              onClick={() => setAudience("All")}
              style={{
                ...styles.secondaryButton,
                opacity: audience === "All" ? 1 : 0.75,
              }}
            >
              All Games
            </button>
          </div>
        </div>

        <div className="mw-games-hero-ad" style={styles.heroAdBox}>
          <AdsterraAd type="rectangle300x250" />
        </div>
      </section>

      <section className="mw-games-stats" style={styles.statsBar}>
        <button
          type="button"
          onClick={() => setAudience("Clean Casual")}
          style={{
            ...styles.statCard,
            ...(audience === "Clean Casual" ? styles.statCardActive : {}),
          }}
        >
          <strong>{cleanCasualCount}</strong>
          <span>Clean Casual</span>
        </button>

        <button
          type="button"
          onClick={() => setAudience("Action")}
          style={{
            ...styles.statCard,
            ...(audience === "Action" ? styles.statCardActive : {}),
          }}
        >
          <strong>{actionCount}</strong>
          <span>Action Games</span>
        </button>

        <Link href="/games/category/mobile-friendly" style={styles.statCardLink}>
          <strong>{mobileCount}</strong>
          <span>Mobile-Friendly</span>
        </Link>

        <button
          type="button"
          onClick={() => setAudience("All")}
          style={{
            ...styles.statCard,
            ...(audience === "All" ? styles.statCardActive : {}),
          }}
        >
          <strong>{games.length}</strong>
          <span>All Games</span>
        </button>
      </section>

      <section className="fg-mobile-ad" style={styles.mobileAd}>
        <AdsterraAd type="mobile320x50" />
      </section>

      <section className="fg-bottom-ad" style={styles.adBanner}>
        <AdsterraAd type="leaderboard728x90" />
      </section>

      <section style={styles.categorySeoLinks}>
        <p style={styles.sectionKicker}>Quick Categories</p>
        <h2 style={styles.categorySeoTitle}>Browse Popular Game Categories</h2>

        <div className="mw-category-seo-grid" style={styles.categorySeoGrid}>
          <Link href="/games/category/clean-casual" style={styles.categorySeoCard}>
            Clean Casual
          </Link>

          <Link href="/games/category/mobile-friendly" style={styles.categorySeoCard}>
            Mobile-Friendly
          </Link>

          <Link href="/games/category/puzzle" style={styles.categorySeoCard}>
            Puzzle
          </Link>

          <Link href="/games/category/racing" style={styles.categorySeoCard}>
            Racing
          </Link>

          <Link href="/games/category/action" style={styles.categorySeoCard}>
            Action
          </Link>

          <Link href="/games/category/educational" style={styles.categorySeoCard}>
            Educational
          </Link>

          <Link href="/games/category/relaxing" style={styles.categorySeoCard}>
            Relaxing
          </Link>

          <Link href="/games/category/sports" style={styles.categorySeoCard}>
            Sports
          </Link>

          <Link href="/games/category/skill" style={styles.categorySeoCard}>
            Skill
          </Link>

          <Link href="/games/category/simulation" style={styles.categorySeoCard}>
            Simulation
          </Link>

          <Link href="/games/category/arcade" style={styles.categorySeoCard}>
            Arcade
          </Link>

          <Link href="/games/category/adventure" style={styles.categorySeoCard}>
            Adventure
          </Link>
        </div>
      </section>

      {audience === "Clean Casual" && (
        <section style={styles.safeNotice}>
          <h2>Clean Casual Games</h2>
          <p>
            This section focuses on simple browser games like math, puzzle,
            hidden object, relaxing, match, driving, and casual games. It is
            designed for visitors who want quick no-download games.
          </p>
        </section>
      )}

      {audience === "Action" && (
        <section style={styles.actionNotice}>
          <h2>Action Games</h2>
          <p>
            This section includes shooting, fighting, crash, military, and
            intense action games. These are separated from the clean casual game
            section so visitors can choose the experience they want.
          </p>
        </section>
      )}

      <section id="games" style={styles.gamesSection}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.sectionKicker}>Game Library</p>

            <h2 style={styles.sectionTitle}>
              {audience === "All" ? "All Games" : audience}
            </h2>

            <p style={styles.sectionDescription}>
              Search by title, category, mood, or type of game.
            </p>
          </div>
        </div>

        <div className="mw-games-filters" style={styles.filters}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search games..."
            style={styles.input}
          />

          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            style={styles.select}
          >
            {audiences.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.select}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            style={styles.select}
          >
            {moods.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {filteredGames.length === 0 ? (
          <div style={styles.empty}>No games found. Try another search.</div>
        ) : (
          <div className="mw-games-grid" style={styles.grid}>
            {filteredGames.map((game) => (
              <Link
                href={`/games/${game.slug}`}
                key={game.slug}
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

                  <div style={styles.tagsRow}>
                    <span
                      style={
                        game.audience === "Clean Casual"
                          ? styles.cleanCasual
                          : styles.actionTag
                      }
                    >
                      {game.audience}
                    </span>

                    <span style={styles.mobileTag}>
                      {game.mobileFriendly ? "Mobile OK" : "Desktop Better"}
                    </span>
                  </div>

                  <div style={styles.playButton}>Play Now</div>
                </div>
              </Link>
            ))}
          </div>
        )}
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
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.2fr) 340px",
    gap: "34px",
    alignItems: "center",
    padding: "74px 7%",
    background:
      "radial-gradient(circle at top right, rgba(249,115,22,0.20), transparent 32%), linear-gradient(135deg, #020617 0%, #111827 54%, #0f172a 100%)",
    color: "#ffffff",
  },
  heroCopy: {
    minWidth: 0,
  },
  kicker: {
    display: "inline-block",
    color: "#f97316",
    fontWeight: "950",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    fontSize: "14px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "clamp(42px, 7vw, 76px)",
    lineHeight: "0.96",
    margin: "0 0 22px",
    fontWeight: "950",
    letterSpacing: "-1.7px",
  },
  subtitle: {
    fontSize: "20px",
    lineHeight: "1.7",
    color: "#d1d5db",
    maxWidth: "780px",
  },
  heroButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "28px",
  },
  primaryButton: {
    border: "0",
    cursor: "pointer",
    background: "#22c55e",
    color: "#ffffff",
    padding: "14px 20px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "950",
    fontSize: "15px",
  },
  orangeButton: {
    border: "0",
    cursor: "pointer",
    background: "#f97316",
    color: "#ffffff",
    padding: "14px 20px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "950",
    fontSize: "15px",
  },
  secondaryButton: {
    border: "0",
    cursor: "pointer",
    background: "#ffffff",
    color: "#111827",
    padding: "14px 20px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "950",
    fontSize: "15px",
  },
  heroAdBox: {
    width: "320px",
    minHeight: "270px",
    background: "rgba(255,255,255,0.075)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "26px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,0.24)",
  },
  statsBar: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "16px",
    padding: "24px 7% 0",
  },
  statCard: {
    cursor: "pointer",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    background: "#ffffff",
    borderRadius: "18px",
    padding: "18px",
    textAlign: "left",
    boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    color: "#111827",
  },
  statCardLink: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    background: "#ffffff",
    borderRadius: "18px",
    padding: "18px",
    textAlign: "left",
    boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    color: "#111827",
    textDecoration: "none",
  },
  statCardActive: {
    borderColor: "#f97316",
  },
  mobileAd: {
    display: "none",
    margin: "20px auto 0",
    padding: "0 12px",
    maxWidth: "360px",
  },
  adBanner: {
    margin: "24px auto 0",
    maxWidth: "1100px",
    minHeight: "90px",
    border: "2px dashed #cbd5e1",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontWeight: "900",
    background: "#ffffff",
    overflow: "hidden",
  },
  categorySeoLinks: {
    padding: "44px 7% 0",
  },
  sectionKicker: {
    color: "#f97316",
    fontWeight: "950",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    fontSize: "13px",
    margin: "0 0 10px",
  },
  categorySeoTitle: {
    fontSize: "clamp(30px, 5vw, 46px)",
    margin: "0 0 18px",
    fontWeight: "950",
    letterSpacing: "-1px",
  },
  categorySeoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "12px",
  },
  categorySeoCard: {
    background: "#ffffff",
    color: "#111827",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    borderRadius: "16px",
    padding: "16px",
    textDecoration: "none",
    fontWeight: "950",
    textAlign: "center",
    boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
  },
  safeNotice: {
    margin: "28px 7% 0",
    background: "#dcfce7",
    color: "#14532d",
    padding: "24px",
    borderRadius: "20px",
    lineHeight: "1.6",
  },
  actionNotice: {
    margin: "28px 7% 0",
    background: "#ffedd5",
    color: "#7c2d12",
    padding: "24px",
    borderRadius: "20px",
    lineHeight: "1.6",
  },
  gamesSection: {
    padding: "56px 7% 84px",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "20px",
    marginBottom: "22px",
  },
  sectionTitle: {
    fontSize: "clamp(34px, 5vw, 52px)",
    margin: "0 0 8px",
    fontWeight: "950",
    letterSpacing: "-1px",
  },
  sectionDescription: {
    margin: 0,
    color: "#64748b",
    lineHeight: "1.6",
  },
  filters: {
    display: "grid",
    gridTemplateColumns: "1fr 180px 180px 180px",
    gap: "12px",
    marginBottom: "26px",
  },
  input: {
    width: "100%",
    border: "1px solid #cbd5e1",
    borderRadius: "14px",
    padding: "14px 16px",
    fontSize: "16px",
    outline: "none",
    background: "#ffffff",
    boxSizing: "border-box",
  },
  select: {
    border: "1px solid #cbd5e1",
    borderRadius: "14px",
    padding: "14px 16px",
    fontSize: "16px",
    background: "#ffffff",
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
    border: "1px solid #e5e7eb",
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
    fontWeight: "950",
  },
  cardText: {
    color: "#475569",
    lineHeight: "1.5",
    minHeight: "74px",
  },
  tagsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "8px",
  },
  cleanCasual: {
    display: "inline-block",
    background: "#dcfce7",
    color: "#166534",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "950",
  },
  actionTag: {
    display: "inline-block",
    background: "#ffedd5",
    color: "#9a3412",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "950",
  },
  mobileTag: {
    display: "inline-block",
    background: "#e0f2fe",
    color: "#075985",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "950",
  },
  playButton: {
    marginTop: "16px",
    background: "#111827",
    color: "#ffffff",
    textAlign: "center",
    padding: "12px",
    borderRadius: "14px",
    fontWeight: "950",
  },
  empty: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "18px",
    color: "#64748b",
    textAlign: "center",
    fontWeight: "800",
  },
};