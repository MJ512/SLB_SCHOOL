import { Hero } from "@/components/Hero";
import { LegacyReveal } from "@/components/LegacyReveal";
import { ArchitecturalHeritage } from "@/components/ArchitecturalHeritage";
import { Timeline } from "@/components/Timeline";
import { CampusShowcase } from "@/components/CampusShowcase";
import { QuoteSection } from "@/components/QuoteSection";
import { ImpactSection } from "@/components/ImpactSection";
import { FinalSection } from "@/components/FinalSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ivory selection:bg-brick selection:text-ivory">
      <Hero />
      <LegacyReveal />
      <ArchitecturalHeritage />
      <Timeline />
      <CampusShowcase />
      <QuoteSection />
      <ImpactSection />
      <FinalSection />
      <Footer />
    </main>
  );
}
