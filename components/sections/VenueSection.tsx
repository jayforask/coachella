"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const WH_BASE = "https://waterhill.com.tr/wp-content/uploads";

const ATTRACTIONS = [
  { src: `${WH_BASE}/2023/02/Aqua-Tower.jpg`,   alt: "Aqua Tower",   label: "Aqua Tower" },
  { src: `${WH_BASE}/2023/02/Wave-Pool.jpg`,     alt: "Wave Pool",    label: "Wave Pool" },
  { src: `${WH_BASE}/2023/02/Rafting.jpg`,       alt: "Rafting",      label: "Rafting" },
  { src: `${WH_BASE}/2023/02/Cave-Pool.jpg`,     alt: "Cave Pool",    label: "Cave Pool" },
  { src: `${WH_BASE}/2023/02/Kamikaze.jpg`,      alt: "Kamikaze",     label: "Kamikaze" },
  { src: `${WH_BASE}/2023/02/Tsunami.jpg`,       alt: "Tsunami",      label: "Tsunami" },
];

export default function VenueSection() {
  return (
    <section
      id="venue"
      style={{
        background: "linear-gradient(180deg, #071018 0%, #050a0e 100%)",
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Aqua glow top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "30vh",
          background: "radial-gradient(ellipse, rgba(0,229,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 5 }}>

        {/* ── Sponsor badge + header ── */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          {/* "Resmi Mekan Sponsoru" rozeti */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 18px 6px 10px",
              borderRadius: 999,
              border: "1px solid rgba(198,241,53,0.35)",
              background: "rgba(198,241,53,0.07)",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                background: "#c6f135",
                color: "#050a0e",
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: 999,
              }}
            >
              Resmi Sponsor
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "#c6f135", textTransform: "uppercase" }}>
              Mekan Sponsoru
            </span>
          </div>

          {/* Waterhill logo */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <Link href="https://waterhill.com.tr" target="_blank" rel="noopener noreferrer">
              <Image
                src={`${WH_BASE}/2023/02/waterhill.png`}
                alt="Waterhill"
                width={260}
                height={118}
                style={{
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.9,
                  maxWidth: "100%",
                }}
                unoptimized
              />
            </Link>
          </div>

          <div className="section-label" style={{ marginBottom: 12 }}>Festival Mekanı</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: 16,
            }}
          >
            Waterhill Aqua Park
          </h2>
          <p style={{ fontSize: 15, color: "rgba(176,220,230,0.55)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
            BIGENÇFEST AQUA 2026, Bodrum&apos;un efsanevi su parkı Waterhill&apos;de gerçekleşecek.
            Türkiye&apos;nin en büyük aqua park alanında müzik ve su sporlarının benzersiz buluşması.
          </p>
        </div>

        {/* ── Attractions grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {ATTRACTIONS.map((a, i) => (
            <div
              key={a.alt}
              style={{
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
                aspectRatio: "4/3",
                cursor: "default",
                border: "1px solid rgba(0,229,255,0.08)",
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement;
                if (overlay) { overlay.style.opacity = "1"; }
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement;
                if (overlay) { overlay.style.opacity = "0"; }
              }}
            >
              <Image
                src={a.src}
                alt={a.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                unoptimized
              />
              {/* Hover overlay */}
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,229,255,0.7), transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 800, color: "#000", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {a.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Venue highlights ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 14,
            marginBottom: 48,
          }}
        >
          {[
            { icon: "🌊", text: "Wave Pool" },
            { icon: "🎢", text: "12 Kaydırak" },
            { icon: "🍹", text: "Yiyecek & İçecek" },
            { icon: "🔒", text: "Kilit Dolapları" },
            { icon: "🏊", text: "Cave Pool" },
            { icon: "🎡", text: "Aqua Tower" },
          ].map((h) => (
            <div
              key={h.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 16px",
                borderRadius: 10,
                background: "rgba(0,229,255,0.04)",
                border: "1px solid rgba(0,229,255,0.1)",
                fontSize: 13,
                color: "rgba(240,254,255,0.7)",
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: 18 }}>{h.icon}</span>
              {h.text}
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          <Link
            href="https://waterhill.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 999,
              border: "1.5px solid rgba(198,241,53,0.4)",
              background: "rgba(198,241,53,0.06)",
              color: "#c6f135",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(198,241,53,0.14)";
              e.currentTarget.style.borderColor = "#c6f135";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(198,241,53,0.06)";
              e.currentTarget.style.borderColor = "rgba(198,241,53,0.4)";
            }}
          >
            <ExternalLink size={14} />
            Waterhill&apos;i Keşfet
          </Link>
          <Link href="#tickets" className="btn-aqua" style={{ padding: "12px 28px", fontSize: 12 }}>
            Festival Bileti Al
          </Link>
        </div>
      </div>
    </section>
  );
}
