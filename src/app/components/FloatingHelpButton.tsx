import { HelpCircle, Mail, Phone, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function FloatingHelpButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close popup
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Focus trap for the popup
  useEffect(() => {
    if (isOpen && popupRef.current) {
      const focusableElements = popupRef.current.querySelectorAll(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTab);
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-4">
      {/* Help Popup */}
      {isOpen && (
        <div 
          ref={popupRef}
          className="bg-white rounded-[16px] shadow-[0px_10px_40px_rgba(0,0,0,0.15)] p-6 w-[calc(100vw-2rem)] sm:w-[320px] animate-in slide-in-from-bottom-5 fade-in duration-200 ring-1 ring-[#c6a646]/20"
          role="dialog"
          aria-labelledby="help-popup-title"
          aria-modal="true"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 
              id="help-popup-title"
              className="font-['DM_Serif_Display',serif] text-[#0a0a0a] text-[20px] leading-[1.2]"
            >
              How can we help?
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#6a7282] hover:text-[#0a0a0a] transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded"
              aria-label="Close help menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="font-['DM_Sans',sans-serif] text-[#4a5565] text-[15px] mb-5">
            Our team is available to assist you with any questions about donations or our programs.
          </p>

          <div className="space-y-4">
            <a 
              href="mailto:support@villagerising.org" 
              className="flex items-center gap-3 p-3 rounded-[8px] hover:bg-[#f4efe7] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#c6a646]"
              aria-label="Email us at support@villagerising.org"
            >
              <div className="bg-[#cbfbf1] text-[#009689] p-2 rounded-full" aria-hidden="true">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="font-['DM_Sans',sans-serif] font-medium text-[#0a0a0a] text-[14px]">Email Us</div>
                <div className="font-['DM_Sans',sans-serif] text-[#6a7282] text-[13px] group-hover:text-[#c6a646] transition-colors">support@villagerising.org</div>
              </div>
            </a>
            
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-3 p-3 rounded-[8px] hover:bg-[#f4efe7] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#c6a646]"
              aria-label="Call us at (555) 123-4567"
            >
              <div className="bg-[#dcfce7] text-[#50C878] p-2 rounded-full" aria-hidden="true">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="font-['DM_Sans',sans-serif] font-medium text-[#0a0a0a] text-[14px]">Call Us</div>
                <div className="font-['DM_Sans',sans-serif] text-[#6a7282] text-[13px] group-hover:text-[#c6a646] transition-colors">(555) 123-4567</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#667238] text-white flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full shadow-[0px_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0px_15px_30px_rgba(0,0,0,0.25)] hover:bg-[#5a6431] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c6a646] focus:ring-offset-2"
        aria-label={isOpen ? "Close help menu" : "Open help menu"}
        aria-expanded={isOpen}
      >
        <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        <span className="font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] font-medium">
          {isOpen ? "Close" : "Need Help?"}
        </span>
      </button>
    </div>
  );
}
