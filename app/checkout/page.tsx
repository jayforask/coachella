import { Suspense } from "react";
import CheckoutClient from "./CheckoutClient";

export const metadata = {
  title: "Bilet Satın Al | BIGENÇFEST AQUA 2025",
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: "100vh",
        background: "#050a0e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#00e5ff",
        fontSize: 14,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}>
        Yükleniyor...
      </div>
    }>
      <CheckoutClient />
    </Suspense>
  );
}
