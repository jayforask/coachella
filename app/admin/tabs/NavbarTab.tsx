"use client";

import { useState } from "react";
import { useSiteStore, NavbarData, NavLink } from "@/lib/store";
import { Save, Plus, Trash2, RotateCcw, GripVertical } from "lucide-react";

function genId() { return Math.random().toString(36).slice(2, 9); }

const inp = (value: string, onChange: (v: string) => void, placeholder?: string) => (
  <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{
    width: "100%", padding: "8px 12px", borderRadius: 7,
    background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)",
    color: "#f0feff", fontSize: 13, outline: "none",
  }} />
);

export default function NavbarTab() {
  const { data, updateNavbar } = useSiteStore();
  const [form, setForm] = useState<NavbarData>({
    ...data.navbar,
    links: data.navbar.links.map(l => ({ ...l })),
  });
  const [saved, setSaved] = useState(false);

  function save() { updateNavbar(form); setSaved(true); setTimeout(() => setSaved(false), 2000); }
  function setF<K extends keyof NavbarData>(k: K, v: NavbarData[K]) { setForm(f => ({ ...f, [k]: v })); }

  function updateLink(id: string, patch: Partial<NavLink>) {
    setForm(f => ({ ...f, links: f.links.map(l => l.id === id ? { ...l, ...patch } : l) }));
  }
  function removeLink(id: string) { setForm(f => ({ ...f, links: f.links.filter(l => l.id !== id) })); }
  function addLink() {
    setForm(f => ({ ...f, links: [...f.links, { id: genId(), href: "#", label: "Yeni Link" }] }));
  }
  function moveLink(from: number, to: number) {
    const links = [...form.links];
    const [item] = links.splice(from, 1);
    links.splice(to, 0, item);
    setForm(f => ({ ...f, links }));
  }

  return (
    <div style={{ maxWidth: 680 }}>
      {/* Save */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        <button onClick={save} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 20px", borderRadius: 8, border: "none", cursor: "pointer", background: saved ? "#c6f135" : "#00e5ff", color: "#000", fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <Save size={14} /> {saved ? "Kaydedildi!" : "Kaydet"}
        </button>
        <button onClick={() => setForm({ ...data.navbar, links: data.navbar.links.map(l => ({ ...l })) })} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 16px", borderRadius: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(176,220,230,0.6)", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
          <RotateCcw size={13} /> Sıfırla
        </button>
      </div>

      {/* Brand */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Marka (Logo Metni)</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Ana İsim</label>
            {inp(form.brandName, v => setF("brandName", v), "BIGENÇFEST")}
          </div>
          <div>
            <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Alt Metin</label>
            {inp(form.brandSub, v => setF("brandSub", v), "AQUA 2026")}
          </div>
        </div>

        {/* Preview */}
        <div style={{ marginTop: 16, padding: "12px 20px", borderRadius: 10, background: "rgba(0,0,0,0.4)", display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontSize: 16, fontWeight: 900, color: "#00e5ff", letterSpacing: "-0.02em", textTransform: "uppercase", textShadow: "0 0 16px rgba(0,229,255,0.5)" }}>
            {form.brandName || "BIGENÇFEST"}
          </span>
          <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.3em", color: "#c6f135", textTransform: "uppercase", marginTop: 2 }}>
            {form.brandSub || "AQUA 2026"}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>CTA Butonu (Sağ üst)</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Buton Etiketi</label>
            {inp(form.ctaLabel, v => setF("ctaLabel", v), "Bilet Al")}
          </div>
          <div>
            <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Buton Href</label>
            {inp(form.ctaHref, v => setF("ctaHref", v), "#tickets")}
          </div>
        </div>
        {/* Preview */}
        <div style={{ marginTop: 14 }}>
          <button style={{ padding: "9px 22px", borderRadius: 999, background: "#00e5ff", color: "#000", fontWeight: 800, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", border: "none" }}>
            {form.ctaLabel || "Bilet Al"}
          </button>
        </div>
      </div>

      {/* Nav Links */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Navigasyon Linkleri ({form.links.length})</h3>
          <button onClick={addLink} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 7, background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.18)", color: "#00e5ff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
            <Plus size={11} /> Link Ekle
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {form.links.map((link, i) => (
            <div key={link.id} style={{ display: "flex", gap: 8, alignItems: "center", padding: "10px 12px", borderRadius: 8, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2, flexShrink: 0 }}>
                <button onClick={() => i > 0 && moveLink(i, i - 1)} disabled={i === 0} style={{ padding: 2, background: "none", border: "none", cursor: i > 0 ? "pointer" : "default", color: "rgba(176,220,230,0.3)", lineHeight: 1 }}>▲</button>
                <GripVertical size={14} color="rgba(176,220,230,0.2)" />
                <button onClick={() => i < form.links.length - 1 && moveLink(i, i + 1)} disabled={i === form.links.length - 1} style={{ padding: 2, background: "none", border: "none", cursor: i < form.links.length - 1 ? "pointer" : "default", color: "rgba(176,220,230,0.3)", lineHeight: 1 }}>▼</button>
              </div>
              <input value={link.label} onChange={e => updateLink(link.id, { label: e.target.value })} placeholder="Etiket" style={{ flex: 1, padding: "7px 10px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 13, outline: "none", minWidth: 0 }} />
              <input value={link.href} onChange={e => updateLink(link.id, { href: e.target.value })} placeholder="#href" style={{ flex: 2, padding: "7px 10px", borderRadius: 7, background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)", color: "#f0feff", fontSize: 13, outline: "none", minWidth: 0 }} />
              <button onClick={() => removeLink(link.id)} style={{ padding: "7px 9px", borderRadius: 7, background: "rgba(255,61,154,0.08)", border: "1px solid rgba(255,61,154,0.18)", color: "#ff3d9a", cursor: "pointer", flexShrink: 0 }}>
                <Trash2 size={13} />
              </button>
            </div>
          ))}
        </div>

        {/* Preview */}
        <div style={{ marginTop: 20, padding: "12px 20px", borderRadius: 10, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
          {form.links.map(l => (
            <span key={l.id} style={{ padding: "6px 14px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,254,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {l.label}
            </span>
          ))}
          <span style={{ padding: "7px 18px", borderRadius: 999, background: "#00e5ff", color: "#000", fontWeight: 800, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {form.ctaLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
