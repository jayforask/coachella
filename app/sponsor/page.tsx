import { Metadata } from "next";
import SponsorClient from "./SponsorClient";

export const metadata: Metadata = {
  title: "Sponsor Ol | BIGENÇFEST AQUA 2026",
  description:
    "BIGENÇFEST AQUA 2026'nın resmi sponsoru olun. 25.000+ katılımcıya markanızı duyurun.",
};

export default function SponsorPage() {
  return <SponsorClient />;
}
