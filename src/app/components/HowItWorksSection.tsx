import { CheckCircle, User, HandHeart } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    iconBg: "bg-[#c6a646]",
    iconColor: "text-[#FFE89B]",
    cardBg: "bg-[rgba(245,229,157,0.6)]",
    title: "1. Check Eligibility",
    description: "Answer a few simple questions to see which programs you qualify for",
    textColor: "text-[#0a0a0a]",
  },
  {
    icon: User,
    iconBg: "bg-[#c6a646]",
    iconColor: "text-[#C7DCCE]",
    cardBg: "bg-[rgba(221,177,34,0.6)]",
    title: "2. Find Out Level of Assistance",
    description: "Get matched with a dedicated family navigator who will guide you",
    textColor: "text-[#0a0a0a]",
  },
  {
    icon: HandHeart,
    iconBg: "bg-[#c6a646]",
    iconColor: "text-white",
    cardBg: "bg-[rgba(63,90,60,0.6)]",
    title: "3. Get Support",
    description: "Start receiving services within 1-2 weeks of your first meeting",
    textColor: "text-[#f5f3ee]",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-20 bg-white px-6">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-['Playfair_Display',serif] text-[#0a0a0a] text-[28px] sm:text-[33px] text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`${step.cardBg} rounded-[10px] px-6 py-6 flex flex-col items-center text-center gap-3`}
            >
              <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center`}>
                <step.icon className={`w-7 h-7 ${step.iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 className={`font-['Inter',sans-serif] text-[18px] lg:text-[20px] ${step.textColor}`}>
                {step.title}
              </h3>
              <p className={`font-['Inter',sans-serif] text-[14px] leading-[1.5] ${step.textColor} max-w-[244px]`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
