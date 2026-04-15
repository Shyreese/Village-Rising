import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FloatingHelpButton } from "../FloatingHelpButton";
import { SkipLink } from "../SkipLink";
import { DonateHero } from "./DonateHero";
import { DonationForm } from "./DonationForm";
import { OtherWaysToSupport } from "./OtherWaysToSupport";
import { ThankYouSection } from "./ThankYouSection";
import { HomeLogoBars } from "../HomeLogoBars";
import { useEffect } from "react";
import { ImpactSnapshot } from "./ImpactSnapshot";

export function DonatePageView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif]">
      <SkipLink />
      <Navbar activePage="donate" />
      <DonateHero />
      <main id="main-content" className="relative">
        <HomeLogoBars />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 relative z-[1]">
          <DonationForm />

          <ImpactSnapshot />
          <ThankYouSection />
        </div>
      </main>
      <Footer />
      <FloatingHelpButton />
    </div>
  );
}
