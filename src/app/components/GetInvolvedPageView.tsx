import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingHelpButton } from "./FloatingHelpButton";
import { SkipLink } from "./SkipLink";
import { HomeLogoBars } from "./HomeLogoBars";
import imgVolunteer from "@/assets/529a501a728122d61bd3c4c32157e6b5e13648d3.png";
import { Home, DollarSign, Briefcase, Heart, GraduationCap, Users, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";
import { PartnerSection } from "./PartnerSection";

export function GetInvolvedPageView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] relative overflow-hidden">
      <SkipLink />
      <Navbar activePage="get involved" />

      {/* Green Hero Section - Consistent with About and Contact */}
      <section className="bg-[#3f5a3c] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="text-center">
            <h1 className="font-['DM_Serif_Display',serif] font-normal text-white text-[36px] md:text-[48px] lg:text-[52px] leading-[1.1] mb-4">
              Get Involved
            </h1>

            <p className="font-['DM_Sans',sans-serif] font-medium text-[#f4efe7] 
                         text-[17px] sm:text-[19px] md:text-[22px] lg:text-[23px]
                         leading-[1.3] md:leading-tight 
                         tracking-[-0.01em] mx-auto max-w-[1000px]">
              Join us in making a difference in our community. There are many ways to get involved and support Village Rising's mission.
            </p>
          </div>
        </div>
      </section>

      <main id="main-content" className="relative">
        <HomeLogoBars />

        <div className="relative z-[1] max-w-[1260px] mx-auto px-4 sm:px-6">

          {/* Volunteer Section */}
          <section className="py-12 px-4 sm:px-6" aria-labelledby="volunteer-heading">
            <div className="max-w-[1260px] mx-auto bg-[#ecfdf5] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="h-[400px] lg:h-[600px] overflow-hidden rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none">
                  <img
                    src={imgVolunteer}
                    alt="Volunteers working together in the community"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-[#50c878] text-white font-bold text-[14px] px-4 py-1.5 rounded-full w-fit mb-6">
                    Get Involved
                  </span>
                  <h2 id="volunteer-heading" className="font-['DM_Serif_Display',serif] font-bold text-[#101828] text-[28px] sm:text-[32px] lg:text-[48px] leading-[1.1] mb-4">
                    Volunteer
                  </h2>
                  <p className="font-['DM_Sans',sans-serif] text-[#364153] text-[16px] sm:text-[18px] leading-[1.6] mb-8 max-w-[600px]">
                    Volunteers are the heart of our organization. Whether you have a
                    few hours or can commit regularly, your time and skills make a
                    meaningful difference.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {[
                      { title: "Mentoring", subtitle: "Guide families one-on-one" },
                      { title: "Event Support", subtitle: "Help organize community events" },
                      { title: "Tutoring", subtitle: "Support student learning" },
                      { title: "Administrative", subtitle: "Office and organizational help" },
                      { title: "Fundraising", subtitle: "Help sustain our mission" },
                      { title: "Outreach", subtitle: "Community engagement" },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="bg-white rounded-[14px] border border-[#e5e7eb] shadow-sm p-4 flex items-center gap-3"
                      >
                        <div className="w-10 h-10 bg-[#50c878] rounded-[10px] flex items-center justify-center shrink-0" aria-hidden="true">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-['DM_Sans',sans-serif] font-bold text-[#101828] text-[14px]">{item.title}</p>
                          <p className="font-['DM_Sans',sans-serif] text-[#4a5565] text-[12px]">{item.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Eligibility box */}
                  <div className="bg-white rounded-[14px] border border-[#e5e7eb] shadow-sm p-5 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-[#50c878]" strokeWidth={1.5} aria-hidden="true" />
                      <p className="font-['DM_Sans',sans-serif] font-bold text-[#101828] text-[16px] sm:text-[18px]">Eligibility</p>
                    </div>
                    <p className="font-['DM_Sans',sans-serif] text-[#364153] text-[14px] leading-[1.6]">
                      For individuals who are at least 18 years old (or 16 with parental consent) and willing to uphold our values
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block bg-[#c6a646] text-white font-['DM_Sans',sans-serif] font-bold text-[16px] sm:text-[18px] px-8 py-3 rounded-full shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:brightness-110 transition w-fit focus:outline-none focus:ring-2 focus:ring-[#c6a646] focus:ring-offset-2"
                  >
                    Sign Up to Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <PartnerSection />

          {/* Call to Action */}
          <section className="py-12 sm:py-16 text-center">
            <h2 className="font-['DM_Serif_Display',serif] font-bold text-[28px] sm:text-[32px] text-[#4a5565] mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#6b7280] mb-8 max-w-[600px] mx-auto">
              Every contribution, big or small, helps us build stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="bg-[#c6a646] text-white font-['DM_Sans',sans-serif] font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition"
              >
                Donate Today
              </a>
              <a
                href="/contact"
                className="border-2 border-[#c6a646] text-[#c6a646] font-['DM_Sans',sans-serif] font-semibold px-8 py-4 rounded-lg hover:bg-[#c6a646] hover:text-white transition"
              >
                Get in Touch
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <FloatingHelpButton />
    </div>
  );
}