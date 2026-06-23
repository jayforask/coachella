"use client";

import { useState } from "react";
import { useSiteStore, InfoData, InfoCard, InfoFeature } from "@/lib/store";
import { Save, Plus, Trash2, RotateCcw } from "lucide-react";

const ICON_OPTIONS = ["Calendar", "MapPin", "Music2", "Clock", "Star", "Users", "Zap", "Heart"];
const COLOR_PRESETS = ["#00e5ff", "#c6f135", "#ff3d9a", "#a78bfa", "#fb923c", "#34d399"];

const inp = (value: string, onChange: (v: string) => void, placeholder?: string, style?: React.CSSProperties) => (
  <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{
    width: "100%", padding: "8px 12px", borderRadius: 7,
    background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)",
    color: "#f0feff", fontSize: 13, outline: "none", ...style,
  }} />
);

export default function InfoTab() {
  const { data, updateInfo } = useSiteStore();
  const [form, setForm] = useState<InfoData>({
    ...data.info,
    cards: data.info.cards.map(c => ({ ...c })),
    features: data.info.features.map(f => ({ ...f })),
  });
  const [saved, setSaved] = useState(false);

  function save() { updateInfo(form); setSaved(true); setTimeout(() => setSaved(false), 2000); }
  function setF<K extends keyof InfoData>(k: K, v: InfoData[K]) { setForm(f => ({ ...f, [k]: v })); }

  function updateCard(i: number, patch: Partial<InfoCard>) {
    setForm(f => ({ ...f, cards: f.cards.map((c, idx) => idx === i ? { ...c, ...patch } : c) }));
  }
  function removeCard(i: number) { setForm(f => ({ ...f, cards: f.cards.filter((_, idx) => idx !== i) })); }
  function addCard() {
    setForm(f => ({ ...f, cards: [...f.cards, { icon: "Star", title: "Yeni Kart", value: "Değer", sub: "Alt metin", color: "#00e5ff" }] }));
  }

  function updateFeature(i: number, patch: Partial<InfoFeature>) {
    setForm(f => ({ ...f, features: f.features.map((fe, idx) => idx === i ? { ...fe, ...patch } : fe) }));
  }
  function removeFeature(i: number) { setForm(f => ({ ...f, features: f.features.filter((_, idx) => idx !== i) })); }
  function addFeature() {
    setForm(f => ({ ...f, features: [...f.features, { icon: "🎵", text: "Yeni özellik" }] }));
  }

  return (
    <div style={{ maxWidth: 800 }}>
      {/* Save */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        <button onClick={save} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 20px", borderRadius: 8, border: "none", cursor: "pointer", background: saved ? "#c6f135" : "#00e5ff", color: "#000", fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <Save size={14} /> {saved ? "Kaydedildi!" : "Kaydet"}
        </button>
        <button onClick={() => setForm({ ...data.info, cards: data.info.cards.map(c => ({ ...c })), features: data.info.features.map(f => ({ ...f })) })} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 16px", borderRadius: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(176,220,230,0.6)", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
          <RotateCcw size={13} /> Sıfırla
        </button>
      </div>

      {/* Section texts */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Section Metinleri</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            { label: "Section Label", k: "sectionLabel" as const },
            { label: "Başlık", k: "heading" as const },
            { label: "Açıklama Başlığı", k: "descTitle" as const },
          ].map(({ label, k }) => (
            <div key={k}>
              <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{label}</label>
              {inp(form[k], v => setF(k, v))}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>1. Paragraf</label>
          <textarea value={form.desc1} onChange={e => setF("desc1", e.target.value)} rows={3} style={{ width: "100%", padding: "10px 12px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 13, outline: "none", resize: "vertical" }} />
        </div>
        <div style={{ marginTop: 12 }}>
          <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>2. Paragraf</label>
          <textarea value={form.desc2} onChange={e => setF("desc2", e.target.value)} rows={3} style={{ width: "100%", padding: "10px 12px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 13, outline: "none", resize: "vertical" }} />
        </div>
      </div>

      {/* Info Cards */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Bilgi Kartları</h3>
          <button onClick={addCard} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 7, background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.18)", color: "#00e5ff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
            <Plus size={11} /> Kart Ekle
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {form.cards.map((card, i) => (
            <div key={i} style={{ padding: "14px 16px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: `1px solid ${card.color}20`, display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 10, alignItems: "end" }}>
              <div>
                <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>İkon</label>
                <select value={card.icon} onChange={e => updateCard(i, { icon: e.target.value })} style={{ width: "100%", padding: "7px 10px", borderRadius: 7, background: "#071018", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 12, outline: "none" }}>
                  {ICON_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Başlık</label>
                {inp(card.title, v => updateCard(i, { title: v }))}
              </div>
              <div>
                <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Değer</label>
                {inp(card.value, v => updateCard(i, { value: v }))}
              </div>
              <button onClick={() => removeCard(i)} style={{ padding: "7px 9px", borderRadius: 7, background: "rgba(255,61,154,0.08)", border: "1px solid rgba(255,61,154,0.18)", color: "#ff3d9a", cursor: "pointer" }}>
                <Trash2 size={13} />
              </button>
              <div style={{ gridColumn: "1 / 3" }}>
                <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Alt Metin</label>
                {inp(card.sub, v => updateCard(i, { sub: v }))}
              </div>
              <div>
                <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Renk</label>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {COLOR_PRESETS.map(c => (
                    <button key={c} onClick={() => updateCard(i, { color: c })} style={{ width: 22, height: 22, borderRadius: "50%", background: c, border: card.color === c ? "2px solid #fff" : "2px solid transparent", cursor: "pointer" }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features list */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Özellik Listesi</h3>
          <button onClick={addFeature} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 7, background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.18)", color: "#00e5ff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
            <Plus size={11} /> Ekle
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {form.features.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input value={f.icon} onChange={e => updateFeature(i, { icon: e.target.value })} placeholder="🎵" style={{ width: 52, padding: "7px 10px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 16, outline: "none", textAlign: "center" }} />
              {inp(f.text, v => updateFeature(i, { text: v }), "Özellik metni", { flex: 1 } as React.CSSProperties)}
              <button onClick={() => removeFeature(i)} style={{ padding: "7px 9px", borderRadius: 7, background: "rgba(255,61,154,0.08)", border: "1px solid rgba(255,61,154,0.18)", color: "#ff3d9a", cursor: "pointer" }}>
                <Trash2 size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
