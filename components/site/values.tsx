"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function Values() {
  return (
    <section id="valeurs" className="py-24 px-4 md:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header Section */}
        <div className="mb-16 md:mb-24">          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-5xl">
            <span className="text-foreground block md:inline">Des fondations solides pour votre épanouissement, </span>
            <span className="text-muted-foreground/60 block md:inline">basées sur l'écoute, l'expertise et le respect absolu de votre intimité.</span>
          </h2>
        </div>

        {/* 2. Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 min-h-[600px]">
          
          {/* Left Column: Large Image (Span 5) */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-auto group rounded-[2rem] overflow-hidden">
             <Image
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1600&auto=format&fit=crop" 
              alt="Cadre thérapeutique bienveillant"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Corner Button */}
            <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <Plus className="w-5 h-5" />
            </div>
             {/* Gradient Overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Content Grid (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            
            {/* Top Text Block */}
            <div className="mb-4 pt-4">
              <h3 className="text-lg md:text-xl font-medium text-foreground mb-3">
                Un cadre sécurisant pour avancer.
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Nous mettons un point d'honneur à créer un environnement où vous pouvez vous exprimer librement. Notre approche combine rigueur scientifique et bienveillance humaine pour vous accompagner vers un mieux-être durable.
              </p>
            </div>

            {/* Inner Grid for Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              
              {/* Card 1: Stat / Number (Confidentialité) */}
              <div className="bg-card rounded-[1.5rem] p-8 flex flex-col justify-between h-[280px] md:h-auto border border-border hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group">
                <div className="flex justify-between items-start">
                  <span className="text-5xl md:text-6xl font-display font-medium text-foreground group-hover:text-primary transition-colors">100%</span>
                  <span className="text-xs font-mono text-muted-foreground">01</span>
                </div>
                <div>
                   <h4 className="font-medium text-foreground mt-auto mb-1">Confidentialité</h4>
                   <p className="text-sm text-muted-foreground">Secret professionnel absolu et données protégées.</p>
                </div>
              </div>

              {/* Card 2: Stat / Number (Expertise) */}
              <div className="bg-card rounded-[1.5rem] p-8 flex flex-col justify-between h-[280px] md:h-auto border border-border hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group">
                 <div className="flex justify-between items-start">
                  <span className="text-5xl md:text-6xl font-display font-medium text-foreground group-hover:text-primary transition-colors">Exp.</span>
                  <span className="text-xs font-mono text-muted-foreground">02</span>
                </div>
                 <div>
                   <h4 className="font-medium text-foreground mt-auto mb-1">Expertise Reconnue</h4>
                   <p className="text-sm text-muted-foreground">Protocoles rigoureux et formation continue.</p>
                </div>
              </div>

              {/* Card 3: Large Content (Neutralité) */}
              <div className="bg-muted rounded-[1.5rem] p-8 flex flex-col justify-between min-h-[240px] border border-transparent md:col-span-2 hover:bg-card hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
                 <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-display text-foreground">Neutralité &<br/>Bienveillance</h4>
                     <span className="text-xs font-mono text-muted-foreground">03</span>
                 </div>
                 <div className="mt-auto">
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                      Un accueil impartial, respectueux de toutes les identités, orientations et parcours de vie. Ici, le jugement n'a pas sa place, seule l'écoute compte.
                    </p>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
