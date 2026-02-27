"use client";

import { useState, useEffect } from "react";

/* ─── Nav items with icons (SVG inline) ─────────────────── */
const navLinks = [
  {
    href: "#apropos",
    label: "À propos",
    tooltip: "À propos",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    href: "#consultations",
    label: "Consultation",
    tooltip: "Consultation",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    href: "#ressources",
    label: "Ressources",
    tooltip: "Ressources",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    href: "#contact",
    label: "Contact",
    tooltip: "Contact",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tooltip, setTooltip] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        background: scrolled
          ? "oklch(0.985 0.007 82 / 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid oklch(0.88 0.018 80)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 4px 24px oklch(0.43 0.1 355 / 0.06)"
          : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "1px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "1.3rem",
              fontWeight: 500,
              color: "oklch(0.43 0.1 355)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Cabinet
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans), system-ui",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "oklch(0.5 0.04 60)",
            }}
          >
            de Sexothérapie
          </span>
        </a>

        {/* Desktop Nav — icon pills with tooltips */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: scrolled ? "transparent" : "oklch(0.985 0.007 82 / 0.8)",
            backdropFilter: "blur(8px)",
            borderRadius: "9999px",
            padding: "0.35rem 0.75rem",
            border: "1px solid oklch(0.88 0.018 80)",
            boxShadow: "0 2px 12px oklch(0 0 0 / 0.06)",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <div key={link.href} style={{ position: "relative" }}>
              <a
                href={link.href}
                aria-label={link.label}
                onMouseEnter={() => setTooltip(link.href)}
                onMouseLeave={() => setTooltip(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "9999px",
                  color: "oklch(0.45 0.06 355)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  background: tooltip === link.href ? "oklch(0.96 0.03 355)" : "transparent",
                }}
              >
                {link.icon}
              </a>
              {/* Tooltip */}
              {tooltip === link.href && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "oklch(0.22 0.03 55)",
                    color: "oklch(0.97 0.005 82)",
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-sans), system-ui",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "0.4rem",
                    pointerEvents: "none",
                    zIndex: 100,
                    boxShadow: "0 4px 12px oklch(0 0 0 / 0.15)",
                  }}
                >
                  {link.tooltip}
                  {/* Arrow */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 0,
                      borderLeft: "4px solid transparent",
                      borderRight: "4px solid transparent",
                      borderBottom: "4px solid oklch(0.22 0.03 55)",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA button */}
        <a href="#contact" className="btn-primary hidden-mobile" style={{ fontSize: "0.8rem", padding: "0.65rem 1.5rem" }}>
          Prendre rendez-vous
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Menu"
        >
          <span
            style={{
              width: "22px",
              height: "2px",
              background: "oklch(0.43 0.1 355)",
              display: "block",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transformOrigin: "center",
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              background: "oklch(0.43 0.1 355)",
              display: "block",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              background: "oklch(0.43 0.1 355)",
              display: "block",
              transition: "transform 0.3s ease",
              transformOrigin: "center",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "oklch(0.985 0.007 82)",
            borderTop: "1px solid oklch(0.88 0.018 80)",
            padding: "1.5rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-sans), system-ui",
                fontSize: "1rem",
                fontWeight: 500,
                color: "oklch(0.35 0.04 55)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ color: "oklch(0.43 0.1 355)" }}>{link.icon}</span>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ marginTop: "0.5rem", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
            Prendre rendez-vous
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
