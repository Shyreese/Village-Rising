import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { MissionSection } from "./MissionSection";
import { ImpactSection } from "./ImpactSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { WhoWeHelpSection } from "./WhoWeHelpSection";
import { WhatWeDoSection } from "./WhatWeDoSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { TeamSection } from "./TeamSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { FloatingHelpButton } from "./FloatingHelpButton";
import { HomeLogoBars } from "./HomeLogoBars";
import { SkipLink } from "./SkipLink";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] relative overflow-hidden">
      <SkipLink />
      <Navbar />
      <HeroSection />

      {/* Main content area with decorative logo bars */}
      <main id="main-content" className="relative">
        <HomeLogoBars />

        {/* Content */}
        <div className="relative z-[1]">
          <MissionSection />
          <ImpactSection />
          <HowItWorksSection />
          <WhoWeHelpSection />
          <WhatWeDoSection />
          <TestimonialsSection />
          <TeamSection />
          <CTASection />
        </div>
      </main>

      <Footer />
      <FloatingHelpButton />
    </div>
  );
}
