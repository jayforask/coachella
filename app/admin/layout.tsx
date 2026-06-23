import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#030709", color: "#f0feff" }}>
      {children}
    </div>
  );
}
