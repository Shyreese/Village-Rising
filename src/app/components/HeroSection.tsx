import { Link } from "react-router";
import videoSrc from "../../assets/Mother and Child Playing on Floor.mp4";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden" aria-label="Hero banner">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="w-full h-full object-cover"
          src={videoSrc}
          muted
          autoPlay
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
        {/* Gold accent line */}
        <div className="w-16 h-[5px] bg-[#c6a646] rounded-full mb-6" aria-hidden="true" />

        <h1 className="font-['DM_Serif_Display',serif] font-bold text-white text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] max-w-[700px]">
          Our Mission is{" "}
          <span className="block sm:inline">Connecting Families.</span>
          <span className="block">Building Futures.</span>
        </h1>

        <p className="font-['DM_Sans',sans-serif] font-semibold text-[#f4efe7] text-[18px] lg:text-[24px] leading-[1.4] mt-6 max-w-[700px]">
          Village Rising's mission is to close the gap between crisis and
          stability through integrated childcare, navigation, financial
          literacy, and housing support by rebuilding the modern day village
          and creating pathways to family stability, economic mobility, and
          community leadership, one family at a time.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 mt-10">
          <Link
            to="/apply"
            className="bg-[#c6a646] text-white font-['DM_Sans',sans-serif] font-semibold text-[16px] lg:text-[18px] px-8 py-3.5 rounded-full shadow-[0px_4px_4px_0px_rgba(184,149,54,0.5)] hover:brightness-110 transition text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            See If You Qualify
          </Link>
          <Link
            to="/programs"
            className="border-[4px] border-[#3f5a3c] text-white font-['DM_Sans',sans-serif] font-semibold text-[16px] lg:text-[18px] px-8 py-3 rounded-full shadow-[0px_4px_4px_0px_rgba(63,90,60,0.5)] hover:bg-[#3f5a3c]/30 transition text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          >
            View Programs
          </Link>
        </div>

        <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-6 text-[#f4efe7] font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px]" aria-label="Key features">
          <li className="flex items-center gap-2">
            <span aria-hidden="true">&#10003;</span> Takes 2 minutes
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true">&#10003;</span> No commitment required
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true">&#10003;</span> 100% confidential
          </li>
        </ul>
      </div>
    </section>
  );
}
