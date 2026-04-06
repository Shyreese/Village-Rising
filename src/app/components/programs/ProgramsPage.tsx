import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FloatingHelpButton } from "../FloatingHelpButton";
import { SkipLink } from "../SkipLink";
import { ProgramsHero } from "./ProgramsHero";
import { BridgingTheGap } from "./BridgingTheGap";
import { ProgramCard } from "./ProgramCard";

import { Home, DollarSign, Briefcase, Heart, GraduationCap, Users, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";
import LogoFull from "../../../imports/LogoFull";
import { HomeLogoBars } from "./../HomeLogoBars";

import imgHousing from "@/assets/ac7adf1ec1d28b18ed35e1503159fd9ef32f2579.png";
import imgFinancial from "@/assets/aa952a3bbad835f8c2d233a6712de5f76b8ca4d6.png";
import imgWellness from "@/assets/5e7903ee64f62d274019a537e5705550a9550df2.png";
import imgEducation from "@/assets/69e5a1a23f3132e2da11501e0f1949b9f0e22846.png";
import imgWorkforce from "@/assets/a69e055b36c9810590be0eaf0589e2de6dcac47a.png";


const programs = [
    {
    anchorId: "education-support",
    tag: "Education Support",
    title: "Childcare and Family Resource program",
    description:
      "We provide comprehensive education support combined with childcare assistance, helping parents pursue their education and career goals while ensuring their children receive quality care.",
    image: imgEducation,
    imagePosition: "left" as const,
    bgColor: "#fff7ed",
    eligibilityText: "Open to working families and those pursuing education, with priority for families earning between low and middle income",
    features: [
      { title: "Quality Childcare", subtitle: "Affordable care options", icon: GraduationCap },
      { title: "Tutoring Services", subtitle: "Academic support for all ages", icon: GraduationCap },
/*       { title: "Scholarship Access", subtitle: "College funding assistance", icon: GraduationCap },
      { title: "GED Programs", subtitle: "High school equivalency", icon: GraduationCap },
      { title: "College Prep", subtitle: "Application and enrollment help", icon: GraduationCap },
      { title: "After-School Programs", subtitle: "Enrichment activities", icon: GraduationCap }, */
    ],
  },
  {
    anchorId: "housing-assistance",
    tag: "Housing Assistance",
    title: "Housing Assistance Program",
    description:
      "Our housing programs provide emergency shelter, rental assistance, and pathways to affordable housing for families experiencing housing instability or working toward homeownership.",
    image: imgHousing,
    imagePosition: "right" as const,
    bgColor: "#fafaf9",
    eligibilityText: "For families experiencing housing instability or seeking stable housing solutions",
    features: [
      //{ title: "Emergency Shelter", subtitle: "Immediate placement assistance", icon: Home },
      { title: "Rental Support", subtitle: "Assistance and deposit help", icon: Home },
      { title: "Housing Counseling", subtitle: "Navigation and guidance", icon: Home },
      { title: "Utility Assistance", subtitle: "Help with essential bills", icon: Home },
      { title: "Homeownership Prep", subtitle: "Path to buying a home", icon: Home },
      { title: "Rapid Rehousing", subtitle: "Quick housing solutions", icon: Home },
    ],
  },
    {
    anchorId: "family-wellness",
    tag: "Wellness Support",
    title: "Opportunity Access Program",
    description:
      "Supporting the whole family through comprehensive services that address physical, emotional, and social wellbeing.",
    image: imgWellness,
    imagePosition: "right" as const,
    bgColor: "#f0fdfa",
    eligibilityText: "Open to all families in our service area, regardless of income",
    features: [
      { title: "Counseling", subtitle: "Individual and family sessions", icon: Heart },
      { title: "Health Navigation", subtitle: "Access to healthcare resources", icon: Heart },
      { title: "Parent Education", subtitle: "Skills and development classes", icon: Heart },
      { title: "Support Groups", subtitle: "Community peer connections", icon: Heart },
      { title: "Crisis Intervention", subtitle: "Immediate support services", icon: Heart },
      { title: "Youth Programs", subtitle: "Activities and mentoring", icon: Heart },
    ],
  },
    {
    anchorId: "workforce-development",
    tag: "Workforce Development",
    title: "Workforce Development Program",
    description:
      "Our internship and workforce program provides real-world work experience, job training, and career development opportunities to help families build sustainable careers and achieve financial independence.",
    image: imgWorkforce,
    imagePosition: "right" as const,
    bgColor: "#eff6ff",
    eligibilityText: "For families earning between low and middle income levels who may not qualify for traditional aid programs",
    features: [
      { title: "Internships", subtitle: "Hands-on work experience", icon: Briefcase },
      { title: "Job Training", subtitle: "Skills-based programs", icon: Briefcase },
      { title: "Resume Building", subtitle: "Professional document help", icon: Briefcase },
      { title: "Interview Prep", subtitle: "Confidence and skills coaching", icon: Briefcase },
      //{ title: "Job Placement", subtitle: "Connections to employers", icon: Briefcase },
      //{ title: "Certification Programs", subtitle: "Industry credentials", icon: Briefcase },
    ],
  },
  {
    anchorId: "financial-coaching",
    tag: "Financial Coaching",
    title: "Financial Empowerment Series Program",
    description:
      "Our comprehensive financial and professional coaching services help families build wealth, improve credit, and achieve major financial milestones like homeownership and career advancement.",
    image: imgFinancial,
    imagePosition: "left" as const,
    bgColor: "#fffbeb",
    eligibilityText: "Available to families committed to building long-term financial stability, especially those between low and middle income",
    features: [
      { title: "Credit Improvement", subtitle: "Coaching and strategies", icon: DollarSign },
      { title: "Budgeting/Debt Management", subtitle: "Loan education and planning", icon: DollarSign },
      { title: "Home Buying", subtitle: "First-time buyer guidance", icon: DollarSign },
      { title: "Investment Education", subtitle: "Real estate and retirement basics", icon: DollarSign },
      //{ title: "Career Coaching", subtitle: "Professional development support", icon: Briefcase },
    ],
  },
];

export function ProgramsPage() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.slice(1);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] relative overflow-hidden">
      <SkipLink />
      <Navbar activePage="programs" />
      <ProgramsHero />

      {/* Main content area with logo bars */}
      <main id="main-content" className="relative">
<HomeLogoBars />
        {/* Content */}
        <div className="relative z-[1]">
          <BridgingTheGap />

          {/* Program Cards */}
          <div id="programs-list" className="space-y-8 pb-12">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>



          {/* Success Stories Section */}
          <section className="px-4 sm:px-6 pb-0" aria-labelledby="success-stories-heading">
            <div className="max-w-[1310px] mx-auto bg-[#536b50] py-12 sm:py-16 px-6 sm:px-8 lg:px-16">
              <h2 id="success-stories-heading" className="font-['DM_Serif_Display',serif] text-white text-[24px] sm:text-[28px] lg:text-[33px] text-center mb-10">
                Success Stories
              </h2>

              {/* Testimonial cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    quote:
                      "The internship program opened doors I never thought possible. I gained real experience in IT and now have a full-time job with benefits. My family's future looks completely different.",
                    name: "— Marcus T.",
                    detail: "· Father of 2 · Internship Program",
                  },
                  {
                    quote:
                      "The childcare assistance meant I could finally go back to school. My kids were in great care while I got my nursing degree. Now I'm supporting my family and following my dreams.",
                    name: "— Patricia M.",
                    detail: "· Single Mom · Education Program",
                  },
                  {
                    quote:
                      "Thanks to the financial coaching, we paid off $12,000 in debt and improved our credit score by 150 points. We're now on track to buy our first home.",
                    name: "— The Rivera Family",
                    detail: "· Couple · Financial Coaching",
                  },
                ].map((t, index) => (
                  <article
                    key={t.name}
                    className="bg-white rounded-[10px] shadow-sm p-6 sm:p-8 flex flex-col justify-between"
                  >
                    <blockquote className="font-['DM_Sans',sans-serif] text-[#364153] text-[15px] sm:text-[16px] leading-[1.5] mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="font-['DM_Sans',sans-serif] text-[14px]">
                      <span className="text-[#101828]">{t.name}</span>
                      <span className="text-[#6a7282]"> {t.detail}</span>
                    </p>
                  </article>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="font-['DM_Sans',sans-serif] text-white text-[16px] mb-4">
                  Ready to start your journey?
                </p>
                <Link
                  to="/apply"
                  className="inline-block bg-[#c6a646] text-white font-['DM_Sans',sans-serif] font-semibold text-[16px] px-8 py-3 rounded-[34px] hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#536b50]"
                >
                  Check Your Eligibility
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <FloatingHelpButton />
    </div>
  );
}
