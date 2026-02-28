"use client";

import { useState } from "react";
import { Mail, MapPin, Share2, Send, Instagram, Linkedin, Music2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    format: "teleconsultation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-background"
      style={{
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 500,
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Contactez-nous
          </h2>
          <p
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-sans), system-ui",
              fontSize: "1.1rem",
              color: "var(--muted-foreground)",
              marginTop: "1.5rem",
              maxWidth: "600px",
              margin: "1.5rem auto 0",
              fontWeight: 400,
            }}
          >
            Une réponse sous 24h, dans le respect total de votre anonymat et de votre confort.
          </p>
        </div>

        <div
          className="contact-grid animate-fade-up delay-200"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 2fr",
            gap: "4rem",
            alignItems: "stretch",
          }}
        >
          {/* Left: Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {/* Office */}
            <div>
              <h3 style={infoTitleStyle}>Cabinet physique</h3>
              <div style={infoTextStyle}>
                12 rue de la Paix<br />
                75002 Paris, France
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 style={infoTitleStyle}>Email</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href="mailto:contact@sexomi.fr" style={linkStyle}>
                  contact@sexomi.fr
                </a>
                <a href="mailto:rdv@sexomi.fr" style={linkStyle}>
                  rdv@sexomi.fr
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 style={infoTitleStyle}>Suivez-nous</h3>
              <div style={{ display: "flex", gap: "1.25rem", marginTop: "1rem" }}>
                <a href="#" style={socialIconStyle}>
                  <Instagram size={20} />
                </a>
                <a href="#" style={socialIconStyle}>
                  <Music2 size={20} />
                </a>
                <a href="#" style={socialIconStyle}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Vertical Separator */}
          <div style={{ background: "var(--border)", width: "1px" }} className="hide-on-mobile"></div>

          {/* Right: Form */}
          <div>
            <h3 style={{ ...infoTitleStyle, marginBottom: "2rem" }}>Votre demande</h3>
            
            {submitted ? (
              <div style={{ padding: "4rem 0", textAlign: "left" }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: "1rem" }}>🌸 Message envoyé !</h4>
                <p style={{ color: "var(--muted-foreground)", maxWidth: "400px", lineHeight: "1.6" }}>
                  Merci pour votre confiance. Nous avons bien reçu votre demande et reviendrons vers vous dans les plus brefs délais.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  style={{ ...buttonStyle, marginTop: "2rem", float: "none" }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Nom complet</label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>Adresse email</label>
                  <input
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>Format de consultation (optionnel)</label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="teleconsultation">Téléconsultation</option>
                    <option value="presentiel">En présentiel</option>
                    <option value="couple">Séance de couple</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>Votre message</label>
                  <textarea
                    placeholder="Comment pouvons-nous vous aider ?"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button type="submit" style={buttonStyle}>
                    Envoyer <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

const infoTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "oklch(0.1 0.01 55)",
  marginBottom: "1rem",
};

const infoTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  lineHeight: 1.6,
  color: "oklch(0.5 0.04 60)",
};

const linkStyle: React.CSSProperties = {
  ...infoTextStyle,
  textDecoration: "none",
  transition: "color 0.2s ease",
  display: "block",
};

const socialIconStyle: React.CSSProperties = {
  color: "oklch(0.1 0.01 55)",
  transition: "transform 0.2s ease, color 0.2s ease",
};

const formGroupStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  fontWeight: 600,
  color: "oklch(0.1 0.01 55)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "1rem 0",
  border: "none",
  borderBottom: "1.5px solid oklch(0.9 0.02 80)",
  background: "transparent",
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  color: "oklch(0.1 0.01 55)",
  outline: "none",
  transition: "border-color 0.3s ease",
  borderRadius: 0,
};

const buttonStyle: React.CSSProperties = {
  background: "oklch(0.1 0.01 55)",
  color: "#fff",
  padding: "1rem 2.5rem",
  borderRadius: "0.5rem",
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  transition: "background 0.3s ease",
};
