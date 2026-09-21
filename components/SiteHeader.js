"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const logoUrl =
  "https://cdn.imageurlgenerator.com/uploads/5e0d9325-ad82-4f88-8409-1e063ed7cc9f.png";

const blueLetters = [..."matthew-"];
const orangeLetters = [..."web"];

const gameLinks = [
  { label: "All Games", href: "/games" },
  { label: "Clean Casual", href: "/games/category/clean-casual" },
  { label: "Mobile-Friendly", href: "/games/category/mobile-friendly" },
  { label: "Puzzle", href: "/games/category/puzzle" },
  { label: "Racing", href: "/games/category/racing" },
  { label: "Action", href: "/games/category/action" },
];

const projectLinks = [
  { label: "Games by Matthew Web", href: "/games/matthew-web" },
  { label: "About Free Game Hub", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "DMCA / Game Removal", href: "/dmca" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const lastTouchTime = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");

  function closeEverything() {
    setMobileOpen(false);
    setDropdown("");
  }

  function toggleMobileMenu() {
    setMobileOpen((current) => !current);
    setDropdown("");
  }

  function handleTouchToggle(event) {
    event.preventDefault();
    lastTouchTime.current = Date.now();
    toggleMobileMenu();
  }

  function handleClickToggle() {
    if (Date.now() - lastTouchTime.current < 500) {
      return;
    }

    toggleMobileMenu();
  }

  function toggleDropdown(name) {
    setDropdown((current) => (current === name ? "" : name));
  }

  useEffect(() => {
    closeEverything();
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeEverything();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const gamesActive =
    pathname === "/games" || pathname.startsWith("/games/category");

  const projectActive =
    pathname === "/games/matthew-web" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/dmca";

  return (
    <header className="mwx-game-header">
      <section className="mwx-game-hero">
        <div className="mwx-game-particles" aria-hidden="true">
          <span className="mwx-game-particle mwx-game-p1" />
          <span className="mwx-game-particle orange mwx-game-p2" />
          <span className="mwx-game-particle mwx-game-p3" />
          <span className="mwx-game-particle orange mwx-game-p4" />
          <span className="mwx-game-particle mwx-game-p5" />
          <span className="mwx-game-particle orange mwx-game-p6" />
        </div>

        <div className="mwx-game-side left">
          <div>Games</div>
          <div>Technology</div>
          <div>Creativity</div>
          <div>Play Online</div>
          <div className="mwx-game-side-line" />
        </div>

        <Link
          href="/"
          className="mwx-game-brand"
          onClick={closeEverything}
          aria-label="Matthew Web Free Game Hub home"
        >
          <div className="mwx-game-brand-main">
            <div className="mwx-game-emblem-stage">
              <span className="mwx-game-energy-orange" />
              <span className="mwx-game-energy-blue" />

              <img
                src={logoUrl}
                alt="Matthew Web emblem"
                className="mwx-game-emblem"
                draggable="false"
              />
            </div>

            <div className="mwx-game-wordmark" aria-label="matthew-web">
              <span className="mwx-game-word-blue">
                {blueLetters.map((letter, index) => (
                  <span key={`blue-${index}`}>{letter}</span>
                ))}
              </span>

              <span className="mwx-game-word-orange">
                {orangeLetters.map((letter, index) => (
                  <span key={`orange-${index}`}>{letter}</span>
                ))}
              </span>
            </div>
          </div>

          <div className="mwx-game-subtitle">
            FREE GAME HUB • BROWSER GAMES • ORIGINAL EXPERIMENTS
          </div>
        </Link>

        <div className="mwx-game-side right">
          <div>Built</div>
          <div>By</div>
          <div>Matthew Web</div>
          <div className="mwx-game-side-line" />
        </div>
      </section>

      <div className="mwx-game-mobile-bar">
        <div className="mwx-game-mobile-label">
          MATTHEW-
          <span>WEB</span> GAME HUB
        </div>

        <button
          type="button"
          className={
            mobileOpen ? "mwx-game-menu-button open" : "mwx-game-menu-button"
          }
          onTouchStart={handleTouchToggle}
          onClick={handleClickToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          style={{
            position: "relative",
            zIndex: 999999,
            pointerEvents: "auto",
            touchAction: "manipulation",
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className="mw-real-phone-panel"
        style={{
          display: mobileOpen ? "block" : "none",
          position: "relative",
          zIndex: 999998,
          background:
            "linear-gradient(180deg, rgba(7, 12, 16, 0.995), rgba(2, 4, 6, 0.995))",
          borderBottom: "1px solid rgba(255,255,255,0.09)",
          padding: "12px 14px 18px",
          boxShadow: "0 14px 36px rgba(0,0,0,0.36)",
          pointerEvents: "auto",
        }}
      >
        <nav
          aria-label="Mobile navigation"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "8px",
          }}
        >
          <Link
            href="/"
            onClick={closeEverything}
            className={
              pathname === "/" ? "mwx-game-nav-link active" : "mwx-game-nav-link"
            }
          >
            Home
          </Link>

          <button
            type="button"
            onClick={() => toggleDropdown("games")}
            className={
              gamesActive
                ? "mwx-game-drop-button active"
                : "mwx-game-drop-button"
            }
          >
            Games {dropdown === "games" ? "▲" : "▼"}
          </button>

          <div
            style={{
              display: dropdown === "games" ? "grid" : "none",
              gridTemplateColumns: "1fr",
              gap: "6px",
              background: "rgba(2, 6, 10, 0.98)",
              border: "1px solid rgba(39, 204, 255, 0.22)",
              borderRadius: "14px",
              padding: "10px",
            }}
          >
            {gameLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeEverything}
                className={
                  pathname === link.href
                    ? "mwx-game-dropdown-item active"
                    : "mwx-game-dropdown-item"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => toggleDropdown("project")}
            className={
              projectActive
                ? "mwx-game-drop-button active"
                : "mwx-game-drop-button"
            }
          >
            Project {dropdown === "project" ? "▲" : "▼"}
          </button>

          <div
            style={{
              display: dropdown === "project" ? "grid" : "none",
              gridTemplateColumns: "1fr",
              gap: "6px",
              background: "rgba(2, 6, 10, 0.98)",
              border: "1px solid rgba(39, 204, 255, 0.22)",
              borderRadius: "14px",
              padding: "10px",
            }}
          >
            {projectLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeEverything}
                className={
                  pathname === link.href
                    ? "mwx-game-dropdown-item active"
                    : "mwx-game-dropdown-item"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/about"
            onClick={closeEverything}
            className={
              pathname === "/about"
                ? "mwx-game-nav-link active"
                : "mwx-game-nav-link"
            }
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeEverything}
            className={
              pathname === "/contact"
                ? "mwx-game-nav-link active"
                : "mwx-game-nav-link"
            }
          >
            Contact
          </Link>

          <a
            href="https://matthew-web.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mwx-game-main-link"
            onClick={closeEverything}
          >
            Matthew Web Main Site
          </a>
        </nav>
      </div>

      <div className="mwx-game-nav-shell">
        <nav className="mwx-game-nav" aria-label="Desktop navigation">
          <Link
            href="/"
            onClick={closeEverything}
            className={
              pathname === "/" ? "mwx-game-nav-link active" : "mwx-game-nav-link"
            }
          >
            Home
          </Link>

          <div
            className={
              dropdown === "games"
                ? "mwx-game-dropdown open"
                : "mwx-game-dropdown"
            }
          >
            <button
              type="button"
              onClick={() => toggleDropdown("games")}
              className={
                gamesActive
                  ? "mwx-game-drop-button active"
                  : "mwx-game-drop-button"
              }
              aria-expanded={dropdown === "games"}
            >
              Games <span className="mwx-game-chevron">⌄</span>
            </button>

            <div className="mwx-game-dropdown-menu">
              {gameLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeEverything}
                  className={
                    pathname === link.href
                      ? "mwx-game-dropdown-item active"
                      : "mwx-game-dropdown-item"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            className={
              dropdown === "project"
                ? "mwx-game-dropdown open"
                : "mwx-game-dropdown"
            }
          >
            <button
              type="button"
              onClick={() => toggleDropdown("project")}
              className={
                projectActive
                  ? "mwx-game-drop-button active"
                  : "mwx-game-drop-button"
              }
              aria-expanded={dropdown === "project"}
            >
              Project <span className="mwx-game-chevron">⌄</span>
            </button>

            <div className="mwx-game-dropdown-menu">
              {projectLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeEverything}
                  className={
                    pathname === link.href
                      ? "mwx-game-dropdown-item active"
                      : "mwx-game-dropdown-item"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            onClick={closeEverything}
            className={
              pathname === "/about"
                ? "mwx-game-nav-link active"
                : "mwx-game-nav-link"
            }
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeEverything}
            className={
              pathname === "/contact"
                ? "mwx-game-nav-link active"
                : "mwx-game-nav-link"
            }
          >
            Contact
          </Link>

          <div className="mwx-game-divider" />

          <a
            href="https://matthew-web.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mwx-game-main-link"
            onClick={closeEverything}
          >
            Matthew Web Main Site
          </a>
        </nav>
      </div>
    </header>
  );
}
