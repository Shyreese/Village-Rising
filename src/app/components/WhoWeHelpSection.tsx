import { Users, Heart, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const groups = [
  {
    icon: Users,
    iconBg: "bg-[#cbfbf1]",
    iconColor: "text-[#00786F]",
    title: "Local Families",
    description:
      "Supporting families in the Rancho Cordova and greater Sacramento area facing financial hardship with essential resources and pathways to stability",
  },
  {
    icon: Heart,
    iconBg: "bg-[#fef3c6]",
    iconColor: "text-[#E17100]",
    title: "Caregivers",
    description:
      "Providing specialized support and community connections for those who provide and support.",
  },
  {
    icon: BookOpen,
    iconBg: "bg-[#cbfbf1]",
    iconColor: "text-[#00786F]",
    title: "College Students",
    description:
      "Supporting students with resources to help them succeed in college and beyond",
  },
];

export function WhoWeHelpSection() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1596510914965-9ae08acae566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZmFtaWx5JTIwdG9nZXRoZXIlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzMwOTQyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Families"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <h2 className="font-['Playfair_Display',serif] text-white text-[28px] sm:text-[33px] text-center mb-10">
          Who We Help
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="bg-white rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-[10px] ${group.iconBg} flex items-center justify-center`}>
                  <group.icon className={`w-6 h-6 ${group.iconColor}`} strokeWidth={1.5} />
                </div>
                <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[20px]">
                  {group.title}
                </h3>
              </div>
              <p className="font-['Inter',sans-serif] text-[#4a5565] text-[16px] leading-[1.5]">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
