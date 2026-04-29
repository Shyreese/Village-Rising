export function ContactHero() {
  return (
    <section className="bg-[#3f5a3c] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="text-center">
          <h1 className="font-['DM_Serif_Display',serif] font-normal text-white text-[36px] md:text-[48px] leading-[1.1] mb-4">
            Contact Us
          </h1>

          <p className="font-['DM_Sans',sans-serif] font-medium text-[#f4efe7] 
                       text-[18px] md:text-[24px] 
                       leading-[1.25] md:leading-tight 
                       tracking-[-0.01em] mx-auto">
            We're here to help. Reach out with questions, support requests, or partnership inquiries
          </p>
        </div>
      </div>
    </section>
  );
}