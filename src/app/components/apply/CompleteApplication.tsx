import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import emailjs from "@emailjs/browser";

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
      <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] leading-[20px] font-semibold mb-2">
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
        <h3 className="font-['Inter',sans-serif] text-[#0a0a0a] text-[18px] font-bold leading-[22px] mb-1.5">
          {title}
        </h3>
        {description && (
          <p className="font-['Inter',sans-serif] text-[#717182] text-[14px] leading-[22px]">
            {description}
          </p>
        )}
      </div>
      <div className="px-6 pb-6 pt-2">{children}</div>
    </div>
  );
}

export function CompleteApplication({ onBack, onNext }: CompleteApplicationProps) {
  // 1. Contact Information State
  const [fullName, setFullName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [safeContactMethods, setSafeContactMethods] = useState<string[]>([]);
  const [bestTimeToContact, setBestTimeToContact] = useState("");

  // 2. Current Situation State
  const [currentCity, setCurrentCity] = useState("");
  const [whereStaying, setWhereStaying] = useState("");
  const [safePlace24Hours, setSafePlace24Hours] = useState("");
  const [whenNeedHelp, setWhenNeedHelp] = useState("");
  const [householdDetails, setHouseholdDetails] = useState("");

  // 3. Benefits and Support State
  const [calworksStatus, setCalworksStatus] = useState("");
  const [calworksHomelessAssistance, setCalworksHomelessAssistance] = useState("");

  // 4. Help Request Details State
  const [helpLookingFor, setHelpLookingFor] = useState<string[]>([]);
  const [contacted211, setContacted211] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  // Submission / Loading State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attempted, setAttempted] = useState(false);

  // Toggle helpers for multi-select checkboxes
  const toggleSafeContact = (method: string) => {
    setSafeContactMethods((prev) =>
      prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
    );
  };

  const toggleHelpLookingFor = (item: string) => {
    setHelpLookingFor((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Required Field Validation
  const errors = {
    fullName: !fullName.trim(),
    contactInfo: !contactInfo.trim(),
    safeContactMethods: safeContactMethods.length === 0,
    currentCity: !currentCity.trim(),
    whereStaying: !whereStaying,
    safePlace24Hours: !safePlace24Hours,
    whenNeedHelp: !whenNeedHelp,
    householdDetails: !householdDetails.trim(),
    helpLookingFor: helpLookingFor.length === 0,
  };

  const isValid = !Object.values(errors).some(Boolean);
  const e = (key: keyof typeof errors) => attempted && errors[key];

  // Submit Handler sending mapped data to EmailJS
  const handleSubmit = async () => {
    setAttempted(true);

    if (!isValid) return;

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
      import.meta.env;

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS configuration is missing. Check the VITE_EMAILJS_* environment variables.");
      alert("Application email is not configured. Please contact us directly.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      full_name: fullName,
      contact_info: contactInfo,
      safe_contact_methods: safeContactMethods.join(", "),
      best_time_to_contact: bestTimeToContact || "Not specified",
      current_city: currentCity,
      where_staying: whereStaying,
      safe_place_24h: safePlace24Hours,
      when_need_help: whenNeedHelp,
      household_details: householdDetails,
      calworks_status: calworksStatus || "Not provided (Optional)",
      calworks_homeless_assistance: calworksHomelessAssistance || "N/A",
      help_looking_for: helpLookingFor.join(", "),
      contacted_211: contacted211 || "Not specified (Optional)",
      additional_details: additionalDetails || "None provided (Optional)",
    };

    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      onNext();
    } catch (error) {
      console.error("Failed to send application email:", error);
      setIsSubmitting(false);
      alert("Failed to submit application. Please check your network connection and try again.");
    }
  };

  return (
    <div className="max-w-[896px] mx-auto px-6 py-10">
      {/* Back button & Header Info */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#0a0a0a] font-['Inter',sans-serif] text-[14px] mb-6 cursor-pointer hover:text-[#4a5565] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Eligibility Check
        </button>

        <h2 className="font-['Playfair_Display',serif] text-[#101828] text-[36px] leading-[48px] mb-4">
          Housing Assistance Inquiry
        </h2>

        {/* Introductory Notice */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-5 text-[#334155] font-['Inter',sans-serif] text-[14px] leading-[22px] space-y-3">
          <p>
            <strong>Village Rising</strong> helps households facing a housing crisis explore temporary shelter options and connect with housing resources. Assistance depends on available partners and funding. Submitting this request does not guarantee a room, payment, or placement.
          </p>
          <p className="p-3 bg-[#eff6ff] border-l-4 border-[#2563eb] text-[#1e40af] rounded-r-[6px]">
            If you are currently without safe shelter, you can call <strong>2-1-1 and press 8</strong> to request a housing assessment and learn about available resources. You may also submit this form so Village Rising can follow up.
          </p>
        </div>
      </div>

      {/* Validation Summary Banner */}
      {attempted && !isValid && (
        <div className="bg-[#fef2f2] border border-[#dc2626] rounded-[10px] px-6 py-4 mb-6">
          <p className="font-['Inter',sans-serif] text-[#dc2626] text-[14px] leading-[20px]">
            Please fill in all required fields before submitting.
          </p>
        </div>
      )}

      {/* 1. Your Contact Information */}
      <FormSection title="Your contact information">
        <div className="space-y-4">
          <FormField
            label="What is your name?"
            required
            value={fullName}
            onChange={setFullName}
            error={!!e("fullName")}
          />

          <FormField
            label="What phone number or email can we use to reach you?"
            required
            placeholder="e.g. (916) 555-0199 or name@example.com"
            value={contactInfo}
            onChange={setContactInfo}
            error={!!e("contactInfo")}
          />

          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-2">
              Is it safe for us to contact you? Select all that apply: *
            </label>
            <div className="space-y-2">
              {[
                "Call me",
                "Text me",
                "Email me",
                "You may leave a voicemail",
                "Please do not leave a voicemail",
              ].map((method) => (
                <label key={method} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={safeContactMethods.includes(method)}
                    onChange={() => toggleSafeContact(method)}
                    className="accent-[#50c878]"
                  />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{method}</span>
                </label>
              ))}
            </div>
            {e("safeContactMethods") && (
              <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">
                Please select at least one contact preference.
              </p>
            )}
          </div>

          <FormField
            label="When is the best time to contact you?"
            placeholder="e.g. Mornings, weekdays after 2 PM"
            value={bestTimeToContact}
            onChange={setBestTimeToContact}
          />
        </div>
      </FormSection>

      {/* 2. Your Current Situation */}
      <FormSection title="Your current situation">
        <div className="space-y-5">
          <FormField
            label="What city are you currently in?"
            required
            value={currentCity}
            onChange={setCurrentCity}
            error={!!e("currentCity")}
          />

          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-2">
              Where are you staying now? *
            </label>
            <div className="space-y-2">
              {[
                "In a car",
                "Outside",
                "In a shelter or motel",
                "Temporarily with someone",
                "In housing I may lose soon",
                "Other",
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="whereStaying"
                    value={opt}
                    checked={whereStaying === opt}
                    onChange={() => setWhereStaying(opt)}
                    className="accent-[#50c878]"
                  />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
                </label>
              ))}
            </div>
            {e("whereStaying") && (
              <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">Please select where you are currently staying.</p>
            )}
          </div>

          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-2">
              Do you have a safe place to sleep over the next 24 hours? *
            </label>
            <div className="flex gap-6">
              {["Yes", "No", "Unsure"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="safePlace24Hours"
                    value={opt}
                    checked={safePlace24Hours === opt}
                    onChange={() => setSafePlace24Hours(opt)}
                    className="accent-[#50c878]"
                  />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
                </label>
              ))}
            </div>
            {e("safePlace24Hours") && (
              <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">Please select an option.</p>
            )}
          </div>

          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-2">
              When do you need help? *
            </label>
            <div className="flex flex-wrap gap-6">
              {["Immediately", "Within 7 days", "Later"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="whenNeedHelp"
                    value={opt}
                    checked={whenNeedHelp === opt}
                    onChange={() => setWhenNeedHelp(opt)}
                    className="accent-[#50c878]"
                  />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
                </label>
              ))}
            </div>
            {e("whenNeedHelp") && (
              <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">Please select when you need help.</p>
            )}
          </div>

          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-1">
              How many adults and children need housing with you? Do you have any pets? *
            </label>
            <p className="font-['Inter',sans-serif] text-[#717182] text-[13px] mb-2">
              Example: 2 adults, 1 child, 1 dog
            </p>
            <textarea
              rows={2}
              value={householdDetails}
              onChange={(e) => setHouseholdDetails(e.target.value)}
              className={`w-full px-3 py-2 bg-[#f3f3f5] border rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] placeholder:text-[#9ca3af] outline-none focus:border-[#c6a646] transition-colors resize-none ${
                e("householdDetails") ? "border-[#dc2626]" : "border-transparent"
              }`}
            />
            {e("householdDetails") && (
              <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">Please provide household details.</p>
            )}
          </div>
        </div>
      </FormSection>

      {/* 3. Benefits and Support */}
      <FormSection title="Benefits and support">
        <div className="space-y-4">
          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-2">
              Does anyone in your household currently receive CalWORKs cash aid, or have you applied for it? (Optional)
            </label>
            <div className="space-y-2">
              {[
                "Yes, receiving CalWORKs",
                "Applied and waiting for a decision",
                "No",
                "I’m not sure",
                "Prefer not to answer",
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="calworksStatus"
                    value={opt}
                    checked={calworksStatus === opt}
                    onChange={() => setCalworksStatus(opt)}
                    className="accent-[#50c878]"
                  />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Conditional Question: Shown only if receiving or applied for CalWORKs */}
          {(calworksStatus === "Yes, receiving CalWORKs" || calworksStatus === "Applied and waiting for a decision") && (
            <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
              <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-2">
                If receiving CalWORKs or awaiting a decision: Have you requested CalWORKs Homeless Assistance?
              </label>
              <div className="flex gap-6">
                {["Yes", "No", "I’m not sure"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="calworksHomelessAssistance"
                      value={opt}
                      checked={calworksHomelessAssistance === opt}
                      onChange={() => setCalworksHomelessAssistance(opt)}
                      className="accent-[#50c878]"
                    />
                    <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </FormSection>

      {/* 4. Requested Help & Additional Details */}
      <FormSection title="What help are you looking for?">
        <div className="space-y-5">
          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-2">
              Select all that apply: *
            </label>
            <div className="space-y-2">
              {[
                "Emergency shelter resources",
                "A short motel stay, if available",
                "Help keeping my current housing",
                "Referral to longer-term housing resources",
                "Deposit or application resources",
                "Transportation resources",
                "Benefits or employment resources",
                "Other",
              ].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={helpLookingFor.includes(item)}
                    onChange={() => toggleHelpLookingFor(item)}
                    className="accent-[#50c878]"
                  />
                  <span className="font-['Inter',sans-serif] text-[#0a0a0a] text-[14px]">{item}</span>
                </label>
              ))}
            </div>
            {e("helpLookingFor") && (
              <p className="font-['Inter',sans-serif] text-[#dc2626] text-[12px] mt-1">
                Please select at least one type of help requested.
              </p>
            )}
          </div>

          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-1">
              Have you contacted 2-1-1 about housing? If yes, what next step were you given? (Optional)
            </label>
            <textarea
              rows={2}
              value={contacted211}
              onChange={(e) => setContacted211(e.target.value)}
              className="w-full px-3 py-2 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] placeholder:text-[#9ca3af] outline-none focus:border-[#c6a646] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block font-['Inter',sans-serif] text-[#0a0a0a] text-[14px] font-semibold mb-1">
              Is there anything we should know to help identify a suitable option, such as transportation, accessibility, pets, or needing to remain near work or school? (Optional)
            </label>
            <textarea
              rows={3}
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              className="w-full px-3 py-2 bg-[#f3f3f5] border border-transparent rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#0a0a0a] placeholder:text-[#9ca3af] outline-none focus:border-[#c6a646] transition-colors resize-none"
            />
          </div>
        </div>
      </FormSection>

      {/* Consent & Submission Policy Statement */}
      <div className="bg-[#fef3c6] border border-[#c6a646] rounded-[10px] p-5 mb-8 text-[#0a0a0a] font-['Inter',sans-serif] text-[14px] leading-[20px]">
        By submitting this form, you agree that Village Rising may contact you about your request. We will ask your permission before sharing your information with an outside referral partner.
      </div>

      {/* Form Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={onBack}
          className="bg-white border border-[#d1d5dc] text-[#364153] font-['Inter',sans-serif] text-[14px] px-6 py-2.5 rounded-[8px] hover:bg-[#f9fafb] transition-colors cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-[#c6a646] hover:bg-[#b5953d] transition-colors text-white font-['Inter',sans-serif] text-[14px] px-6 py-2.5 rounded-[8px] cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </button>
      </div>

      {/* Contact info */}
      <p className="font-['Inter',sans-serif] text-[#6a7282] text-[14px] leading-[20px] text-center">
        Questions? Call us at (916)764-0211 or email info@villagevalues.net
      </p>
    </div>
  );
}