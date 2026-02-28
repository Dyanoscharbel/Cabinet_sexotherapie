"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Prise de rendez-vous en ligne",
    description:
      "Réservez votre séance directement sur notre plateforme. Choisissez le format (présentiel ou téléconsultation), le créneau qui vous convient et effectuez le paiement sécurisé.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Première consultation",
    description:
      "Un entretien confidentiel pour faire connaissance, comprendre vos besoins et définir ensemble les objectifs de votre accompagnement dans un cadre sécurisé et bienveillant.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Accompagnement personnalisé",
    description:
      "Des séances régulières adaptées à votre rythme et vos besoins. Entre chaque séance, accès à des ressources exclusives pour poursuivre votre progression.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Suivi continu",
    description:
      "Newsletter mensuelle, ressources exclusives et suivi entre les séances pour maintenir la dynamique thérapeutique et vous accompagner dans la durée.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="processus" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="flex items-start gap-1 mb-6">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tighter text-foreground leading-none">
              Process
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-lg">
            Un parcours structuré et bienveillant pour vous accompagner vers votre équilibre intime, étape par étape.
          </p>
        </div>

        {/* Right Column: Steps List */}
        <div className="lg:col-span-7 flex flex-col space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group cursor-default"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                
                {/* Text Content */}
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span 
                      className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
                        hoveredIndex === index ? "text-primary" : "text-foreground"
                      }`}
                    >
                      Étape {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display text-foreground mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Hover Image (Desktop only, positioned relatively within the step or floating) */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, x: 20, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="hidden md:block absolute -right-4 lg:-right-12 top-0 w-48 h-48 lg:w-64 lg:h-48 z-10"
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Image (Always visible below text) */}
                <div className="md:hidden w-full h-48 relative rounded-xl overflow-hidden mt-4 shadow-md">
                   <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
