import svgPaths from "../../../imports/svg-z1on79aasj";

function HandshakeIcon() {
  return (
    <div className="w-[50px] h-[50px]">
      <svg className="w-full h-full" fill="none" viewBox="0 0 50 50">
        <path
          d={svgPaths.pf81d500}
          stroke="#2DAAE1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d={svgPaths.p20482380}
          stroke="#2DAAE1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M26.12 35.176L24.152 33.13"
          stroke="#2DAAE1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M30.18 32.784L27.921 30.646"
          stroke="#2DAAE1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M25.579 9.501L25.639 3.278"
          stroke="#2DAAE1"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M12.475 6.444L15.326 11.143"
          stroke="#2DAAE1"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M38.742 6.444L35.891 11.143"
          stroke="#2DAAE1"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M9.263 19.055L3.667 17.426"
          stroke="#2DAAE1"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M42.196 19.055L47.793 17.426"
          stroke="#2DAAE1"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

const benefits = [
  ["Customized partnership packages", "Brand visibility and recognition"],
  ["Employee engagement opportunities", "Social impact reporting"],
];

export function PartnerSection() {
  return (
    <section className="relative z-10 flex justify-center px-6 md:px-8 pb-16 md:pb-24">
      <div className="bg-[#f9fafb] rounded-[30px] px-8 py-10 max-w-[660px] w-full">
        
        <div className="flex justify-center mb-4">
          <div className="bg-[#dcf4ff] rounded-[10px] w-16 h-16 flex items-center justify-center">
            <HandshakeIcon />
          </div>
        </div>

        <h2 className="font-['Playfair_Display',serif] text-[#0a0a0a] text-[28px] md:text-[33px] leading-[1.1] text-center mb-6">
          Partner With Us
        </h2>

        <p className="font-['Inter',sans-serif] text-[#4a5565] text-[18px] md:text-[20px] leading-[1.4] text-center mb-8 max-w-[593px] mx-auto">
          Corporate partnerships help us expand our reach and enhance our
          programs. Join leading businesses in supporting families and
          strengthening our community.
        </p>

        <div className="mb-8">
          <h3 className="font-['Public_Sans',sans-serif] text-[#0a0a0a] text-[20px] leading-[28px] mb-4">
            What You Get:
          </h3>

          {benefits.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-3"
            >
              {row.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#009689] mt-[9px] flex-shrink-0" />
                  <p className="font-['Public_Sans',sans-serif] text-[#4a5565] text-[16px] leading-[24px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="mailto:info@villagevalues.net?subject=Partnership%20Opportunity%20with%20Village%20Rising"
            className="inline-block bg-[#c6a646] hover:bg-[#b5953d] transition-colors text-white font-['Inter',sans-serif] text-[16px] leading-[24px] px-8 py-3 rounded-[40px]"
          >
            Become a Partner
          </a>
        </div>

      </div>
    </section>
  );
}