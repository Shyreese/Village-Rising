import { Home, DollarSign, Briefcase } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ProgramsHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0a0a0a] to-[#707070] py-20 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative">
        <div className="max-w-[700px]">
          <h1 className="font-['DM_Serif_Display',serif] font-normal text-white text-[48px] sm:text-[56px] lg:text-[72px] leading-[1.1]">
            Support for Families.
            <br />
            Pathways to Stability.
          </h1>

          <p className="font-['Inter',sans-serif] font-medium text-white text-[18px] lg:text-[24px] leading-[1.6] mt-8 max-w-[620px]">
            Village Rising provides integrated housing, financial, workforce, and
            education support for working families building long-term stability.
          </p>

          <p className="font-['Inter',sans-serif] text-white/80 text-[16px] mt-4">
            Rebuilding the modern village one family at a time.
          </p>

          {/* Program icons row */}
          <div className="flex flex-wrap gap-8 mt-8">
            {[
              { icon: Home, label: "Housing" },
              { icon: DollarSign, label: "Financial Coaching" },
              { icon: Briefcase, label: "Workforce Development" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                <span className="font-['Inter',sans-serif] text-white/90 text-[16px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-6 items-center mt-10">
            <Link
              to="/apply"
              className="bg-[#c6a646] text-white font-['Inter',sans-serif] font-semibold text-[18px] px-8 py-3.5 rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:brightness-110 transition"
            >
              Check Your Eligibility
            </Link>
            <a
              href="#programs-list"
              className="font-['Inter',sans-serif] font-semibold text-white text-[18px] underline hover:text-white/80 transition"
            >
              Explore Our Programs
            </a>
          </div>
        </div>

        {/* Hero image on right side */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[580px] h-[480px] rounded-[20px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1627662167802-d58480978ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5uZXIlMjB0YWJsZSUyMGVhdGluZyUyMHRvZ2V0aGVyJTIwaGFwcHl8ZW58MXx8fHwxNzczMDk3NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Family dining together"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
