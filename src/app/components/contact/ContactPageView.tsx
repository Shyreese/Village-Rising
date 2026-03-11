import { useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FloatingHelpButton } from "../FloatingHelpButton";
import { SkipLink } from "../SkipLink";
import { ContactHero } from "./ContactHero";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { ServingSacramento } from "./ServingSacramento";

export function ContactPageView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif]">
      <SkipLink />
      <Navbar activePage="contact" />
      <ContactHero />

      {/* Form + Info two-column layout */}
      <main id="main-content" className="bg-[#f4efe7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="max-w-[710px]">
              <div className="bg-white rounded-[24px] p-6 sm:p-8 md:p-12 shadow-[0px_32px_64px_-12px_rgba(0,0,0,0.14)] border border-white relative overflow-hidden ring-1 ring-[#c6a646]/10">
                {/* Brand Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#c6a646]" aria-hidden="true" />
                <ContactForm />
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="max-w-[460px]">
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>

      {/* Serving Sacramento */}
      <ServingSacramento />

      <Footer />
      <FloatingHelpButton />
    </div>
  );
}
