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
    color: "var(--primary)",
    bg: "var(--rose-pale)",
    border: "var(--rose-light)",
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
    color: "var(--primary)",
    bg: "var(--primary)", // Darker bg for featured
    border: "var(--primary)",
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
    color: "var(--secondary)",
    bg: "var(--sage-light)",
    border: "var(--secondary)",
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
      className="bg-background"
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
              color: "var(--foreground)",
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
              color: "var(--muted-foreground)",
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
          <div className="plans-list animate-fade-up delay-200 flex flex-col h-full">
            <h3 style={sectionTitleStyle}>Choisissez votre format</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    padding: "1.25rem",
                    borderRadius: "1rem",
                    border: `1.5px solid ${selectedPlanId === plan.id ? plan.border : "var(--border)"}`,
                    background: selectedPlanId === plan.id 
                      ? "var(--card)" 
                      : "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className={selectedPlanId === plan.id ? "ring-2 ring-offset-2 ring-primary/20" : "hover:bg-muted/50"}
                >
                  {/* Radio Button UI */}
                  <div 
                    style={{ 
                      width: "20px", 
                      height: "20px", 
                      borderRadius: "50%", 
                      border: `2px solid ${selectedPlanId === plan.id ? plan.color : "var(--border)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.2s ease"
                    }}
                  >
                    {selectedPlanId === plan.id && (
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: plan.color }} />
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-display), Georgia, serif",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "var(--foreground)",
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
                    <div style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>
                      {plan.duration} · {plan.bref}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Plan Details (Mobile/Desktop consistent location) */}
            <div 
              style={{ 
                marginTop: "2.5rem", 
                padding: "2rem", 
                background: "var(--muted)", 
                borderRadius: "1.5rem",
                border: "1px dashed var(--border)"
              }}
            >
              <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1.25rem", color: "var(--foreground)" }}>
                Inclus avec {selectedPlan.format} :
              </h4>
              <ul style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
                {selectedPlan.includes.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
                    <Check size={18} color={selectedPlan.color} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {selectedPlan.modalities.map(m => (
                  <span key={m} style={{ fontSize: "0.8rem", padding: "0.35rem 0.75rem", background: "var(--card)", borderRadius: "8px", border: "1px solid var(--border)", color: "var(--foreground)" }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Interface */}
          <div 
            className="booking-panel animate-scale-in delay-300 flex flex-col h-full"
            style={{
              background: "var(--card)",
              borderRadius: "2rem",
              padding: "2.5rem",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
              border: "1px solid var(--border)",
              flex: 1
            }}
          >
            <h3 style={{ ...sectionTitleStyle, marginBottom: "2rem" }}>Réserver un créneau</h3>

            <div style={{ flex: 1 }}>
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
                          : "1px solid var(--border)",
                        background: time === slot 
                          ? (selectedPlan.featured ? selectedPlan.bg : "var(--rose-pale)")
                          : "transparent",
                        color: time === slot ? selectedPlan.color : "var(--muted-foreground)",
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
            </div>

            {/* Summary & Action */}
            <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1.5rem" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>Total à régler</div>
                  <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--foreground)", lineHeight: 1 }}>{selectedPlan.price}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                   <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)" }}>{selectedPlan.format}</div>
                   {date && time && (
                     <div style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
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
              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--muted-foreground)", marginTop: "1rem" }}>
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
  color: "var(--foreground)",
  marginBottom: "1.5rem",
};

