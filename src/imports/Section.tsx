function Container1() {
  return <div className="absolute bg-[#c6a646] h-[5px] left-[18px] rounded-[22369600px] top-0 w-[1012px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="absolute h-[120px] left-0 top-[90px] w-[768px]" data-name="Heading 1">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[60px] left-[18px] text-[60px] text-white top-[51px] w-[485px]">Building Futures.</p>
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[358px] left-[479px] top-[98px] w-[768px]" data-name="Container">
      <Heading />
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold h-[59px] leading-[60px] left-[18px] text-[60px] text-white top-[30px] w-[405px] whitespace-pre-wrap">{`Our Mission is  `}</p>
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[60px] left-[445px] text-[60px] text-white top-[30px] w-[585px]">{`Connecting Families. `}</p>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#c6a646] h-[50px] relative rounded-[42px] shadow-[0px_4px_4px_0px_rgba(184,149,54,0.5)] shrink-0 w-[212px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[105.5px] not-italic text-[18px] text-center text-white top-[13px] whitespace-nowrap">See If You Qualify</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[50px] relative rounded-[51px] shrink-0 w-[212px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-5 border-[#3f5a3c] border-solid inset-0 pointer-events-none rounded-[51px] shadow-[0px_4px_4px_0px_rgba(63,90,60,0.5)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[106px] not-italic text-[18px] text-center text-white top-[13px] whitespace-nowrap">View Programs</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[36px] h-[50px] items-start left-[497px] top-[597px] w-[469px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[497px] py-[17px] top-[647px]" data-name="Paragraph">
      <p className="font-['Public_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#f4efe7] text-[0px] text-[14px] w-[469px] whitespace-pre-wrap">
        <span className="leading-[20px]">{`✓ `}</span>
        <span className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] not-italic">Takes 2 minutes</span>
        <span className="leading-[20px]">{`     ✓ `}</span>
        <span className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] not-italic">No commitment required</span>
        <span className="leading-[20px]">{`     ✓ `}</span>
        <span className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[20px] not-italic">100% confidential</span>
      </p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/d229415f4f42b3392b8810f52535e34a236a7441" />
      </video>
      <Container />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-[497px] not-italic text-[#f4efe7] text-[24px] top-[424px] w-[732px]">Helping families move from crisis to stability through childcare, financial guidance, and housing support.</p>
      <Container2 />
      <Paragraph />
    </div>
  );
}
