"use client";

import { useState } from "react";
import { useSiteStore, HeroData } from "@/lib/store";
import { Save, Plus, Trash2, RotateCcw } from "lucide-react";

const field = (label: string, children: React.ReactNode) => (
  <div style={{ marginBottom: 20 }}>
    <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(176,220,230,0.55)", textTransform: "uppercase", marginBottom: 6 }}>
      {label}
    </label>
    {children}
  </div>
);

const input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    style={{
      width: "100%", padding: "10px 14px", borderRadius: 8,
      background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.15)",
      color: "#f0feff", fontSize: 14, outline: "none",
      ...props.style,
    }}
  />
);

const textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    rows={3}
    style={{
      width: "100%", padding: "10px 14px", borderRadius: 8,
      background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.15)",
      color: "#f0feff", fontSize: 14, outline: "none", resize: "vertical",
      ...props.style,
    }}
  />
);

export default function HeroTab() {
  const { data, updateHero } = useSiteStore();
  const [form, setForm] = useState<HeroData>({ ...data.hero });
  const [saved, setSaved] = useState(false);

  function save() {
    updateHero(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function reset() {
    setForm({ ...data.hero });
  }

  function setField<K extends keyof HeroData>(key: K, value: HeroData[K]) {
    setForm(f => ({ ...f, [key]: value }));
  }

  return (
    <div style={{ maxWidth: 760 }}>

      {/* Save bar */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        <button onClick={save} style={{
          display: "flex", alignItems: "center", gap: 7,
          padding: "9px 20px", borderRadius: 8, border: "none", cursor: "pointer",
          background: saved ? "#c6f135" : "#00e5ff", color: "#000",
          fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          <Save size={14} /> {saved ? "Kaydedildi!" : "Kaydet"}
        </button>
        <button onClick={reset} style={{
          display: "flex", alignItems: "center", gap: 7,
          padding: "9px 16px", borderRadius: 8,
          background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(176,220,230,0.6)", fontWeight: 700, fontSize: 12, cursor: "pointer",
        }}>
          <RotateCcw size={13} /> Sıfırla
        </button>
      </div>

      {/* Section card */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Arka Plan & Başlık</h3>

        {field("Arka Plan Görseli (URL)", input({ value: form.backgroundImage, onChange: e => setField("backgroundImage", e.target.value), placeholder: "https://..." }))}

        {/* Preview */}
        {form.backgroundImage && (
          <div style={{ marginBottom: 16, borderRadius: 8, overflow: "hidden", height: 120, position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={form.backgroundImage} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>Önizleme</div>
          </div>
        )}

        {field("Festival Adı", input({ value: form.festivalName, onChange: e => setField("festivalName", e.target.value) }))}
        {field("Alt Başlık (örn: A Q U A)", input({ value: form.subTitle, onChange: e => setField("subTitle", e.target.value) }))}
        {field("Tarih Pill Metni", input({ value: form.datePill, onChange: e => setField("datePill", e.target.value) }))}
        {field("Açıklama Metni", textarea({ value: form.subtitle, onChange: e => setField("subtitle", e.target.value) }))}
      </div>

      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>CTA Butonları</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(176,220,230,0.4)", fontWeight: 700, marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>Birincil Buton</div>
            {field("Etiket", input({ value: form.ctaPrimary.label, onChange: e => setField("ctaPrimary", { ...form.ctaPrimary, label: e.target.value }) }))}
            {field("Href", input({ value: form.ctaPrimary.href, onChange: e => setField("ctaPrimary", { ...form.ctaPrimary, href: e.target.value }) }))}
          </div>
          <div>
            <div style={{ fontSize: 11, color: "rgba(176,220,230,0.4)", fontWeight: 700, marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>İkincil Buton</div>
            {field("Etiket", input({ value: form.ctaSecondary.label, onChange: e => setField("ctaSecondary", { ...form.ctaSecondary, label: e.target.value }) }))}
            {field("Href", input({ value: form.ctaSecondary.href, onChange: e => setField("ctaSecondary", { ...form.ctaSecondary, href: e.target.value }) }))}
          </div>
        </div>
      </div>

      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>İstatistikler</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {form.stats.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input value={s.n} onChange={e => {
                const stats = [...form.stats];
                stats[i] = { ...s, n: e.target.value };
                setField("stats", stats);
              }} placeholder="Sayı" style={{ width: 72, padding: "8px 10px", borderRadius: 8, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.15)", color: "#f0feff", fontSize: 14, outline: "none" }} />
              <input value={s.label} onChange={e => {
                const stats = [...form.stats];
                stats[i] = { ...s, label: e.target.value };
                setField("stats", stats);
              }} placeholder="Etiket" style={{ flex: 1, padding: "8px 10px", borderRadius: 8, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.15)", color: "#f0feff", fontSize: 14, outline: "none" }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Geri Sayım Hedefi</h3>
        </div>
        {field("Tarih/Saat (ISO 8601)", input({ value: form.countdownTarget, onChange: e => setField("countdownTarget", e.target.value), placeholder: "2026-07-19T14:00:00+03:00" }))}
      </div>

      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Ticker Bant</h3>
          <button onClick={() => setField("tickerItems", [...form.tickerItems, "YENİ İTEM"])} style={{
            display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8,
            background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.2)",
            color: "#00e5ff", fontSize: 11, fontWeight: 700, cursor: "pointer",
          }}>
            <Plus size={12} /> Ekle
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {form.tickerItems.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8 }}>
              <input value={item} onChange={e => {
                const items = [...form.tickerItems];
                items[i] = e.target.value;
                setField("tickerItems", items);
              }} style={{ flex: 1, padding: "8px 12px", borderRadius: 8, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.15)", color: "#f0feff", fontSize: 13, outline: "none" }} />
              <button onClick={() => setField("tickerItems", form.tickerItems.filter((_, j) => j !== i))} style={{
                padding: "8px 10px", borderRadius: 8, background: "rgba(255,61,154,0.1)",
                border: "1px solid rgba(255,61,154,0.2)", color: "#ff3d9a", cursor: "pointer",
              }}>
                <Trash2 size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
