import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    quote:
      '"I was hesitant to ask for help, but the application was so simple and my navigator Maria made me feel heard and supported from day one. Within 3 weeks, my kids were enrolled in after-school care."',
    name: "Carmen R.",
    detail: "Mother of 2 · Education Support Program",
  },
  {
    quote:
      '"The housing assistance program literally saved my family. We were about to lose our apartment, and Village Rising helped us stay housed while I got back on my feet financially."',
    name: "James T.",
    detail: "Father of 3 · Housing Assistance Program",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1530043123514-c01b94ef483b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjb21tdW5pdHklMjBzdXBwb3J0JTIwbm9ucHJvZml0fGVufDF8fHx8MTc3MzA5NDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
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
