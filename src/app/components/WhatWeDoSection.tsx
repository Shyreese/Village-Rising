import { Home, GraduationCap, DollarSign, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import imgOpp from "../../assets/0644165e93abb8d611ec35082a1c526ceb6c95b2.png"

const services = [
    {
    icon: GraduationCap,
    title: "Childcare and Family Resource",
    anchor: "education-support",
    description:
      "Provides safe, nurturing childcare while connecting families to essential resources that support stability, growth, and daily functioning.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZGNhcmUlMjBzdHVkZW50fGVufDF8fHx8MTc3MzA5NDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },  {
    icon: DollarSign,
    title: "Financial Empowerment",
    anchor: "financial-coaching",
    description:
      "Delivers practical financial education, tools, and guidance to help individuals build confidence, manage income, and create long-term stability.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjb2FjaGluZyUyMGJ1ZGdldHxlbnwxfHx8fDE3NzMwOTQyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },{
    icon: Home,
    title: "Housing Stability",
    anchor: "housing-assistance",
    description:
      "Offers temporary and emergency housing support to help individuals and families regain stability during times of transition or hardship.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmZvcmRhYmxlJTIwaG91c2luZyUyMGZhbWlseXxlbnwxfHx8fDE3NzMwOTQyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Users,
    title: "Workforce Development",
    anchor: "workforce-development",
    description:
      "Creates pathways to employment through internships, skill-building, and real-world experience that prepare individuals for sustainable careers.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZm9yY2UlMjBkZXZlbG9wbWVudCUyMHRyYWluaW5nfGVufDF8fHx8MTc3MzA5NDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Users,
    title: "Opportunity Access",
    anchor: "opportunity-access",
    description:
      "Expands access to essential services that remove barriers to employment, housing, and advancement. This includes Live Scan background checks, notary and documentation support, and access to technology, with services continuing to grow based on community needs.",
    image:
      imgOpp,
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-[#fafaf9]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-[6px] bg-[#c6a646] rounded-full mx-auto mb-4 opacity-90" />
          <h2 className="font-['Playfair_Display',serif] font-bold text-[#101828] text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2]">
            What We Do
          </h2>
          <p className="font-['Inter',sans-serif] text-[#4a5565] text-[16px] lg:text-[18px] mt-4 max-w-[600px] mx-auto">
            Comprehensive programs designed to move families from crisis to
            stability and toward long-term success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] overflow-hidden group hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <div className="h-[200px] overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="w-10 h-10 bg-[#3f5a3c] rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-['Playfair_Display',serif] font-bold text-[#101828] text-[20px] mb-2">
                  {service.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[1.6] mb-4">
                  {service.description}
                </p>
                <Link
                  to={`/programs#${service.anchor}`}
                  className="font-['Inter',sans-serif] font-semibold text-[#fe9a00] text-[15px] hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
