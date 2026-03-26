import imgLogo from "../../assets/f4211ae756795b44986cef03d26752bab0b65973.png";
import { Link } from "react-router";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "Board", href: "/board" },
  { label: "Get Involved", href: "/#get-involved" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#101828] pt-12 pb-8 px-4 sm:px-6" role="contentinfo">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={imgLogo} alt="" className="w-10 h-10 object-cover" aria-hidden="true" />
              <span className="font-['DM_Serif_Display',serif] font-bold text-white text-[18px]">
                Village Rising
              </span>
            </div>
            <p className="font-['DM_Sans',sans-serif] text-[#d1d5dc] text-[13px] sm:text-[14px] leading-[1.5] max-w-[370px]">
              Supporting families in need through compassion, resources, and
              community partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['DM_Serif_Display',serif] font-semibold text-white text-[18px] mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/#") ? (
                      <a
                        href={link.href}
                        className="font-['DM_Sans',sans-serif] text-[#d1d5dc] text-[15px] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded inline-block"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="font-['DM_Sans',sans-serif] text-[#d1d5dc] text-[15px] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['DM_Serif_Display',serif] font-semibold text-white text-[18px] mb-4">
              Get in Touch
            </h3>
            <address className="not-italic">
              <p className="font-['DM_Sans',sans-serif] text-[#d1d5dc] text-[15px] mb-2">
                <a 
                  href="mailto:info@villagerising.org"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded"
                >
                  Email: info@villagerising.org
                </a>
              </p>
              <p className="font-['DM_Sans',sans-serif] text-[#d1d5dc] text-[15px]">
                <a 
                  href="tel:+15551234567"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded"
                >
                  Phone: (916) 761-0211
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1e2939] pt-6">
          <p className="font-['DM_Sans',sans-serif] text-[#d1d5dc] text-[13px] sm:text-[14px] text-center">
            © 2026 Village Rising. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}
