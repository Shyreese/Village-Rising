import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Award, CheckCircle, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Families Served",
    subtitle: "In the past year",
  },
  {
    icon: Award,
    value: "85%",
    label: "Success Rate",
    subtitle: "Achieving stability",
  },
  {
    icon: CheckCircle,
    value: "10 Years",
    label: "Strong",
    subtitle: "Serving our community",
  },
  {
    icon: Heart,
    value: "100+",
    label: "Volunteers",
    subtitle: "Making a difference",
  },
];

export function ImpactSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Dark overlay background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NzMwMzkzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Community impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3f5a3c]/85" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <h2 className="font-['Playfair_Display',serif] font-semibold text-[#f8f6f1] text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-16">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#d4af34] flex items-center justify-center mb-5">
                <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <p className="font-['Inter',sans-serif] text-[#d4af37] text-[22px] lg:text-[26px] leading-[1.3]">
                {stat.value} {stat.label}
              </p>
              <p className="font-['Inter',sans-serif] italic text-white text-[15px] mt-2">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
