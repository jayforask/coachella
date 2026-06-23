"use client";

import { useState } from "react";
import { useSiteStore } from "@/lib/store";

export default function LineupSection() {
  const lineup = useSiteStore((s) => s.data.lineup);
  const [activeDay, setActiveDay] = useState(lineup.days[0] ?? "Tüm Günler");

  const filterDay = (day: string) => activeDay === lineup.days[0] || day === activeDay;

  const visibleHeadliners = lineup.artists.filter((a) => a.tier === "headliner" && filterDay(a.day));
  const visibleSub        = lineup.artists.filter((a) => a.tier === "sub"        && filterDay(a.day));
  const visibleOthers     = lineup.artists.filter((a) => a.tier === "other"      && filterDay(a.day));

  return (
    <section
      id="lineup"
      style={{ position: "relative", background: "#050a0e", padding: "100px 0 80px", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: "80vw", height: "60vh",
          background: "radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 5 }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>{lineup.sectionLabel}</div>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5rem)", fontWeight: 900, letterSpacing: "-0.03em",
              textTransform: "uppercase", color: "#fff", lineHeight: 1,
            }}
          >
            {lineup.heading}
          </h2>
        </div>

        {/* Day filter pills */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
          {lineup.days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              style={{
                padding: "8px 20px", borderRadius: 999,
                border: activeDay === day ? "1.5px solid #00e5ff" : "1.5px solid rgba(255,255,255,0.12)",
                background: activeDay === day ? "rgba(0,229,255,0.12)" : "transparent",
                color: activeDay === day ? "#00e5ff" : "rgba(240,254,255,0.5)",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", transition: "all 0.2s ease",
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* HEADLINERS */}
        {visibleHeadliners.length > 0 && (
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            {visibleHeadliners.map((a, i) => (
              <div
                key={a.id}
                className="lineup-headliner"
                style={{
                  color: i === 0 ? "#fff" : i === 1 ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.76)",
                  marginBottom: 6, cursor: "default", transition: "color 0.2s, text-shadow 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#00e5ff"; e.currentTarget.style.textShadow = "0 0 40px rgba(0,229,255,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = i === 0 ? "#fff" : i === 1 ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.76)"; e.currentTarget.style.textShadow = "none"; }}
              >
                {a.name}
              </div>
            ))}
          </div>
        )}

        {visibleHeadliners.length > 0 && (
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)", margin: "28px 0" }} />
        )}

        {/* SUB-HEADLINERS */}
        {visibleSub.length > 0 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              {visibleSub.map((a) => (
                <span
                  key={a.id}
                  className="lineup-sub"
                  style={{ display: "inline-block", marginRight: "clamp(16px, 3vw, 48px)", marginBottom: 6, cursor: "default", transition: "color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#c6f135"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#c0d8e0"; }}
                >
                  {a.name}
                </span>
              ))}
            </div>
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", margin: "20px 0" }} />
          </>
        )}

        {/* OTHERS */}
        {visibleOthers.length > 0 && (
          <div style={{ textAlign: "center" }}>
            {visibleOthers.map((a) => (
              <span
                key={a.id}
                className="lineup-small"
                style={{ display: "inline-block", marginRight: "clamp(10px, 2.5vw, 36px)", marginBottom: 6, cursor: "default", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#6b8fa3"; }}
              >
                {a.name}
              </span>
            ))}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ fontSize: 12, color: "rgba(176,220,230,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
            {lineup.ctaNote}
          </p>
          <a href="#tickets" className="btn-aqua">{lineup.ctaLabel}</a>
        </div>
      </div>
    </section>
  );
}
