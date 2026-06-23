"use client";

import { useState } from "react";
import { useSiteStore, TicketsData, Ticket, TicketFeature } from "@/lib/store";
import { Save, Plus, Trash2, RotateCcw, Check, X } from "lucide-react";

function genId() { return Math.random().toString(36).slice(2, 9); }

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "8px 12px", borderRadius: 7,
  background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.13)",
  color: "#f0feff", fontSize: 13, outline: "none",
};

export default function TicketsTab() {
  const { data, updateTickets } = useSiteStore();
  const [form, setForm] = useState<TicketsData>({
    ...data.tickets,
    tickets: data.tickets.tickets.map(t => ({ ...t, features: t.features.map(f => ({ ...f })) })),
  });
  const [saved, setSaved] = useState(false);

  function save() { updateTickets(form); setSaved(true); setTimeout(() => setSaved(false), 2000); }
  function setF<K extends keyof TicketsData>(k: K, v: TicketsData[K]) { setForm(f => ({ ...f, [k]: v })); }

  function updateTicket(id: string, patch: Partial<Ticket>) {
    setForm(f => ({ ...f, tickets: f.tickets.map(t => t.id === id ? { ...t, ...patch } : t) }));
  }
  function removeTicket(id: string) {
    setForm(f => ({ ...f, tickets: f.tickets.filter(t => t.id !== id) }));
  }
  function addTicket() {
    const t: Ticket = { id: genId(), name: "Yeni Pass", price: "₺0", per: "/ 3 Gün", color: "#00e5ff", popular: false, ctaLabel: "Satın Al", features: [] };
    setForm(f => ({ ...f, tickets: [...f.tickets, t] }));
  }
  function updateFeature(ticketId: string, idx: number, patch: Partial<TicketFeature>) {
    setForm(f => ({
      ...f, tickets: f.tickets.map(t => {
        if (t.id !== ticketId) return t;
        const features = t.features.map((fe, i) => i === idx ? { ...fe, ...patch } : fe);
        return { ...t, features };
      })
    }));
  }
  function addFeature(ticketId: string) {
    setForm(f => ({
      ...f, tickets: f.tickets.map(t => t.id !== ticketId ? t : { ...t, features: [...t.features, { text: "Yeni özellik", included: true }] })
    }));
  }
  function removeFeature(ticketId: string, idx: number) {
    setForm(f => ({
      ...f, tickets: f.tickets.map(t => t.id !== ticketId ? t : { ...t, features: t.features.filter((_, i) => i !== idx) })
    }));
  }

  return (
    <div style={{ maxWidth: 900 }}>
      {/* Save */}
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        <button onClick={save} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 20px", borderRadius: 8, border: "none", cursor: "pointer", background: saved ? "#c6f135" : "#00e5ff", color: "#000", fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <Save size={14} /> {saved ? "Kaydedildi!" : "Kaydet"}
        </button>
        <button onClick={() => setForm({ ...data.tickets, tickets: data.tickets.tickets.map(t => ({ ...t, features: t.features.map(f => ({ ...f })) })) })} style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 16px", borderRadius: 8, background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(176,220,230,0.6)", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
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
            { label: "Alt Açıklama", k: "subheading" as const },
            { label: "Dipnot", k: "footnote" as const },
          ].map(({ label, k }) => (
            <div key={k}>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(176,220,230,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{label}</label>
              <input value={form[k]} onChange={e => setF(k, e.target.value)} style={inputStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* Tickets */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h3 style={{ fontSize: 13, fontWeight: 800, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>Biletler ({form.tickets.length})</h3>
        <button onClick={addTicket} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 8, background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.2)", color: "#00e5ff", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
          <Plus size={12} /> Bilet Ekle
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {form.tickets.map((ticket) => (
          <div key={ticket.id} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${ticket.color}22`, borderRadius: 14, overflow: "hidden" }}>
            {/* Ticket header */}
            <div style={{ padding: "16px 20px", borderBottom: `1px solid ${ticket.color}18`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: ticket.color, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>{ticket.name}</span>
                {ticket.popular && <span style={{ fontSize: 10, fontWeight: 700, background: ticket.color, color: "#000", padding: "2px 8px", borderRadius: 999, letterSpacing: "0.08em" }}>EN ÇOK SATAN</span>}
              </div>
              <button onClick={() => removeTicket(ticket.id)} style={{ padding: "6px 8px", borderRadius: 7, background: "rgba(255,61,154,0.08)", border: "1px solid rgba(255,61,154,0.18)", color: "#ff3d9a", cursor: "pointer" }}>
                <Trash2 size={13} />
              </button>
            </div>

            <div style={{ padding: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
                {[
                  { label: "İsim", key: "name" as const },
                  { label: "Fiyat", key: "price" as const },
                  { label: "Birim", key: "per" as const },
                  { label: "Renk (#hex)", key: "color" as const },
                  { label: "CTA Etiketi", key: "ctaLabel" as const },
                ].map(({ label, key }) => (
                  <div key={key}>
                    <label style={{ display: "block", fontSize: 10, fontWeight: 700, color: "rgba(176,220,230,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{label}</label>
                    <input value={ticket[key]} onChange={e => updateTicket(ticket.id, { [key]: e.target.value })} style={inputStyle} />
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8, paddingBottom: 1 }}>
                  <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 12, color: "rgba(176,220,230,0.6)", fontWeight: 600 }}>
                    <input type="checkbox" checked={ticket.popular} onChange={e => updateTicket(ticket.id, { popular: e.target.checked })} style={{ width: 15, height: 15, accentColor: ticket.color }} />
                    En Çok Satan
                  </label>
                </div>
              </div>

              {/* Features */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: "rgba(176,220,230,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Özellikler</label>
                <button onClick={() => addFeature(ticket.id)} style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 6, background: `${ticket.color}12`, border: `1px solid ${ticket.color}30`, color: ticket.color, fontSize: 10, fontWeight: 700, cursor: "pointer" }}>
                  <Plus size={10} /> Ekle
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {ticket.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <button onClick={() => updateFeature(ticket.id, i, { included: !f.included })} style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, border: `1px solid ${f.included ? "#00e5ff40" : "rgba(255,61,154,0.3)"}`, background: f.included ? "rgba(0,229,255,0.08)" : "rgba(255,61,154,0.06)", color: f.included ? "#00e5ff" : "#ff3d9a", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {f.included ? <Check size={12} /> : <X size={12} />}
                    </button>
                    <input value={f.text} onChange={e => updateFeature(ticket.id, i, { text: e.target.value })} style={{ flex: 1, padding: "6px 10px", borderRadius: 7, background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.1)", color: "#f0feff", fontSize: 13, outline: "none" }} />
                    <button onClick={() => removeFeature(ticket.id, i)} style={{ padding: "6px 8px", borderRadius: 6, background: "rgba(255,61,154,0.06)", border: "1px solid rgba(255,61,154,0.15)", color: "#ff3d9a", cursor: "pointer" }}>
                      <Trash2 size={11} />
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
