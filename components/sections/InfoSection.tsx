"use client";

import { useSiteStore } from "@/lib/store";
import { Calendar, MapPin, Music2, Clock, Star, Users, Zap, Heart, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Calendar, MapPin, Music2, Clock, Star, Users, Zap, Heart,
};

export default function InfoSection() {
  const info = useSiteStore((s) => s.data.info);

  return (
    <section
      id="info"
      style={{
        background: "linear-gradient(180deg, #050a0e 0%, #071018 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.2), transparent)",
        }}
      />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>{info.sectionLabel}</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900,
              textTransform: "uppercase", letterSpacing: "-0.02em", color: "#fff",
            }}
          >
            {info.heading}
          </h2>
        </div>

        {/* Info cards */}
        <div
          style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20, marginBottom: 80,
          }}
        >
          {info.cards.map((card) => {
            const Icon = ICON_MAP[card.icon] ?? Star;
            return (
              <div
                key={card.title}
                style={{
                  background: "rgba(255,255,255,0.03)", border: `1px solid ${card.color}22`,
                  borderRadius: 16, padding: "28px 24px",
                  transition: "border-color 0.3s, background 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = `${card.color}55`; el.style.background = `${card.color}08`; el.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = `${card.color}22`; el.style.background = "rgba(255,255,255,0.03)"; el.style.transform = "translateY(0)"; }}
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 12, background: `${card.color}15`,
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                  }}
                >
                  <Icon size={20} color={card.color} />
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: card.color, textTransform: "uppercase", marginBottom: 6 }}>
                  {card.title}
                </div>
                <div style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", marginBottom: 4 }}>
                  {card.value}
                </div>
                <div style={{ fontSize: 12, color: "rgba(176,220,230,0.5)", letterSpacing: "0.04em" }}>
                  {card.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* About text block */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}
          className="info-grid"
        >
          <div>
            <div className="section-divider" style={{ marginBottom: 24 }} />
            <h3
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 900,
                textTransform: "uppercase", letterSpacing: "-0.02em",
                color: "#fff", lineHeight: 1.05, marginBottom: 20,
              }}
            >
              <span className="glow-text">{info.descTitle}</span>
            </h3>
            <p style={{ fontSize: 15, color: "rgba(176,220,230,0.65)", lineHeight: 1.8, marginBottom: 16 }}>
              {info.desc1}
            </p>
            <p style={{ fontSize: 15, color: "rgba(176,220,230,0.65)", lineHeight: 1.8 }}>
              {info.desc2}
            </p>
          </div>

          <div
            style={{
              background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.12)",
              borderRadius: 20, padding: "36px 32px",
            }}
          >
            {info.features.map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "12px 0",
                  borderBottom: "1px solid rgba(0,229,255,0.06)",
                  fontSize: 14, color: "rgba(240,254,255,0.75)",
                }}
              >
                <span style={{ fontSize: 18 }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* ── Organizatör Kartı ── */}
        <div
          style={{
            marginTop: 56,
            padding: "28px 32px",
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(255,105,0,0.07), rgba(255,61,154,0.04))",
            border: "1px solid rgba(255,105,0,0.2)",
            display: "flex",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          {/* AE monogram */}
          <div style={{
            width: 64, height: 64, borderRadius: 16, flexShrink: 0,
            background: "linear-gradient(135deg, #ff6900, #ff3d9a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 22, color: "#fff", letterSpacing: "-0.04em",
            boxShadow: "0 0 28px rgba(255,105,0,0.25)",
          }}>AE</div>

          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,105,0,0.7)", textTransform: "uppercase", marginBottom: 5 }}>
              Resmi Festival Organizatörü
            </div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", marginBottom: 4 }}>
              Akdeniz Etkinlik
            </div>
            <div style={{ fontSize: 13, color: "rgba(176,220,230,0.55)", lineHeight: 1.6 }}>
              Yılın en büyük açık hava festivalini hayata geçiren profesyonel etkinlik organizasyon ekibi.
              Konser, festival ve özel etkinliklerde güvenilir deneyim.
            </div>
          </div>

          <a
            href="https://www.instagram.com/akdenizetkinlik/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 22px", borderRadius: 999,
              background: "linear-gradient(135deg, rgba(255,105,0,0.18), rgba(255,61,154,0.12))",
              border: "1.5px solid rgba(255,105,0,0.45)",
              color: "#ff6900", fontSize: 12, fontWeight: 800,
              letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", transition: "all 0.2s", flexShrink: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,105,0,0.3), rgba(255,61,154,0.2))"; e.currentTarget.style.borderColor = "#ff6900"; e.currentTarget.style.boxShadow = "0 0 20px rgba(255,105,0,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,105,0,0.18), rgba(255,61,154,0.12))"; e.currentTarget.style.borderColor = "rgba(255,105,0,0.45)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @akdenizetkinlik
          </a>
        </div>

      <style>{`
        @media (max-width: 768px) {
          .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
