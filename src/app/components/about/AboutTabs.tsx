import { useState } from "react";

interface AboutTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function AboutTabs({ activeTab, onTabChange }: AboutTabsProps) {
  return (
    <div className="bg-white border-b border-[#e5e7eb] px-6">
      <div className="max-w-[1280px] mx-auto flex gap-8">
        <button
          onClick={() => onTabChange("overview")}
          className={`py-4 font-['Inter',sans-serif] text-[16px] border-b-2 transition-colors ${
            activeTab === "overview"
              ? "border-[#50c878] text-[#50c878]"
              : "border-transparent text-[#4a5565] hover:text-[#50c878]"
          }`}
        >
          Organization Overview
        </button>
        <button
          onClick={() => onTabChange("financial")}
          className={`py-4 font-['Inter',sans-serif] text-[16px] border-b-2 transition-colors ${
            activeTab === "financial"
              ? "border-[#50c878] text-[#50c878]"
              : "border-transparent text-[#4a5565] hover:text-[#4a5565]"
          }`}
        >
          Financial Reporting
        </button>
      </div>
    </div>
  );
}
