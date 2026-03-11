import { Link } from "react-router";
import { CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

interface ProgramCardProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  features: Feature[];
  bgColor?: string;
  eligibilityText?: string;
}

export function ProgramCard({
  tag,
  title,
  description,
  image,
  imagePosition,
  features,
  bgColor = "#fafaf9",
  eligibilityText,
}: ProgramCardProps) {
  const imageBlock = (
    <div className="h-[350px] lg:h-[600px] overflow-hidden rounded-[16px]">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col justify-center py-4 lg:py-8">
      {/* Tag */}
      <span className="inline-block bg-[#50c878] text-white font-bold text-[14px] px-4 py-1.5 rounded-full w-fit mb-6">
        {tag}
      </span>

      <h2 className="font-['Playfair_Display',serif] font-bold text-[#101828] text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.1] mb-4">
        {title}
      </h2>

      <p className="text-[#364153] text-[16px] lg:text-[18px] leading-[1.6] mb-8 max-w-[600px]">
        {description}
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-[14px] border border-[#e5e7eb] shadow-sm p-3.5 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#50c878] rounded-[10px] flex items-center justify-center shrink-0">
              <feature.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-bold text-[#101828] text-[14px]">
                {feature.title}
              </p>
              <p className="text-[#4a5565] text-[12px]">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Eligibility box */}
      {eligibilityText && (
        <div className="bg-white rounded-[14px] border border-[#e5e7eb] shadow-sm p-5 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-[#50c878]" strokeWidth={1.5} />
            <p className="font-bold text-[#101828] text-[18px]">Eligibility</p>
          </div>
          <p className="text-[#364153] text-[14px] leading-[1.6]">
            {eligibilityText}
          </p>
        </div>
      )}

      <Link
        to="/apply"
        className="inline-block bg-[#c6a646] text-white font-bold text-[18px] px-8 py-3 rounded-full shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:brightness-110 transition w-fit"
      >
        Apply for This Program
      </Link>
    </div>
  );

  return (
    <section id="programs-list" className="px-6">
      <div
        className="max-w-[1265px] mx-auto rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 lg:p-10"
        style={{ backgroundColor: bgColor }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {contentBlock}
            </>
          ) : (
            <>
              {contentBlock}
              {imageBlock}
            </>
          )}
        </div>

        {/* Program Impact section */}
        <div className="bg-white rounded-[14px] border border-[#e5e7eb] shadow-sm mt-8 p-5">
          <p className="font-bold text-[#101828] text-[14px] mb-4">
            Program Impact (Data Coming Soon)
          </p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`text-center ${i < 3 ? "border-r border-[#e5e7eb]" : ""}`}
              >
                <p className="font-bold text-[#9ca3af] text-[32px] leading-[36px]">
                  —
                </p>
                <p className="text-[#6b7280] text-[13px] mt-1">
                  Metric Title Placeholder
                </p>
              </div>
            ))}
          </div>
          <div className="border-t border-[#f3f4f6] pt-3">
            <p className="text-[#9ca3af] text-[11px]">
              Impact data will be published as program outcomes are tracked and
              verified.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
