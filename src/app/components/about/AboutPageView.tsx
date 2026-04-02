import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FloatingHelpButton } from "../FloatingHelpButton";
import { SkipLink } from "../SkipLink";
import { AboutHero } from "./AboutHero";
import { AboutTabs } from "./AboutTabs";
import { OurStory } from "./OurStory";
import { MissionValues } from "./MissionValues";
import { LegalRecognition } from "./LegalRecognition";
import { FinancialReporting } from "./FinancialReporting";
import { HomeLogoBars } from "./../HomeLogoBars";

export function AboutPageView() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] relative overflow-hidden">
      <div className="relative z-[1]">
        <SkipLink />
        <Navbar activePage="about" />
        <AboutHero />
        <AboutTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main content area with decorative side panel */}
        <main id="main-content" className="relative">
          <HomeLogoBars />
          {/* Decorative left panel - visible on larger screens */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[calc((100%-1280px)/2)] bg-[rgba(216,187,119,0.18)]" aria-hidden="true" />
          <div className={activeTab === "overview" ? "bg-[#f4efe7]" : "bg-[rgba(102,114,56,0.3)]"}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-[1]">
            {activeTab === "overview" ? (
              <div className="max-w-[832px] mx-auto py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16">
                
                <OurStory />
              </div>
            ) : (
              <div className="max-w-[832px] mx-auto py-12 sm:py-16 md:py-24 space-y-12 sm:space-y-16">
                <FinancialReporting />
              </div>
            )}
          </div>

          {activeTab === "overview" && (
            <div className="relative overflow-hidden py-12 sm:py-16 md:py-24 min-h-[680px] lg:min-h-[760px]">
              
              <div className="relative z-[1] max-w-[832px] mx-auto space-y-12 sm:space-y-16 px-4 sm:px-6 md:px-8">
                <MissionValues />
                <LegalRecognition />
              </div>
            </div>
          )}
        </div>
      </main>
      </div>
      <Footer />
      <FloatingHelpButton />
    </div>
  );
}
