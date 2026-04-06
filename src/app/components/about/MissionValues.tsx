import svgPaths from "../../../imports/svg-wltac3gwqf";

function HeartInHandIcon() {
  return (
    <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 44 44">
      <path d={svgPaths.p7509100} stroke="#00786F" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p16edee00} stroke="#00786F" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" />
      <path d={svgPaths.p27bf8500} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p1f812b00} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p315f8000} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p26e4d440} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p3fc18000} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
    </svg>
  );
}

function HeartSunIcon() {
  return (
    <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 42 42">
      <path d={svgPaths.pa06900} stroke="#E17100" strokeMiterlimit="10" strokeWidth="1.9" />
      <path d={svgPaths.p5101700} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p2781140} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p2c47f200} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p29904dc0} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p2a486e80} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p676f280} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p93c0bc0} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p27efa400} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p1870ab00} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p1f0c5400} stroke="#E17100" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
    </svg>
  );
}

function SunMedalIcon() {
  return (
    <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 42 42">
      <path d={svgPaths.pe1a2b00} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.pb8a5e00} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p19a34800} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d="M9.1224 17.6492H4.89132" stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d="M37.1708 17.6492H32.9398" stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p241b5880} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p13c5f100} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p31360740} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d={svgPaths.p124e11c0} stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
      <path d="M21 5.9682V1.70436" stroke="#00786F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
    </svg>
  );
}

interface ValueItemProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  children: React.ReactNode;
}

function ValueItem({ icon, iconBg, title, children }: ValueItemProps) {
  return (
    <div className="flex gap-6 items-start">
      <div className={`w-12 h-12 ${iconBg} rounded-[10px] flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[20px] leading-[1.4] mb-2">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

export function MissionValues() {
  return (
    <section className="relative z-[1]">
      <h2 className="font-['Playfair_Display',serif] text-[#0a0a0a] text-[36px] leading-[1.1] mb-8">
          Our Mission And Values
        </h2>

      <div className="space-y-8">
        {/* Mission */}
        <ValueItem
          icon={<HeartInHandIcon />}
          iconBg="bg-[#cbfbf1]"
          title="Our Mission"
        >
          <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.5]">
            Village Rising's mission is to close the gap between crisis and stability through integrated childcare, navigation, financial literacy, and housing support by rebuilding the modern day village and creating pathways to family stability, economic mobility, and community leadership, one family at a time.
          </p>
        </ValueItem>

        {/* Values */}
        <ValueItem
          icon={<HeartSunIcon />}
          iconBg="bg-[#fef3c6]"
          title="Our Values"
        >
          <ul className="space-y-2">
            <li className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.5]">
              <span className="font-bold">Compassion:</span>{" "}
              We serve with empathy and respect for every family's dignity
            </li>
            <li className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.5]">
              <span className="font-bold">Community:</span>{" "}
              We believe in the power of collective action and support
            </li>
            <li className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.5]">
              <span className="font-bold">Empowerment:</span>{" "}
              We provide tools and resources that enable long-term success
            </li>
            <li className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.5]">
              <span className="font-bold">Integrity:</span>{" "}
              We operate with transparency and accountability
            </li>
          </ul>
        </ValueItem>

        {/* Vision */}
        <ValueItem
          icon={<SunMedalIcon />}
          iconBg="bg-[#cbfbf1]"
          title="Our Vision"
        >
          <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.5]">
            A community where every family has access to the resources, support, and opportunities
            needed to achieve stability, growth, and lasting wellbeing regardless of income status.
          </p>
        </ValueItem>
      </div>
    </section>
  );
}
