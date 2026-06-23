"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#lineup",  label: "Lineup" },
  { href: "#info",    label: "Bilgi" },
  { href: "#tickets", label: "Biletler" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "transform 0.35s ease, background 0.35s ease, backdrop-filter 0.35s ease",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          background: scrolled ? "rgba(5, 10, 14, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,229,255,0.08)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#00e5ff",
                textShadow: "0 0 20px rgba(0,229,255,0.5)",
              }}
            >
              BIGENÇFEST
            </span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "#c6f135",
                textTransform: "uppercase",
              }}
            >
              AQUA 2025
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 8 }}
            className="hidden-mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(240,254,255,0.75)",
                  textDecoration: "none",
                  borderRadius: 999,
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00e5ff";
                  e.currentTarget.style.background = "rgba(0,229,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(240,254,255,0.75)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#tickets"
              className="btn-aqua"
              style={{ padding: "9px 22px", fontSize: 11, marginLeft: 8 }}
            >
              Bilet Al
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#00e5ff",
              display: "none",
              padding: 6,
            }}
            className="show-mobile"
            aria-label="Menü"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: "rgba(5, 10, 14, 0.97)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(0,229,255,0.1)",
              padding: "16px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "12px 16px",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(240,254,255,0.8)",
                  textDecoration: "none",
                  borderRadius: 10,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#tickets"
              className="btn-aqua"
              onClick={() => setMobileOpen(false)}
              style={{ textAlign: "center", marginTop: 12 }}
            >
              Bilet Al
            </Link>
          </div>
        )}
      </header>

      {/* Responsive helpers */}
      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
