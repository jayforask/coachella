"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Biletler nasıl satın alınır?",
    a: "Biletleri bu sayfadaki 'Bilet Al' butonu üzerinden veya WhatsApp hattımızdan satın alabilirsiniz. Ödeme sonrası biletiniz e-posta veya WhatsApp ile iletilir.",
  },
  {
    q: "Festival kaç gün sürecek?",
    a: "BIGENÇFEST AQUA 2026, 15–17 Ağustos tarihleri arasında 3 gün boyunca gerçekleşecek. Her gün kapılar saat 14:00'de açılır, konserler 04:00'e kadar devam eder.",
  },
  {
    q: "Festival nerede yapılacak?",
    a: "Festival, Antalya'da yer alan Waterhill Aqua Park'ta gerçekleştirilecek. Konum: Waterhill Aqua Park, Antalya.",
  },
  {
    q: "VIP bilet ile ne gibi ayrıcalıklar sunuluyor?",
    a: "VIP bilet sahipleri; sahne önü özel alana, VIP lounge'a, özel giriş kapısına ve 2 ücretsiz içeceğe erişim hakkı kazanır. Platinum bilet için ek olarak backstage pass, meet & greet ve sınırsız içecek sunulmaktadır.",
  },
  {
    q: "Festival alanına nasıl ulaşabilirim?",
    a: "İstanbul ve İzmir'den özel festival servisleri düzenlenecektir. Ayrıca Antalya merkeze yakın oteller için ücretsiz shuttle hizmeti sunulacaktır. Detaylı ulaşım bilgileri festival tarihine yakın paylaşılacaktır.",
  },
  {
    q: "Biletler iade edilebilir mi?",
    a: "Festival iptal veya ertelenmesi durumunda biletler tam olarak iade edilir. Kişisel nedenlerle iade talepleri 30 gün öncesine kadar kabul edilmektedir. Biletler kişiye özeldir ve devredilemez.",
  },
  {
    q: "Çocuklar katılabilir mi?",
    a: "18 yaş altı katılımcılar ebeveyn veya yasal vasi eşliğinde festivale katılabilir. Bazı sahne alanları (özellikle gece geç saatler) 18+ kısıtlamasına tabi olabilir.",
  },
  {
    q: "Festival alanında yiyecek ve içecek var mı?",
    a: "Evet, festival alanında çok sayıda yiyecek ve içecek noktası bulunacaktır. VIP ve Platinum bilet sahiplerine özel catering alanları ayrılmıştır.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIdx((prev) => (prev === i ? null : i));
  }

  return (
    <section
      id="faq"
      style={{
        background: "#050a0e",
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* bg glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: 400,
          height: 400,
          background: "radial-gradient(ellipse, rgba(198,241,53,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Header */}
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
            SSS
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
            Sık Sorulan{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #c6f135, #00e5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sorular
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(13px, 2vw, 15px)",
              color: "rgba(176,220,230,0.5)",
              maxWidth: 440,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Merak ettiğiniz her şey burada. Cevabınızı bulamazsanız bize ulaşın.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: 14,
                  border: `1px solid ${isOpen ? "rgba(198,241,53,0.3)" : "rgba(0,229,255,0.1)"}`,
                  background: isOpen ? "rgba(198,241,53,0.04)" : "rgba(255,255,255,0.02)",
                  overflow: "hidden",
                  transition: "border-color 0.2s, background 0.2s",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(13px, 2vw, 15px)",
                      fontWeight: 700,
                      color: isOpen ? "#c6f135" : "#fff",
                      lineHeight: 1.4,
                      transition: "color 0.2s",
                    }}
                  >
                    {item.q}
                  </span>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      border: `1px solid ${isOpen ? "rgba(198,241,53,0.4)" : "rgba(0,229,255,0.2)"}`,
                      background: isOpen ? "rgba(198,241,53,0.1)" : "rgba(0,229,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "#c6f135" : "#00e5ff",
                      flexShrink: 0,
                      transition: "all 0.2s",
                    }}
                  >
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                      fontSize: "clamp(13px, 2vw, 14px)",
                      color: "rgba(176,220,230,0.65)",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: 48,
            padding: "32px 24px",
            borderRadius: 16,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(0,229,255,0.1)",
          }}
        >
          <p style={{ fontSize: 14, color: "rgba(176,220,230,0.5)", marginBottom: 16, lineHeight: 1.6 }}>
            Burada bulamadığınız bir sorunuz mu var?
          </p>
          <a
            href={`https://wa.me/905319773113?text=${encodeURIComponent("Merhaba! BIGENÇFEST AQUA 2026 hakkında bir sorum var.")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #25d366, #128c7e)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            WhatsApp&apos;tan Sorun
          </a>
        </div>

      </div>
    </section>
  );
}
