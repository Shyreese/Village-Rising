export function JoinTeamSection() {
  return (
    <section className="relative z-10 flex justify-center px-6 md:px-8 pb-16 md:pb-24">
      <div className="bg-[#f9fafb] rounded-[30px] px-8 py-7 max-w-[654px] w-full text-center">
        <h2 className="font-['Playfair_Display',serif] text-[#0a0a0a] text-[28px] md:text-[33px] leading-[1.1] mb-6">
          Join Our Team
        </h2>
        <p className="font-['Inter',sans-serif] text-[#4a5565] text-[18px] md:text-[20px] leading-[1.4] mb-6 max-w-[556px] mx-auto">
          We're always looking for passionate individuals to join our board and
          staff. If you're interested in serving families and making a
          difference, we'd love to hear from you.
        </p>
        <button className="bg-[#c6a646] hover:bg-[#b5953d] transition-colors text-white font-['Public_Sans',sans-serif] text-[16px] leading-[24px] px-8 py-3 rounded-[34px]">
          View Opportunities
        </button>
      </div>
    </section>
  );
}
