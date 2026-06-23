"use client";

import { useState } from "react";

const DAYS = ["Tüm Günler", "Gün 1 · Cum", "Gün 2 · Cmt", "Gün 3 · Paz"];

const HEADLINERS = [
  { name: "TARKAN",       day: "Gün 1 · Cum", stage: "Ana Sahne" },
  { name: "SİNAN AKÇIL",  day: "Gün 2 · Cmt", stage: "Ana Sahne" },
  { name: "HADISE",       day: "Gün 3 · Paz", stage: "Ana Sahne" },
];

const SUB_HEADLINERS = [
  { name: "Mabel Matiz",     day: "Gün 1 · Cum", stage: "Aqua Sahne" },
  { name: "Ceza",            day: "Gün 1 · Cum", stage: "Beach Stage" },
  { name: "Gülşen",          day: "Gün 2 · Cmt", stage: "Aqua Sahne" },
  { name: "Sık! Sık! Sık!",  day: "Gün 2 · Cmt", stage: "Beach Stage" },
  { name: "Sertab Erener",   day: "Gün 3 · Paz", stage: "Aqua Sahne" },
  { name: "Cem Belevi",      day: "Gün 3 · Paz", stage: "Beach Stage" },
];

const OTHERS = [
  { name: "Hande Yener",   day: "Gün 1 · Cum" },
  { name: "Murat Boz",     day: "Gün 1 · Cum" },
  { name: "Simge",         day: "Gün 1 · Cum" },
  { name: "Duman",         day: "Gün 1 · Cum" },
  { name: "Semicenk",      day: "Gün 2 · Cmt" },
  { name: "Furkan Soysal", day: "Gün 2 · Cmt" },
  { name: "Reynmen",       day: "Gün 2 · Cmt" },
  { name: "Aleyna Tilki",  day: "Gün 2 · Cmt" },
  { name: "Zeynep Bastık", day: "Gün 3 · Paz" },
  { name: "Burak Bulut",   day: "Gün 3 · Paz" },
  { name: "İrem Derici",   day: "Gün 3 · Paz" },
  { name: "Ece Seçkin",    day: "Gün 3 · Paz" },
];

export default function LineupSection() {
  const [activeDay, setActiveDay] = useState("Tüm Günler");

  const filterDay = (day: string) => activeDay === "Tüm Günler" || day === activeDay;

  const visibleHeadliners = HEADLINERS.filter((a) => filterDay(a.day));
  const visibleSub        = SUB_HEADLINERS.filter((a) => filterDay(a.day));
  const visibleOthers     = OTHERS.filter((a) => filterDay(a.day));

  return (
    <section
      id="lineup"
      style={{
        position: "relative",
        background: "#050a0e",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "60vh",
          background: "radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 5 }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>2025 Lineup</div>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1,
            }}
          >
            Kim Çalacak?
          </h2>
        </div>

        {/* Day filter pills */}
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: activeDay === day ? "1.5px solid #00e5ff" : "1.5px solid rgba(255,255,255,0.12)",
                background: activeDay === day ? "rgba(0,229,255,0.12)" : "transparent",
                color: activeDay === day ? "#00e5ff" : "rgba(240,254,255,0.5)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* ── HEADLINERS ── */}
        {visibleHeadliners.length > 0 && (
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            {visibleHeadliners.map((a, i) => (
              <div
                key={a.name}
                className="lineup-headliner"
                style={{
                  color: i === 0 ? "#fff" : i === 1 ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.76)",
                  marginBottom: 6,
                  cursor: "default",
                  transition: "color 0.2s, text-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00e5ff";
                  e.currentTarget.style.textShadow = "0 0 40px rgba(0,229,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    i === 0 ? "#fff" : i === 1 ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.76)";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {a.name}
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        {visibleHeadliners.length > 0 && (
          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)",
              margin: "28px 0",
            }}
          />
        )}

        {/* ── SUB-HEADLINERS ── */}
        {visibleSub.length > 0 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              {visibleSub.map((a) => (
                <span
                  key={a.name}
                  className="lineup-sub"
                  style={{
                    display: "inline-block",
                    marginRight: "clamp(16px, 3vw, 48px)",
                    marginBottom: 6,
                    cursor: "default",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#c6f135"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#c0d8e0"; }}
                >
                  {a.name}
                </span>
              ))}
            </div>
            <div
              style={{
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                margin: "20px 0",
              }}
            />
          </>
        )}

        {/* ── OTHERS ── */}
        {visibleOthers.length > 0 && (
          <div style={{ textAlign: "center" }}>
            {visibleOthers.map((a) => (
              <span
                key={a.name}
                className="lineup-small"
                style={{
                  display: "inline-block",
                  marginRight: "clamp(10px, 2.5vw, 36px)",
                  marginBottom: 6,
                  cursor: "default",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#6b8fa3"; }}
              >
                {a.name}
              </span>
            ))}
          </div>
        )}

        {/* Full lineup CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p
            style={{
              fontSize: 12,
              color: "rgba(176,220,230,0.45)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Daha Fazla Sanatçı Yakında Açıklanacak
          </p>
          <a href="#tickets" className="btn-aqua">
            Şimdi Bilet Al
          </a>
        </div>
      </div>
    </section>
  );
}
