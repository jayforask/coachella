"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, MessageCircle, ArrowLeft, ShieldCheck } from "lucide-react";

const WA_NUMBER = "905319773113";

const TICKET_DATA: Record<string, {
  name: string;
  price: string;
  color: string;
  features: string[];
}> = {
  general: {
    name: "General Admission",
    price: "₺1.850",
    color: "#00e5ff",
    features: ["3 günlük giriş", "Tüm sahnelere erişim", "Festival alanı", "Yiyecek/içecek alanları"],
  },
  vip: {
    name: "VIP Pass",
    price: "₺4.200",
    color: "#c6f135",
    features: ["3 günlük giriş", "VIP sahne önü alanı", "VIP lounge", "Özel giriş kapısı", "2 içecek dahil", "Şarj istasyonları"],
  },
  platinum: {
    name: "Platinum",
    price: "₺8.500",
    color: "#ff3d9a",
    features: ["3 günlük giriş", "Backstage pass", "Artist meet & greet", "Premium lounge", "Sınırsız içecek", "Otel transfer", "VIP park yeri"],
  },
};

export default function CheckoutClient() {
  const params = useSearchParams();
  const ticketKey = params.get("ticket") ?? "general";
  const ticket = TICKET_DATA[ticketKey] ?? TICKET_DATA.general;

  const [qty, setQty] = useState(1);
  const [name, setName]     = useState("");
  const [phone, setPhone]   = useState("");
  const [email, setEmail]   = useState("");
  const [ready, setReady]   = useState(false);

  useEffect(() => {
    setReady(name.trim().length > 1 && phone.trim().length > 7);
  }, [name, phone]);

  const totalPrice = ticket.price.replace("₺", "").replace(".", "");
  const numericPrice = parseInt(totalPrice.replace(/\D/g, ""), 10);
  const total = `₺${(numericPrice * qty).toLocaleString("tr-TR")}`;

  function buildWALink() {
    const msg = encodeURIComponent(
      `Merhaba! BIGENÇFEST AQUA 2025 bilet satın almak istiyorum.\n\n` +
      `🎟️ Bilet Tipi: ${ticket.name}\n` +
      `👤 Ad Soyad: ${name}\n` +
      `📞 Telefon: ${phone}\n` +
      `📧 E-posta: ${email || "—"}\n` +
      `🔢 Adet: ${qty}\n` +
      `💰 Toplam: ${total}\n\n` +
      `Ödeme bilgilerini paylaşır mısınız?`
    );
    return `https://wa.me/${WA_NUMBER}?text=${msg}`;
  }

  const inp: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1.5px solid rgba(0,229,255,0.15)",
    background: "rgba(0,229,255,0.04)",
    color: "#f0feff",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

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
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        {/* Back link */}
        <Link
          href="/#tickets"
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
            marginBottom: 36,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#00e5ff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(176,220,230,0.45)"; }}
        >
          <ArrowLeft size={14} />
          Biletlere Dön
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 28,
            alignItems: "start",
          }}
          className="checkout-grid"
        >

          {/* LEFT — form */}
          <div>
            <h1
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#fff",
                marginBottom: 8,
              }}
            >
              Bilet Bilgileri
            </h1>
            <p style={{ fontSize: 13, color: "rgba(176,220,230,0.45)", marginBottom: 32 }}>
              Bilgilerinizi doldurun, WhatsApp üzerinden ödeme bilgisi alın.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={lbl}>Ad Soyad *</label>
                <input
                  style={inp}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adınız ve soyadınız"
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#00e5ff"; }}
                  onBlur={(e)  => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)"; }}
                />
              </div>

              <div>
                <label style={lbl}>Telefon Numarası *</label>
                <input
                  style={inp}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+90 5XX XXX XX XX"
                  type="tel"
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#00e5ff"; }}
                  onBlur={(e)  => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)"; }}
                />
              </div>

              <div>
                <label style={lbl}>E-posta (opsiyonel)</label>
                <input
                  style={inp}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@email.com"
                  type="email"
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#00e5ff"; }}
                  onBlur={(e)  => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.15)"; }}
                />
              </div>

              {/* Quantity */}
              <div>
                <label style={lbl}>Bilet Adedi</label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    style={qtyBtn}
                  >−</button>
                  <span style={{ fontSize: 20, fontWeight: 800, color: "#fff", minWidth: 32, textAlign: "center" }}>
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => Math.min(10, q + 1))}
                    style={qtyBtn}
                  >+</button>
                </div>
              </div>
            </div>

            {/* Security note */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginTop: 28,
                padding: "14px 16px",
                borderRadius: 10,
                background: "rgba(0,229,255,0.04)",
                border: "1px solid rgba(0,229,255,0.1)",
              }}
            >
              <ShieldCheck size={16} color="#00e5ff" style={{ flexShrink: 0, marginTop: 1 }} />
              <p style={{ fontSize: 12, color: "rgba(176,220,230,0.5)", lineHeight: 1.6 }}>
                Bilgileriniz yalnızca bilet işleminiz için kullanılacak, üçüncü taraflarla paylaşılmayacaktır. Ödeme WhatsApp üzerinden güvenli şekilde gerçekleştirilir.
              </p>
            </div>
          </div>

          {/* RIGHT — order summary + CTA */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${ticket.color}33`,
              borderRadius: 20,
              padding: 28,
              position: "sticky",
              top: 90,
            }}
          >
            {/* Ticket badge */}
            <div
              style={{
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: ticket.color,
                marginBottom: 6,
              }}
            >
              Seçilen Bilet
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", marginBottom: 4 }}>
              {ticket.name}
            </div>
            <div style={{ fontSize: 13, color: "rgba(176,220,230,0.45)", marginBottom: 20 }}>
              BIGENÇFEST AQUA · 15–17 Ağustos 2025 · Bodrum
            </div>

            {/* Features */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {ticket.features.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(240,254,255,0.7)" }}>
                  <Check size={12} color={ticket.color} style={{ flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>

            {/* Price breakdown */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: 16,
                marginBottom: 20,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "rgba(176,220,230,0.5)", marginBottom: 6 }}>
                <span>{ticket.price} × {qty} adet</span>
                <span>{total}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 800, color: "#fff" }}>
                <span>Toplam</span>
                <span style={{ color: ticket.color }}>{total}</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={ready ? buildWALink() : undefined}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                width: "100%",
                padding: "15px",
                borderRadius: 999,
                background: ready ? "linear-gradient(135deg, #25d366, #128c7e)" : "rgba(255,255,255,0.08)",
                color: ready ? "#fff" : "rgba(176,220,230,0.3)",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: ready ? "pointer" : "not-allowed",
                transition: "all 0.25s",
                boxShadow: ready ? "0 4px 24px rgba(37,211,102,0.3)" : "none",
              }}
              onClick={(e) => { if (!ready) e.preventDefault(); }}
            >
              <MessageCircle size={18} />
              WhatsApp ile Sipariş Ver
            </a>

            {!ready && (
              <p style={{ fontSize: 11, color: "rgba(176,220,230,0.3)", textAlign: "center", marginTop: 8, letterSpacing: "0.04em" }}>
                Ad soyad ve telefon numarası gerekli
              </p>
            )}

            {/* Ticket links */}
            <div style={{ display: "flex", gap: 6, marginTop: 16, justifyContent: "center" }}>
              {Object.entries(TICKET_DATA).map(([key, t]) => (
                <Link
                  key={key}
                  href={`/checkout?ticket=${key}`}
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "5px 10px",
                    borderRadius: 999,
                    border: `1px solid ${ticketKey === key ? t.color : "rgba(255,255,255,0.1)"}`,
                    color: ticketKey === key ? t.color : "rgba(176,220,230,0.35)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  {t.name.split(" ")[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

const lbl: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(176,220,230,0.5)",
  marginBottom: 7,
};

const qtyBtn: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 999,
  border: "1.5px solid rgba(0,229,255,0.2)",
  background: "rgba(0,229,255,0.06)",
  color: "#00e5ff",
  fontSize: 18,
  fontWeight: 700,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s",
};
