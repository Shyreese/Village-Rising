import { ImageWithFallback } from "./figma/ImageWithFallback";


const testimonials = [
  {
    quote:
      '"I came across the village rising housing stability program and was accepted and welcomed into relief when I fell on hard times. I found myself a homeless single mother on the verge of living on the streets. The program provided me not only a secured place to live, but also agape love, encouragement, comfort, and resources for me to be able to rebuild my confidence and independence. I cannot thank the founders of this program enough. Without trusting the process, I wouldn’t have gotten that fresh start again. Thank you for saving me and my son! I encouraged anyone in hard times to join this program.It really works."',
    name: "Chanita Davis",
    detail: "Single Mother· Housing Stability Program",
  },
  {
    quote:
      '"Village Rising provided an excellent experience from start to finish. Our business often needs to move quickly, so it’s extremely important for us to work with someone who is flexible and able to respond just as fast and they delivered. They were incredibly responsive and arrived within just two hours to complete a notary for me, which I truly appreciated. Their professionalism and friendly attitude made the entire process smooth and comfortable. What stood out the most was their willingness to go above and beyond, taking the time to answer my questions and provide additional information that was very helpful. I would definitely recommend Village Rising to anyone in need of notary services, and I will absolutely be using them again in the future."',
    name: "Ericson Porter",
    detail: "Opportunity Access Program ",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://res.cloudinary.com/dm4ezpefh/image/upload/v1777147918/53876-22989_ruoqqx.avif"
          alt="Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/42" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <h2 className="font-['Playfair_Display',serif] text-white text-[28px] sm:text-[33px] text-center mb-12">
          Stories From Families We've Helped
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1024px] mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-8"
            >
              <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[1.5] mb-4">
                {t.quote}
              </p>
              <p className="font-['Inter',sans-serif] text-[15px]">
                <span className="text-[#101828]">— {t.name}</span>
                <span className="text-[#6a7282]"> · {t.detail}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
