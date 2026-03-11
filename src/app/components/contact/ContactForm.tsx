import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h2 className="font-['DM_Serif_Display',serif] text-[#0a0a0a] text-[24px] leading-[1.2] mb-6">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="block font-['DM_Sans',sans-serif] text-[#0a0a0a] text-[15px] leading-[20px]"
          >
            Name <span aria-label="required">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full h-[42px] px-4 py-2 border border-[#d1d5dc] rounded-[8px] font-['DM_Sans',sans-serif] text-[16px] text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] outline-none focus:border-[#c6a646] focus:ring-2 focus:ring-[#c6a646]/20 transition-colors"
            aria-required="true"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="block font-['DM_Sans',sans-serif] text-[#0a0a0a] text-[15px] leading-[20px]"
          >
            Email <span aria-label="required">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full h-[42px] px-4 py-2 border border-[#d1d5dc] rounded-[8px] font-['DM_Sans',sans-serif] text-[16px] text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] outline-none focus:border-[#c6a646] focus:ring-2 focus:ring-[#c6a646]/20 transition-colors"
            aria-required="true"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="contact-message"
            className="block font-['DM_Sans',sans-serif] text-[#0a0a0a] text-[15px] leading-[20px]"
          >
            Message <span aria-label="required">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            placeholder="How can we help you?"
            rows={6}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            className="w-full px-4 py-2 border border-[#d1d5dc] rounded-[8px] font-['DM_Sans',sans-serif] text-[16px] text-[#0a0a0a] placeholder:text-[rgba(10,10,10,0.5)] outline-none focus:border-[#c6a646] focus:ring-2 focus:ring-[#c6a646]/20 transition-colors resize-none"
            aria-required="true"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-[48px] bg-[#c6a646] hover:bg-[#b5953d] transition-colors text-white font-['DM_Sans',sans-serif] text-[16px] rounded-[53px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c6a646] focus:ring-offset-2"
          aria-live="polite"
        >
          {submitted ? "Message Sent!" : "Send Message"}
        </button>

        {submitted && (
          <div
            role="status"
            aria-live="polite"
            className="sr-only"
          >
            Your message has been sent successfully.
          </div>
        )}
      </form>
    </div>
  );
}
