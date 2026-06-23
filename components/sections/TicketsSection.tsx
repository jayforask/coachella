"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";

const TICKETS = [
  {
    id: "general",
    name: "General Admission",
    price: "₺1.850",
    per: "/ 3 Gün",
    color: "#00e5ff",
    popular: false,
    features: [
      "3 günlük giriş",
      "Tüm sahnelere erişim",
      "Festival alanı",
      "Yiyecek/içecek alanları",
    ],
    notIncluded: [
      "VIP alanlar",
      "Backstage",
      "Premium konser alanı",
    ],
  },
  {
    id: "vip",
    name: "VIP Pass",
    price: "₺4.200",
    per: "/ 3 Gün",
    color: "#c6f135",
    popular: true,
    features: [
      "3 günlük giriş",
      "VIP sahne önü alanı",
      "VIP lounge erişimi",
      "Özel giriş kapısı",
      "2 içecek dahil",
      "Şarj istasyonları",
    ],
    notIncluded: [
      "Backstage",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "₺8.500",
    per: "/ 3 Gün",
    color: "#ff3d9a",
    popular: false,
    features: [
      "3 günlük giriş",
      "Backstage pass",
      "Artist meet & greet",
      "Premium lounge",
      "Sınırsız içecek",
      "Otel transfer",
      "VIP park yeri",
    ],
    notIncluded: [],
  },
];

export default function TicketsSection() {
  return (
    <section
      id="tickets"
      style={{
        background: "#071018",
        padding: "100px 0 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70vw",
          height: "50vh",
          background: "radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 5 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Biletler</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Senin İçin Bir Pass
          </h2>
          <p style={{ fontSize: 15, color: "rgba(176,220,230,0.5)", maxWidth: 500, margin: "0 auto" }}>
            Sınırlı sayıda bilet mevcut. Erken alanlara özel fiyat.
          </p>
        </div>

        {/* Ticket cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {TICKETS.map((ticket) => (
            <div
              key={ticket.id}
              style={{
                position: "relative",
                background: ticket.popular
                  ? `linear-gradient(145deg, rgba(198,241,53,0.06), rgba(0,229,255,0.04))`
                  : "rgba(255,255,255,0.025)",
                border: `1px solid ${ticket.popular ? ticket.color + "44" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = ticket.color + "66";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = ticket.popular ? ticket.color + "44" : "rgba(255,255,255,0.07)";
              }}
            >
              {/* Popular badge */}
              {ticket.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: ticket.color,
                    color: "#000",
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  En Çok Satan
                </div>
              )}

              {/* Card header */}
              <div
                style={{
                  padding: "32px 28px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: ticket.color,
                    marginBottom: 10,
                  }}
                >
                  {ticket.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span
                    style={{
                      fontSize: "clamp(2rem, 4vw, 2.8rem)",
                      fontWeight: 900,
                      color: "#fff",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {ticket.price}
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(176,220,230,0.4)", fontWeight: 600 }}>
                    {ticket.per}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div style={{ padding: "24px 28px", flex: 1 }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {ticket.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(240,254,255,0.8)" }}>
                      <Check size={14} color={ticket.color} style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                  {ticket.notIncluded.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(176,220,230,0.3)" }}>
                      <X size={13} color="rgba(176,220,230,0.25)" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div style={{ padding: "0 28px 28px" }}>
                <Link
                  href={`/checkout?ticket=${ticket.id}`}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "13px",
                    borderRadius: 999,
                    background: ticket.popular
                      ? `linear-gradient(135deg, ${ticket.color}, #00e5ff)`
                      : "transparent",
                    border: `1.5px solid ${ticket.popular ? "transparent" : ticket.color + "55"}`,
                    color: ticket.popular ? "#000" : ticket.color,
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    if (!ticket.popular) {
                      e.currentTarget.style.background = ticket.color + "15";
                      e.currentTarget.style.borderColor = ticket.color;
                    } else {
                      e.currentTarget.style.boxShadow = `0 0 30px ${ticket.color}55`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!ticket.popular) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = ticket.color + "55";
                    } else {
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  Satın Al
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p
          style={{
            textAlign: "center",
            marginTop: 36,
            fontSize: 12,
            color: "rgba(176,220,230,0.3)",
            letterSpacing: "0.04em",
          }}
        >
          * Tüm fiyatlar KDV dahildir. Biletler kişiye özeldir, devredilemez.
        </p>
      </div>
    </section>
  );
}
