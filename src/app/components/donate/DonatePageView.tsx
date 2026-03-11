import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FloatingHelpButton } from "../FloatingHelpButton";
import { SkipLink } from "../SkipLink";
import { DonateHero } from "./DonateHero";
import { DonationForm } from "./DonationForm";
import { OtherWaysToSupport } from "./OtherWaysToSupport";
import { ThankYouSection } from "./ThankYouSection";
import { useEffect } from "react";

export function DonatePageView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif]">
      <SkipLink />
      <Navbar activePage="donate" />
      <DonateHero />
      <main id="main-content">
        <DonationForm />
        <ThankYouSection />
      </main>
      <Footer />
      <FloatingHelpButton />
    </div>
  );
}
