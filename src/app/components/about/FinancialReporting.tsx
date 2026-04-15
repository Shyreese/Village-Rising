import svgPaths from "../../../imports/svg-cmvl0tbmwq";

function DocumentIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
      <path d={svgPaths.p101a6580} stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d={svgPaths.p76546be} stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M13.3333 12H10.6667" stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M21.3333 17.3333H10.6667" stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      <path d="M21.3333 22.6667H10.6667" stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </svg>
  );
}

interface DocumentSectionProps {
  title: string;
  description: string;
  status: string;
  isLast?: boolean;
}

function DocumentSection({ title, description, status, isLast = false }: DocumentSectionProps) {
  return (
    <div className={`pb-5 ${!isLast ? "border-b border-[#e5e7eb]" : ""}`}>
      <h4 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[16px] leading-[1.5] mb-2">
        {title}
      </h4>
      <p className="font-['Inter',sans-serif] text-[#4a5565] text-[15px] leading-[1.35] mb-4 max-w-[736px]">
        {description}
      </p>
      <span className="inline-block bg-[#f3f4f6] text-[#6a7282] font-['Inter',sans-serif] text-[14px] px-4 py-2 rounded-[8px]">
        {status}
      </span>
    </div>
  );
}

export function FinancialReporting() {
  return (
    <div className="space-y-10">
      {/* Page Title */}
      <h2 className="font-['Playfair_Display',serif] text-[#0a0a0a] text-[33px] leading-[1.1]">
        Financial Transparency
      </h2>

      {/* Commitment Card */}
      <div className="bg-[#fffbeb] border border-[#fee685] rounded-[10px] p-8">
        <div className="flex gap-4 items-start">
          <DocumentIcon />
          <div className="flex-1">
            <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] leading-[1.4] mb-3">
              Our Commitment to Transparency
            </h3>
            <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.6] max-w-[705px]">
              As a new organization, we are diligently working to establish our financial
              reporting systems. We are committed to complete transparency and will publish our
              financial statements and annual reports here as soon as they become available. Your
              trust is paramount to us. Thank you for your support as we grow.
            </p>
          </div>
        </div>
      </div>

      {/* Financial Documents Card */}
      <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-8">
        <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] leading-[1.4] mb-6">
          Financial Documents
        </h3>
        <div className="space-y-5">
          <DocumentSection
            title="Annual Reports"
            description="Our annual reports will be published here, providing a comprehensive overview of our programs, impact, and financial performance."
            status="2025 Filed"
          />
          <DocumentSection
            title="Financial Statements"
            description="Audited financial statements including balance sheets, income statements, and statements of cash flow will be available here."
            status="Coming Soon"
          />
          <DocumentSection
            title="IRS Form 990"
            description="Our IRS Form 990 tax filings will be posted here for public review, demonstrating our commitment to financial accountability."
            status="Updated"
          />
          <DocumentSection
            title="Impact Reports"
            description="Detailed reports on the outcomes and impact of our programs, including metrics on families served and success rates."
            status="Coming Soon"
            isLast
          />
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] px-6 py-6">
        <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] leading-[1.4] mb-3">
          Questions About Our Finances?
        </h3>
        <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.5] mb-3 max-w-[726px]">
          We welcome questions about our financial operations and are happy to provide
          information to donors, partners, and community members.
        </p>
        <p className="font-['Inter',sans-serif] text-[#4a5565] text-[15px]">
          Contact us at:{" "}
          <a
            href="mailto:finance@villagerising.org"
            className="text-[#009689] hover:underline transition-colors"
          >
            info@ourvillagerising.org
          </a>
        </p>
      </div>
    </div>
  );
}
