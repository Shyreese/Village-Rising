import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface BoardMemberCardProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
  initials?: string;
  initialsGradient?: string;
}

export function BoardMemberCard({
  name,
  title,
  bio,
  image,
  initials,
  initialsGradient,
}: BoardMemberCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="bg-white rounded-[10px] border-2 border-[#e5e7eb] p-6 flex flex-col items-center text-center cursor-pointer hover:border-[#50c878] transition-colors group"
    >
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#50c878] shadow-[2px_2px_2px_0px_rgba(0,0,0,0.25)] mb-4 flex-shrink-0">
        {image ? (
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white font-['Inter',sans-serif] text-[20px]"
            style={{ backgroundImage: initialsGradient }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Name (centered) + Arrow (on the right) */}
      <div className="relative w-full mb-1">
        <div className="flex items-center justify-center">
          <span className="font-['Public_Sans',sans-serif] text-[#0a0a0a] text-[20px] leading-[28px] text-center">
            {name}
          </span>
        </div>

        {/* Arrow positioned on the right */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#50c878]">
          {expanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Title */}
      <p className="font-['Public_Sans',sans-serif] text-[#50c878] text-[15px] leading-[20px] mb-3">
        {title}
      </p>

      {/* Bio */}
      <div className={`overflow-hidden transition-all duration-300 w-full ${expanded ? "max-h-[600px]" : "max-h-[60px]"}`}>
        <p className="font-['Public_Sans',sans-serif] text-[#4a5565] text-[15px] leading-[20px] text-left">
          {bio}
        </p>
      </div>
    </div>
  );
}