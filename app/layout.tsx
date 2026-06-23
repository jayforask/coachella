import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIGENÇFEST AQUA 2025",
  description: "Türkiye'nin en büyük müzik festivali — 15-17 Ağustos 2025, Bodrum",
  openGraph: {
    title: "BIGENÇFEST AQUA 2025",
    description: "Türkiye'nin en büyük müzik festivali",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <div className="noise" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
