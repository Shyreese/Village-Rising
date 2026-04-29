export function ContactForm() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Inquiry from Village Rising Website");
    window.location.href = `mailto:info@ourvillagerising.org?subject=${subject}`;
  };

  return (
    <div className="text-center py-8">
      <h2 className="font-['DM_Serif_Display',serif] text-[#0a0a0a] text-[28px] md:text-[32px] leading-[1.2] mb-6">
        Send Us a Message
      </h2>

      <p className="font-['DM_Sans',sans-serif] text-[#4a5565] text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto mb-10">
        Have questions, need support, or want to partner with us?
        We'd love to hear from you.
      </p>

      <button
        onClick={handleEmailClick}
        className="w-full max-w-[320px] mx-auto h-[56px] bg-[#c6a646] hover:bg-[#b5953d] active:bg-[#a58535] 
                   transition-all duration-200 text-white font-['DM_Sans',sans-serif] 
                   text-[18px] font-medium rounded-[53px] shadow-lg hover:shadow-xl 
                   flex items-center justify-center gap-3 group"
      >
        Send Us a Message
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>

      <p className="text-[#6a7282] text-sm mt-6">
        This will open your email app with our address pre-filled
      </p>
    </div>
  );
}