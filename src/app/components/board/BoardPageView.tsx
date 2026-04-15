import { useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FloatingHelpButton } from "../FloatingHelpButton";
import { SkipLink } from "../SkipLink";
import { BoardHero } from "./BoardHero";
import { BoardGrid } from "./BoardGrid";
import { PartnerSection } from "./PartnerSection";
import imgBackground from "../../../assets/d483a076d257953ae13d2864b725de069be059b5.png";

export function BoardPageView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif]">
      <SkipLink />
      <Navbar activePage="board" />
      <BoardHero />

      {/* Content area with city skyline background */}
      <main id="main-content" className="relative overflow-hidden">
        {/* Background city skyline image */}
        <div className="absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true">
          <img
            src={imgBackground}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80 pointer-events-none" aria-hidden="true" />

        <BoardGrid />
        <PartnerSection />
      </main>

      <Footer />
      <FloatingHelpButton />
    </div>
  );
}
