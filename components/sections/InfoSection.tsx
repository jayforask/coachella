"use client";

import { MapPin, Calendar, Clock, Music2 } from "lucide-react";

const INFO_CARDS = [
  {
    icon: Calendar,
    title: "Tarihler",
    value: "15–17 Ağustos 2025",
    sub: "3 gün · 3 gece",
    color: "#00e5ff",
  },
  {
    icon: MapPin,
    title: "Konum",
    value: "Bodrum, Türkiye",
    sub: "Yalıkavak Marina · Muğla",
    color: "#c6f135",
  },
  {
    icon: Music2,
    title: "Sahneler",
    value: "5 Farklı Sahne",
    sub: "Ana · Aqua · Beach · Lounge · Club",
    color: "#ff3d9a",
  },
  {
    icon: Clock,
    title: "Saat",
    value: "14:00 – 04:00",
    sub: "Her gün kapılar 14:00'de açılır",
    color: "#a78bfa",
  },
];

export default function InfoSection() {
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
      {/* BG accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.2), transparent)",
        }}
      />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>Festival Bilgisi</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            Festival Hakkında
          </h2>
        </div>

        {/* Info cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
            marginBottom: 80,
          }}
        >
          {INFO_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${card.color}22`,
                  borderRadius: 16,
                  padding: "28px 24px",
                  transition: "border-color 0.3s, background 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = `${card.color}55`;
                  el.style.background = `${card.color}08`;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = `${card.color}22`;
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${card.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="info-grid"
        >
          <div>
            <div className="section-divider" style={{ marginBottom: 24 }} />
            <h3
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#fff",
                lineHeight: 1.05,
                marginBottom: 20,
              }}
            >
              Türkiye&apos;nin{" "}
              <span className="glow-text">En Büyük</span>{" "}
              Açık Hava Festivali
            </h3>
            <p style={{ fontSize: 15, color: "rgba(176,220,230,0.65)", lineHeight: 1.8, marginBottom: 16 }}>
              BIGENÇFEST AQUA, Bodrum&apos;un eşsiz sahil manzarası eşliğinde 3 gün boyunca 50&apos;den fazla sanatçıyla Türkiye&apos;nin en büyük müzik deneyimini sunar.
            </p>
            <p style={{ fontSize: 15, color: "rgba(176,220,230,0.65)", lineHeight: 1.8 }}>
              Pop, elektronik, rock ve hip-hop türlerinde 5 farklı sahnede kesintisiz performanslar.
            </p>
          </div>

          <div
            style={{
              background: "rgba(0,229,255,0.04)",
              border: "1px solid rgba(0,229,255,0.12)",
              borderRadius: 20,
              padding: "36px 32px",
            }}
          >
            {[
              ["🎵", "50+ sanatçı ve DJ"],
              ["🏖️", "Sahil & marina manzarası"],
              ["🎪", "5 farklı sahne alanı"],
              ["🍹", "Premium yiyecek & içecek"],
              ["🚌", "Antalya & İzmir servisleri"],
              ["🏨", "Festival konaklama paketleri"],
            ].map(([icon, text]) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(0,229,255,0.06)",
                  fontSize: 14,
                  color: "rgba(240,254,255,0.75)",
                }}
              >
                <span style={{ fontSize: 18 }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
