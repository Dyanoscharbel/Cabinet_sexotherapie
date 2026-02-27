"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─── Nav Items with Icons ─── */
const navLinks = [
  {
    href: "#apropos",
    label: "À propos",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
    )
  },
  {
    href: "#consultations",
    label: "Consultation",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    )
  },
  {
    href: "#ressources",
    label: "Ressources",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
    )
  },
  {
    href: "#contact",
    label: "Contact",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
    )
  },
];

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  // Tooltip state for valid hover interaction
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when user scrolls past a significant point
      // Adjust threshold to match the height of the typography + gap
      const threshold = 350;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="accueil"
      className="bg-background relative flex flex-col items-center pt-32 pb-20 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >

      {/* ─── Top Utility Navbar (Always Fixed) ─── */}
      <div
        className={`fixed top-0 left-0 w-full z-60 px-4 md:px-12 flex items-center justify-between pointer-events-none transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-neutral-100 py-4 shadow-sm" : "py-6"}`}
      >
        {/* Logo (Left) */}
        <div className="pointer-events-auto flex items-center gap-2">
          <span className="font-display font-semibold text-rose-500 text-xl tracking-tight">Sexomi</span>
        </div>

        {/* Nav Links in Header — only rendered when scrolled */}
        {isScrolled && (
          <nav className="pointer-events-auto hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-neutral-100/50 rounded-full flex items-center px-5 py-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-rose-500 px-3 py-1.5 rounded-full hover:bg-neutral-50 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}

        {/* "Nous contacter" Button (Right) */}
        <div className="pointer-events-auto">
          <a
            href="#contact"
            className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* ─── Typography ─── */}
      <div className="relative z-10 text-center max-w-screen-2xl px-6 mb-24 animate-fade-up">
        {/* Title on one line as requested */}
        <h1 className="font-sans text-[clamp(2.5rem,5vw,5.5rem)] font-bold text-neutral-900 leading-[1.1] tracking-tight whitespace-nowrap overflow-visible">
          Votre intimité, <span className="text-neutral-400">apaisée & réinventée.</span>
        </h1>

        <p className="font-sans text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed opacity-80 mt-6">
          Un espace de parole bienveillant pour déconstruire, comprendre et
          reconstruire votre intimité. En cabinet ou en téléconsultation.
        </p>
      </div>

      {/* ─── Hero Image Container ─── */}
      <div className="relative w-full max-w-7xl px-4 md:px-12 animate-scale-in delay-200">

        {/* The Wrapper */}
        <div className="relative w-full aspect-16/10 md:aspect-[2.2/1]">

          {/* 1. Hero Pill Navigation — sits on top of the image top edge */}
          {!isScrolled && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto z-50 flex items-center justify-center">
                <div className="bg-background pt-0 px-3 pb-3 rounded-b-[2.5rem] ">

                <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)] border border-neutral-100/50 rounded-full flex items-center px-3 py-2 gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="relative group flex items-center justify-center text-neutral-500 hover:text-rose-500 p-2 hover:bg-neutral-50 rounded-full transition-colors"
                      onMouseEnter={() => setActiveTooltip(link.label)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label={link.label}
                    >
                      {link.icon}
                      {activeTooltip === link.label && (
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none">
                          {link.label}
                          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800"></span>
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          )}


          {/* 2. The Main Architectural Image */}
          <div className="w-full h-full relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop"
              alt="Espace d'apaisement"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              priority
            />
            {/* Subtle Grain Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
              style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-lines.png")' }}
            ></div>
          </div>

        </div>
      </div>

    </section>
  );
}
