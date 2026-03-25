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
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-[36px] px-3 bg-[#f3f3f5] border rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] placeholder:text-[#9ca3af] outline-none focus:border-[#c6a646] transition-colors ${
          error ? "border-[#dc2626]" : "border-transparent"
        }`}
      />
      {error && (
        <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">
          This field is required.
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  options,
  required = false,
  className = "",
  value,
  onChange,
  error,
}: {
  label: string;
  options: string[];
  required?: boolean;
  className?: string;
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
}) {
  return (
    <div className={`${className}`}>
      {label && (
        <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-2">
          {label}
          {required && " *"}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-[36px] px-3 bg-[#f3f3f5] border rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] outline-none focus:border-[#c6a646] transition-colors appearance-none cursor-pointer ${
          error ? "border-[#dc2626]" : "border-transparent"
        }`}
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      {error && (
        <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">
          Please make a selection.
        </p>
      )}
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

// Helper: check if a select value is the default placeholder
function isDefaultSelect(val: string) {
  return (
    val === "" ||
    val.toLowerCase().startsWith("select") ||
    val === "Select..."
  );
}

export function CompleteApplication({ onBack, onNext }: CompleteApplicationProps) {
  // Personal Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [relationship, setRelationship] = useState("Select...");

  // Current Address
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("Select state...");
  const [addressType, setAddressType] = useState("Select...");

  // Living Situation
  const [livingSituation, setLivingSituation] = useState("Select...");
  const [homeOwnership, setHomeOwnership] = useState("");

  // Household Information
  const [householdSize, setHouseholdSize] = useState("");
  const [numAdults, setNumAdults] = useState("");
  const [numChildren, setNumChildren] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Select...");

  // Employment Information
  const [employmentStatus, setEmploymentStatus] = useState("Select employment status...");

  // Financial Information
  const [annualIncome, setAnnualIncome] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [healthInsurance, setHealthInsurance] = useState("");

  // Additional Information
  const [disability, setDisability] = useState("");
  const [veteran, setVeteran] = useState("");
  const [primaryLanguage, setPrimaryLanguage] = useState("Select language...");

  // Programs of Interest
  const [servicesInterest, setServicesInterest] = useState("");

  // Certification
  const [certified1, setCertified1] = useState(false);
  const [certified2, setCertified2] = useState(false);

  const [attempted, setAttempted] = useState(false);

  const errors = {
    firstName: !firstName.trim(),
    lastName: !lastName.trim(),
    dob: !dob.trim(),
    ssn: !ssn.trim(),
    email: !email.trim(),
    phone: !phone.trim(),
    emergencyName: !emergencyName.trim(),
    emergencyPhone: !emergencyPhone.trim(),
    relationship: isDefaultSelect(relationship),
    streetAddress: !streetAddress.trim(),
    city: !city.trim(),
    zipCode: !zipCode.trim(),
    state: isDefaultSelect(state),
    addressType: isDefaultSelect(addressType),
    livingSituation: isDefaultSelect(livingSituation),
    homeOwnership: !homeOwnership,
    householdSize: !householdSize.trim(),
    numAdults: !numAdults.trim(),
    numChildren: !numChildren.trim(),
    maritalStatus: isDefaultSelect(maritalStatus),
    employmentStatus: isDefaultSelect(employmentStatus),
    annualIncome: !annualIncome.trim(),
    monthlyIncome: !monthlyIncome.trim(),
    healthInsurance: !healthInsurance,
    disability: !disability,
    veteran: !veteran,
    primaryLanguage: isDefaultSelect(primaryLanguage),
    servicesInterest: !servicesInterest.trim(),
    certified1: !certified1,
    certified2: !certified2,
  };

  const isValid = !Object.values(errors).some(Boolean);

  const handleSubmit = () => {
    setAttempted(true);
    if (isValid) onNext();
  };

  const e = (key: keyof typeof errors) => attempted && errors[key];

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

      {/* Validation summary banner */}
      {attempted && !isValid && (
        <div className="bg-[#fef2f2] border border-[#dc2626] rounded-[10px] px-6 py-4 mb-6">
          <p className="font-['Inter',sans-serif] text-[#dc2626] text-[14px] leading-[20px]">
            Please fill in all required fields before submitting.
          </p>
        </div>
      )}

      {/* Personal Information */}
      <FormSection title="Personal Information" description="Tell us about yourself">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <FormField label="First Name" required value={firstName} onChange={setFirstName} error={!!e("firstName")} />
          <FormField label="Middle Name" value="" onChange={() => {}} />
          <FormField label="Last Name" required value={lastName} onChange={setLastName} error={!!e("lastName")} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormField label="Date of Birth" required type="date" value={dob} onChange={setDob} error={!!e("dob")} />
          <FormField label="Social Security Number" required placeholder="XXX-XX-XXXX" value={ssn} onChange={setSsn} error={!!e("ssn")} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormField label="Email Address" required type="email" value={email} onChange={setEmail} error={!!e("email")} />
          <FormField label="Phone Number" required type="tel" value={phone} onChange={setPhone} error={!!e("phone")} />
        </div>
        <div className="mb-4">
          <FormField label="Verify your phone" placeholder="Enter your PIN" value="" onChange={() => {}} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormField label="Emergency Contact Name" required value={emergencyName} onChange={setEmergencyName} error={!!e("emergencyName")} />
          <FormField label="Emergency Contact Phone" required type="tel" value={emergencyPhone} onChange={setEmergencyPhone} error={!!e("emergencyPhone")} />
          <SelectField
            label="Relationship"
            required
            options={["Select...", "Spouse", "Parent", "Sibling", "Friend", "Other"]}
            value={relationship}
            onChange={setRelationship}
            error={!!e("relationship")}
          />
        </div>
      </FormSection>

      {/* Current Address */}
      <FormSection title="Current Address" description="Where do you currently live?">
        <div className="mb-4">
          <FormField label="Street Address" required value={streetAddress} onChange={setStreetAddress} error={!!e("streetAddress")} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <FormField label="Apartment/Suite Number" value="" onChange={() => {}} />
          <FormField label="City" required value={city} onChange={setCity} error={!!e("city")} />
          <FormField label="Zip Code" required value={zipCode} onChange={setZipCode} error={!!e("zipCode")} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SelectField
            label="State"
            required
            options={["Select state...", "CA", "AZ", "NV", "OR", "WA", "Other"]}
            value={state}
            onChange={setState}
            error={!!e("state")}
          />
          <FormField label="Zip Code" required value={zipCode} onChange={setZipCode} error={!!e("zipCode")} />
          <SelectField
            label="Type of Address"
            required
            options={["Select...", "Permanent", "Temporary", "Shelter", "Other"]}
            value={addressType}
            onChange={setAddressType}
            error={!!e("addressType")}
          />
        </div>
      </FormSection>

      {/* Living Situation */}
      <FormSection title="Living Situation" description="Help us understand your current living arrangements">
        <div className="mb-4">
          <SelectField
            label="Current Living Situation"
            required
            options={["Select...", "Own Home", "Renting", "Living with Family/Friends", "Currently Homeless", "Emergency Shelter", "Temporary Housing"]}
            value={livingSituation}
            onChange={setLivingSituation}
            error={!!e("livingSituation")}
          />
        </div>
        <div className="mb-4">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
            Do you own or rent your home? *
          </label>
          <div className="flex flex-wrap gap-4">
            {["Own", "Rent", "Living with Family/Friends", "Currently Homeless", "Emergency Shelter"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="homeOwnership"
                  value={opt}
                  checked={homeOwnership === opt}
                  onChange={() => setHomeOwnership(opt)}
                  className="accent-[#50c878]"
                />
                <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
              </label>
            ))}
          </div>
          {e("homeOwnership") && (
            <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">Please select an option.</p>
          )}
        </div>
      </FormSection>

      {/* Household Information */}
      <FormSection title="Household Information">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <FormField label="Total Household Size" required value={householdSize} onChange={setHouseholdSize} error={!!e("householdSize")} />
          <FormField label="Number of Adults (18+)" required value={numAdults} onChange={setNumAdults} error={!!e("numAdults")} />
          <FormField label="Number of Children" required value={numChildren} onChange={setNumChildren} error={!!e("numChildren")} />
        </div>
        <div className="mb-4">
          <SelectField
            label="Marital/Relationship Status"
            required
            options={["Select...", "Single", "Married", "Domestic Partnership", "Separated", "Divorced", "Widowed"]}
            value={maritalStatus}
            onChange={setMaritalStatus}
            error={!!e("maritalStatus")}
          />
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
          <SelectField
            label=""
            options={["Select employment status...", "Employed Full-Time", "Employed Part-Time", "Self-Employed", "Unemployed", "Student", "Retired", "Unable to Work"]}
            value={employmentStatus}
            onChange={setEmploymentStatus}
            error={!!e("employmentStatus")}
          />
        </div>
      </FormSection>

      {/* Financial Information */}
      <FormSection title="Financial Information">
        <div className="mb-4">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
            Tell us about your financial situation
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Annual Household Income (before taxes)" required placeholder="$" value={annualIncome} onChange={setAnnualIncome} error={!!e("annualIncome")} />
            <FormField label="Monthly Household Income (after taxes)" required placeholder="$" value={monthlyIncome} onChange={setMonthlyIncome} error={!!e("monthlyIncome")} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormField label="Other Monthly Income" placeholder="$" value="" onChange={() => {}} />
          <FormField label="Sources of Other Income" value="" onChange={() => {}} />
        </div>
        <div className="mb-4">
          <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
            Do you have health insurance? *
          </label>
          <div className="flex gap-4">
            {["Yes", "No"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="insurance"
                  value={opt}
                  checked={healthInsurance === opt}
                  onChange={() => setHealthInsurance(opt)}
                  className="accent-[#50c878]"
                />
                <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
              </label>
            ))}
          </div>
          {e("healthInsurance") && (
            <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">Please select an option.</p>
          )}
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
                  <input
                    type="radio"
                    name="disability"
                    value={opt}
                    checked={disability === opt}
                    onChange={() => setDisability(opt)}
                    className="accent-[#50c878]"
                  />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
                </label>
              ))}
            </div>
            {e("disability") && (
              <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">Please select an option.</p>
            )}
          </div>
          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[14px] mb-3">
              Are you a veteran? *
            </label>
            <div className="flex gap-4">
              {["Yes", "No"].map((opt) => (
                <label key={`veteran-${opt}`} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="veteran"
                    value={opt}
                    checked={veteran === opt}
                    onChange={() => setVeteran(opt)}
                    className="accent-[#50c878]"
                  />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
                </label>
              ))}
            </div>
            {e("veteran") && (
              <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">Please select an option.</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <SelectField
            label="Primary Language"
            required
            options={["Select language...", "English", "Spanish", "Chinese", "Vietnamese", "Other"]}
            value={primaryLanguage}
            onChange={setPrimaryLanguage}
            error={!!e("primaryLanguage")}
          />
          <SelectField
            label="Ethnicity"
            options={["Select ethnicity...", "African American", "Asian", "Caucasian", "Hispanic/Latino", "Native American", "Pacific Islander", "Multi-racial", "Other", "Prefer not to say"]}
            value=""
            onChange={() => {}}
          />
        </div>
        <div>
          <SelectField
            label="Race (Optional)"
            options={["Select race...", "American Indian/Alaska Native", "Asian", "Black/African American", "Hispanic/Latino", "Native Hawaiian/Pacific Islander", "White", "Two or More Races", "Other", "Prefer not to say"]}
            value=""
            onChange={() => {}}
          />
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
            value={servicesInterest}
            onChange={(e) => setServicesInterest(e.target.value)}
            className={`w-full px-3 py-2 bg-[#f3f3f5] border rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] placeholder:text-[#9ca3af] outline-none focus:border-[#c6a646] transition-colors resize-none ${
              e("servicesInterest") ? "border-[#dc2626]" : "border-transparent"
            }`}
          />
          {e("servicesInterest") && (
            <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">Please describe what you're interested in.</p>
          )}
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
      <div className={`bg-[#fef3c6] border rounded-[10px] p-6 mb-8 ${attempted && (errors.certified1 || errors.certified2) ? "border-[#dc2626]" : "border-[#c6a646]"}`}>
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
        {attempted && (errors.certified1 || errors.certified2) && (
          <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-3">
            You must agree to both certification statements before submitting.
          </p>
        )}
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
          onClick={handleSubmit}
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
