"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { games, categories, moods, audiences } from "./gamesData";

export default function GamesPageClient() {
  const [search, setSearch] = useState("");
  const [audience, setAudience] = useState("Clean Casual");
  const [category, setCategory] = useState("All");
  const [mood, setMood] = useState("All");

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const searchText = `${game.title} ${game.description} ${game.category} ${game.mood} ${game.audience}`.toLowerCase();

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

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div>
          <p style={styles.badge}>Free Browser Games</p>

          <h1 style={styles.title}>Play Free Games Online</h1>

          <p style={styles.subtitle}>
            Browse free no-download browser games for quick casual play. Choose
            clean casual games, puzzle games, relaxing games, racing games, or
            action games.
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
              Clean Casual Games
            </button>

            <button
              type="button"
              onClick={() => setAudience("Action")}
              style={{
                ...styles.darkButton,
                opacity: audience === "Action" ? 1 : 0.75,
              }}
            >
              Action Games
            </button>

            <Link href="/" style={styles.secondaryButton}>
              Back Home
            </Link>
          </div>
        </div>

        <div style={styles.adBox}>
          <span style={styles.adLabel}>Ad Placeholder</span>
          <h2 style={styles.adTitle}>Ad-Friendly Layout</h2>
          <p style={styles.adText}>
            Ads should stay away from game buttons and controls. Clean casual
            games are separated from action games so visitors can choose the
            type of experience they want.
          </p>
        </div>
      </section>

      <section style={styles.statsBar}>
        <button
          type="button"
          onClick={() => setAudience("Clean Casual")}
          style={{
            ...styles.statCard,
            ...(audience === "Clean Casual" ? styles.statCardActive : {}),
          }}
        >
          <strong>{cleanCasualCount}</strong>
          <span>Clean Casual Games</span>
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

      <section style={styles.adBanner}>Advertisement Placeholder</section>

      {audience === "Clean Casual" && (
        <section style={styles.safeNotice}>
          <h2>Clean Casual Games</h2>
          <p>
            This section focuses on simple browser games like math, puzzle,
            hidden object, relaxing, match, driving, and casual games. It is
            designed for general visitors who want quick no-download games.
          </p>
        </section>
      )}

      {audience === "Action" && (
        <section style={styles.actionNotice}>
          <h2>Action Games</h2>
          <p>
            This section includes shooting, fighting, crash, military, and
            intense action games. These are separated from the clean casual game
            section.
          </p>
        </section>
      )}

      <section id="games" style={styles.gamesSection}>
        <div style={styles.sectionHeader}>
          <div>
            <h2 style={styles.sectionTitle}>
              {audience === "All" ? "All Games" : audience}
            </h2>
            <p style={styles.sectionDescription}>
              Search by title, category, mood, or type of game.
            </p>
          </div>
        </div>

        <div style={styles.filters}>
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
          <div style={styles.grid}>
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

                  <div
                    style={
                      game.audience === "Clean Casual"
                        ? styles.cleanCasual
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
    gridTemplateColumns: "minmax(0, 1.35fr) minmax(280px, 0.65fr)",
    gap: "32px",
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
    maxWidth: "760px",
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
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
    fontSize: "15px",
  },
  darkButton: {
    border: "0",
    cursor: "pointer",
    background: "#f97316",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
    fontSize: "15px",
  },
  secondaryButton: {
    background: "#ffffff",
    color: "#111827",
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "900",
  },
  adBox: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.16)",
    borderRadius: "24px",
    padding: "28px",
    alignSelf: "center",
  },
  adLabel: {
    display: "inline-block",
    background: "#334155",
    color: "#cbd5e1",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    marginBottom: "16px",
  },
  adTitle: {
    fontSize: "28px",
    margin: "0 0 12px",
  },
  adText: {
    color: "#d1d5db",
    lineHeight: "1.6",
  },
  statsBar: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
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
},
statCardActive: {
  borderColor: "#f97316",
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
    padding: "56px 7% 80px",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "20px",
    marginBottom: "22px",
  },
  sectionTitle: {
    fontSize: "34px",
    margin: "0 0 8px",
    fontWeight: "900",
  },
  sectionDescription: {
    margin: 0,
    color: "#64748b",
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
  cleanCasual: {
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
};