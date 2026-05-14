import { MarketingHeader } from "@/components/landing/MarketingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AgentsShowcase } from "@/components/landing/AgentsShowcase";
import { CitiesCoverage } from "@/components/landing/CitiesCoverage";
import { PricingTeaser } from "@/components/landing/PricingTeaser";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[hsl(220_15%_5%)] text-white antialiased">
      <MarketingHeader />
      <main>
        <HeroSection />
        <HowItWorks />
        <AgentsShowcase />
        <CitiesCoverage />
        <PricingTeaser />
        <Footer />
      </main>
    </div>
  );
}
