"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="apropos" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-up">
           <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-display font-medium leading-[0.9] tracking-tighter text-foreground max-w-4xl">
            Notre<br />Histoire.
          </h2>
           <div className="max-w-md md:text-right">
             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
               Une approche globale du bien-être sexuel et émotionnel pour vous accompagner vers un équilibre durable.
             </p>
           </div>
        </div>
      </div>

      {/* 2. Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-24 animate-fade-up delay-100">
        
        {/* Left Column: Team & Introduction (Span 4) */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
           <div>
             <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4 block">Notre Équipe, Notre Histoire</span>
             <p className="text-muted-foreground leading-relaxed text-lg">
               Nous croyons en la création d'expériences qui connectent vraiment. Notre histoire est construite sur la passion, l'innovation, et la volonté de donner vie à des idées significatives.
             </p>
           </div>
           
           <div className="flex items-center gap-4 pt-4 border-t border-border/50">
             <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                {/* Placeholder Avatar - using specific image that looks professional */}
                <Image 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                  alt="Avatar"
                  fill
                  className="object-cover"
                />
             </div>
             <div>
               <div className="font-display font-medium text-foreground">Cabinet de Sexothérapie</div>
               <div className="text-sm text-muted-foreground">Fondateur & Praticien</div>
             </div>
           </div>
        </div>

        {/* Right Column: Detailed Mission (Span 7, Offset 1) */}
        <div className="lg:col-span-7 lg:col-start-6 space-y-8">
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight">
             Nous sommes une équipe de créateurs, penseurs et bâtisseurs qui croient en l'importance d'un espace neutre et bienveillant.
           </h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
             <div>
               <h4 className="font-bold text-foreground mb-2">Notre Engagement</h4>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 Le cabinet se positionne comme un espace professionnel, neutre et totalement confidentiel. Chaque consultation est personnalisée pour répondre à vos besoins spécifiques.
               </p>
             </div>
             <div>
                <h4 className="font-bold text-foreground mb-2">Nos Valeurs</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Professionnalisme, Neutralité, Confidentialité Absolue. Une expertise reconnue et une approche fondée sur les meilleures pratiques en sexothérapie.
                </p>
             </div>
           </div>
        </div>

      </div>

      {/* 3. Large Hero Image at Bottom */}
      <div className="max-w-[1400px] mx-auto w-full aspect-[16/9] md:aspect-[2.35/1] relative rounded-[2rem] overflow-hidden animate-fade-up delay-200 group">
         <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2400&auto=format&fit=crop" 
            alt="Cabinet de consultation apaisant"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Optional Overlay Text */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg">
             <div className="bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
               <p className="text-foreground font-medium text-lg">
                 "Un accompagnement professionnel pour retrouver équilibre et épanouissement."
               </p>
             </div>
          </div>
      </div>

    </section>
  );
}
