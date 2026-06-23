"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Phone, CheckCircle2, Star, Zap, Users, TrendingUp, Globe, MessageCircle } from "lucide-react";

const WA_NUMBER = "905319773113";

/* ── Sponsor Paketleri ── */
const PACKAGES = [
  {
    id: "platinum",
    name: "Platinum Sponsor",
    price: "₺500.000",
    color: "#c6f135",
    icon: "⭐",
    popular: true,
    perks: [
      "Ana Sahne isim hakkı (3 gün)",
      "Festival girişinde 6m × 3m billboard",
      "Tüm dijital mecralarda logo (1. sıra)",
      "50 adet VIP bilet",
      "Backstage hospitality alanı",
      "Meet & greet aktivasyonu",
      "Sosyal medya özel içerik paketi",
      "Basın bülteni ortak marka",
    ],
  },
  {
    id: "gold",
    name: "Gold Sponsor",
    price: "₺250.000",
    color: "#fbbf24",
    icon: "🥇",
    popular: false,
    perks: [
      "İkinci sahne isim hakkı",
      "4m × 2m alan branding",
      "Dijital mecralarda logo (2. sıra)",
      "20 adet VIP bilet",
      "VIP lounge erişimi",
      "Sosyal medya story paketi",
      "Basın bülteninde yer",
    ],
  },
  {
    id: "silver",
    name: "Silver Sponsor",
    price: "₺100.000",
    color: "#00e5ff",
    icon: "🥈",
    popular: false,
    perks: [
      "Festival alanında stand/stant",
      "2m × 1m alan branding",
      "Web sitesinde logo",
      "10 adet VIP bilet",
      "Sosyal medya mention paketi",
    ],
  },
  {
    id: "supporter",
    name: "Destekçi",
    price: "₺30.000",
    color: "#ff3d9a",
    icon: "💜",
    popular: false,
    perks: [
      "Web sitesinde logo",
      "4 adet VIP bilet",
      "Sosyal medya teşekkür postu",
      "Festival programında yer",
    ],
  },
];

/* ── Neden Sponsor Ol? ── */
const REASONS = [
  {
    icon: <Users size={22} color="#00e5ff" />,
    title: "25.000+ Katılımcı",
    desc: "3 gün boyunca genç ve dinamik bir kitleyle yüz yüze buluşun.",
    color: "#00e5ff",
  },
  {
    icon: <Globe size={22} color="#c6f135" />,
    title: "Ulusal Medya Yayını",
    desc: "TV, dijital medya ve sosyal platformlarda milyonlarca gösterim.",
    color: "#c6f135",
  },
  {
    icon: <TrendingUp size={22} color="#ff3d9a" />,
    title: "Marka Bilinirliği",
    desc: "Türkiye'nin en büyük müzik festivali çatısı altında güçlü konumlama.",
    color: "#ff3d9a",
  },
  {
    icon: <Zap size={22} color="#a78bfa" />,
    title: "Aktivasyon Alanları",
    desc: "Ürün deneyimi, sampling ve interaktif brand zone imkânı.",
    color: "#a78bfa",
  },
  {
    icon: <Star size={22} color="#fbbf24" />,
    title: "VIP Deneyim",
    desc: "Ekibiniz ve misafirleriniz için özel VIP konukseverlik alanı.",
    color: "#fbbf24",
  },
  {
    icon: <MessageCircle size={22} color="#34d399" />,
    title: "Sosyal Medya Paketi",
    desc: "Festival öncesi, sırası ve sonrasında organik içerik ortaklığı.",
    color: "#34d399",
  },
];

/* ── İletişim Bilgileri ── */
const CONTACTS = [
  { icon: <Mail size={16} />, label: "E-posta", value: "sponsor@bigencfest.com", href: "mailto:sponsor@bigencfest.com" },
  { icon: <Phone size={16} />, label: "Telefon", value: "+90 531 977 31 13", href: "tel:+905319773113" },
];

function buildWALink() {
  const msg = encodeURIComponent(
    `Merhaba! BIGENÇFEST AQUA 2026 için sponsor olmak istiyorum.\n\nSponsörlük paketleri hakkında detaylı bilgi alabilir miyim?`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

export default function SponsorClient() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050a0e",
        paddingTop: 100,
        paddingBottom: 80,
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Back Link ── */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(176,220,230,0.45)",
            textDecoration: "none",
            marginBottom: 40,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#00e5ff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(176,220,230,0.45)"; }}
        >
          <ArrowLeft size={14} />
          Ana Sayfaya Dön
        </Link>

        {/* ── Hero Başlık ── */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
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
              marginBottom: 20,
            }}
          >
            Sponsörlük Fırsatları
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: 20,
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
            ile{" "}
            <br />
            Buluşturun
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 17px)",
              color: "rgba(176,220,230,0.55)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Türkiye'nin en büyük açık hava müzik festivalinde 25.000+ genç katılımcıya
            markanızı duyurun. 15–17 Ağustos 2026, Bodrum.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 40,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            {[
              { n: "25.000+", label: "Katılımcı" },
              { n: "50+", label: "Sanatçı" },
              { n: "3", label: "Gün" },
              { n: "5", label: "Sahne" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 900,
                    color: "#00e5ff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(176,220,230,0.4)",
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Neden Sponsor Ol? ── */}
        <div style={{ marginBottom: 80 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#00e5ff",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Neden Sponsor Olmalısınız?
          </div>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 900,
              color: "#fff",
              textAlign: "center",
              marginBottom: 40,
              letterSpacing: "-0.02em",
            }}
          >
            Benzersiz Marka Deneyimi
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {REASONS.map((r) => (
              <div
                key={r.title}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${r.color}18`,
                  borderRadius: 16,
                  padding: "24px 22px",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${r.color}44`;
                  (e.currentTarget as HTMLDivElement).style.background = `${r.color}06`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${r.color}18`;
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.025)";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${r.color}12`,
                    border: `1px solid ${r.color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  {r.icon}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {r.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(176,220,230,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  {r.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Sponsörlük Paketleri ── */}
        <div style={{ marginBottom: 80 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#c6f135",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Paketler
          </div>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 900,
              color: "#fff",
              textAlign: "center",
              marginBottom: 40,
              letterSpacing: "-0.02em",
            }}
          >
            Sponsörlük Seçenekleri
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
              alignItems: "start",
            }}
            className="sponsor-grid"
          >
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                style={{
                  position: "relative",
                  background: pkg.popular
                    ? `linear-gradient(145deg, ${pkg.color}08, rgba(0,0,0,0))`
                    : "rgba(255,255,255,0.025)",
                  border: `1.5px solid ${pkg.popular ? pkg.color + "55" : pkg.color + "22"}`,
                  borderRadius: 20,
                  padding: "28px 24px",
                  transition: "transform 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${pkg.color}66`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = pkg.popular ? `${pkg.color}55` : `${pkg.color}22`;
                }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: `linear-gradient(90deg, ${pkg.color}, #00e5ff)`,
                      color: "#050a0e",
                      fontSize: 9,
                      fontWeight: 900,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "4px 14px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}
                  >
                    En Popüler
                  </div>
                )}

                {/* Package Header */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{pkg.icon}</div>
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: pkg.color,
                      marginBottom: 4,
                    }}
                  >
                    {pkg.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2rem)",
                      fontWeight: 900,
                      color: "#fff",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {pkg.price}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(176,220,230,0.35)",
                      marginTop: 4,
                    }}
                  >
                    + KDV
                  </div>
                </div>

                {/* Perks */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                    padding: 0,
                    margin: 0,
                    marginBottom: 24,
                  }}
                >
                  {pkg.perks.map((perk) => (
                    <li
                      key={perk}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        fontSize: 13,
                        color: "rgba(240,254,255,0.7)",
                        lineHeight: 1.4,
                      }}
                    >
                      <CheckCircle2
                        size={13}
                        color={pkg.color}
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={buildWALink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    padding: "12px",
                    borderRadius: 999,
                    background: pkg.popular
                      ? `linear-gradient(135deg, ${pkg.color}, #00e5ff)`
                      : `${pkg.color}18`,
                    border: `1.5px solid ${pkg.popular ? "transparent" : pkg.color + "44"}`,
                    color: pkg.popular ? "#050a0e" : pkg.color,
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all 0.25s",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => {
                    if (pkg.popular) {
                      (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
                    } else {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${pkg.color}30`;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = pkg.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pkg.popular) {
                      (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                    } else {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${pkg.color}18`;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = `${pkg.color}44`;
                    }
                  }}
                >
                  <MessageCircle size={14} />
                  Teklif Al
                </a>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgba(176,220,230,0.3)",
              marginTop: 20,
              letterSpacing: "0.04em",
            }}
          >
            * Özel kombinasyon paketleri için bizimle iletişime geçin. Fiyatlar + KDV'dir.
          </p>
        </div>

        {/* ── İletişim Kartı ── */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(0,229,255,0.05), rgba(198,241,53,0.03))",
            border: "1px solid rgba(0,229,255,0.18)",
            borderRadius: 24,
            padding: "48px 40px",
            textAlign: "center",
          }}
          className="contact-card"
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#00e5ff",
              marginBottom: 12,
            }}
          >
            İletişim
          </div>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: 12,
              letterSpacing: "-0.02em",
            }}
          >
            Özel Teklif İsteyin
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "rgba(176,220,230,0.5)",
              maxWidth: 480,
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}
          >
            Markanıza özel sponsörlük paketi oluşturmak için sponsörlük ekibimizle
            hemen iletişime geçin.
          </p>

          {/* Contact Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            {/* WhatsApp */}
            <a
              href={buildWALink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #25d366, #128c7e)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(37,211,102,0.3)",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              <MessageCircle size={16} />
              WhatsApp ile Yaz
            </a>

            {/* Email & Phone */}
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 24px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(0,229,255,0.2)",
                  background: "rgba(0,229,255,0.04)",
                  color: "rgba(176,220,230,0.7)",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#00e5ff";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#00e5ff";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,229,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,229,255,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(176,220,230,0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,229,255,0.04)";
                }}
              >
                {c.icon}
                {c.value}
              </a>
            ))}
          </div>

          {/* Organizer Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,105,0,0.25)",
              background: "rgba(255,105,0,0.06)",
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 7,
                background: "linear-gradient(135deg, #ff6900, #ff3d9a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 900,
                color: "#fff",
              }}
            >
              AE
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "rgba(255,105,0,0.8)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Akdeniz Etkinlik
            </span>
            <span style={{ fontSize: 12, color: "rgba(176,220,230,0.35)" }}>
              Resmi Organizatör
            </span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .sponsor-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-card {
            padding: 32px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
