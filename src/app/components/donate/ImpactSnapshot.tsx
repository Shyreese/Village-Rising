const stats = [
  { value: "100+", label: "Families Supported Annually" },
  { value: "75%", label: "Housing Stabilization Target" },
  { value: "70%", label: "Workforce Placement Goal" },
  { value: "60%", label: "Financial Milestone Achievement" },
];

export function ImpactSnapshot() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-[1100px] mx-auto bg-[rgba(249,250,251,0.2)] rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-['Playfair_Display',serif] font-bold text-[#101828] text-[28px] sm:text-[36px] mb-3">
            Impact Snapshot
          </h2>
          <p className="text-[#4a5565] text-[16px]">
            Projected annual capacity based on a fully funded operational year.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-bold text-[#101828] text-[28px] sm:text-[36px] mb-1">
                {stat.value}
              </p>
              <p className="text-[#4a5565] text-[14px]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-[#e5e7eb] pt-6 text-center">
          <p className="text-[#364153] text-[16px] leading-[1.6] mb-3 max-w-[980px] mx-auto">
            Village Rising tracks measurable outcomes across housing stability,
            employment, and financial progress to ensure transparency and partner
            accountability.
          </p>
          <p className="text-[#6a7282] text-[12px]">
            Projected capacity based on scalable program model and community
            partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
