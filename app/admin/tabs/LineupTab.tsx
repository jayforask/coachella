"use client";

import { useState } from "react";
import { useSiteStore, LineupData, Artist } from "@/lib/store";
import { Save, Plus, Trash2, RotateCcw, GripVertical } from "lucide-react";

const TIERS = ["headliner", "sub", "other"] as const;

const tierLabel: Record<string, string> = {
  headliner: "Headliner",
  sub: "Sub-Headliner",
  other: "Diğer",
};
const tierColor: Record<string, string> = {
  headliner: "#00e5ff",
  sub: "#c6f135",
  other: "rgba(176,220,230,0.5)",
};

function genId() { return Math.random().toString(36).slice(2, 9); }

export default function LineupTab() {
  const { data, updateLineup } = useSiteStore();
  const [form, setForm] = useState<LineupData>({ ...data.lineup, artists: data.lineup.artists.map(a => ({ ...a })), days: [...data.lineup.days] });
  const [saved, setSaved] = useState(false);

  function save() {
    updateLineup(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function setF<K extends keyof LineupData>(key: K, value: LineupData[K]) {
    setForm(f => ({ ...f, [key]: value }));
  }

  function updateArtist(id: string, patch: Partial<Artist>) {
    setForm(f => ({ ...f, artists: f.artists.map(a => a.id === id ? { ...a, ...patch } : a) }));
  }

  function removeArtist(id: string) {
    setForm(f => ({ ...f, artists: f.artists.filter(a => a.id !== id) }));
  }

  function addArtist(tier: Artist["tier"]) {
    const newArtist: Artist = { id: genId(), name: "Yeni Sanatçı", tier, day: form.days[1] ?? "", stage: "" };
    setForm(f => ({ ...f, artists: [...f.artists, newArtist] }));
  }

  const inp = (value: string, onChange: (v: string) => void, placeholder?: string) => (
    <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{
      flex: 1, padding: "7px 10px", borderRadius: 7, background: "rgba(0,229,255,0.05)",
      border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 13, outline: "none", minWidth: 0,
    }} />
  );

  return (
    <div style={{ maxWidth: 860 }}>
      {/* Save */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        <button onClick={save} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 20px", borderRadius: 8, border: "none", cursor: "pointer", background: saved ? "#c6f135" : "#00e5ff", color: "#000", fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <Save size={14} /> {saved ? "Kaydedildi!" : "Kaydet"}
        </button>
        <button onClick={() => setForm({ ...data.lineup, artists: data.lineup.artists.map(a => ({ ...a })), days: [...data.lineup.days] })} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 16px", borderRadius: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(176,220,230,0.6)", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
          <RotateCcw size={13} /> Sıfırla
        </button>
      </div>

      {/* Section texts */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Section Metinleri</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(176,220,230,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Section Label</label>
            {inp(form.sectionLabel, v => setF("sectionLabel", v))}
          </div>
          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(176,220,230,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Başlık</label>
            {inp(form.heading, v => setF("heading", v))}
          </div>
          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(176,220,230,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>CTA Etiketi</label>
            {inp(form.ctaLabel, v => setF("ctaLabel", v))}
          </div>
          <div>
            <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(176,220,230,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Alt Not</label>
            {inp(form.ctaNote, v => setF("ctaNote", v))}
          </div>
        </div>
      </div>

      {/* Days */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Günler (filtre butonları)</h3>
          <button onClick={() => setF("days", [...form.days, "Gün " + form.days.length])} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 7, background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.18)", color: "#00e5ff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
            <Plus size={11} /> Ekle
          </button>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {form.days.map((day, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <input value={day} onChange={e => {
                const days = [...form.days];
                days[i] = e.target.value;
                setF("days", days);
              }} style={{ width: 140, padding: "7px 10px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 13, outline: "none" }} />
              {i > 0 && (
                <button onClick={() => setF("days", form.days.filter((_, j) => j !== i))} style={{ padding: "6px 8px", borderRadius: 7, background: "rgba(255,61,154,0.08)", border: "1px solid rgba(255,61,154,0.18)", color: "#ff3d9a", cursor: "pointer" }}>
                  <Trash2 size={12} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Artists per tier */}
      {TIERS.map(tier => {
        const artists = form.artists.filter(a => a.tier === tier);
        return (
          <div key={tier} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${tierColor[tier]}22`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <h3 style={{ fontSize: 13, fontWeight: 800, color: tierColor[tier], letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {tierLabel[tier]} <span style={{ opacity: 0.5, fontWeight: 400 }}>({artists.length})</span>
              </h3>
              <button onClick={() => addArtist(tier)} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 7, background: `${tierColor[tier]}15`, border: `1px solid ${tierColor[tier]}33`, color: tierColor[tier], fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                <Plus size={11} /> Sanatçı Ekle
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {artists.map(a => (
                <div key={a.id} style={{ display: "flex", gap: 8, alignItems: "center", padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <GripVertical size={14} color="rgba(176,220,230,0.2)" style={{ flexShrink: 0 }} />
                  <input value={a.name} onChange={e => updateArtist(a.id, { name: e.target.value })} placeholder="Sanatçı Adı" style={{ flex: 2, padding: "7px 10px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 13, outline: "none", minWidth: 0 }} />
                  <select value={a.day} onChange={e => updateArtist(a.id, { day: e.target.value })} style={{ flex: 1, padding: "7px 10px", borderRadius: 7, background: "#071018", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 12, outline: "none", minWidth: 0 }}>
                    {form.days.filter(d => d !== form.days[0]).map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  {(tier === "headliner" || tier === "sub") && (
                    <input value={a.stage} onChange={e => updateArtist(a.id, { stage: e.target.value })} placeholder="Sahne" style={{ flex: 1, padding: "7px 10px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 12, outline: "none", minWidth: 0 }} />
                  )}
                  <button onClick={() => removeArtist(a.id)} style={{ padding: "7px 9px", borderRadius: 7, background: "rgba(255,61,154,0.08)", border: "1px solid rgba(255,61,154,0.18)", color: "#ff3d9a", cursor: "pointer", flexShrink: 0 }}>
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
