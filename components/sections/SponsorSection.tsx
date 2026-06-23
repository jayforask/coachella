"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const SPONSORS = [
  { tier: "Platinum", color: "#c6f135", icon: "⭐", name: "Platinum Sponsor", price: "₺500.000" },
  { tier: "Gold",     color: "#fbbf24", icon: "🥇", name: "Gold Sponsor",     price: "₺250.000" },
  { tier: "Silver",   color: "#00e5ff", icon: "🥈", name: "Silver Sponsor",   price: "₺100.000" },
  { tier: "Destekçi", color: "#ff3d9a", icon: "💜", name: "Destekçi",         price: "₺30.000"  },
];

const WA_NUMBER = "905319773113";

function buildWALink() {
  const msg = encodeURIComponent(
    "Merhaba! BIGENÇFEST AQUA 2026 için sponsor olmak istiyorum.\n\nSponsörlük paketleri hakkında detaylı bilgi alabilir miyim?"
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

export default function SponsorSection() {
  return (
    <section
      id="sponsor"
      style={{
        background: "linear-gradient(180deg, #050a0e 0%, #030609 100%)",
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* bg glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 300,
          background:
            "radial-gradient(ellipse, rgba(198,241,53,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#c6f135",
              border: "1px solid rgba(198,241,53,0.25)",
              borderRadius: 999,
              padding: "5px 16px",
              marginBottom: 18,
            }}
          >
            Sponsörlük
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Markanızı{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00e5ff, #c6f135)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BIGENÇFEST
            </span>{" "}
            ile Buluşturun
          </h2>
          <p
            style={{
              fontSize: "clamp(13px, 2vw, 15px)",
              color: "rgba(176,220,230,0.5)",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            25.000+ genç katılımcıya ulaşın. 4 farklı sponsörluk paketiyle markanıza
            özel görünürlük sağlayın.
          </p>
        </div>

        {/* Sponsor tier cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
            marginBottom: 48,
          }}
          className="sponsor-sect-grid"
        >
          {SPONSORS.map((s) => (
            <div
              key={s.tier}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1.5px solid ${s.color}22`,
                borderRadius: 18,
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                transition: "transform 0.2s, border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = `${s.color}55`;
                (e.currentTarget as HTMLDivElement).style.background = `${s.color}06`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor = `${s.color}22`;
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.025)";
              }}
            >
              <div style={{ fontSize: 26 }}>{s.icon}</div>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: s.color,
                }}
              >
                {s.name}
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {s.price}
              </div>
              <div style={{ fontSize: 10, color: "rgba(176,220,230,0.35)" }}>+ KDV</div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/sponsor"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 32px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #c6f135, #00e5ff)",
              color: "#050a0e",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(198,241,53,0.25)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            Tüm Paketleri Gör
          </Link>

          <a
            href={buildWALink()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 28px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #25d366, #128c7e)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            <MessageCircle size={14} />
            WhatsApp ile Yaz
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .sponsor-sect-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 400px) {
          .sponsor-sect-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
