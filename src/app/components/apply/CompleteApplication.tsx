import { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface CompleteApplicationProps {
  onBack: () => void;
  onNext: () => void;
}

function FormField({
  label,
  placeholder,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-2">
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-[36px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] placeholder:text-[#9ca3af] outline-none focus:border-[#c6a646] transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  required = false,
  className = "",
}: {
  label: string;
  options: string[];
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-2">
        {label}
        {required && " *"}
      </label>
      <select className="w-full h-[36px] px-3 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#c6a646] transition-colors appearance-none cursor-pointer">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-[#e5e7eb] rounded-[10px] mb-6">
      <div className="px-6 pt-6 pb-2">
        <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[16px] leading-[16px] mb-1.5">
          {title}
        </h3>
        {description && (
          <p className="font-['Inter',sans-serif] text-[#717182] text-[16px] leading-[24px]">
            {description}
          </p>
        )}
      </div>
      <div className="px-6 pb-6 pt-2">{children}</div>
    </div>
  );
}

export function CompleteApplication({ onBack, onNext }: CompleteApplicationProps) {
  const [certified1, setCertified1] = useState(false);
  const [certified2, setCertified2] = useState(false);

  return (
    <div className="max-w-[896px] mx-auto px-6 py-10">
      {/* Back button & heading */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#0a0a0a] font-['Inter',sans-serif] text-[14px] mb-6 cursor-pointer hover:text-[#4a5565] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Eligibility Check
        </button>
        <h2 className="font-['Playfair_Display',serif] text-[#101828] text-[36px] leading-[48px] mb-2">
          Application
        </h2>
        <p className="font-['Inter',sans-serif] text-[#4a5565] text-[20px] leading-[28px]">
          Please complete all sections to help us determine your qualification
          for assistance programs
        </p>
      </div>

      {/* Personal Information */}
      <FormSection title="Personal Information" description="Tell us about yourself">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <FormField label="First Name" required />
          <FormField label="Middle Name" />
          <FormField label="Last Name" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormField label="Date of Birth" required type="date" />
          <FormField label="Social Security Number" required placeholder="XXX-XX-XXXX" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormField label="Email Address" required type="email" />
          <FormField label="Phone Number" required type="tel" />
        </div>
        <div className="mb-4">
          <FormField label="Verify your phone" placeholder="Enter your PIN" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormField label="Emergency Contact Name" required />
          <FormField label="Emergency Contact Phone" required type="tel" />
          <SelectField label="Relationship" required options={["Select...", "Spouse", "Parent", "Sibling", "Friend", "Other"]} />
        </div>
      </FormSection>

      {/* Current Address */}
      <FormSection title="Current Address" description="Where do you currently live?">
        <div className="mb-4">
          <FormField label="Street Address" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <FormField label="Apartment/Suite Number" />
          <FormField label="City" required />
          <FormField label="Zip Code" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SelectField label="State" required options={["Select state...", "CA", "AZ", "NV", "OR", "WA", "Other"]} />
          <FormField label="Zip Code" required />
          <SelectField label="Type of Address" required options={["Select...", "Permanent", "Temporary", "Shelter", "Other"]} />
        </div>
      </FormSection>

      {/* Living Situation */}
      <FormSection title="Living Situation" description="Help us understand your current living arrangements">
        <div className="mb-4">
          <SelectField label="Current Living Situation" required options={["Select...", "Own Home", "Renting", "Living with Family/Friends", "Currently Homeless", "Emergency Shelter", "Temporary Housing"]} />
        </div>
        <div className="mb-4">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
            Do you own or rent your home?
          </label>
          <div className="flex flex-wrap gap-4">
            {["Own", "Rent", "Living with Family/Friends", "Currently Homeless", "Emergency Shelter"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="homeOwnership" className="accent-[#50c878]" />
                <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </FormSection>

      {/* Household Information */}
      <FormSection title="Household Information">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <FormField label="Total Household Size" required />
          <FormField label="Number of Adults (18+)" required />
          <FormField label="Number of Children" required />
        </div>
        <div className="mb-4">
          <SelectField label="Marital/Relationship Status" required options={["Select...", "Single", "Married", "Domestic Partnership", "Separated", "Divorced", "Widowed"]} />
        </div>
      </FormSection>

      {/* Employment Information */}
      <FormSection title="Employment Information">
        <div className="mb-4">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
            Tell us about your employment status
          </label>
          <p className="font-['Inter',sans-serif] text-[#717182] text-[14px] mb-3">
            Current Employment Status
          </p>
          <SelectField label="" options={["Select employment status...", "Employed Full-Time", "Employed Part-Time", "Self-Employed", "Unemployed", "Student", "Retired", "Unable to Work"]} />
        </div>
      </FormSection>

      {/* Financial Information */}
      <FormSection title="Financial Information">
        <div className="mb-4">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
            Tell us about your financial situation
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Annual Household Income (before taxes)" required placeholder="$" />
            <FormField label="Monthly Household Income (after taxes)" required placeholder="$" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormField label="Other Monthly Income" placeholder="$" />
          <FormField label="Sources of Other Income" />
        </div>
        <div className="mb-4">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
            Do you have health insurance? *
          </label>
          <div className="flex gap-4">
            {["Yes", "No"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="insurance" className="accent-[#50c878]" />
                <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
            Are you currently receiving any other sources of (Check all that apply)
          </label>
          <div className="flex flex-wrap gap-3">
            {["CalFresh/SNAP", "TANF", "Medi-Cal", "Medicaid", "Section 8/Housing Voucher", "SSI/SSDI", "WIC", "Unemployment"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#50c878]" />
                <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </FormSection>

      {/* Additional Information */}
      <FormSection title="Additional Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
              Do you or anyone in your household have a disability? *
            </label>
            <div className="flex gap-4">
              {["Yes", "No"].map((opt) => (
                <label key={`disability-${opt}`} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="disability" className="accent-[#50c878]" />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
              Are you a veteran? *
            </label>
            <div className="flex gap-4">
              {["Yes", "No"].map((opt) => (
                <label key={`veteran-${opt}`} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="veteran" className="accent-[#50c878]" />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <SelectField label="Primary Language" required options={["Select language...", "English", "Spanish", "Chinese", "Vietnamese", "Other"]} />
          <SelectField label="Ethnicity" options={["Select ethnicity...", "African American", "Asian", "Caucasian", "Hispanic/Latino", "Native American", "Pacific Islander", "Multi-racial", "Other", "Prefer not to say"]} />
        </div>
        <div>
          <SelectField label="Race (Optional)" options={["Select race...", "American Indian/Alaska Native", "Asian", "Black/African American", "Hispanic/Latino", "Native Hawaiian/Pacific Islander", "White", "Two or More Races", "Other", "Prefer not to say"]} />
        </div>
      </FormSection>

      {/* Programs of Interest */}
      <FormSection title="Programs of Interest">
        <div className="mb-4">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
            Select all programs you would like to apply for:
          </label>
          <div className="flex flex-col gap-2">
            {[
              "Financial and Professional Coaching",
              "Family Wellness Services",
              "Education Support and Childcare Assistance",
              "Internship and Workforce Assistance",
              "Volunteer Opportunities",
            ].map((program) => (
              <label key={program} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#50c878]" />
                <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">
                  {program}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-2">
            What are you specifically interested in? *
          </label>
          <p className="font-['Inter',sans-serif] text-[#717182] text-[13px] mb-2">
            Briefly describe the services you're in need of or a problem or situation we can help address
          </p>
          <textarea
            rows={3}
            className="w-full px-3 py-2 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] placeholder:text-[#9ca3af] outline-none focus:border-[#c6a646] transition-colors resize-none"
          />
        </div>
      </FormSection>

      {/* Additional Notes */}
      <FormSection title="Additional Notes or Comments">
        <textarea
          rows={3}
          placeholder="Any other information you'd like us to know..."
          className="w-full px-3 py-2 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] placeholder:text-[#9ca3af] outline-none focus:border-[#c6a646] transition-colors resize-none"
        />
      </FormSection>

      {/* Certification */}
      <div className="bg-[#fef3c6] border border-[#c6a646] rounded-[10px] p-6 mb-8">
        <div className="flex items-start gap-3 mb-3">
          <input
            type="checkbox"
            checked={certified1}
            onChange={(e) => setCertified1(e.target.checked)}
            className="accent-[#50c878] mt-1"
          />
          <p className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[20px]">
            By submitting this application, I certify that all information provided is true and accurate to the best of my knowledge. I understand that providing false information may result in disqualification.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={certified2}
            onChange={(e) => setCertified2(e.target.checked)}
            className="accent-[#50c878] mt-1"
          />
          <p className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[20px]">
            I authorize verification of the information provided and consent to the gathering of additional information as may be required.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={onBack}
          className="bg-white border border-[#d1d5dc] text-[#364153] font-['Inter',sans-serif] text-[14px] px-6 py-2.5 rounded-[8px] hover:bg-[#f9fafb] transition-colors cursor-pointer"
        >
          Save Draft
        </button>
        <button
          onClick={onNext}
          className="bg-[#c6a646] hover:bg-[#b5953d] transition-colors text-white font-['Inter',sans-serif] text-[14px] px-6 py-2.5 rounded-[8px] cursor-pointer"
        >
          Submit Application
        </button>
      </div>

      {/* Contact info */}
      <p className="font-['Inter',sans-serif] text-[#6a7282] text-[14px] leading-[20px] text-center">
        Questions? Call us at (555) 123-4567 or email info@villagerising.org
      </p>
    </div>
  );
}
