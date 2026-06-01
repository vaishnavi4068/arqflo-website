import { MarketingHeader } from "@/components/landing/MarketingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { PlatformVideo } from "@/components/landing/PlatformVideo";
import { TheProblem } from "@/components/landing/TheProblem";
import { RootCause } from "@/components/landing/RootCause";
import { TheSolution } from "@/components/landing/TheSolution";
import { IntelligencePillars } from "@/components/landing/IntelligencePillars";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CitiesCoverage } from "@/components/landing/CitiesCoverage";
import { WhyArqFlo } from "@/components/landing/WhyArqFlo";
import { Roadmap } from "@/components/landing/Roadmap";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[hsl(220_15%_5%)] text-white antialiased">
      <MarketingHeader />
      <main>
        <HeroSection />
        <PlatformVideo />
        <TheProblem />
        <RootCause />
        <TheSolution />
        <IntelligencePillars />
        <HowItWorks />
        <CitiesCoverage />
        <WhyArqFlo />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
