"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

const TARGET = new Date("2026-07-19T14:00:00+03:00");

function calcTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const TICKER_ITEMS = [
  "BIGENÇFEST AQUA 2025",
  "15–17 AĞUSTOS",
  "BODRUM, TÜRKİYE",
  "ANA SAHNE",
  "AQUA SAHNE",
  "BEACH STAGE",
  "3 GÜN",
  "50+ SANATÇI",
  "SINIRLI BİLET",
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Hydration sonrası başlat
    setTimeLeft(calcTimeLeft());
    const interval = setInterval(() => {
      const tl = calcTimeLeft();
      setTimeLeft(tl);
      if (tl.days === 0 && tl.hours === 0 && tl.minutes === 0 && tl.seconds === 0) {
        setFinished(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#050a0e",
      }}
    >
      {/* ── Background: Waterhill tesis görseli ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://waterhill.com.tr/wp-content/uploads/2023/03/slide1-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.35) saturate(0.8)",
        }}
      />
      {/* Aqua/gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.15) 0%, transparent 65%), " +
            "radial-gradient(ellipse 60% 80% at 80% 80%, rgba(198,241,53,0.07) 0%, transparent 60%), " +
            "radial-gradient(ellipse 50% 50% at 20% 60%, rgba(255,61,154,0.06) 0%, transparent 55%), " +
            "linear-gradient(to bottom, rgba(5,10,14,0.3) 0%, rgba(5,10,14,0.6) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Scanline effect */}
      <div className="scanline" aria-hidden="true" />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 60px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Date pill */}
        <div
          className="pill"
          style={{
            marginBottom: 32,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease 0.1s",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00e5ff",
              display: "inline-block",
              animation: "aquaPulse 1.5s ease-in-out infinite",
            }}
          />
          15 – 17 AĞUSTOS 2025 · BODRUM
        </div>

        {/* BIGENÇFEST main title */}
        <h1
          className="display-title"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease 0.2s",
            color: "#ffffff",
            marginBottom: 0,
          }}
        >
          <span
            className="glow-text"
            style={{
              display: "block",
              WebkitTextStroke: "1px rgba(0,229,255,0.3)",
            }}
          >
            BIGENÇFEST
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(1.4rem, 5vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "0.35em",
              color: "#c6f135",
              textShadow: "0 0 30px rgba(198,241,53,0.4)",
              marginTop: "0.1em",
            }}
          >
            A Q U A
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(13px, 2vw, 16px)",
            color: "rgba(176,220,230,0.7)",
            marginTop: 28,
            letterSpacing: "0.06em",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease 0.35s",
          }}
        >
          Türkiye&apos;nin en büyük müzik festivali · Bodrum&apos;da 3 muhteşem gece
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 44,
            flexWrap: "wrap",
            justifyContent: "center",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease 0.45s",
          }}
        >
          <Link href="#tickets" className="btn-aqua">
            Bilet Al
          </Link>
          <Link href="#lineup" className="btn-outline">
            Lineup&apos;ı Gör
          </Link>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "clamp(24px, 6vw, 72px)",
            marginTop: 64,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          {[
            { n: "3", label: "Gün" },
            { n: "5", label: "Sahne" },
            { n: "50+", label: "Sanatçı" },
            { n: "25K", label: "Kapasite" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#00e5ff",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "rgba(176,220,230,0.5)",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Countdown ── */}
        <div
          style={{
            marginTop: 56,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.6s ease 0.75s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#c6f135",
            }}
          >
            {finished ? "Festival Başladı! 🎉" : "Festivale Kalan Süre · 19 Temmuz 2026"}
          </div>

          {!finished && (
            <div style={{ display: "flex", gap: "clamp(12px, 3vw, 28px)", alignItems: "center" }}>
              {[
                { value: timeLeft.days,    label: "GÜN" },
                { value: timeLeft.hours,   label: "SAAT" },
                { value: timeLeft.minutes, label: "DAKİKA" },
                { value: timeLeft.seconds, label: "SANİYE" },
              ].map((unit, i) => (
                <div key={unit.label} style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 3vw, 28px)" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        width: "clamp(60px, 14vw, 88px)",
                        height: "clamp(60px, 14vw, 88px)",
                        borderRadius: 14,
                        background: "rgba(0,229,255,0.06)",
                        border: "1px solid rgba(0,229,255,0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
                        fontWeight: 900,
                        color: "#00e5ff",
                        letterSpacing: "-0.03em",
                        fontVariantNumeric: "tabular-nums",
                        boxShadow: "0 0 20px rgba(0,229,255,0.08)",
                      }}
                    >
                      {String(unit.value).padStart(2, "0")}
                    </div>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        color: "rgba(176,220,230,0.4)",
                        textTransform: "uppercase",
                      }}
                    >
                      {unit.label}
                    </span>
                  </div>
                  {/* Separator — son elemanda gösterme */}
                  {i < 3 && (
                    <span
                      style={{
                        fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                        fontWeight: 900,
                        color: "rgba(0,229,255,0.3)",
                        lineHeight: 1,
                        marginBottom: 20,
                        animation: "aquaPulse 1s ease-in-out infinite",
                      }}
                    >
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Ticker tape ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          borderTop: "1px solid rgba(0,229,255,0.15)",
          borderBottom: "1px solid rgba(0,229,255,0.15)",
          background: "rgba(0,229,255,0.04)",
          overflow: "hidden",
          padding: "12px 0",
        }}
      >
        <div className="ticker-inner">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 20,
                paddingRight: 48,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: i % 3 === 0 ? "#00e5ff" : i % 3 === 1 ? "#c6f135" : "rgba(240,254,255,0.5)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
              <span style={{ color: "#00e5ff", opacity: 0.4, fontSize: 8 }}>★</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.4,
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, transparent, #00e5ff)",
            animation: "aquaPulse 2s ease-in-out infinite",
          }}
        />
        <span style={{ fontSize: 9, letterSpacing: "0.2em", color: "#00e5ff", textTransform: "uppercase" }}>
          Keşfet
        </span>
      </div>
    </section>
  );
}
