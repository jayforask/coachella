"use client";

import { useState } from "react";
import { useSiteStore, SponsorData, SponsorPackage } from "@/lib/store";
import { Save, Plus, Trash2, RotateCcw, X } from "lucide-react";

function genId() { return Math.random().toString(36).slice(2, 9); }

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "8px 12px", borderRadius: 7,
  background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)",
  color: "#f0feff", fontSize: 13, outline: "none",
};

const lblStyle: React.CSSProperties = {
  display: "block", fontSize: 10, fontWeight: 700,
  letterSpacing: "0.1em", textTransform: "uppercase",
  color: "rgba(176,220,230,0.45)", marginBottom: 5,
};

export default function SponsorTab() {
  const { data, updateSponsor } = useSiteStore();
  const [form, setForm] = useState<SponsorData>({
    ...data.sponsor,
    packages: data.sponsor.packages.map(p => ({ ...p, perks: [...p.perks] })),
  });
  const [saved, setSaved] = useState(false);

  function save() { updateSponsor(form); setSaved(true); setTimeout(() => setSaved(false), 2000); }
  function reset() {
    setForm({
      ...data.sponsor,
      packages: data.sponsor.packages.map(p => ({ ...p, perks: [...p.perks] })),
    });
  }
  function setF<K extends keyof SponsorData>(k: K, v: SponsorData[K]) {
    setForm(f => ({ ...f, [k]: v }));
  }

  /* ── Package helpers ── */
  function updatePackage(id: string, patch: Partial<SponsorPackage>) {
    setForm(f => ({ ...f, packages: f.packages.map(p => p.id === id ? { ...p, ...patch } : p) }));
  }
  function removePackage(id: string) {
    setForm(f => ({ ...f, packages: f.packages.filter(p => p.id !== id) }));
  }
  function addPackage() {
    const pkg: SponsorPackage = {
      id: genId(), name: "Yeni Paket", price: "₺0", color: "#00e5ff",
      icon: "🎯", popular: false, perks: [],
    };
    setForm(f => ({ ...f, packages: [...f.packages, pkg] }));
  }

  /* ── Perk helpers ── */
  function updatePerk(pkgId: string, idx: number, val: string) {
    setForm(f => ({
      ...f,
      packages: f.packages.map(p => {
        if (p.id !== pkgId) return p;
        const perks = p.perks.map((pk, i) => i === idx ? val : pk);
        return { ...p, perks };
      }),
    }));
  }
  function addPerk(pkgId: string) {
    setForm(f => ({
      ...f,
      packages: f.packages.map(p =>
        p.id !== pkgId ? p : { ...p, perks: [...p.perks, "Yeni avantaj"] }
      ),
    }));
  }
  function removePerk(pkgId: string, idx: number) {
    setForm(f => ({
      ...f,
      packages: f.packages.map(p =>
        p.id !== pkgId ? p : { ...p, perks: p.perks.filter((_, i) => i !== idx) }
      ),
    }));
  }

  return (
    <div style={{ maxWidth: 900 }}>
      {/* Actions */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        <button
          onClick={save}
          style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "9px 20px", borderRadius: 8, border: "none", cursor: "pointer",
            background: saved ? "#c6f135" : "#00e5ff", color: "#000",
            fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase",
          }}
        >
          <Save size={14} /> {saved ? "Kaydedildi!" : "Kaydet"}
        </button>
        <button
          onClick={reset}
          style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "9px 16px", borderRadius: 8,
            background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(176,220,230,0.6)", fontWeight: 700, fontSize: 12, cursor: "pointer",
          }}
        >
          <RotateCcw size={13} /> Sıfırla
        </button>
      </div>

      {/* Section metinleri */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#00e5ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
          Section Metinleri
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            { label: "Section Label", k: "sectionLabel" as const },
            { label: "Başlık",        k: "heading"      as const },
            { label: "Alt Açıklama",  k: "subheading"   as const },
          ].map(({ label, k }) => (
            <div key={k} style={k === "subheading" ? { gridColumn: "1 / -1" } : {}}>
              <label style={lblStyle}>{label}</label>
              <input value={form[k]} onChange={e => setF(k, e.target.value)} style={inputStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* İletişim bilgileri */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 14, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#c6f135", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
          İletişim Bilgileri
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {[
            { label: "WhatsApp No (9053...)", k: "waNumber"     as const },
            { label: "E-posta",               k: "contactEmail" as const },
            { label: "Telefon",               k: "contactPhone" as const },
          ].map(({ label, k }) => (
            <div key={k}>
              <label style={lblStyle}>{label}</label>
              <input value={form[k]} onChange={e => setF(k, e.target.value)} style={inputStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* Paketler */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Sponsorluk Paketleri ({form.packages.length})
        </h3>
        <button
          onClick={addPackage}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "7px 14px", borderRadius: 8,
            background: "rgba(198,241,53,0.1)", border: "1px solid rgba(198,241,53,0.2)",
            color: "#c6f135", fontSize: 11, fontWeight: 700, cursor: "pointer",
          }}
        >
          <Plus size={12} /> Paket Ekle
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {form.packages.map((pkg) => (
          <div
            key={pkg.id}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${pkg.color}22`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "16px 20px",
                borderBottom: `1px solid ${pkg.color}18`,
                display: "flex", alignItems: "center",
                justifyContent: "space-between", gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>{pkg.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: pkg.color }}>{pkg.name}</span>
                {pkg.popular && (
                  <span style={{ fontSize: 10, fontWeight: 700, background: pkg.color, color: "#000", padding: "2px 8px", borderRadius: 999 }}>
                    EN POPÜLER
                  </span>
                )}
              </div>
              <button
                onClick={() => removePackage(pkg.id)}
                style={{ padding: "6px 8px", borderRadius: 7, background: "rgba(255,61,154,0.08)", border: "1px solid rgba(255,61,154,0.18)", color: "#ff3d9a", cursor: "pointer" }}
              >
                <Trash2 size={13} />
              </button>
            </div>

            <div style={{ padding: 20 }}>
              {/* Fields */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
                {[
                  { label: "İsim",        key: "name"  as const },
                  { label: "Fiyat",       key: "price" as const },
                  { label: "Renk (#hex)", key: "color" as const },
                  { label: "İkon (emoji)",key: "icon"  as const },
                ].map(({ label, key }) => (
                  <div key={key}>
                    <label style={lblStyle}>{label}</label>
                    <input
                      value={pkg[key]}
                      onChange={e => updatePackage(pkg.id, { [key]: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: 1 }}>
                  <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 12, color: "rgba(176,220,230,0.6)", fontWeight: 600 }}>
                    <input
                      type="checkbox"
                      checked={pkg.popular}
                      onChange={e => updatePackage(pkg.id, { popular: e.target.checked })}
                      style={{ width: 15, height: 15, accentColor: pkg.color }}
                    />
                    En Popüler
                  </label>
                </div>
              </div>

              {/* Perks */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <label style={{ ...lblStyle, marginBottom: 0 }}>Avantajlar</label>
                <button
                  onClick={() => addPerk(pkg.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 5,
                    padding: "4px 10px", borderRadius: 6,
                    background: `${pkg.color}12`, border: `1px solid ${pkg.color}30`,
                    color: pkg.color, fontSize: 10, fontWeight: 700, cursor: "pointer",
                  }}
                >
                  <Plus size={10} /> Ekle
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {pkg.perks.map((perk, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input
                      value={perk}
                      onChange={e => updatePerk(pkg.id, i, e.target.value)}
                      style={{ flex: 1, padding: "6px 10px", borderRadius: 7, background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.1)", color: "#f0feff", fontSize: 13, outline: "none" }}
                    />
                    <button
                      onClick={() => removePerk(pkg.id, i)}
                      style={{ padding: "6px 8px", borderRadius: 6, background: "rgba(255,61,154,0.06)", border: "1px solid rgba(255,61,154,0.15)", color: "#ff3d9a", cursor: "pointer" }}
                    >
                      <X size={11} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
