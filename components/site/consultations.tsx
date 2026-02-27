"use client";

import * as React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock, MapPin, Users, Video, Euro, Info, ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const plans = [
  {
    id: "individuelle",
    format: "Individuelle",
    price: "70€",
    duration: "50 min",
    bref: "Espace personnel d'écoute et de travail.",
    icon: "🌸",
    color: "oklch(0.43 0.1 355)",
    bg: "oklch(0.96 0.03 355)",
    border: "oklch(0.88 0.05 355)",
    includes: [
      "Bilan personnalisé",
      "Ressources documentaires",
      "Suivi entre les séances",
    ],
    modalities: ["Cabinet", "Visio"],
  },
  {
    id: "couple",
    format: "Couple / Duo",
    price: "100€",
    duration: "75 min",
    bref: "Pour rétablir le dialogue et l'intimité.",
    icon: "💫",
    color: "oklch(0.32 0.1 355)",
    bg: "oklch(0.43 0.1 355)", // Darker bg for featured
    border: "oklch(0.43 0.1 355)",
    includes: [
      "Bilan relationnel complet",
      "Exercices pratiques à deux",
      "Médiation bienveillante",
    ],
    modalities: ["Cabinet", "Visio"],
    featured: true,
  },
  {
    id: "atelier",
    format: "Atelier Thématique",
    price: "45€",
    duration: "2h30",
    bref: "Échanges et apprentissage en groupe.",
    icon: "✨",
    color: "oklch(0.6 0.08 145)",
    bg: "oklch(0.96 0.05 145)",
    border: "oklch(0.88 0.07 145)",
    includes: [
      "Support pédagogique inclus",
      "Groupe de 8 pers. max",
      "Collation offerte",
    ],
    modalities: ["Présentiel"],
  },
];

export default function Consultations() {
  const [selectedPlanId, setSelectedPlanId] = React.useState<string>("individuelle");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [time, setTime] = React.useState<string>("");

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[0];

  const timeSlots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  return (
    <section
      id="consultations"
      className="bg-white"
      style={{
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 500,
              color: "oklch(0.1 0.01 55)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Consultations
          </h2>
          <p
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-sans), system-ui",
              fontSize: "1.1rem",
              color: "oklch(0.5 0.04 60)",
              maxWidth: "600px",
              margin: "0 auto",
              fontWeight: 400,
            }}
          >
            Explications, tarifs, prise de RDV, modalités visio ou présentiel.
            <br />
            Un accompagnement sur mesure adapté à vos besoins.
          </p>
        </div>

        <div className="consultation-layout">
          {/* Left Column: Plan Selection */}
          <div className="plans-list animate-fade-up delay-200">
            <h3 style={sectionTitleStyle}>Choisissez votre format</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem",
                    borderRadius: "1rem",
                    border: `1.5px solid ${selectedPlanId === plan.id ? plan.border : "transparent"}`,
                    background: selectedPlanId === plan.id 
                      ? (plan.featured ? "oklch(0.99 0.01 355)" : "oklch(0.99 0.01 355)") 
                      : "oklch(0.985 0.005 80)",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className={selectedPlanId === plan.id ? "ring-2 ring-offset-2 ring-slate-100" : "hover:bg-slate-50"}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: plan.featured && selectedPlanId === plan.id ? plan.color : "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                      color: plan.featured && selectedPlanId === plan.id ? "white" : "inherit",
                    }}
                  >
                    {plan.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-display), Georgia, serif",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "oklch(0.2 0.02 55)",
                        }}
                      >
                        {plan.format}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-sans), system-ui",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: plan.color,
                        }}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "oklch(0.5 0.04 60)" }}>
                      {plan.duration} · {plan.bref}
                    </div>
                  </div>

                  {selectedPlanId === plan.id && (
                    <div style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)" }}>
                      
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Selected Plan Details (Mobile/Desktop consistent location) */}
            <div 
              style={{ 
                marginTop: "2rem", 
                padding: "1.5rem", 
                background: "oklch(0.99 0.002 85)", 
                borderRadius: "1rem",
                border: "1px dashed oklch(0.88 0.02 80)"
              }}
            >
              <h4 style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "1rem", color: "oklch(0.3 0.03 55)" }}>
                Inclus avec {selectedPlan.format} :
              </h4>
              <ul style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }}>
                {selectedPlan.includes.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.85rem", color: "oklch(0.45 0.04 60)" }}>
                    <Check size={16} color={selectedPlan.color} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {selectedPlan.modalities.map(m => (
                  <span key={m} style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", background: "white", borderRadius: "4px", border: "1px solid oklch(0.92 0.01 85)", color: "oklch(0.5 0.02 60)" }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Interface */}
          <div 
            className="booking-panel animate-scale-in delay-300"
            style={{
              background: "white",
              borderRadius: "2rem",
              padding: "2.5rem",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
              border: "1px solid oklch(0.92 0.01 85)",
            }}
          >
            <h3 style={{ ...sectionTitleStyle, marginBottom: "2rem" }}>Réserver un créneau</h3>

            {/* Name Input */}
            <div style={{ marginBottom: "2rem" }}>
              <Label style={{ display: "block", marginBottom: "0.75rem" }}>Pour qui ?</Label>
              <Input 
                placeholder="Votre nom complet" 
                className="h-12 text-base bg-transparent border-input focus-visible:ring-1 focus-visible:ring-ring" 
              />
            </div>

            {/* Date Picker */}
            <div style={{ marginBottom: "2rem" }}>
              <Label style={{ display: "block", marginBottom: "0.75rem" }}>Date souhaitée</Label>
              <Popover>
                <PopoverTrigger
                  className={cn(
                    "flex w-full items-center justify-start rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-left font-normal h-12 text-base",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: fr }) : <span>Choisir une date</span>}
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    locale={fr}
                    classNames={{
                      day_selected: "bg-[--color-primary] text-white hover:bg-[--color-primary] hover:text-white focus:bg-[--color-primary] focus:text-white",
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Slots */}
            <div style={{ marginBottom: "2.5rem" }}>
              <Label style={{ display: "block", marginBottom: "0.75rem" }}>Horaire</Label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTime(slot)}
                    style={{
                      padding: "0.6rem",
                      borderRadius: "0.5rem",
                      border: time === slot 
                        ? `1.5px solid ${selectedPlan.color}`
                        : "1px solid oklch(0.9 0.01 85)",
                      background: time === slot 
                        ? selectedPlan.featured ? selectedPlan.bg : "oklch(0.98 0.01 355)"
                        : "white",
                      color: time === slot ? selectedPlan.color : "oklch(0.4 0.02 55)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary & Action */}
            <div style={{ paddingTop: "2rem", borderTop: "1px solid oklch(0.92 0.01 85)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1.5rem" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", color: "oklch(0.6 0.02 60)", marginBottom: "0.25rem" }}>Total à régler</div>
                  <div style={{ fontSize: "2rem", fontWeight: 700, color: "oklch(0.2 0.02 55)", lineHeight: 1 }}>{selectedPlan.price}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                   <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "oklch(0.3 0.02 55)" }}>{selectedPlan.format}</div>
                   {date && time && (
                     <div style={{ fontSize: "0.8rem", color: "oklch(0.5 0.04 60)" }}>
                       {format(date, "d MMMM", { locale: fr })} à {time}
                     </div>
                   )}
                </div>
              </div>

              <Button 
                className="w-full h-12 text-base font-medium rounded-lg"
                style={{ 
                  backgroundColor: selectedPlan.color,
                  color: "white", 
                  opacity: (!date || !time) ? 0.7 : 1,
                  boxShadow: "0 10px 20px -5px rgba(0,0,0,0.1)"
                }}
                disabled={!date || !time}
              >
                Confirmer la réservation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "oklch(0.6 0.02 60)", marginTop: "1rem" }}>
                Aucun paiement n'est débité pour l'instant
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .consultation-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (max-width: 900px) {
          .consultation-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
           .booking-panel {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "oklch(0.2 0.02 55)",
  marginBottom: "1.5rem",
};

