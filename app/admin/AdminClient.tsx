"use client";

import { useState } from "react";
import { useAdminAuth } from "@/lib/store";
import { LogOut, Eye, Lock, LayoutDashboard, Users, Ticket, Info, MapPin, Menu as MenuIcon, Star } from "lucide-react";
import Link from "next/link";
import HeroTab    from "./tabs/HeroTab";
import LineupTab  from "./tabs/LineupTab";
import TicketsTab from "./tabs/TicketsTab";
import InfoTab    from "./tabs/InfoTab";
import VenueTab   from "./tabs/VenueTab";
import NavbarTab  from "./tabs/NavbarTab";
import SponsorTab from "./tabs/SponsorTab";

/* ── Login Screen ── */
function LoginScreen() {
  const { login } = useAdminAuth();
  const [pw, setPw]       = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const ok = login(pw);
      if (!ok) { setError(true); setLoading(false); }
    }, 400);
  }

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", background: "#030709",
    }}>
      <div style={{
        width: "100%", maxWidth: 400, padding: "0 24px",
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.03em", color: "#00e5ff", textShadow: "0 0 24px rgba(0,229,255,0.45)" }}>
            BIGENÇFEST
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: "#c6f135", textTransform: "uppercase", marginTop: 4 }}>
            Admin Panel
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(0,229,255,0.12)",
          borderRadius: 20,
          padding: 32,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, color: "rgba(176,220,230,0.6)", fontSize: 13 }}>
            <Lock size={16} color="#00e5ff" />
            Yönetici girişi gereklidir
          </div>

          <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(176,220,230,0.5)", textTransform: "uppercase", marginBottom: 8 }}>
            Şifre
          </label>
          <input
            type="password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setError(false); }}
            placeholder="••••••••"
            style={{
              width: "100%", padding: "12px 16px", borderRadius: 10,
              background: "rgba(0,229,255,0.05)",
              border: `1px solid ${error ? "#ff3d9a" : "rgba(0,229,255,0.18)"}`,
              color: "#f0feff", fontSize: 15, outline: "none",
              marginBottom: error ? 8 : 20,
            }}
          />
          {error && (
            <div style={{ fontSize: 12, color: "#ff3d9a", marginBottom: 16 }}>
              Hatalı şifre. Tekrar deneyin.
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !pw}
            style={{
              width: "100%", padding: "13px", borderRadius: 999,
              background: loading ? "rgba(0,229,255,0.4)" : "#00e5ff",
              color: "#000", fontWeight: 800, fontSize: 13, letterSpacing: "0.1em",
              textTransform: "uppercase", border: "none", cursor: loading ? "wait" : "pointer",
              transition: "all 0.2s",
            }}
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "rgba(176,220,230,0.25)" }}>
          İpucu: 1235
        </p>
      </div>
    </div>
  );
}

/* ── Tab config ── */
const TABS = [
  { id: "hero",    label: "Hero",     Icon: LayoutDashboard },
  { id: "lineup",  label: "Lineup",   Icon: Users },
  { id: "tickets", label: "Biletler", Icon: Ticket },
  { id: "info",    label: "Bilgi",    Icon: Info },
  { id: "venue",   label: "Mekan",    Icon: MapPin },
  { id: "navbar",  label: "Navbar",   Icon: MenuIcon },
  { id: "sponsor", label: "Sponsor",  Icon: Star },
] as const;

type TabId = typeof TABS[number]["id"];

/* ── Admin Dashboard ── */
function Dashboard() {
  const { logout } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<TabId>("hero");
  const [sideOpen, setSideOpen] = useState(true);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#030709" }}>

      {/* Sidebar */}
      <aside style={{
        width: sideOpen ? 220 : 64,
        flexShrink: 0,
        background: "rgba(5,10,14,0.95)",
        borderRight: "1px solid rgba(0,229,255,0.1)",
        display: "flex", flexDirection: "column",
        transition: "width 0.25s ease",
        overflow: "hidden",
      }}>
        {/* Brand */}
        <div style={{
          padding: "20px 16px",
          borderBottom: "1px solid rgba(0,229,255,0.08)",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <button
            onClick={() => setSideOpen(v => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#00e5ff", flexShrink: 0, padding: 2 }}
          >
            <MenuIcon size={18} />
          </button>
          {sideOpen && (
            <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#00e5ff", letterSpacing: "-0.02em" }}>BIGENÇFEST</div>
              <div style={{ fontSize: 9, color: "#c6f135", letterSpacing: "0.2em", fontWeight: 700 }}>ADMIN</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 2 }}>
          {TABS.map(({ id, label, Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                title={label}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer",
                  background: active ? "rgba(0,229,255,0.12)" : "transparent",
                  color: active ? "#00e5ff" : "rgba(176,220,230,0.5)",
                  fontWeight: 700, fontSize: 12, letterSpacing: "0.06em",
                  textAlign: "left", whiteSpace: "nowrap",
                  transition: "all 0.2s",
                }}
              >
                <Icon size={16} style={{ flexShrink: 0 }} />
                {sideOpen && label}
              </button>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div style={{ padding: "12px 8px", borderTop: "1px solid rgba(0,229,255,0.08)", display: "flex", flexDirection: "column", gap: 2 }}>
          <Link
            href="/"
            target="_blank"
            title="Siteyi Görüntüle"
            style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px", borderRadius: 10,
              color: "rgba(198,241,53,0.7)", fontSize: 12, fontWeight: 700,
              textDecoration: "none", whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}
          >
            <Eye size={16} style={{ flexShrink: 0 }} />
            {sideOpen && "Siteyi Gör"}
          </Link>
          <button
            onClick={logout}
            title="Çıkış"
            style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer",
              background: "transparent", color: "rgba(255,61,154,0.7)",
              fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}
          >
            <LogOut size={16} style={{ flexShrink: 0 }} />
            {sideOpen && "Çıkış Yap"}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, overflow: "auto", padding: "32px 28px" }}>
        {/* Tab header */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{
            fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em", color: "#fff",
            textTransform: "uppercase",
          }}>
            {TABS.find(t => t.id === activeTab)?.label} Ayarları
          </h1>
          <p style={{ fontSize: 12, color: "rgba(176,220,230,0.4)", marginTop: 4 }}>
            Değişiklikler anında sitede yansır · localStorage&apos;a kaydedilir
          </p>
        </div>

        {/* Tab content */}
        {activeTab === "hero"    && <HeroTab />}
        {activeTab === "lineup"  && <LineupTab />}
        {activeTab === "tickets" && <TicketsTab />}
        {activeTab === "info"    && <InfoTab />}
        {activeTab === "venue"   && <VenueTab />}
        {activeTab === "navbar"  && <NavbarTab />}
        {activeTab === "sponsor" && <SponsorTab />}
      </main>
    </div>
  );
}

/* ── Root export ── */
export default function AdminClient() {
  const { isLoggedIn } = useAdminAuth();
  if (!isLoggedIn) return <LoginScreen />;
  return <Dashboard />;
}
