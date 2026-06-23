import HeroSection from "@/components/sections/HeroSection";
import LineupSection from "@/components/sections/LineupSection";
import VenueSection from "@/components/sections/VenueSection";
import InfoSection from "@/components/sections/InfoSection";
import TicketsSection from "@/components/sections/TicketsSection";
import SponsorSection from "@/components/sections/SponsorSection";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LineupSection />
      <VenueSection />
      <InfoSection />
      <TicketsSection />
      <SponsorSection />
      <ContactSection />
      <FaqSection />
    </>
  );
}
