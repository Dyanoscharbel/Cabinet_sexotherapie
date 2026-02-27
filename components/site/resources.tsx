const articles = [
  {
    tag: "Introduction",
    color: "oklch(0.43 0.1 355)",
    bg: "oklch(0.96 0.03 355)",
    title: "Comprendre la sexothérapie",
    excerpt:
      "La sexothérapie est une approche thérapeutique spécialisée qui aide les individus et les couples à explorer et résoudre des problématiques liées à leur vie intime. Elle combine écoute, dialogue et exercices pratiques dans un cadre sécurisé.",
    readTime: "4 min",
    icon: "🌱",
  },
  {
    tag: "Idées reçues",
    color: "oklch(0.6 0.08 145)",
    bg: "oklch(0.96 0.05 145)",
    title: "Déconstruire les idées reçues",
    excerpt:
      "Nombreuses sont les personnes qui hésitent à consulter un sexothérapeute par peur du jugement ou par préjugés. La sexothérapie n'est pas réservée aux cas \"extrêmes\" et s'adresse à quiconque souhaite améliorer son bien-être intime.",
    readTime: "5 min",
    icon: "💡",
  },
  {
    tag: "Couple",
    color: "oklch(0.75 0.1 75)",
    bg: "oklch(0.97 0.05 75)",
    title: "Communication dans le couple",
    excerpt:
      "La communication est le pilier d'une relation épanouie. Apprendre à exprimer ses besoins, écouter activement son partenaire et créer un espace de dialogue ouvert transforme profondément la qualité de la relation amoureuse.",
    readTime: "6 min",
    icon: "💬",
  },
];

export default function Resources() {
  return (
    <section
      id="ressources"
      style={{
        padding: "7rem 2rem",
        background: "oklch(0.985 0.007 82)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          <div>
            <span className="section-label animate-fade-up">Blog & ressources</span>
            <h2
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "oklch(0.22 0.03 55)",
                marginTop: "0.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              Articles & Ressources
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans), system-ui",
              fontSize: "0.9rem",
              color: "oklch(0.5 0.04 60)",
              maxWidth: "320px",
              lineHeight: 1.65,
              textAlign: "right",
            }}
          >
            Des contenus pour comprendre, déconstruire et avancer à votre rythme.
          </p>
        </div>

        {/* Articles grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {articles.map((a, i) => (
            <article
              key={a.title}
              className={`card-hover animate-fade-up delay-${(i + 2) * 100}`}
              style={{
                background: "oklch(0.985 0.007 82)",
                border: "1px solid oklch(0.88 0.018 80)",
                borderRadius: "1.5rem",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Article top area */}
              <div
                style={{
                  background: a.bg,
                  padding: "2rem 2rem 1.5rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative blob */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: a.color,
                    opacity: 0.1,
                    filter: "blur(20px)",
                  }}
                />
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{a.icon}</div>
                <div
                  style={{
                    display: "inline-block",
                    background: "oklch(0.985 0.007 82 / 0.7)",
                    color: a.color,
                    borderRadius: "9999px",
                    padding: "0.2rem 0.75rem",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-sans), system-ui",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {a.tag}
                </div>
              </div>

              {/* Article content */}
              <div style={{ padding: "1.75rem 2rem 2rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "1.3rem",
                      fontWeight: 400,
                      color: "oklch(0.22 0.03 55)",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {a.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans), system-ui",
                    fontSize: "0.85rem",
                    lineHeight: 1.75,
                    color: "oklch(0.5 0.04 60)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {a.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans), system-ui",
                      fontSize: "0.75rem",
                      color: "oklch(0.65 0.04 60)",
                    }}
                  >
                    ⏱ {a.readTime} de lecture
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans), system-ui",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: a.color,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    Lire →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div
          className="animate-fade-up"
          style={{
            marginTop: "4rem",
            background: "linear-gradient(135deg, oklch(0.96 0.03 355) 0%, oklch(0.97 0.05 75) 100%)",
            borderRadius: "2rem",
            padding: "3rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "center",
            border: "1px solid oklch(0.88 0.05 355)",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "oklch(0.22 0.03 55)",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              Newsletter mensuelle gratuite
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans), system-ui",
                fontSize: "0.9rem",
                color: "oklch(0.5 0.04 60)",
                lineHeight: 1.65,
                maxWidth: "500px",
              }}
            >
              Conseils pratiques, ressources exclusives et informations sur les prochains
              ateliers et lives. Rejoignez la communauté.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
            S'abonner
          </a>
        </div>
      </div>
    </section>
  );
}
