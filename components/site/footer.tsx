"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "oklch(0.22 0.03 55)",
        color: "oklch(0.75 0.04 60)",
        padding: "5rem 2rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "oklch(0.43 0.1 355 / 0.05)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Top: Brand + Nav */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid oklch(0.35 0.03 55)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "oklch(0.97 0.005 82)",
                  lineHeight: 1.1,
                  marginBottom: "0.25rem",
                }}
              >
                Cabinet
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans), system-ui",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "oklch(0.43 0.1 355)",
                }}
              >
                de Sexothérapie
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans), system-ui",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "oklch(0.65 0.04 60)",
                maxWidth: "280px",
                marginBottom: "1.5rem",
              }}
            >
              Un accompagnement professionnel, confidentiel et bienveillant pour
              retrouver équilibre et épanouissement dans votre vie intime.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["IG", "TT", "LN"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "oklch(0.3 0.03 55)",
                    color: "oklch(0.75 0.04 60)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-sans), system-ui",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.background = "oklch(0.43 0.1 355)";
                    el.style.color = "oklch(0.97 0.005 82)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.background = "oklch(0.3 0.03 55)";
                    el.style.color = "oklch(0.75 0.04 60)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {[
            {
              title: "Navigation",
              links: [
                { label: "À propos", href: "#apropos" },
                { label: "Services", href: "#services" },
                { label: "Consultations", href: "#consultations" },
                { label: "Ressources", href: "#ressources" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Services",
              links: [
                { label: "Individuelle", href: "#services" },
                { label: "Couple", href: "#services" },
                { label: "Téléconsultation", href: "#services" },
                { label: "Ateliers", href: "#consultations" },
                { label: "Newsletter", href: "#ressources" },
              ],
            },
            {
              title: "Informations",
              links: [
                { label: "Confidentialité", href: "#" },
                { label: "Mentions légales", href: "#" },
                { label: "CGU", href: "#" },
                { label: "Secret professionnel", href: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: "var(--font-sans), system-ui",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.97 0.005 82)",
                  marginBottom: "1.25rem",
                }}
              >
                {col.title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-sans), system-ui",
                        fontSize: "0.85rem",
                        color: "oklch(0.65 0.04 60)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "oklch(0.88 0.07 355)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "oklch(0.65 0.04 60)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans), system-ui",
              fontSize: "0.78rem",
              color: "oklch(0.5 0.04 60)",
            }}
          >
            © {year} Cabinet de Sexothérapie. Tous droits réservés.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans), system-ui",
              fontSize: "0.78rem",
              color: "oklch(0.5 0.04 60)",
            }}
          >
            Confidentiel · Bienveillant · Professionnel
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
