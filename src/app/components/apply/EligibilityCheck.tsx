import { useState } from "react";
import { Briefcase, Home, GraduationCap, DollarSign } from "lucide-react";

const incomeOptions = [
  "Select income range",
  "Under $15,000",
  "$15,000 - $25,000",
  "$25,000 - $35,000",
  "$35,000 - $50,000",
  "$50,000 - $75,000",
  "Over $75,000",
];

const householdOptions = [
  "Select household size",
  "1 person",
  "2 people",
  "3 people",
  "4 people",
  "5 people",
  "6 or more people",
];

const supportAreas = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Childcare and Family Resource Program",
    desc: "Tutoring, scholarships, childcare",
  },
  {
    id: "housing",
    icon: Home,
    title: "Housing Assistance Program",
    desc: "Emergency shelter, rental assistance",
  },
  {
    id: "Opportunity",
    icon: DollarSign,
    title: "Opportunity Access Program",
    desc: "Support with pre-employment qualification, Live Scan, Notary, CPR, etc.",
  },
  {
    id: "internship",
    icon: Briefcase,
    title: "Workforce Development Program",
    desc: "Job training, internship opportunities",
  },
  {
    id: "financial",
    icon: DollarSign,
    title: "Financial Empowerment Series Program",
    desc: "Budget planning, credit building, job readiness",
  },
];

interface EligibilityCheckProps {
  onNext: () => void;
}

export function EligibilityCheck({ onNext }: EligibilityCheckProps) {
  const [income, setIncome] = useState("");
  const [household, setHousehold] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [zipCode, setZipCode] = useState("");
  const [attempted, setAttempted] = useState(false);

  const toggleArea = (id: string) => {
    setSelectedAreas((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const errors = {
    income: !income,
    household: !household,
    areas: selectedAreas.length === 0,
    zipCode: !zipCode.trim() || !/^\d{5}$/.test(zipCode.trim()),
  };

  const isValid = !Object.values(errors).some(Boolean);

  const handleNext = () => {
    setAttempted(true);
    if (isValid) onNext();
  };

  return (
    <div className="max-w-[832px] mx-auto px-6 py-10">
      <div className="bg-[#f4efe7] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-8">
        {/* Income */}
        <div className="mb-8">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] leading-[28px] mb-3">
            What is your annual household income?
          </label>
          <select
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={`w-full h-[49px] px-4 bg-white border rounded-[8px] font-['Inter',sans-serif] text-[16px] text-[#0a0a0a] outline-none focus:border-[#c6a646] transition-colors appearance-none cursor-pointer ${attempted && errors.income ? "border-[#dc2626]" : "border-[#d1d5dc]"
              }`}
          >
            {incomeOptions.map((opt) => (
              <option key={opt} value={opt === "Select income range" ? "" : opt}>
                {opt}
              </option>
            ))}
          </select>
          {attempted && errors.income && (
            <p className="font-['Inter',sans-serif] text-[#dc2626] text-[13px] mt-1">Please select your annual household income.</p>
          )}
        </div>

        {/* Household size */}
        <div className="mb-8">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] leading-[28px] mb-3">
            How many people live in your household?
          </label>
          <select
            value={household}
            onChange={(e) => setHousehold(e.target.value)}
            className={`w-full h-[49px] px-4 bg-white border rounded-[8px] font-['Inter',sans-serif] text-[16px] text-[#0a0a0a] outline-none focus:border-[#c6a646] transition-colors appearance-none cursor-pointer ${attempted && errors.household ? "border-[#dc2626]" : "border-[#d1d5dc]"
              }`}
          >
            {householdOptions.map((opt) => (
              <option key={opt} value={opt === "Select household size" ? "" : opt}>
                {opt}
              </option>
            ))}
          </select>
          {attempted && errors.household && (
            <p className="font-['Inter',sans-serif] text-[#dc2626] text-[13px] mt-1">Please select your household size.</p>
          )}
        </div>

        {/* Support areas */}
        <div className="mb-8">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] leading-[28px] mb-3">
            What areas do you need support with? (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportAreas.map((area) => {
              const Icon = area.icon;
              const selected = selectedAreas.includes(area.id);
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => toggleArea(area.id)}
                  className={`bg-white rounded-[10px] border-2 p-4 text-left cursor-pointer transition-colors ${selected
                    ? "border-[#50c878] bg-[#f0fdf4]"
                    : "border-[#e5e7eb] hover:border-[#d1d5dc]"
                    }`}
                >
                  <div className="flex gap-3 items-start">
                    <div className="bg-[#f3f4f6] rounded-[10px] w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#4a5565]" />
                    </div>
                    <div>
                      <p className="font-['Inter',sans-serif] text-[#0a0a0a] text-[16px] leading-[24px]">
                        {area.title}
                      </p>
                      <p className="font-['Inter',sans-serif] text-[#4a5565] text-[15px] leading-[20px]">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <p className="font-['Inter',sans-serif] text-[#6a7282] text-[14px] leading-[20px] mt-3">
            Please select at least one area
          </p>
          {attempted && errors.areas && (
            <p className="font-['Inter',sans-serif] text-[#dc2626] text-[13px] mt-1">Please select at least one support area.</p>
          )}
        </div>

        {/* Zip code */}
        <div className="mb-8">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] leading-[28px] mb-3">
            What is your zip code?
          </label>
          <input
            type="text"
            placeholder="e.g., 90210"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className={`w-full h-[50px] px-4 bg-white border rounded-[8px] font-['Inter',sans-serif] text-[16px] text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] outline-none focus:border-[#c6a646] transition-colors ${attempted && errors.zipCode ? "border-[#dc2626]" : "border-[#d1d5dc]"
              }`}
          />
          {attempted && errors.zipCode && (
            <p className="font-['Inter',sans-serif] text-[#dc2626] text-[13px] mt-1">Please enter a valid 5-digit zip code.</p>
          )}
          <p className="font-['Inter',sans-serif] text-[#6a7282] text-[14px] leading-[20px] mt-2">
            We serve families in the greater metro area
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={handleNext}
            className="bg-[#c6a646] hover:bg-[#b5953d] transition-colors text-white font-['Inter',sans-serif] text-[16px] px-8 h-[50px] rounded-[40px] cursor-pointer"
          >
            See My Results
          </button>
          <a
            href="/"
            className="flex items-center justify-center bg-white border border-[#d1d5dc] text-[#364153] font-['Inter',sans-serif] text-[16px] px-8 h-[50px] rounded-[40px] hover:bg-[#f9fafb] transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
