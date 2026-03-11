export function MissionSection() {
  return (
    <section id="about" className="py-16 lg:py-24 px-6">
      <div className="max-w-[1000px] mx-auto bg-[rgba(63,90,60,0.9)] rounded-xl shadow-[0px_12px_30px_0px_rgba(63,90,60,0.5)] px-8 sm:px-12 lg:px-16 py-12 lg:py-16 text-center">
        {/* Gold accent */}
        <div className="w-16 h-[6px] bg-[#c6a646] rounded-full mx-auto mb-6 opacity-90" />

        <h2 className="font-['Playfair_Display',serif] font-semibold text-[#f5f3ee] text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-1.2px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          Our Mission
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[#e3dfd5] text-[16px] lg:text-[20px] leading-[1.8] mt-6 max-w-[750px] mx-auto opacity-95">
          Village Rising's mission is to close the gap between crisis and
          stability through integrated childcare, navigation, financial
          literacy, and housing support by rebuilding the modern day village
          and creating pathways to family stability, economic mobility, and
          community leadership, one family at a time.
        </p>
      </div>
    </section>
  );
}
