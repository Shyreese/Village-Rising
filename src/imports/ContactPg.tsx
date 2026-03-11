import svgPaths from "./svg-uw74rhmpuv";
import imgVillageRisingLogoTransparentProfile1 from "../assets/f4211ae756795b44986cef03d26752bab0b65973.png";

function Heading() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[80px] w-[1216px]" data-name="Heading 1">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[60px] left-0 text-[48px] text-white top-[-5px] whitespace-nowrap">Contact Us</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[32px] top-[146px] w-[768px]" data-name="Paragraph">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#f4efe7] text-[24px] whitespace-nowrap">{`We're here to help. Reach out with questions, support requests, or partnership inquiries`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[252px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#3f5a3c] content-stretch flex flex-col h-[252px] items-start left-0 px-[447px] top-0 w-[2174px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[24px]">Send Us a Message</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px]">Name *</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Your full name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[70px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px]">Email *</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">your.email@example.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[70px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px]">Message *</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[162px] relative rounded-[8px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">How can we help you?</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <TextArea />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#c6a646] h-[48px] relative rounded-[53px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[355.11px] not-italic text-[16px] text-center text-white top-[10px] whitespace-nowrap">Send Message</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[456px] items-start relative shrink-0 w-full" data-name="Form">
      <Container4 />
      <Container5 />
      <Container6 />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[609px] items-start left-0 top-0 w-[710.391px]" data-name="Container">
      <Heading1 />
      <Form />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[24px]">Get in Touch</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[26px] top-[26px] w-[405.609px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[20px]">Need immediate assistance?</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[26px] top-[66px] w-[405.609px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-2px] whitespace-nowrap">{`Email us and we'll respond as quickly as possible:`}</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#c6a646] h-[52px] left-[26px] rounded-[52px] top-[102px] w-[260.234px]" data-name="Link">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[33.61px] not-italic text-[16px] text-white top-[14px] whitespace-nowrap">support@villagerising.org</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[26px] top-[166px] w-[405.609px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#4a5565] text-[15px]">We typically respond within 24 hours</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#fef3c6] h-[212px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#c6a646] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading3 />
      <Paragraph1 />
      <Link />
      <Paragraph2 />
    </div>
  );
}

function EnvelopeIcon() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Envelope Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Envelope Icon 1">
          <path d={svgPaths.p3b7f0700} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p10b5d900} id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p22b63520} id="Vector_3" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p3338df00} id="Vector_4" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p2abe9b60} id="Vector_5" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M4.37784 13.8455H1.75304" id="Vector_6" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p18a6b7c0} id="Vector_7" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p13945e00} id="Vector_8" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p232479e0} id="Vector_9" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M29.8935 14.0406H32.5183" id="Vector_10" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#cbfbf1] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <EnvelopeIcon />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-2px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex h-[21px] items-start relative shrink-0 w-full" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#009689] text-[16px] whitespace-nowrap">info@villagerising.org</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Public_Sans:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#6a7282] text-[14px]">General inquiries</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[79px] relative shrink-0 w-[154.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5px] items-start relative size-full">
        <Heading4 />
        <Link1 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[16px] h-[79px] items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="h-[38px] relative shrink-0 w-[37px]" data-name="Phone Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 38">
        <g id="Phone Icon 1">
          <path d={svgPaths.p1c139800} id="Vector" stroke="var(--stroke-0, #50C878)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p29b3b600} id="Vector_2" stroke="var(--stroke-0, #50C878)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p35a70900} id="Vector_3" stroke="var(--stroke-0, #50C878)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p2a888940} id="Vector_4" stroke="var(--stroke-0, #50C878)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p134b1980} id="Vector_5" stroke="var(--stroke-0, #50C878)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p32b67b80} id="Vector_6" stroke="var(--stroke-0, #50C878)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p2e602900} id="Vector_7" stroke="var(--stroke-0, #50C878)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PhoneIcon />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[116.438px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-2px] whitespace-nowrap">Phone</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[32px] w-[106.688px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] whitespace-nowrap">(555) 123-4567</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[59px] w-[116.438px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Mon-Fri, 9am-5pm</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[79px] relative shrink-0 w-[116.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading5 />
        <Link2 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] h-[79px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function LocationPinIcon() {
  return (
    <div className="h-[34px] relative shrink-0 w-[33px]" data-name="Location Pin Icon 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 34">
        <g id="Location Pin Icon 1">
          <path d={svgPaths.p2b951a80} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p25a96a00} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M7.14318 14.6574H3.81876" id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M29.1812 14.6574H25.8568" id="Vector_4" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p289fdd60} id="Vector_5" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p27ea8460} id="Vector_6" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p1aa8280} id="Vector_7" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d={svgPaths.p11eef40} id="Vector_8" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
          <path d="M16.4756 5.20132V1.74964" id="Vector_9" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f3e8ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <LocationPinIcon />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[225.422px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-2px] whitespace-nowrap">Office Location</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[24px] left-0 top-[31px] w-[225.422px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] whitespace-nowrap">Remote operations</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[24px] left-0 top-[55px] w-[225.422px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] whitespace-nowrap">Located in Sacramento, CA</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[83px] w-[225.422px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Serving the greater Sacramento area</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[103px] relative shrink-0 w-[225.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading6 />
        <Paragraph5 />
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[16px] h-[103px] items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[309px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container13 />
      <Container16 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[609px] items-start left-[758.39px] top-0 w-[457.609px]" data-name="Container">
      <Heading2 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[609px] left-[479px] top-[348px] w-[1216px]" data-name="Container">
      <Container3 />
      <Container7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[36px] left-[384.75px] text-[#0a0a0a] text-[33px] text-center top-[-3px] whitespace-nowrap">Serving Sacramento</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[359.5px] not-italic text-[#4a5565] text-[20px] text-center top-0 w-[699px]">Village Rising operates remotely to better serve families across the greater Sacramento area. Our team is available by phone, email, and video conference to support you wherever you are.</p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[128px] top-px w-[99.25px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center whitespace-nowrap">Office Hours:</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[420.5px] not-italic text-[#4a5565] text-[16px] text-center top-px whitespace-nowrap">Monday-Friday, 9:00 AM - 5:00 PM (Pacific Time)</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px] text-center">For in-person meetings, we can arrange to meet at a convenient location in the Sacramento area</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col gap-[19px] items-start left-[703px] px-[24px] py-[28px] rounded-[10px] top-[1133px] w-[768px]" data-name="Container">
      <Heading7 />
      <Paragraph8 />
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="absolute h-[1437px] left-0 top-[65px] w-[2174px]" data-name="ContactPage">
      <Container />
      <Container2 />
      <Container19 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="col-1 content-stretch flex h-[28px] items-start ml-[59px] mt-[11.5px] relative row-1 w-[103.375px]" data-name="Layout">
      <p className="font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#4a5565] text-[20px] whitespace-nowrap">Village Rising</p>
    </div>
  );
}

function CombinationLogo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Combination Logo">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[51px]" data-name="Village Rising Logo Transparent_Profile 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVillageRisingLogoTransparentProfile1} />
      </div>
      <Layout1 />
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[162.375px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <CombinationLogo />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.5px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.156px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Programs</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.141px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.469px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Board</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.734px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Get Involved</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.875px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#50c878] text-[14px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-[#c6a646] relative rounded-[18px] shrink-0 w-[128px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[76px]">Apply Now</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="bg-white h-[38px] relative rounded-[25px] shrink-0 w-[98px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#c6a646] border-solid inset-0 pointer-events-none rounded-[25px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[18px] py-[10px] relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] left-[calc(50%+0.13px)] not-italic text-[#c6a646] text-[14px] text-center top-[9px] w-[48px]">Donate</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[691px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative w-full">
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Navigation">
      <Link3 />
      <Container20 />
    </div>
  );
}

function Text() {
  return (
    <div className="col-1 h-[28px] ml-[48px] mt-[6px] relative row-1 w-[110.141px]" data-name="Text">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold h-[32px] leading-[32px] left-0 text-[18px] text-white top-[-4px] w-[149px]">Village Rising</p>
    </div>
  );
}

function VillageRisingCombinationLogoFooter() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Village Rising Combination Logo - Footer">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]" data-name="Village Rising Logo Transparent_Profile 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVillageRisingLogoTransparentProfile1} />
      </div>
      <Text />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <VillageRisingCombinationLogoFooter />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[13px] top-[-2px] w-[370px]">Supporting families in need through compassion, resources, and community partnerships.</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container23 />
      <Paragraph11 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[18px] text-white top-[-2px] whitespace-nowrap">Quick Links</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[37.531px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[15px] whitespace-nowrap">Home</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[59.156px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[15px] whitespace-nowrap">Programs</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[38.141px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[15px] whitespace-nowrap">About</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link14 />
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[36.469px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[15px] whitespace-nowrap">Board</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link15 />
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[77.734px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[15px] whitespace-nowrap">Get Involved</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link16 />
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[3px] w-[47.875px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[15px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link17 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[184px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-end relative row-1 self-stretch shrink-0 w-[276px]" data-name="Container">
      <Heading8 />
      <List />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[32px] left-0 text-[18px] text-white top-[-2px] whitespace-nowrap">Get in Touch</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#d1d5dc] text-[15px]">Email: info@villagerising.org</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#d1d5dc] text-[15px]">Phone: (555) 123-4567</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading9 />
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[227px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#d1d5dc] text-[14px] text-center">© 2026 Village Rising. All rights reserved. | Tax ID: 12-3456789</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start pt-[33px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph14 />
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute h-[1966px] left-0 top-0 w-[2174px]" data-name="Layout">
      <ContactPage />
      <div className="absolute bg-white content-stretch flex flex-col h-[65px] items-start left-0 pb-px px-[479px] top-0 w-[2174px]" data-name="Layout">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
        <Navigation />
      </div>
      <div className="absolute bg-[#101828] content-stretch flex flex-col gap-[32px] h-[408px] items-start left-[470px] pt-[48px] px-[32px] top-[1558px] w-[1280px]" data-name="Footer">
        <Container21 />
        <Container26 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pbc79d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[4px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Need Help?</p>
      </div>
    </div>
  );
}

function FloatingHelpButton() {
  return (
    <div className="absolute bg-[#667238] content-stretch flex gap-[8px] h-[56px] items-center left-[1960px] px-[16px] rounded-[33554400px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-[1854px] w-[141.938px]" data-name="FloatingHelpButton">
      <Icon />
      <Text1 />
    </div>
  );
}

function LogoFull() {
  return (
    <div className="absolute inset-[16.12%_78.38%_0.03%_0]" data-name="logo Full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 470 1648.5">
        <g id="logo Full" opacity="0.18">
          <g id="Group" opacity="0.54">
            <path d={svgPaths.p2bdfc200} fill="url(#paint0_linear_1_3971)" id="Vector" />
            <path d={svgPaths.p1ca04b00} fill="url(#paint1_linear_1_3971)" id="Vector_2" />
            <path d={svgPaths.p6b41d80} fill="url(#paint2_linear_1_3971)" id="Vector_3" />
            <path d={svgPaths.p2bdfc200} fill="url(#paint3_linear_1_3971)" id="Vector_4" />
            <path d={svgPaths.p3cc7ad80} fill="url(#paint4_linear_1_3971)" id="Vector_5" />
            <path d={svgPaths.p2c7c8220} fill="url(#paint5_linear_1_3971)" id="Vector_6" />
          </g>
          <path d={svgPaths.p2b0c1000} fill="url(#paint6_linear_1_3971)" id="Vector_7" />
          <path d={svgPaths.p3ccea00} fill="url(#paint7_linear_1_3971)" id="Vector_8" />
          <g id="Group_2">
            <path d={svgPaths.p2bdfc200} fill="url(#paint8_linear_1_3971)" id="Vector_9" />
            <path d={svgPaths.p27cd7600} fill="var(--fill-0, white)" id="Vector_10" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p4098a00} fill="var(--fill-0, #667238)" id="Vector_11" />
            <path d={svgPaths.p22e39300} fill="var(--fill-0, #B2B18B)" id="Vector_12" />
          </g>
          <path d={svgPaths.p185ff500} fill="var(--fill-0, #622F09)" id="Vector_13" />
          <path d={svgPaths.p2ebd6100} fill="var(--fill-0, #622F09)" id="Vector_14" />
          <path d={svgPaths.p688dc00} fill="var(--fill-0, #622F09)" id="Vector_15" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3971" x1="125.465" x2="125.494" y1="1119.99" y2="1119.22">
            <stop offset="0.035" stopColor="#97712B" />
            <stop offset="0.057" stopColor="#A0782F" />
            <stop offset="0.114" stopColor="#B38738" />
            <stop offset="0.154" stopColor="#BB8D3C" />
            <stop offset="0.439" stopColor="#D5AF30" stopOpacity="0.6" />
            <stop offset="0.499" stopColor="#DBBA4E" stopOpacity="0.511" />
            <stop offset="0.698" stopColor="#EEDFAD" stopOpacity="0.236" />
            <stop offset="0.846" stopColor="#FAF6E8" stopOpacity="0.065" />
            <stop offset="0.924" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_3971" x1="155.484" x2="155.457" y1="1176.19" y2="1169.16">
            <stop offset="0.022" stopColor="#98711B" />
            <stop offset="0.046" stopColor="#9B741C" />
            <stop offset="0.278" stopColor="#BA9429" />
            <stop offset="0.474" stopColor="#CDA731" />
            <stop offset="0.608" stopColor="#D4AF34" />
            <stop offset="0.995" stopColor="#D8BD80" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_3971" x1="139.014" x2="139.011" y1="1183.3" y2="1182.69">
            <stop offset="0.022" stopColor="#98711B" />
            <stop offset="0.046" stopColor="#9B741C" />
            <stop offset="0.278" stopColor="#BA9429" />
            <stop offset="0.474" stopColor="#CDA731" />
            <stop offset="0.608" stopColor="#D4AF34" />
            <stop offset="0.995" stopColor="#D8BD80" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_3971" x1="125.465" x2="125.494" y1="1119.99" y2="1119.22">
            <stop offset="0.035" stopColor="#97712B" />
            <stop offset="0.057" stopColor="#A0782F" />
            <stop offset="0.114" stopColor="#B38738" />
            <stop offset="0.154" stopColor="#BB8D3C" />
            <stop offset="0.439" stopColor="#D5AF30" stopOpacity="0.6" />
            <stop offset="0.499" stopColor="#DBBA4E" stopOpacity="0.511" />
            <stop offset="0.698" stopColor="#EEDFAD" stopOpacity="0.236" />
            <stop offset="0.846" stopColor="#FAF6E8" stopOpacity="0.065" />
            <stop offset="0.924" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_3971" x1="125.264" x2="125.293" y1="1119.99" y2="1119.22">
            <stop offset="0.035" stopColor="#97712B" />
            <stop offset="0.057" stopColor="#A0782F" />
            <stop offset="0.114" stopColor="#B38738" />
            <stop offset="0.154" stopColor="#BB8D3C" />
            <stop offset="0.439" stopColor="#D5AF30" stopOpacity="0.6" />
            <stop offset="0.499" stopColor="#DBBA4E" stopOpacity="0.511" />
            <stop offset="0.698" stopColor="#EEDFAD" stopOpacity="0.236" />
            <stop offset="0.846" stopColor="#FAF6E8" stopOpacity="0.065" />
            <stop offset="0.924" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_3971" x1="125.456" x2="125.472" y1="1120.21" y2="1119.8">
            <stop offset="0.035" stopColor="#97712B" />
            <stop offset="0.057" stopColor="#A0782F" />
            <stop offset="0.114" stopColor="#B38738" />
            <stop offset="0.154" stopColor="#BB8D3C" />
            <stop offset="0.439" stopColor="#D5AF30" stopOpacity="0.6" />
            <stop offset="0.499" stopColor="#DBBA4E" stopOpacity="0.511" />
            <stop offset="0.698" stopColor="#EEDFAD" stopOpacity="0.236" />
            <stop offset="0.846" stopColor="#FAF6E8" stopOpacity="0.065" />
            <stop offset="0.924" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_3971" x1="227.692" x2="238.167" y1="1770.07" y2="-1015.09">
            <stop offset="0.022" stopColor="#98711B" />
            <stop offset="0.046" stopColor="#9B741C" />
            <stop offset="0.278" stopColor="#BA9429" />
            <stop offset="0.474" stopColor="#CDA731" />
            <stop offset="0.608" stopColor="#D4AF34" />
            <stop offset="0.995" stopColor="#D8BD80" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_3971" x1="236.016" x2="229.245" y1="1460.09" y2="367.155">
            <stop offset="0.022" stopColor="#98711B" />
            <stop offset="0.046" stopColor="#9B741C" />
            <stop offset="0.278" stopColor="#BA9429" />
            <stop offset="0.474" stopColor="#CDA731" />
            <stop offset="0.608" stopColor="#D4AF34" />
            <stop offset="0.995" stopColor="#D8BD80" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_3971" x1="125.454" x2="125.451" y1="1120.42" y2="1119.45">
            <stop offset="0.022" stopColor="#98711B" />
            <stop offset="0.046" stopColor="#9B741C" />
            <stop offset="0.278" stopColor="#BA9429" />
            <stop offset="0.474" stopColor="#CDA731" />
            <stop offset="0.608" stopColor="#D4AF34" />
            <stop offset="0.995" stopColor="#D8BD80" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LogoFull1() {
  return (
    <div className="absolute inset-[16.12%_0_0_80.5%]" data-name="logo Full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424 1649">
        <g id="logo Full" opacity="0.18">
          <g id="Group" opacity="0.54">
            <path d={svgPaths.p1b613500} fill="url(#paint0_linear_1_3928)" id="Vector" />
            <path d={svgPaths.p13100600} fill="url(#paint1_linear_1_3928)" id="Vector_2" />
            <path d={svgPaths.p4c7f480} fill="url(#paint2_linear_1_3928)" id="Vector_3" />
            <path d={svgPaths.p1b613500} fill="url(#paint3_linear_1_3928)" id="Vector_4" />
            <path d={svgPaths.p2615cb00} fill="url(#paint4_linear_1_3928)" id="Vector_5" />
            <path d={svgPaths.p20562080} fill="url(#paint5_linear_1_3928)" id="Vector_6" />
          </g>
          <path d={svgPaths.p22ba5400} fill="url(#paint6_linear_1_3928)" id="Vector_7" />
          <g id="Group_2">
            <path d={svgPaths.p1b613500} fill="url(#paint7_linear_1_3928)" id="Vector_8" />
            <path d={svgPaths.p14fbe430} fill="var(--fill-0, white)" id="Vector_9" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p28f25840} fill="var(--fill-0, #667238)" id="Vector_10" />
            <path d={svgPaths.p2d358380} fill="var(--fill-0, #667238)" id="Vector_11" />
            <path d={svgPaths.p290ec280} fill="var(--fill-0, #B2B18B)" id="Vector_12" />
          </g>
          <path d={svgPaths.p3b490200} fill="var(--fill-0, #622F09)" id="Vector_13" />
          <path d={svgPaths.pe09a200} fill="var(--fill-0, #622F09)" id="Vector_14" />
          <path d={svgPaths.p19fd4b00} fill="var(--fill-0, #622F09)" id="Vector_15" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3928" x1="117.362" x2="117.391" y1="306.792" y2="306.041">
            <stop offset="0.035" stopColor="#97712B" />
            <stop offset="0.057" stopColor="#A0782F" />
            <stop offset="0.114" stopColor="#B38738" />
            <stop offset="0.154" stopColor="#BB8D3C" />
            <stop offset="0.439" stopColor="#D5AF30" stopOpacity="0.6" />
            <stop offset="0.499" stopColor="#DBBA4E" stopOpacity="0.511" />
            <stop offset="0.698" stopColor="#EEDFAD" stopOpacity="0.236" />
            <stop offset="0.846" stopColor="#FAF6E8" stopOpacity="0.065" />
            <stop offset="0.924" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_3928" x1="145.406" x2="145.377" y1="361.668" y2="354.803">
            <stop offset="0.022" stopColor="#98711B" />
            <stop offset="0.046" stopColor="#9B741C" />
            <stop offset="0.278" stopColor="#BA9429" />
            <stop offset="0.474" stopColor="#CDA731" />
            <stop offset="0.608" stopColor="#D4AF34" />
            <stop offset="0.995" stopColor="#D8BD80" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_3928" x1="130.019" x2="130.016" y1="368.618" y2="368.02">
            <stop offset="0.022" stopColor="#98711B" />
            <stop offset="0.046" stopColor="#9B741C" />
            <stop offset="0.278" stopColor="#BA9429" />
            <stop offset="0.474" stopColor="#CDA731" />
            <stop offset="0.608" stopColor="#D4AF34" />
            <stop offset="0.995" stopColor="#D8BD80" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_3928" x1="117.362" x2="117.391" y1="306.792" y2="306.041">
            <stop offset="0.035" stopColor="#97712B" />
            <stop offset="0.057" stopColor="#A0782F" />
            <stop offset="0.114" stopColor="#B38738" />
            <stop offset="0.154" stopColor="#BB8D3C" />
            <stop offset="0.439" stopColor="#D5AF30" stopOpacity="0.6" />
            <stop offset="0.499" stopColor="#DBBA4E" stopOpacity="0.511" />
            <stop offset="0.698" stopColor="#EEDFAD" stopOpacity="0.236" />
            <stop offset="0.846" stopColor="#FAF6E8" stopOpacity="0.065" />
            <stop offset="0.924" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_3928" x1="117.174" x2="117.203" y1="306.785" y2="306.033">
            <stop offset="0.035" stopColor="#97712B" />
            <stop offset="0.057" stopColor="#A0782F" />
            <stop offset="0.114" stopColor="#B38738" />
            <stop offset="0.154" stopColor="#BB8D3C" />
            <stop offset="0.439" stopColor="#D5AF30" stopOpacity="0.6" />
            <stop offset="0.499" stopColor="#DBBA4E" stopOpacity="0.511" />
            <stop offset="0.698" stopColor="#EEDFAD" stopOpacity="0.236" />
            <stop offset="0.846" stopColor="#FAF6E8" stopOpacity="0.065" />
            <stop offset="0.924" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_3928" x1="117.354" x2="117.37" y1="307.002" y2="306.6">
            <stop offset="0.035" stopColor="#97712B" />
            <stop offset="0.057" stopColor="#A0782F" />
            <stop offset="0.114" stopColor="#B38738" />
            <stop offset="0.154" stopColor="#BB8D3C" />
            <stop offset="0.439" stopColor="#D5AF30" stopOpacity="0.6" />
            <stop offset="0.499" stopColor="#DBBA4E" stopOpacity="0.511" />
            <stop offset="0.698" stopColor="#EEDFAD" stopOpacity="0.236" />
            <stop offset="0.846" stopColor="#FAF6E8" stopOpacity="0.065" />
            <stop offset="0.924" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_3928" x1="215.956" x2="208.093" y1="1055.08" y2="-190.906">
            <stop offset="0.022" stopColor="#98711B" />
            <stop offset="0.046" stopColor="#9B741C" />
            <stop offset="0.278" stopColor="#BA9429" />
            <stop offset="0.474" stopColor="#CDA731" />
            <stop offset="0.608" stopColor="#D4AF34" />
            <stop offset="0.995" stopColor="#D8BD80" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_3928" x1="117.351" x2="117.349" y1="307.211" y2="306.259">
            <stop offset="0.022" stopColor="#98711B" />
            <stop offset="0.046" stopColor="#9B741C" />
            <stop offset="0.278" stopColor="#BA9429" />
            <stop offset="0.474" stopColor="#CDA731" />
            <stop offset="0.608" stopColor="#D4AF34" />
            <stop offset="0.995" stopColor="#D8BD80" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function ContactPg() {
  return (
    <div className="bg-white relative size-full" data-name="Contact PG">
      <Layout />
      <FloatingHelpButton />
      <LogoFull />
      <LogoFull1 />
    </div>
  );
}
