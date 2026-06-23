"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

/* ─────────────────── Types ─────────────────── */

export interface HeroData {
  backgroundImage: string;
  festivalName: string;
  subTitle: string;
  datePill: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: { n: string; label: string }[];
  countdownTarget: string; // ISO string
  tickerItems: string[];
}

export interface Artist {
  id: string;
  name: string;
  tier: "headliner" | "sub" | "other";
  day: string;
  stage: string;
}

export interface LineupData {
  sectionLabel: string;
  heading: string;
  days: string[];
  artists: Artist[];
  ctaLabel: string;
  ctaNote: string;
}

export interface TicketFeature {
  text: string;
  included: boolean;
}

export interface Ticket {
  id: string;
  name: string;
  price: string;
  per: string;
  color: string;
  popular: boolean;
  features: TicketFeature[];
  ctaLabel: string;
}

export interface TicketsData {
  sectionLabel: string;
  heading: string;
  subheading: string;
  footnote: string;
  tickets: Ticket[];
}

export interface InfoCard {
  icon: string; // lucide icon name
  title: string;
  value: string;
  sub: string;
  color: string;
}

export interface InfoFeature {
  icon: string;
  text: string;
}

export interface InfoData {
  sectionLabel: string;
  heading: string;
  descTitle: string;
  desc1: string;
  desc2: string;
  cards: InfoCard[];
  features: InfoFeature[];
}

export interface VenueAttraction {
  id: string;
  src: string;
  alt: string;
  label: string;
}

export interface VenueHighlight {
  icon: string;
  text: string;
}

export interface VenueData {
  sectionLabel: string;
  heading: string;
  subheading: string;
  sponsorLabel: string;
  sponsorSubLabel: string;
  logoSrc: string;
  logoHref: string;
  attractions: VenueAttraction[];
  highlights: VenueHighlight[];
  ctaExternalLabel: string;
  ctaExternalHref: string;
  ctaTicketLabel: string;
}

export interface NavLink {
  id: string;
  href: string;
  label: string;
}

export interface NavbarData {
  brandName: string;
  brandSub: string;
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export interface SponsorPackage {
  id: string;
  name: string;
  price: string;
  color: string;
  icon: string;
  popular: boolean;
  perks: string[];
}

export interface SponsorData {
  sectionLabel: string;
  heading: string;
  subheading: string;
  packages: SponsorPackage[];
  waNumber: string;
  contactEmail: string;
  contactPhone: string;
}

export interface SiteData {
  hero: HeroData;
  lineup: LineupData;
  tickets: TicketsData;
  info: InfoData;
  venue: VenueData;
  navbar: NavbarData;
  sponsor: SponsorData;
}

/* ─────────────────── Defaults ─────────────────── */

const defaultData: SiteData = {
  hero: {
    backgroundImage:
      "https://waterhill.com.tr/wp-content/uploads/2023/03/slide1-scaled.jpg",
    festivalName: "BIGENÇFEST",
    subTitle: "A Q U A",
    datePill: "15 – 17 AĞUSTOS 2026 · BODRUM",
    subtitle:
      "Türkiye'nin en büyük müzik festivali · Antalya'da 3 muhteşem gece",
    ctaPrimary: { label: "Bilet Al", href: "#tickets" },
    ctaSecondary: { label: "Lineup'ı Gör", href: "#lineup" },
    stats: [
      { n: "3", label: "Gün" },
      { n: "5", label: "Sahne" },
      { n: "50+", label: "Sanatçı" },
      { n: "25K", label: "Kapasite" },
    ],
    countdownTarget: "2026-07-19T14:00:00+03:00",
    tickerItems: [
      "BIGENÇFEST AQUA 2026",
      "15–17 AĞUSTOS",
      "BODRUM, TÜRKİYE",
      "ANA SAHNE",
      "AQUA SAHNE",
      "BEACH STAGE",
      "3 GÜN",
      "50+ SANATÇI",
      "SINIRLI BİLET",
    ],
  },
  lineup: {
    sectionLabel: "2026 Lineup",
    heading: "Kim Çalacak?",
    days: ["Tüm Günler", "Gün 1 · Cum", "Gün 2 · Cmt", "Gün 3 · Paz"],
    artists: [
      { id: "1", name: "TARKAN",      tier: "headliner", day: "Gün 1 · Cum", stage: "Ana Sahne" },
      { id: "2", name: "SİNAN AKÇIL", tier: "headliner", day: "Gün 2 · Cmt", stage: "Ana Sahne" },
      { id: "3", name: "HADISE",      tier: "headliner", day: "Gün 3 · Paz", stage: "Ana Sahne" },
      { id: "4", name: "Mabel Matiz",    tier: "sub", day: "Gün 1 · Cum", stage: "Aqua Sahne" },
      { id: "5", name: "Ceza",           tier: "sub", day: "Gün 1 · Cum", stage: "Beach Stage" },
      { id: "6", name: "Gülşen",         tier: "sub", day: "Gün 2 · Cmt", stage: "Aqua Sahne" },
      { id: "7", name: "Sık! Sık! Sık!", tier: "sub", day: "Gün 2 · Cmt", stage: "Beach Stage" },
      { id: "8", name: "Sertab Erener",  tier: "sub", day: "Gün 3 · Paz", stage: "Aqua Sahne" },
      { id: "9", name: "Cem Belevi",     tier: "sub", day: "Gün 3 · Paz", stage: "Beach Stage" },
      { id: "10", name: "Hande Yener",   tier: "other", day: "Gün 1 · Cum", stage: "" },
      { id: "11", name: "Murat Boz",     tier: "other", day: "Gün 1 · Cum", stage: "" },
      { id: "12", name: "Simge",         tier: "other", day: "Gün 1 · Cum", stage: "" },
      { id: "13", name: "Duman",         tier: "other", day: "Gün 1 · Cum", stage: "" },
      { id: "14", name: "Semicenk",      tier: "other", day: "Gün 2 · Cmt", stage: "" },
      { id: "15", name: "Furkan Soysal", tier: "other", day: "Gün 2 · Cmt", stage: "" },
      { id: "16", name: "Reynmen",       tier: "other", day: "Gün 2 · Cmt", stage: "" },
      { id: "17", name: "Aleyna Tilki",  tier: "other", day: "Gün 2 · Cmt", stage: "" },
      { id: "18", name: "Zeynep Bastık", tier: "other", day: "Gün 3 · Paz", stage: "" },
      { id: "19", name: "Burak Bulut",   tier: "other", day: "Gün 3 · Paz", stage: "" },
      { id: "20", name: "İrem Derici",   tier: "other", day: "Gün 3 · Paz", stage: "" },
      { id: "21", name: "Ece Seçkin",    tier: "other", day: "Gün 3 · Paz", stage: "" },
    ],
    ctaLabel: "Şimdi Bilet Al",
    ctaNote: "Daha Fazla Sanatçı Yakında Açıklanacak",
  },
  tickets: {
    sectionLabel: "Biletler",
    heading: "Senin İçin Bir Pass",
    subheading: "Sınırlı sayıda bilet mevcut. Erken alanlara özel fiyat.",
    footnote: "* Tüm fiyatlar KDV dahildir. Biletler kişiye özeldir, devredilemez.",
    tickets: [
      {
        id: "general",
        name: "General Admission",
        price: "₺1.850",
        per: "/ 3 Gün",
        color: "#00e5ff",
        popular: false,
        ctaLabel: "Satın Al",
        features: [
          { text: "3 günlük giriş", included: true },
          { text: "Tüm sahnelere erişim", included: true },
          { text: "Festival alanı", included: true },
          { text: "Yiyecek/içecek alanları", included: true },
          { text: "VIP alanlar", included: false },
          { text: "Backstage", included: false },
          { text: "Premium konser alanı", included: false },
        ],
      },
      {
        id: "vip",
        name: "VIP Pass",
        price: "₺4.200",
        per: "/ 3 Gün",
        color: "#c6f135",
        popular: true,
        ctaLabel: "Satın Al",
        features: [
          { text: "3 günlük giriş", included: true },
          { text: "VIP sahne önü alanı", included: true },
          { text: "VIP lounge erişimi", included: true },
          { text: "Özel giriş kapısı", included: true },
          { text: "2 içecek dahil", included: true },
          { text: "Şarj istasyonları", included: true },
          { text: "Backstage", included: false },
        ],
      },
      {
        id: "platinum",
        name: "Platinum",
        price: "₺8.500",
        per: "/ 3 Gün",
        color: "#ff3d9a",
        popular: false,
        ctaLabel: "Satın Al",
        features: [
          { text: "3 günlük giriş", included: true },
          { text: "Backstage pass", included: true },
          { text: "Artist meet & greet", included: true },
          { text: "Premium lounge", included: true },
          { text: "Sınırsız içecek", included: true },
          { text: "Otel transfer", included: true },
          { text: "VIP park yeri", included: true },
        ],
      },
    ],
  },
  info: {
    sectionLabel: "Festival Bilgisi",
    heading: "Festival Hakkında",
    descTitle: "Türkiye'nin En Büyük Açık Hava Festivali",
    desc1:
      "BIGENÇFEST AQUA, Antalya'nın eşsiz sahil manzarası eşliğinde 3 gün boyunca 50'den fazla sanatçıyla Türkiye'nin en büyük müzik deneyimini sunar.",
    desc2:
      "Pop, elektronik, rock ve hip-hop türlerinde 5 farklı sahnede kesintisiz performanslar.",
    cards: [
      { icon: "Calendar", title: "Tarihler", value: "15–17 Ağustos 2026", sub: "3 gün · 3 gece",        color: "#00e5ff" },
      { icon: "MapPin",   title: "Konum",    value: "Antalya, Türkiye",   sub: "Waterhill Aqua Park · Antalya", color: "#c6f135" },
      { icon: "Music2",   title: "Sahneler", value: "5 Farklı Sahne",     sub: "Ana · Aqua · Beach · Lounge · Club", color: "#ff3d9a" },
      { icon: "Clock",    title: "Saat",     value: "14:00 – 04:00",      sub: "Her gün kapılar 14:00'de açılır", color: "#a78bfa" },
    ],
    features: [
      { icon: "🎵", text: "50+ sanatçı ve DJ" },
      { icon: "🏖️", text: "Sahil & marina manzarası" },
      { icon: "🎪", text: "5 farklı sahne alanı" },
      { icon: "🍹", text: "Premium yiyecek & içecek" },
      { icon: "🚌", text: "Antalya & İzmir servisleri" },
      { icon: "🏨", text: "Festival konaklama paketleri" },
    ],
  },
  venue: {
    sectionLabel: "Festival Mekanı",
    heading: "Waterhill Aqua Park",
    subheading:
      "BIGENÇFEST AQUA 2026, Antalya'nın efsanevi su parkı Waterhill'de gerçekleşecek. Türkiye'nin en büyük aqua park alanında müzik ve su sporlarının benzersiz buluşması.",
    sponsorLabel: "Resmi Sponsor",
    sponsorSubLabel: "Mekan Sponsoru",
    logoSrc: "https://waterhill.com.tr/wp-content/uploads/2023/02/waterhill.png",
    logoHref: "https://waterhill.com.tr",
    attractions: [
      { id: "1", src: "https://waterhill.com.tr/wp-content/uploads/2023/02/Aqua-Tower.jpg", alt: "Aqua Tower", label: "Aqua Tower" },
      { id: "2", src: "https://waterhill.com.tr/wp-content/uploads/2023/02/Wave-Pool.jpg",  alt: "Wave Pool",  label: "Wave Pool" },
      { id: "3", src: "https://waterhill.com.tr/wp-content/uploads/2023/02/Rafting.jpg",    alt: "Rafting",    label: "Rafting" },
      { id: "4", src: "https://waterhill.com.tr/wp-content/uploads/2023/02/Cave-Pool.jpg",  alt: "Cave Pool",  label: "Cave Pool" },
      { id: "5", src: "https://waterhill.com.tr/wp-content/uploads/2023/02/Kamikaze.jpg",   alt: "Kamikaze",   label: "Kamikaze" },
      { id: "6", src: "https://waterhill.com.tr/wp-content/uploads/2023/02/Tsunami.jpg",    alt: "Tsunami",    label: "Tsunami" },
    ],
    highlights: [
      { icon: "🌊", text: "Wave Pool" },
      { icon: "🎢", text: "12 Kaydırak" },
      { icon: "🍹", text: "Yiyecek & İçecek" },
      { icon: "🔒", text: "Kilit Dolapları" },
      { icon: "🏊", text: "Cave Pool" },
      { icon: "🎡", text: "Aqua Tower" },
    ],
    ctaExternalLabel: "Waterhill'i Keşfet",
    ctaExternalHref: "https://waterhill.com.tr",
    ctaTicketLabel: "Festival Bileti Al",
  },
  navbar: {
    brandName: "BIGENÇFEST",
    brandSub: "AQUA 2026",
    links: [
      { id: "1", href: "#lineup",  label: "Lineup" },
      { id: "2", href: "#info",    label: "Bilgi" },
      { id: "3", href: "#tickets", label: "Biletler" },
      { id: "4", href: "#contact", label: "İletişim" },
      { id: "5", href: "/sponsor", label: "Sponsor" },
    ],
    ctaLabel: "Bilet Al",
    ctaHref: "#tickets",
  },
  sponsor: {
    sectionLabel: "Sponsorluk",
    heading: "Markanızı BIGENÇFEST ile Buluşturun",
    subheading: "25.000+ genç katılımcıya ulaşın. 4 farklı sponsorluk paketiyle markanıza özel görünürlük sağlayın.",
    waNumber: "905319773113",
    contactEmail: "sponsor@bigencfest.com",
    contactPhone: "+90 531 977 31 13",
    packages: [
      {
        id: "platinum",
        name: "Platinum Sponsor",
        price: "₺500.000",
        color: "#c6f135",
        icon: "⭐",
        popular: true,
        perks: [
          "Ana Sahne isim hakkı (3 gün)",
          "Festival girişinde 6m × 3m billboard",
          "Tüm dijital mecralarda logo (1. sıra)",
          "50 adet VIP bilet",
          "Backstage hospitality alanı",
          "Meet & greet aktivasyonu",
          "Sosyal medya özel içerik paketi",
          "Basın bülteni ortak marka",
        ],
      },
      {
        id: "gold",
        name: "Gold Sponsor",
        price: "₺250.000",
        color: "#fbbf24",
        icon: "🥇",
        popular: false,
        perks: [
          "İkinci sahne isim hakkı",
          "4m × 2m alan branding",
          "Dijital mecralarda logo (2. sıra)",
          "20 adet VIP bilet",
          "VIP lounge erişimi",
          "Sosyal medya story paketi",
          "Basın bülteninde yer",
        ],
      },
      {
        id: "silver",
        name: "Silver Sponsor",
        price: "₺100.000",
        color: "#00e5ff",
        icon: "🥈",
        popular: false,
        perks: [
          "Festival alanında stand/stant",
          "2m × 1m alan branding",
          "Web sitesinde logo",
          "10 adet VIP bilet",
          "Sosyal medya mention paketi",
        ],
      },
      {
        id: "supporter",
        name: "Destekçi",
        price: "₺30.000",
        color: "#ff3d9a",
        icon: "💜",
        popular: false,
        perks: [
          "Web sitesinde logo",
          "4 adet VIP bilet",
          "Sosyal medya teşekkür postu",
          "Festival programında yer",
        ],
      },
    ],
  },
};

/* ─────────────────── Store ─────────────────── */

interface AdminAuth {
  isLoggedIn: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

interface SiteStore {
  data: SiteData;
  updateHero: (hero: HeroData) => void;
  updateLineup: (lineup: LineupData) => void;
  updateTickets: (tickets: TicketsData) => void;
  updateInfo: (info: InfoData) => void;
  updateVenue: (venue: VenueData) => void;
  updateNavbar: (navbar: NavbarData) => void;
  updateSponsor: (sponsor: SponsorData) => void;
  resetAll: () => void;
}

export const useSiteStore = create<SiteStore>()(
  persist(
    (set) => ({
      data: defaultData,
      updateHero:    (hero)    => set((s) => ({ data: { ...s.data, hero } })),
      updateLineup:  (lineup)  => set((s) => ({ data: { ...s.data, lineup } })),
      updateTickets: (tickets) => set((s) => ({ data: { ...s.data, tickets } })),
      updateInfo:    (info)    => set((s) => ({ data: { ...s.data, info } })),
      updateVenue:   (venue)   => set((s) => ({ data: { ...s.data, venue } })),
      updateNavbar:  (navbar)  => set((s) => ({ data: { ...s.data, navbar } })),
      updateSponsor: (sponsor) => set((s) => ({ data: { ...s.data, sponsor } })),
      resetAll:      ()        => set({ data: defaultData }),
    }),
    { name: "bigencfest-site-data" }
  )
);

export const useAdminAuth = create<AdminAuth>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: (password: string) => {
        if (password === "1235") {
          set({ isLoggedIn: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isLoggedIn: false }),
    }),
    { name: "bigencfest-admin-auth" }
  )
);

export { defaultData };
