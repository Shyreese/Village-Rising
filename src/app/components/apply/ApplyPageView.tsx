import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FloatingHelpButton } from "../FloatingHelpButton";
import { SkipLink } from "../SkipLink";
import { StepIndicator } from "./StepIndicator";
import { EligibilityCheck } from "./EligibilityCheck";
import { YourResults } from "./YourResults";
import { CompleteApplication } from "./CompleteApplication";
import { HomeLogoBars } from "./../HomeLogoBars";
import { HowItWorksSection } from "./HowItWorksSection";

const heroContent: Record<
  number,
  { title: string; subtitle: string }
> = {
  1: {
    title: "Check Your Eligibility",
    subtitle:
      "Answer a few quick questions to see which programs you qualify for",
  },
  2: {
    title: "Complete Application",
    subtitle: "",
  },
  3: {
    title: "View Your Results",
    subtitle: "Based on the questions you answered",
  },
};

export function ApplyPageView() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const hero = heroContent[step];

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] relative overflow-hidden">
      <div className="relative z-[1]">
        <SkipLink />
        <Navbar activePage="apply" />

        {/* Hero */}
        <section
          className="bg-[#3f5a3c] relative overflow-hidden"
          aria-labelledby="apply-heading"
        >
        <div className="max-w-[832px] mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h1
            id="apply-heading"
            className="font-['DM_Serif_Display',serif] font-normal text-white text-[32px] sm:text-[36px] md:text-[48px] leading-[1.2] mb-3"
          >
            {hero.title}
          </h1>
          {hero.subtitle && (
            <p className="font-['DM_Sans',sans-serif] text-[#f4efe7] text-[16px] sm:text-[18px] md:text-[24px] leading-[1.4]">
              {hero.subtitle}
            </p>
          
          )}
          {step === 1 && (
            
            <ul className="font-['DM_Sans',sans-serif] text-[#f4efe7] text-[14px] leading-[20px] mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <HowItWorksSection />
              <li className="flex items-center gap-2">
                <span aria-hidden="true">&#10003;</span> Takes 2
                minutes
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">&#10003;</span> No
                commitment
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">&#10003;</span> 100%
                confidential
              </li>
            </ul>
          )}
        </div>
      </section>

      {/* Step indicator */}
      <StepIndicator currentStep={step} />

      {/* Content area with subtle background */}
      <main
        id="main-content"
        className="relative min-h-[600px]"
      >
        <HomeLogoBars />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 relative z-[1]">
          {step === 1 && (
            <EligibilityCheck onNext={() => setStep(2)} />
          )}
          {step === 2 && (
            <CompleteApplication
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          )}
          {step === 3 && (
            <YourResults onBack={() => setStep(2)} />
          )}
        </div>
      </main>
      </div>
      <Footer />
      <FloatingHelpButton />
    </div>
  );
}
