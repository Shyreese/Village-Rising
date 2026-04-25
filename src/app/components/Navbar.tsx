import imgLogo from "../../assets/f4211ae756795b44986cef03d26752bab0b65973.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "Board", href: "/board" },
  { label: "Get Involved", href: "/involved" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  activePage?: string;
}

export function Navbar({ activePage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (link: { label: string; href: string }) => {
    if (activePage) {
      return link.label.toLowerCase() === activePage;
    }
    if (link.href === "/") return location.pathname === "/";
    return location.pathname.startsWith(link.href.replace("/#", "/"));
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb]" role="banner">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded-md">
          <img src={imgLogo} alt="Village Rising Logo" className="w-[40px] h-[40px] object-cover" />
          <span className="font-['DM_Serif_Display',serif] font-bold text-[18px] sm:text-[20px] text-[#4a5565]">
            Village Rising
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = isActive(link);
            if (link.href.startsWith("/#")) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-['DM_Sans',sans-serif] text-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded px-2 py-1 ${
                    active ? "text-[#50c878]" : "text-[#4a5565] hover:text-[#50c878]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`font-['DM_Sans',sans-serif] text-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded px-2 py-1 ${
                  active ? "text-[#50c878]" : "text-[#4a5565] hover:text-[#50c878]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Apply Now - Solid Gold */}
          <Link
            to="/apply"
            className="bg-[#c6a646] text-white font-['DM_Sans',sans-serif] font-semibold text-[14px] px-5 py-2 rounded-[18px] hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-[#c6a646] focus:ring-offset-2"
          >
            Apply Now
          </Link>

          {/* Donate - White with Gold Border */}
          <Link
            to="/donate"
            className="border-2 border-[#c6a646] text-[#c6a646] font-['DM_Sans',sans-serif] font-semibold text-[14px] px-5 py-2 rounded-[18px] hover:bg-[#c6a646] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#c6a646] focus:ring-offset-2"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#4a5565] p-2 focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white border-t border-[#e5e7eb] px-4 sm:px-6 pb-4 max-h-[calc(100vh-4rem)] overflow-y-auto"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.href}
                className={`block py-3 font-['DM_Sans',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded px-2 ${
                  isActive(link) ? "text-[#50c878]" : "text-[#4a5565]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`block py-3 font-['DM_Sans',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#c6a646] rounded px-2 ${
                  isActive(link) ? "text-[#50c878]" : "text-[#4a5565]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link
              to="/apply"
              className="bg-[#c6a646] text-white font-semibold text-[16px] px-5 py-3 rounded-[18px] text-center"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </Link>
            <Link
              to="/donate"
              className="border-2 border-[#c6a646] text-[#c6a646] font-semibold text-[16px] px-5 py-3 rounded-[18px] text-center hover:bg-[#c6a646] hover:text-white transition"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}