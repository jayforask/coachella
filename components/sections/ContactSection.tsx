"use client";

import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

const IgIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const WA_NUMBER = "905319773113";

function buildWALink() {
  const msg = encodeURIComponent(
    "Merhaba! BIGENÇFEST AQUA 2026 hakkında bilgi almak istiyorum."
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

const CONTACTS = [
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    value: "+90 531 977 31 13",
    href: buildWALink(),
    color: "#25d366",
    sub: "Hızlı yanıt",
  },
  {
    icon: <Phone size={20} />,
    label: "Telefon",
    value: "+90 531 977 31 13",
    href: "tel:+905319773113",
    color: "#00e5ff",
    sub: "Haf. içi 09:00 – 18:00",
  },
  {
    icon: <Mail size={20} />,
    label: "E-posta",
    value: "info@bigencfest.com",
    href: "mailto:info@bigencfest.com",
    color: "#c6f135",
    sub: "24 saat içinde yanıt",
  },
  {
    icon: <IgIcon />,
    label: "Instagram",
    value: "@akdenizetkinlik",
    href: "https://www.instagram.com/akdenizetkinlik/",
    color: "#ff3d9a",
    sub: "DM atın",
  },
];

const INFO_ROWS = [
  { icon: <MapPin size={16} />, label: "Konum", value: "Waterhill Aqua Park, Bodrum, Türkiye" },
  { icon: <Clock size={16} />, label: "Tarihler", value: "15 – 17 Ağustos 2026 · Kapılar 14:00'de açılır" },
  { icon: <Mail size={16} />, label: "Sponsörlük", value: "sponsor@bigencfest.com" },
  { icon: <Mail size={16} />, label: "Basın", value: "press@bigencfest.com" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(180deg, #030609 0%, #050a0e 100%)",
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* bg glow */}
      <div
        style={{
          position: "absolute",
          bottom: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 300,
          background: "radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#00e5ff",
              border: "1px solid rgba(0,229,255,0.2)",
              borderRadius: 999,
              padding: "5px 16px",
              marginBottom: 18,
            }}
          >
            İletişim
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
            Bize Ulaşın
          </h2>
          <p
            style={{
              fontSize: "clamp(13px, 2vw, 15px)",
              color: "rgba(176,220,230,0.5)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Sorularınız, sponsörlük teklifleriniz veya basın talepleri için bizimle
            iletişime geçin.
          </p>
        </div>

        {/* Contact cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 16,
            marginBottom: 56,
          }}
          className="contact-sect-grid"
        >
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: "24px 22px",
                borderRadius: 18,
                background: "rgba(255,255,255,0.025)",
                border: `1.5px solid ${c.color}20`,
                textDecoration: "none",
                transition: "transform 0.2s, border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = `${c.color}55`;
                (e.currentTarget as HTMLAnchorElement).style.background = `${c.color}06`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = `${c.color}20`;
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.025)";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `${c.color}12`,
                  border: `1px solid ${c.color}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.color,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: c.color, marginBottom: 4 }}>
                  {c.label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 3 }}>
                  {c.value}
                </div>
                <div style={{ fontSize: 11, color: "rgba(176,220,230,0.4)" }}>
                  {c.sub}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Info rows */}
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(0,229,255,0.1)",
            borderRadius: 20,
            padding: "32px 36px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
          className="contact-info-grid"
        >
          {INFO_ROWS.map((row) => (
            <div key={row.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "rgba(0,229,255,0.08)",
                  border: "1px solid rgba(0,229,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00e5ff",
                  flexShrink: 0,
                }}
              >
                {row.icon}
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(0,229,255,0.6)", marginBottom: 3 }}>
                  {row.label}
                </div>
                <div style={{ fontSize: 13, color: "rgba(176,220,230,0.7)", lineHeight: 1.5 }}>
                  {row.value}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-sect-grid { grid-template-columns: 1fr 1fr !important; }
          .contact-info-grid { grid-template-columns: 1fr !important; padding: 24px 20px !important; }
        }
        @media (max-width: 400px) {
          .contact-sect-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
