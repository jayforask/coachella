"use client";

import { useState } from "react";
import { useSiteStore, VenueData, VenueAttraction, VenueHighlight } from "@/lib/store";
import { Save, Plus, Trash2, RotateCcw } from "lucide-react";

function genId() { return Math.random().toString(36).slice(2, 9); }

const inp = (value: string, onChange: (v: string) => void, placeholder?: string) => (
  <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{
    width: "100%", padding: "8px 12px", borderRadius: 7,
    background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)",
    color: "#f0feff", fontSize: 13, outline: "none",
  }} />
);

export default function VenueTab() {
  const { data, updateVenue } = useSiteStore();
  const [form, setForm] = useState<VenueData>({
    ...data.venue,
    attractions: data.venue.attractions.map(a => ({ ...a })),
    highlights: data.venue.highlights.map(h => ({ ...h })),
  });
  const [saved, setSaved] = useState(false);

  function save() { updateVenue(form); setSaved(true); setTimeout(() => setSaved(false), 2000); }
  function setF<K extends keyof VenueData>(k: K, v: VenueData[K]) { setForm(f => ({ ...f, [k]: v })); }

  function updateAttraction(id: string, patch: Partial<VenueAttraction>) {
    setForm(f => ({ ...f, attractions: f.attractions.map(a => a.id === id ? { ...a, ...patch } : a) }));
  }
  function removeAttraction(id: string) { setForm(f => ({ ...f, attractions: f.attractions.filter(a => a.id !== id) })); }
  function addAttraction() {
    setForm(f => ({ ...f, attractions: [...f.attractions, { id: genId(), src: "", alt: "Yeni", label: "Yeni" }] }));
  }

  function updateHighlight(i: number, patch: Partial<VenueHighlight>) {
    setForm(f => ({ ...f, highlights: f.highlights.map((h, idx) => idx === i ? { ...h, ...patch } : h) }));
  }
  function removeHighlight(i: number) { setForm(f => ({ ...f, highlights: f.highlights.filter((_, idx) => idx !== i) })); }
  function addHighlight() { setForm(f => ({ ...f, highlights: [...f.highlights, { icon: "🎵", text: "Yeni Özellik" }] })); }

  return (
    <div style={{ maxWidth: 820 }}>
      {/* Save */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        <button onClick={save} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 20px", borderRadius: 8, border: "none", cursor: "pointer", background: saved ? "#c6f135" : "#00e5ff", color: "#000", fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <Save size={14} /> {saved ? "Kaydedildi!" : "Kaydet"}
        </button>
        <button onClick={() => setForm({ ...data.venue, attractions: data.venue.attractions.map(a => ({ ...a })), highlights: data.venue.highlights.map(h => ({ ...h })) })} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 16px", borderRadius: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(176,220,230,0.6)", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
          <RotateCcw size={13} /> Sıfırla
        </button>
      </div>

      {/* Section texts */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Section Metinleri</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {([
            ["Section Label",   "sectionLabel"],
            ["Başlık",          "heading"],
            ["Sponsor Etiketi", "sponsorLabel"],
            ["Sponsor Alt",     "sponsorSubLabel"],
            ["Logo URL",        "logoSrc"],
            ["Logo Linki",      "logoHref"],
            ["CTA Dış Etiket",  "ctaExternalLabel"],
            ["CTA Dış Linki",   "ctaExternalHref"],
            ["CTA Bilet Etiket","ctaTicketLabel"],
          ] as [string, keyof VenueData][]).map(([label, k]) => (
            <div key={k as string}>
              <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{label}</label>
              {inp(form[k] as string, v => setF(k, v as VenueData[typeof k]))}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Alt Açıklama</label>
          <textarea value={form.subheading} onChange={e => setF("subheading", e.target.value)} rows={3} style={{ width: "100%", padding: "10px 12px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 13, outline: "none", resize: "vertical" }} />
        </div>

        {/* Logo preview */}
        {form.logoSrc && (
          <div style={{ marginTop: 14, padding: "12px 16px", borderRadius: 10, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", gap: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={form.logoSrc} alt="logo" style={{ height: 40, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.8 }} />
            <span style={{ fontSize: 11, color: "rgba(176,220,230,0.4)" }}>Logo önizleme</span>
          </div>
        )}
      </div>

      {/* Attractions */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Galeri Görselleri ({form.attractions.length})</h3>
          <button onClick={addAttraction} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 7, background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.18)", color: "#00e5ff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
            <Plus size={11} /> Ekle
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {form.attractions.map((a) => (
            <div key={a.id} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr auto", gap: 10, alignItems: "center", padding: "12px", borderRadius: 10, background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.04)" }}>
              {/* Thumbnail */}
              <div style={{ width: 80, height: 52, borderRadius: 7, overflow: "hidden", background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.1)", flexShrink: 0 }}>
                {a.src && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={a.src} alt={a.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                )}
              </div>
              <div>
                <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Görsel URL</label>
                {inp(a.src, v => updateAttraction(a.id, { src: v }), "https://...")}
              </div>
              <div>
                <label style={{ display: "block", fontSize: 9, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Etiket / Alt</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {inp(a.label, v => updateAttraction(a.id, { label: v, alt: v }), "Etiket")}
                </div>
              </div>
              <button onClick={() => removeAttraction(a.id)} style={{ padding: "7px 9px", borderRadius: 7, background: "rgba(255,61,154,0.08)", border: "1px solid rgba(255,61,154,0.18)", color: "#ff3d9a", cursor: "pointer" }}>
                <Trash2 size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Mekan Özellikleri</h3>
          <button onClick={addHighlight} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 7, background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.18)", color: "#00e5ff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
            <Plus size={11} /> Ekle
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {form.highlights.map((h, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input value={h.icon} onChange={e => updateHighlight(i, { icon: e.target.value })} placeholder="🎵" style={{ width: 52, padding: "7px 10px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 16, outline: "none", textAlign: "center" }} />
              {inp(h.text, v => updateHighlight(i, { text: v }), "Özellik metni")}
              <button onClick={() => removeHighlight(i)} style={{ padding: "7px 9px", borderRadius: 7, background: "rgba(255,61,154,0.08)", border: "1px solid rgba(255,61,154,0.18)", color: "#ff3d9a", cursor: "pointer" }}>
                <Trash2 size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
