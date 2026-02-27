export default function About() {
  return (
    <section
      id="apropos"
      style={{
        padding: "7rem 2rem",
        background: "oklch(0.985 0.007 82)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          background: "oklch(0.96 0.03 355 / 0.3)",
          clipPath: "ellipse(80% 100% at 100% 50%)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
          position: "relative",
        }}
        className="about-grid"
      >
        {/* Left: Image and quote */}
        <div className="animate-fade-up" style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: "2rem",
              overflow: "hidden",
              aspectRatio: "3/4",
              maxWidth: "380px",
              margin: "0 auto",
              boxShadow: "0 24px 70px oklch(0.43 0.1 355 / 0.16)",
            }}
          >
            <div
              className="img-placeholder"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Quote card */}
          <div
            style={{
              position: "absolute",
              bottom: "-2rem",
              right: "-1rem",
              background: "oklch(0.43 0.1 355)",
              borderRadius: "1.25rem",
              padding: "1.5rem",
              maxWidth: "240px",
              boxShadow: "0 16px 48px oklch(0.43 0.1 355 / 0.3)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "oklch(0.97 0.005 82)",
                lineHeight: 1.5,
                marginBottom: "0.75rem",
              }}
            >
              "Une approche globale du bien-être sexuel et émotionnel"
            </p>
            <div
              style={{
                width: "30px",
                height: "2px",
                background: "oklch(0.97 0.005 82 / 0.5)",
              }}
            />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <span className="section-label animate-fade-up">À propos du cabinet</span>
          <h2
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 400,
              color: "oklch(0.22 0.03 55)",
              marginTop: "0.75rem",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Un Cabinet Professionnel,{" "}
            <em style={{ color: "oklch(0.43 0.1 355)", fontStyle: "italic" }}>
              Neutre et Confidentiel
            </em>
          </h2>

          <div
            className="animate-fade-up delay-200"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans), system-ui",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "oklch(0.5 0.04 60)",
              }}
            >
              Le cabinet se positionne comme un espace professionnel où chaque
              personne peut s'exprimer librement, sans jugement. Notre engagement
              est de créer un lien thérapeutique solide basé sur la crédibilité,
              l'écoute et le respect mutuel.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans), system-ui",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "oklch(0.5 0.04 60)",
              }}
            >
              Nous accompagnons les personnes et les couples motivés à améliorer
              leur vie intime et relationnelle, avec une approche bienveillante,
              claire et sans jargon médical.
            </p>
          </div>

          {/* Philosophy points */}
          <div
            className="animate-fade-up delay-300"
            style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}
          >
            {[
              {
                title: "Bienveillance & Clarté",
                desc: "Ton \"vous\", accompagnement et objectif d'apaisement",
              },
              {
                title: "Personnalisé",
                desc: "Chaque suivi est adapté à vos besoins spécifiques",
              },
              {
                title: "Flexible",
                desc: "Consultations en présentiel ou à distance selon vos préférences",
              },
            ].map((point) => (
              <div
                key={point.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "oklch(0.43 0.1 355)",
                    flexShrink: 0,
                    marginTop: "6px",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans), system-ui",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "oklch(0.22 0.03 55)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {point.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans), system-ui",
                      fontSize: "0.83rem",
                      color: "oklch(0.5 0.04 60)",
                      lineHeight: 1.6,
                    }}
                  >
                    {point.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary animate-fade-up delay-400">
            Prendre rendez-vous
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
