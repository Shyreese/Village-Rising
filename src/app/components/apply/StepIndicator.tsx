import { ArrowRight } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { label: "Eligibility Check", num: 1 },
  { label: "Complete Application", num: 2 },
  { label: "Your Results", num: 3 },
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="bg-white border-b border-[#e5e7eb]">
      <div className="max-w-[832px] mx-auto px-6 py-4">
        <div className="flex items-center gap-4 flex-wrap">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-['Public_Sans',sans-serif] ${
                    step.num === currentStep
                      ? "bg-[#50c878] text-white"
                      : step.num < currentStep
                        ? "bg-[#d1d5dc] text-[#99a1af]"
                        : "bg-[#e5e7eb] text-[#99a1af]"
                  }`}
                >
                  {step.num}
                </div>
                <span
                  className={`font-['Inter',sans-serif] text-[14px] leading-[20px] whitespace-nowrap ${
                    step.num === currentStep
                      ? "text-[#0a0a0a]"
                      : "text-[#99a1af]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[#99a1af]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
