import { CheckCircle, Circle } from "lucide-react";

interface Program {
  name: string;
  description: string;
  qualified: boolean;
  services: string[];
}

const programs: Program[] = [
  {
    name: "Childcare and Family Resource Program",
    description: "Educational resources and childcare support services",
    qualified: true,
    services: [
      "Subsidized Childcare",
      "Tutoring",
      "Scholarships",
      "Parenting Workshops",
      "Family Support Services",
    ],
  },
  {
    name: "Housing Assistance Program",
    description: "Support for housing needs and home ownership preparation",
    qualified: true,
    services: [
      "Emergency Shelter",
      "Rental Assistance",           // Updated as requested
      "Housing Counseling",
      "Home Buying Prep",
      "Affordable Resources",
    ],
  },
  {
    name: "Opportunity Access Program",
    description: "Support with pre-employment (pre-opportunity) qualification",
    qualified: true,
    services: [
      "Live Scan",
      "Notary Services",
      "CPR Certification",
      "Background Check Assistance",
      "Pre-Employment Qualification",
    ],
  },
  {
    name: "Workforce Development Program",
    description: "Job training, internship opportunities, and career support",
    qualified: true,
    services: [
      "Paid Internships",
      "Skills Training",
      "Resume Building",
      "Job Placement",
      "Mentorship",
    ],
  },
  {
    name: "Financial Empowerment Series Program",
    description: "Financial literacy and career development support",
    qualified: true,
    services: [
      "Credit Repair",
      "Budget Planning",
      "Debt Management",
      "Investment Education",
      "Career Coaching",
    ],
  },
];

interface YourResultsProps {
  onBack: () => void;
}

export function YourResults({ onBack }: YourResultsProps) {
  const qualifiedPrograms = programs.filter((p) => p.qualified).length;
  const totalServices = programs
    .filter((p) => p.qualified)
    .reduce((acc, p) => acc + p.services.length, 0);

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-10">
      {/* Title */}
      <h2 className="font-['Playfair_Display',serif] text-[#0a0a0a] text-[33px] leading-[1.2] text-center mb-6">
        Your Results
      </h2>

      {/* Summary badges */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <div className="border-2 border-[#3f5a3c] rounded-[8px] px-5 py-2 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[#3f5a3c]" />
          <span className="font-['Inter',sans-serif] text-[#3f5a3c] text-[14px]">
            {qualifiedPrograms} Programs Available
          </span>
        </div>
        <div className="border-2 border-[#3f5a3c] rounded-[8px] px-5 py-2 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[#3f5a3c]" />
          <span className="font-['Inter',sans-serif] text-[#3f5a3c] text-[14px]">
            {totalServices} Services Qualified
          </span>
        </div>
      </div>

      {/* Program cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {programs.map((program) => (
          <div
            key={program.name}
            className={`rounded-[10px] border-2 p-6 ${
              program.qualified
                ? "border-[#50c878] bg-white"
                : "border-[#e5e7eb] bg-white"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {program.qualified ? (
                  <CheckCircle className="w-5 h-5 text-[#50c878] flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-[#d1d5dc] flex-shrink-0" />
                )}
                <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[18px] leading-[24px]">
                  {program.name}
                </h3>
              </div>
              {program.qualified && (
                <span className="bg-[#50c878] text-white font-['Inter',sans-serif] text-[12px] px-3 py-1 rounded-[4px] flex-shrink-0">
                  Qualified
                </span>
              )}
            </div>

            <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[20px] mb-4 ml-7">
              {program.description}
            </p>

            <div className="ml-7">
              <p className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] mb-2">
                Available Services:
              </p>
              <ul className="space-y-1.5">
                {program.services.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <Circle
                      className={`w-3 h-3 flex-shrink-0 ${
                        program.qualified
                          ? "text-[#50c878]"
                          : "text-[#d1d5dc]"
                      }`}
                    />
                    <span
                      className={`font-['Inter',sans-serif] text-[14px] ${
                        program.qualified
                          ? "text-[#50c878]"
                          : "text-[#4a5565]"
                      }`}
                    >
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="font-['Inter',sans-serif] text-[#6a7282] text-[14px] leading-[20px] text-center">
        These results are preliminary. Final eligibility will be determined after
        reviewing your complete application.
      </p>
    </div>
  );
}