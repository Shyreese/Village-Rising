import svgPaths from "../../../imports/svg-uw74rhmpuv";

function EnvelopeIcon() {
  return (
    <svg className="w-[34px] h-[34px]" fill="none" viewBox="0 0 34 34">
      <path d={svgPaths.p3b7f0700} stroke="#009689" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p10b5d900} stroke="#009689" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p22b63520} stroke="#009689" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p3338df00} stroke="#009689" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p2abe9b60} stroke="#009689" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d="M4.37784 13.8455H1.75304" stroke="#009689" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p18a6b7c0} stroke="#009689" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p13945e00} stroke="#009689" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p232479e0} stroke="#009689" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d="M29.8935 14.0406H32.5183" stroke="#009689" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-[37px] h-[38px]" fill="none" viewBox="0 0 37 38">
      <path d={svgPaths.p1c139800} stroke="#50C878" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p29b3b600} stroke="#50C878" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p35a70900} stroke="#50C878" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p2a888940} stroke="#50C878" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p134b1980} stroke="#50C878" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p32b67b80} stroke="#50C878" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p2e602900} stroke="#50C878" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-[33px] h-[34px]" fill="none" viewBox="0 0 33 34">
      <path d={svgPaths.p2b951a80} stroke="#9810FA" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p25a96a00} stroke="#9810FA" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d="M7.14318 14.6574H3.81876" stroke="#9810FA" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d="M29.1812 14.6574H25.8568" stroke="#9810FA" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p289fdd60} stroke="#9810FA" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p27ea8460} stroke="#9810FA" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p1aa8280} stroke="#9810FA" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p11eef40} stroke="#9810FA" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d="M16.4756 5.20132V1.74964" stroke="#9810FA" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
    </svg>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  value: string;
  valueColor?: string;
  valueHref?: string;
  subtitle: string;
}

function ContactItem({ icon, iconBg, title, value, valueColor, valueHref, subtitle }: ContactItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className={`${iconBg} rounded-[10px] w-10 h-10 flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="font-['DM_Sans',sans-serif] text-[#0a0a0a] text-[20px] leading-[28px] mb-1">
          {title}
        </h3>
        {valueHref ? (
          <a
            href={valueHref}
            className={`font-['DM_Sans',sans-serif] text-[16px] leading-[24px] block mb-1 hover:underline transition-colors`}
            style={{ color: valueColor || "#4a5565" }}
          >
            {value}
          </a>
        ) : (
          <p
            className="font-['DM_Sans',sans-serif] text-[16px] leading-[24px] mb-1"
            style={{ color: valueColor || "#4a5565" }}
          >
            {value}
          </p>
        )}
        <p className="font-['DM_Sans',sans-serif] text-[#6a7282] text-[14px] leading-[20px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-['DM_Serif_Display',serif] text-[#0a0a0a] text-[24px] leading-[1.2] mb-6">
        Get in Touch
      </h2>

      {/* Immediate assistance card */}
      <div className="bg-[#fef3c6] border-2 border-[#c6a646] rounded-[10px] p-6 mb-6">
        <h3 className="font-['DM_Sans',sans-serif] text-[#0a0a0a] text-[20px] leading-[28px] mb-2">
          Need immediate assistance?
        </h3>
        <p className="font-['DM_Sans',sans-serif] text-[#364153] text-[16px] leading-[24px] mb-4">
          Email us and we'll respond as quickly as possible:
        </p>
        <a
          href="mailto:info@villagevalues.org"
          className="inline-block bg-[#c6a646] hover:bg-[#b5953d] transition-colors text-white font-['DM_Sans',sans-serif] text-[16px] leading-[24px] px-8 py-3.5 rounded-[52px]"
        >
          info@villagevalues.org
        </a>
        <p className="font-['DM_Sans',sans-serif] text-[#4a5565] text-[15px] leading-[20px] mt-4">
          We typically respond within 24 hours
        </p>
      </div>

      {/* Contact items */}
      <div className="space-y-6">
        <ContactItem
          icon={<EnvelopeIcon />}
          iconBg="bg-[#cbfbf1]"
          title="Email"
          value="info@villagevalues.org"
          valueColor="#009689"
          valueHref="mailto:info@villagevalues.org"
          subtitle="General inquiries"
        />

        <ContactItem
          icon={<PhoneIcon />}
          iconBg="bg-[#dcfce7]"
          title="Phone"
          value="(916) 764-0211"
          subtitle="Mon-Fri, 9am-5pm"
        />

        <div className="flex gap-4 items-start">
          <div className="bg-[#f3e8ff] rounded-[10px] w-10 h-10 flex items-center justify-center flex-shrink-0">
            <LocationIcon />
          </div>
          <div>
            <h3 className="font-['DM_Sans',sans-serif] text-[#0a0a0a] text-[20px] leading-[28px] mb-1">
              Office Location
            </h3>
            <p className="font-['DM_Sans',sans-serif] text-[#4a5565] text-[16px] leading-[24px]">
              Remote operations
            </p>
            <p className="font-['DM_Sans',sans-serif] text-[#4a5565] text-[16px] leading-[24px]">
              Located in Sacramento, CA
            </p>
            <p className="font-['DM_Sans',sans-serif] text-[#6a7282] text-[14px] leading-[20px] mt-1">
              Serving the greater Sacramento area
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
