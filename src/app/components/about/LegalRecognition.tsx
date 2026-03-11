import { ExternalLink } from "lucide-react";

export function LegalRecognition() {
  return (
    <section>
      <h2 className="font-['Playfair_Display',serif] text-[#0a0a0a] text-[36px] leading-[1.1] mb-6">
        Legal Recognition
      </h2>

      <div className="bg-[#f0fdfa] border border-[#96f7e4] rounded-[10px] p-8">
        {/* 501(c)(3) Section */}
        <div className="mb-6">
          <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] leading-[1.4] mb-3">
            501(c)(3) Nonprofit Organization
          </h3>
          <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.5] mb-4">
            Village Rising is a registered 501(c)(3) nonprofit organization.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] text-[#009689] text-[16px] hover:underline transition-colors"
          >
            Recognized by the Internal Revenue Service
            <ExternalLink className="w-4 h-4 text-[#009689]" />
          </a>
        </div>

        {/* Tax ID */}
        <div className="border-t border-[#96f7e4] pt-6 mb-6">
          <p className="font-['Inter',sans-serif] text-[#364153]">
            <span className="font-bold text-[20px]">Tax ID:</span>{" "}
            <span className="text-[#00786f] text-[22px]">33-4782640</span>
          </p>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#96f7e4] pt-6">
          <p className="font-['Inter',sans-serif] text-[#4a5565] text-[15px] leading-[1.4] max-w-[705px]">
            All donations to Village Rising are tax-deductible to the extent allowed by law. We
            commit to using donated funds responsibly and in accordance with our mission.
          </p>
        </div>
      </div>
    </section>
  );
}
