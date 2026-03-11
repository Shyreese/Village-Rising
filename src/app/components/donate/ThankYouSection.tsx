import { Users, DollarSign, TrendingUp, Heart } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const stats = [
  {
    icon: Users,
    value: "2,847",
    label: "Families Helped This Year",
    color: "#6b7c59",
    gradientFrom: "rgba(107, 124, 89, 0.1)",
  },
  {
    icon: DollarSign,
    value: "$1.2M",
    label: "Direct Support Provided",
    color: "#00a63e",
    gradientFrom: "rgba(0, 166, 62, 0.1)",
  },
  {
    icon: TrendingUp,
    value: "94%",
    label: "Achieved Stability",
    color: "#c6a646",
    gradientFrom: "rgba(198, 166, 70, 0.1)",
  },
];

export function ThankYouSection() {
  return (
    <section className="bg-gradient-to-b from-[#e8f5f1] to-[#f5f3ee] relative overflow-hidden">
      {/* Background texture image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1771924368443-1d53147edbd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwZW9wbGUlMjBnYXRoZXJpbmclMjBjZWxlYnJhdGlvbiUyMGRpdmVyc2V8ZW58MXx8fHwxNzczMDk3MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover blur-[8px] -rotate-12 scale-150"
        />
      </div>
      <div className="max-w-[896px] mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
        {/* Heart icon */}
        <div className="text-center mb-8">
          <div className="relative w-[80px] h-[80px] mx-auto">
            <div className="w-[80px] h-[80px] rounded-full bg-[#c6a646] flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#6b7c59] fill-[#6b7c59]" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-['DM_Serif_Display',serif] text-[#2c2c2c] text-[36px] md:text-[48px] leading-[1.1] text-center mb-4">
          Thank You for Your Support
        </h2>
        <p className="font-['Inter',sans-serif] text-[#4a5565] text-[20px] md:text-[24px] leading-[1.4] text-center mb-10">
          Your generosity transforms lives and strengthens our community
        </p>

        {/* Content card */}
        <div className="bg-white rounded-[24px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] p-8 md:p-10 mb-8">
          {/* Message */}
          <p className="font-['Inter',sans-serif] text-[#2c2c2c] text-[16px] md:text-[20px] leading-[1.6] text-center mb-10 max-w-[806px] mx-auto">
            Because of donors like you, working families have hope. You're
            helping parents put food on the table, keep a roof over their heads,
            and give their children opportunities to succeed. Your compassion
            creates ripples of positive change that extend far beyond a single
            donation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-[16px] p-8 text-center"
                  style={{
                    backgroundImage: `linear-gradient(143deg, ${stat.gradientFrom} 0%, rgba(0, 0, 0, 0) 100%)`,
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <Icon
                      className="w-12 h-12"
                      style={{ color: stat.color }}
                      strokeWidth={2}
                    />
                  </div>
                  <p
                    className="font-['Inter',sans-serif] text-[36px] leading-[40px] mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="border-t-2 border-[rgba(198,166,70,0.3)] pt-8">
          <p className="font-['Inter',sans-serif] italic text-[#4a5565] text-[18px] text-center">
            "Alone we can do so little; together we can do so much." — Helen
            Keller
          </p>
        </div>
      </div>
    </section>
  );
}
