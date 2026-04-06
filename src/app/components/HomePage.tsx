import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { MissionSection } from "./MissionSection";
import { ImpactSection } from "./ImpactSection";
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

        {/* Centered content container */}
        <div className="relative z-[1] max-w-[1260px] mx-auto px-4 sm:px-6">
          <MissionSection />
          <ImpactSection />
          <div className="h-12 md:h-16" aria-hidden="true" />
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
