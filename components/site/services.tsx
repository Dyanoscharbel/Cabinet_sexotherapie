"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

const services = [
  {
    tag: "Individuel",
    icon: "🌸",
    title: "Accompagnement Individuel Holistique",
    description:
      "Un espace privilégié pour explorer votre intimité en toute confiance. Que ce soit sur le désir, l'identité ou la relation à soi, nous cheminons à votre propre rythme.",
    features: [
      "Écoute personnalisée et sans jugement",
      "Approche globale et holistique",
      "Suivi thérapeutique adapté",
      "Ressources exclusives",
    ],
    stat: "50 min",
    statLabel: "durée moyenne",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop",
    quote: "J'ai enfin trouvé un espace où je me sens écoutée et comprise. Merci pour votre bienveillance.",
    author: "Sophie M.",
    color: "var(--primary)",
    bg: "var(--rose-pale)",
  },
  {
    tag: "Couple",
    icon: "💫",
    title: "Soutien Thérapeutique de Couple",
    description:
      "Retrouvez la complicité et renouez avec votre intimité. Un accompagnement bienveillant pour transformer votre communication et enrichir votre vie affective durable.",
    features: [
      "Communication améliorée",
      "Gestion des conflits",
      "Redécouverte de la complicité",
      "Exercices pratiques",
    ],
    stat: "92%",
    statLabel: "de satisfaction",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=1600&auto=format&fit=crop",
    quote: "Nous avons réussi à surmonter nos blocages et à retrouver une intimité épanouie.",
    author: "Marc & Léa",
    color: "var(--secondary)",
    bg: "var(--sage-light)",
  },
  {
    tag: "En ligne",
    icon: "💻",
    title: "Consultation Vidéo à Distance",
    description:
      "Bénéficiez de la même expertise que nos séances en cabinet directement chez vous. Une solution flexible par Google Meet garantissant confort et confidentialité totale.",
    features: [
      "Depuis n'importe quel endroit",
      "Flexibilité totale des horaires",
      "Confidentialité garantie",
      "Connexion sécurisée",
    ],
    stat: "100%",
    statLabel: "sécurisé",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1600&auto=format&fit=crop",
    quote: "La téléconsultation m'a permis de suivre ma thérapie malgré mes déplacements professionnels.",
    author: "Thomas L.",
    color: "var(--accent)",
    bg: "var(--muted)",
  },
];

/* ─── Progress Pill Component ─── */
interface ProgressPillProps {
  index: number;
  total: number;
  scrollYProgress: any;
  color: string;
}

function ProgressPill({ index, total, scrollYProgress, color }: ProgressPillProps) {
  const segmentStart = index / total;
  const segmentEnd = (index + 1) / total;

  const fillWidth = useTransform(scrollYProgress, (v: number) => {
    if (v <= segmentStart) return "0%";
    if (v >= segmentEnd) return "100%";
    const localProgress = (v - segmentStart) / (segmentEnd - segmentStart);
    return `${localProgress * 100}%`;
  });

  return (
    <motion.div
      className="relative h-1.5 w-12 rounded-full bg-border overflow-hidden shrink-0"
    >
      <div className="absolute inset-0 bg-border" />
      <motion.div
        className="absolute left-0 top-0 bottom-0"
        style={{
          backgroundColor: color,
          width: fillWidth,
        }}
      />
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Divide progress into segments
      const newIndex = Math.min(
        Math.floor(latest * services.length),
        services.length - 1
      );
      setActiveIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section 
      ref={containerRef} 
      id="services" 
      className="relative h-[300vh] bg-background"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full py-12">
          
          {/* Left Column: Title and Progress */}
          <div className="lg:col-span-4 flex flex-col justify-center h-full max-h-[80vh] relative z-10 p-4">
             {/* Transitioning Content Container */}
             <div className="relative w-full h-[500px]">
              {services.map((service, index) => (
                <motion.div
                  key={service.tag}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : -10,
                    pointerEvents: activeIndex === index ? "auto" : "none"
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >                 
                  <h2 className="font-display text-4xl md:text-5xl lg:text-5xl text-foreground mb-6 leading-tight">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Progress Tracker Linked to Scroll */}
                  <div className="flex gap-3 mb-12">
                    {services.map((s, i) => (
                      <ProgressPill
                        key={i}
                        index={i}
                        total={services.length}
                        scrollYProgress={scrollYProgress}
                        color={s.color}
                      />
                    ))}
                  </div>

                  {/* Big Stat */}
                  <div className="mt-auto pt-8 border-t border-neutral-100">
                    <div className="flex flex-col">
                      <span className="text-6x font-display font-medium text-foreground tracking-tight">
                        {service.stat}
                      </span>
                      <span className="text-sm text-muted-foreground uppercase tracking-wide mt-2">
                        {service.statLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Static Positioned Content Cards (Image + Text) */}
          <div className="lg:col-span-8 h-full flex items-center justify-center relative">
             <div className="relative w-full h-[500px] flex gap-6">
                
                {/* Image Card (Left side of right column) */}
                <div className="w-1/2 h-full relative rounded-[2rem] overflow-hidden bg-neutral-100 shadow-xl">
                   {services.map((service, index) => (
                      <motion.div
                        key={`img-${service.tag}`}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                         <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                         />
                      </motion.div>
                   ))}
                </div>

                {/* Text/Quote Card (Right side of right column) */}
                <div className="w-1/2 h-full relative rounded-[2rem] overflow-hidden bg-white border border-neutral-100 p-10 flex flex-col justify-between shadow-xl">
                    {services.map((service, index) => (
                        <motion.div 
                            key={`txt-${service.tag}`}
                            className="absolute inset-0 p-10 flex flex-col justify-between"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeIndex === index ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                               <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white">
                                  <ArrowRight className="w-4 h-4 -rotate-45" />
                               </div>
                               <span className="font-display font-medium text-xl">Sexomi</span>
                            </div>

                            <div>
                                <p className="text-xl md:text-2xl font-display leading-relaxed text-neutral-800 mb-6">
                                  "{service.quote}"
                                </p>
                                <div className="w-12 h-1 bg-neutral-200 mb-6"></div>
                                <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-full bg-neutral-200 relative overflow-hidden">
                                      <div 
                                        className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white uppercase"
                                        style={{ backgroundColor: service.bg, color: service.color }}
                                     >
                                        {service.author.charAt(0)}
                                     </div>
                                   </div>
                                   <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                                      {service.author}
                                   </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
