"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { useSiteStore } from "@/lib/store";

export default function TicketsSection() {
  const tickets = useSiteStore((s) => s.data.tickets);

  return (
    <section
      id="tickets"
      style={{ background: "#071018", padding: "100px 0 120px", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "70vw", height: "50vh",
          background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 5 }}>

        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>{tickets.sectionLabel}</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, textTransform: "uppercase",
              letterSpacing: "-0.02em", color: "#fff", marginBottom: 16,
            }}
          >
            {tickets.heading}
          </h2>
          <p style={{ fontSize: 15, color: "rgba(176,220,230,0.5)", maxWidth: 500, margin: "0 auto" }}>
            {tickets.subheading}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {tickets.tickets.map((ticket) => (
            <div
              key={ticket.id}
              style={{
                position: "relative",
                background: ticket.popular
                  ? `linear-gradient(145deg, rgba(198,241,53,0.06), rgba(0,229,255,0.04))`
                  : "rgba(255,255,255,0.025)",
                border: `1px solid ${ticket.popular ? ticket.color + "44" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column",
                transition: "transform 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = ticket.color + "66"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = ticket.popular ? ticket.color + "44" : "rgba(255,255,255,0.07)"; }}
            >
              {ticket.popular && (
                <div
                  style={{
                    position: "absolute", top: 20, right: 20, background: ticket.color, color: "#000",
                    fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "4px 10px", borderRadius: 999,
                  }}
                >
                  En Çok Satan
                </div>
              )}

              <div style={{ padding: "32px 28px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: ticket.color, marginBottom: 10 }}>
                  {ticket.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em" }}>
                    {ticket.price}
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(176,220,230,0.4)", fontWeight: 600 }}>
                    {ticket.per}
                  </span>
                </div>
              </div>

              <div style={{ padding: "24px 28px", flex: 1 }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {ticket.features.map((f, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: f.included ? 14 : 13, color: f.included ? "rgba(240,254,255,0.8)" : "rgba(176,220,230,0.3)" }}>
                      {f.included
                        ? <Check size={14} color={ticket.color} style={{ flexShrink: 0 }} />
                        : <X size={13} color="rgba(176,220,230,0.25)" style={{ flexShrink: 0 }} />
                      }
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ padding: "0 28px 28px" }}>
                <Link
                  href={`/checkout?ticket=${ticket.id}`}
                  style={{
                    display: "block", textAlign: "center", padding: "13px", borderRadius: 999,
                    background: ticket.popular ? `linear-gradient(135deg, ${ticket.color}, #00e5ff)` : "transparent",
                    border: `1.5px solid ${ticket.popular ? "transparent" : ticket.color + "55"}`,
                    color: ticket.popular ? "#000" : ticket.color,
                    fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none", transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    if (!ticket.popular) { e.currentTarget.style.background = ticket.color + "15"; e.currentTarget.style.borderColor = ticket.color; }
                    else { e.currentTarget.style.boxShadow = `0 0 30px ${ticket.color}55`; }
                  }}
                  onMouseLeave={(e) => {
                    if (!ticket.popular) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = ticket.color + "55"; }
                    else { e.currentTarget.style.boxShadow = "none"; }
                  }}
                >
                  {ticket.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 36, fontSize: 12, color: "rgba(176,220,230,0.3)", letterSpacing: "0.04em" }}>
          {tickets.footnote}
        </p>
      </div>
    </section>
  );
}
