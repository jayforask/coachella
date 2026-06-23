"use client";

import Link from "next/link";

const IgIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.733-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const YtIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const SpIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const SOCIAL = [
  { icon: IgIcon, href: "https://www.instagram.com/akdenizetkinlik/", label: "Instagram" },
  { icon: XIcon,  href: "#", label: "X / Twitter" },
  { icon: YtIcon, href: "#", label: "YouTube" },
  { icon: SpIcon, href: "#", label: "Spotify" },
];

const LINKS = [
  { label: "Lineup",    href: "#lineup" },
  { label: "Bilgi",     href: "#info" },
  { label: "Biletler",  href: "#tickets" },
  { label: "İletişim",  href: "#contact" },
  { label: "SSS",       href: "#faq" },
  { label: "Sponsor",   href: "/sponsor" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#030609",
        borderTop: "1px solid rgba(0,229,255,0.08)",
        padding: "60px 0 32px",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Organizatör Banner ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginBottom: 48,
            padding: "20px 28px",
            borderRadius: 16,
            background: "linear-gradient(135deg, rgba(255,105,0,0.07), rgba(255,61,154,0.05))",
            border: "1px solid rgba(255,105,0,0.2)",
          }}
        >
          {/* Akdeniz Etkinlik logo placeholder */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "linear-gradient(135deg, #ff6900, #ff3d9a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 18,
              color: "#fff",
              flexShrink: 0,
              letterSpacing: "-0.04em",
            }}
          >
            AE
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,105,0,0.8)", textTransform: "uppercase", marginBottom: 4 }}>
              Resmi Organizatör
            </div>
            <a
              href="https://www.instagram.com/akdenizetkinlik/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 17,
                fontWeight: 900,
                color: "#fff",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                display: "flex",
                alignItems: "center",
                gap: 7,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#ff6900"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#fff"; }}
            >
              AKDENİZ ETKİNLİK
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,105,0,0.7)", letterSpacing: "0.08em" }}>@akdenizetkinlik</span>
            </a>
            <div style={{ fontSize: 12, color: "rgba(176,220,230,0.45)", marginTop: 3 }}>
              Profesyonel etkinlik & festival organizasyonu
            </div>
          </div>
          <a
            href="https://www.instagram.com/akdenizetkinlik/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "8px 16px",
              borderRadius: 999,
              background: "linear-gradient(135deg, rgba(255,105,0,0.15), rgba(255,61,154,0.1))",
              border: "1px solid rgba(255,105,0,0.35)",
              color: "#ff6900",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,105,0,0.25), rgba(255,61,154,0.18))"; e.currentTarget.style.borderColor = "#ff6900"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,105,0,0.15), rgba(255,61,154,0.1))"; e.currentTarget.style.borderColor = "rgba(255,105,0,0.35)"; }}
          >
            <IgIcon />
            Takip Et
          </a>
        </div>

        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "start",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Left — brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  color: "#00e5ff",
                  textShadow: "0 0 20px rgba(0,229,255,0.4)",
                  lineHeight: 1,
                }}
              >
                BIGENÇFEST
              </div>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: "0.35em",
                  color: "#c6f135",
                  textTransform: "uppercase",
                  marginTop: 3,
                }}
              >
                AQUA 2026
              </div>
            </Link>
            <p
              style={{
                fontSize: 13,
                color: "rgba(176,220,230,0.45)",
                lineHeight: 1.7,
                marginTop: 16,
                maxWidth: 240,
              }}
            >
              Türkiye&apos;nin en büyük açık hava müzik festivali. 15–17 Ağustos 2026, Antalya.
            </p>
            {/* Organizatör küçük rozet */}
            <a
              href="https://www.instagram.com/akdenizetkinlik/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginTop: 14,
                padding: "5px 10px 5px 7px",
                borderRadius: 999,
                border: "1px solid rgba(255,105,0,0.25)",
                background: "rgba(255,105,0,0.07)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ff6900"; e.currentTarget.style.background = "rgba(255,105,0,0.14)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,105,0,0.25)"; e.currentTarget.style.background = "rgba(255,105,0,0.07)"; }}
            >
              <div style={{ width: 18, height: 18, borderRadius: 5, background: "linear-gradient(135deg, #ff6900, #ff3d9a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 900, color: "#fff" }}>AE</div>
              <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,105,0,0.8)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Akdeniz Etkinlik</span>
            </a>
          </div>

          {/* Center — nav links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(176,220,230,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#00e5ff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(176,220,230,0.45)"; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — social */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#00e5ff", textTransform: "uppercase" }}>
              Takip Et
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIAL.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      border: s.label === "Instagram" ? "1px solid rgba(255,105,0,0.3)" : "1px solid rgba(0,229,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: s.label === "Instagram" ? "rgba(255,105,0,0.7)" : "rgba(176,220,230,0.5)",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      background: s.label === "Instagram" ? "rgba(255,105,0,0.06)" : "rgba(0,229,255,0.03)",
                    }}
                    onMouseEnter={(e) => {
                      if (s.label === "Instagram") {
                        e.currentTarget.style.borderColor = "#ff6900";
                        e.currentTarget.style.color = "#ff6900";
                        e.currentTarget.style.background = "rgba(255,105,0,0.14)";
                      } else {
                        e.currentTarget.style.borderColor = "#00e5ff";
                        e.currentTarget.style.color = "#00e5ff";
                        e.currentTarget.style.background = "rgba(0,229,255,0.1)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (s.label === "Instagram") {
                        e.currentTarget.style.borderColor = "rgba(255,105,0,0.3)";
                        e.currentTarget.style.color = "rgba(255,105,0,0.7)";
                        e.currentTarget.style.background = "rgba(255,105,0,0.06)";
                      } else {
                        e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)";
                        e.currentTarget.style.color = "rgba(176,220,230,0.5)";
                        e.currentTarget.style.background = "rgba(0,229,255,0.03)";
                      }
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <a
              href="#tickets"
              className="btn-aqua"
              style={{ padding: "10px 22px", fontSize: 11, marginTop: 4 }}
            >
              Bilet Al
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.12), transparent)",
            marginBottom: 24,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: 11, color: "rgba(176,220,230,0.25)", letterSpacing: "0.06em" }}>
            © 2026 BIGENÇFEST AQUA. Tüm hakları saklıdır. · Organizatör:{" "}
            <a
              href="https://www.instagram.com/akdenizetkinlik/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,105,0,0.5)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#ff6900"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,105,0,0.5)"; }}
            >
              Akdeniz Etkinlik
            </a>
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Gizlilik Politikası", "Kullanım Koşulları"].map((t) => (
              <a
                key={t}
                href="#"
                style={{
                  fontSize: 11,
                  color: "rgba(176,220,230,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(176,220,230,0.6)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(176,220,230,0.25)"; }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-grid > div:last-child {
            align-items: center !important;
          }
          .footer-grid nav {
            flex-direction: row !important;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        @media (max-width: 600px) {
          .organizer-banner {
            flex-direction: column !important;
            text-align: center;
          }
          .organizer-banner a:last-child {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}
