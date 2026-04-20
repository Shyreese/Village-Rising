import { Link } from "react-router";

export function CTASection() {
  return (
    <section id="qualify" className="bg-white py-16 lg:py-24 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CTA 1 - Get Support */}
        <div className="bg-[#3f5a3c] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-10 lg:p-12">
          <h2 className="font-['DM_Serif_Display',serif] text-white text-[24px] lg:text-[28px] leading-[1.3] mb-4">
            Need Support for Your Family?
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[#f4efe7] text-[16px] leading-[1.5] mb-8 max-w-[400px]">
            See which programs you qualify for in just 2 minutes. No commitment,
            completely confidential.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-[#c6a646] text-white font-['DM_Sans',sans-serif] font-semibold text-[16px] lg:text-[18px] px-8 py-3.5 rounded-full shadow-[0px_4px_4px_0px_rgba(184,149,54,0.5)] hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-[#c6a646] focus:ring-offset-2"
          >
            Check Eligibility Now
          </Link>
        </div>

        {/* CTA 2 - Support Our Mission */}
        <div
          id="donate"
          className="bg-[#f3f4f6] rounded-[10px] border border-[#e5e7eb] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-10 lg:p-12"
        >
          <h2 className="font-['DM_Serif_Display',serif] text-[#101828] text-[24px] lg:text-[28px] leading-[1.3] mb-4">
            Support Our Mission
          </h2>
          <p className="font-['DM_Sans',sans-serif] text-[#364153] text-[16px] leading-[1.5] mb-8 max-w-[441px]">
            Help us support more families through donations or corporate
            partnerships.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/donate"
              className="inline-block bg-[#BE5103] text-white font-['DM Sans',sans-serif] font-semibold text-[16px] px-6 py-2.5 rounded-full hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-[#2daae1] focus:ring-offset-2"
            >
              Donate
            </Link>
            <Link
              to="/board"
              className="inline-block border-2 border-[#BE5103] text-[#BE5103] font-['DM Sans',sans-serif] font-semibold text-[16px] px-6 py-2 rounded-full hover:bg-[#BE5103] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#2daae1] focus:ring-offset-2"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
