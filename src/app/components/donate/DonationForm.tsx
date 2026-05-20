import { useEffect, useState } from "react";
import { Lock, FileCheck, Shield, Heart } from "lucide-react";
import { OtherWaysToSupport } from "./OtherWaysToSupport";
import { ImageWithFallback } from "../figma/ImageWithFallback";

/* ---------- Givebutter custom element type ---------- */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { id: string },
        HTMLElement
      >;
    }
  }
}

/* ---------- Photo collage data ---------- */
const photosTopLeft = [
  {
    src: "https://images.unsplash.com/photo-1768597138878-ec64fc2c48fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaWNuaWMlMjBvdXRkb29yJTIwZ3Jhc3N8ZW58MXx8fHwxNzczMDk3MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 285, height: 238, top: 48, left: 18, transform: "rotate(-4deg)", position: "absolute" },
  },
  {
    src: "https://res.cloudinary.com/dm4ezpefh/image/upload/v1769142356/samples/people/smiling-man.jpg",
    style: { width: 220, height: 183, top: 112, left: 240, transform: "rotate(3deg)", position: "absolute" },
  },
  {
    src: "https://images.unsplash.com/photo-1758874961197-893028499f9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMHJlYWRpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzMwOTY3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 196, height: 171, top: 24, left: 310, transform: "rotate(-2deg)", position: "absolute" },
  },
];

const photosTopRight = [
  {
    src: "https://images.unsplash.com/photo-1690843857685-15c9a042d37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBvdXRkb29yJTIwbmF0dXJlfGVufDF8fHx8MTc3MzA5Njc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 256, height: 209, top: 56, right: 18, transform: "rotate(3deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1769650796719-44c11172df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZHlpbmclMjBsaWJyYXJ5fGVufDF8fHx8MTc3MzA5Njc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 206, height: 170, top: 190, right: 200, transform: "rotate(-3deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1723771753948-e8d90d8e5950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBmYXRoZXIlMjBkYXVnaHRlciUyMHBhcmt8ZW58MXx8fHwxNzczMDk2Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 197, height: 203, top: 14, right: 260, transform: "rotate(-2deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1612021299961-d20428009494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    style: { width: 197, height: 161, top: 120, right: 420, transform: "rotate(2deg)" },
  },
];

const photosMidLeft = [
  {
    src: "https://images.unsplash.com/photo-1758874959821-5484186a8d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZG1vdGhlciUyMGdyYW5kY2hpbGQlMjBjb29raW5nJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NzMwOTcyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 245, height: 206, top: 370, left: 12, transform: "rotate(-2deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1626794174544-c3200f10e32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY291cGxlJTIwd2Fsa2luZyUyMHN1bnNldHxlbnwxfHx8fDE3NzMwOTY4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 222, height: 188, top: 640, left: 40, transform: "rotate(-3deg)" },
  },
];

const photosMidRight = [
  {
    src: "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwdm9sdW50ZWVyaW5nJTIwZm9vZCUyMGJhbmt8ZW58MXx8fHwxNzczMDk2ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 230, height: 193, top: 400, right: 30, transform: "rotate(2deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBoYW5kcyUyMHRvZ2V0aGVyJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzczMDk3MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 200, height: 168, top: 530, right: 190, transform: "rotate(-2deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1760976353573-c1cbf1b74bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBodWdnaW5nJTIwcGFyayUyMGJlbmNofGVufDF8fHx8MTc3MzA5NzIyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 218, height: 195, top: 650, right: 20, transform: "rotate(-3deg)" },
  },
];

const photosBottomLeft = [
  {
    src: "https://images.unsplash.com/photo-1761839257513-a921710a4291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdhcmRlbmluZyUyMGZsb3dlcnMlMjBvdXRkb29yfGVufDF8fHx8MTc3MzA5NzIyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 248, height: 223, top: 880, left: 52, transform: "rotate(2deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1767408089918-0b26867020d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwdG9kZGxlciUyMHNtaWxpbmclMjBncmFzc3xlbnwxfHx8fDE3NzMwOTcyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 198, height: 174, top: 1020, left: 200, transform: "rotate(-3deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1765218184664-4d9bc6032b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMG5laWdoYm9yaG9vZCUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzMwOTcyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 260, height: 193, top: 1160, left: 15, transform: "rotate(3deg)" },
  },
];

const photosBottomRight = [
  {
    src: "https://images.unsplash.com/photo-1770215963118-f6df758b2968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjByZWFkaW5nJTIwbmV3c3BhcGVyJTIwbW9ybmluZyUyMGNvZmZlZXxlbnwxfHx8fDE3NzMwOTcyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 254, height: 212, top: 870, right: 15, transform: "rotate(3deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1758525861793-f278aacf6bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMHN0dWR5aW5nJTIwaG9tZXdvcmslMjBkZXNrfGVufDF8fHx8MTc3MzA2NjEwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 215, height: 176, top: 1010, right: 180, transform: "rotate(-2deg)" },
  },
  {
    src: "https://images.unsplash.com/photo-1768214492195-c1c7f4a8f283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNjaG9vbCUyMGJhY2twYWNrJTIwd2Fsa2luZ3xlbnwxfHx8fDE3NzMwOTcyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    style: { width: 224, height: 199, top: 1150, right: 30, transform: "rotate(-3deg)" },
  },
];

/* ---------- Decorative shapes ---------- */
const decorativeShapesLeft = [
  { w: 160, h: 128, top: 150, left: 275, rotate: "rotate(6deg)", color: "rgba(107,124,89,0.2)" },
  { w: 128, h: 144, top: 455, left: 370, rotate: "rotate(-5deg)", color: "rgba(107,124,89,0.15)" },
  { w: 112, h: 96,  top: 770, left: 330, rotate: "rotate(12deg)", color: "rgba(198,166,70,0.1)" },
  { w: 144, h: 128, top: 1050, left: 390, rotate: "rotate(-8deg)", color: "rgba(107,124,89,0.15)" },
];

const decorativeShapesRight = [
  { w: 176, h: 144, top: 200,  right: 380, rotate: "rotate(-6deg)", color: "rgba(107,124,89,0.2)" },
  { w: 144, h: 136, top: 500,  right: 360, rotate: "rotate(7deg)",  color: "rgba(107,124,89,0.15)" },
  { w: 128, h: 112, top: 810,  right: 400, rotate: "rotate(-10deg)", color: "rgba(198,166,70,0.1)" },
  { w: 152, h: 128, top: 1080, right: 370, rotate: "rotate(4deg)",  color: "rgba(107,124,89,0.15)" },
];

/* ---------- PhotoCard ---------- */
function PhotoCard({
  src,
  style,
  side,
}: {
  src: string;
  style: Record<string, number | string>;
  side: "left" | "right";
}) {
  const { width, height, top, transform } = style;
  const positionStyle: React.CSSProperties = {
    width,
    height,
    top: top as number,
    transform: transform as string,
    position: "absolute",
  };
  if (side === "left") positionStyle.left = (style.left as number) ?? 0;
  else positionStyle.right = (style.right as number) ?? 0;

  return (
    <div
      style={positionStyle}
      className="rounded-[24px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
    >
      <ImageWithFallback src={src} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(74,88,53,0.6)] via-transparent to-transparent opacity-80" />
    </div>
  );
}

/* ================================================================
   DonationForm
   ================================================================ */
export function DonationForm() {
  const [showQRModal, setShowQRModal] = useState(false);

  /* Inject Givebutter script once on mount */
  useEffect(() => {
    if (!document.querySelector('script[src*="givebutter.com/js/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://givebutter.com/js/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-[#f4efe7] relative overflow-hidden">

      {/* -------- LEFT SIDE COLLAGE -------- */}
      <div className="hidden xl:block absolute left-0 top-0 w-[680px] h-full z-0">
        {photosTopLeft.map((p, i)    => <PhotoCard key={`tl-${i}`} src={p.src} style={p.style} side="left" />)}
        {photosMidLeft.map((p, i)    => <PhotoCard key={`ml-${i}`} src={p.src} style={p.style} side="left" />)}
        {photosBottomLeft.map((p, i) => <PhotoCard key={`bl-${i}`} src={p.src} style={p.style} side="left" />)}
        {decorativeShapesLeft.map((s, i) => (
          <div
            key={`dsl-${i}`}
            className="absolute rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]"
            style={{ width: s.w, height: s.h, top: s.top, left: s.left, transform: s.rotate, backgroundColor: s.color }}
          />
        ))}
      </div>

      {/* -------- RIGHT SIDE COLLAGE -------- */}
      <div className="hidden xl:block absolute right-0 top-0 w-[680px] h-full z-0">
        {photosTopRight.map((p, i)    => <PhotoCard key={`tr-${i}`} src={p.src} style={p.style} side="right" />)}
        {photosMidRight.map((p, i)    => <PhotoCard key={`mr-${i}`} src={p.src} style={p.style} side="right" />)}
        {photosBottomRight.map((p, i) => <PhotoCard key={`br-${i}`} src={p.src} style={p.style} side="right" />)}
        {decorativeShapesRight.map((s, i) => (
          <div
            key={`dsr-${i}`}
            className="absolute rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]"
            style={{ width: s.w, height: s.h, top: s.top, right: s.right, transform: s.rotate, backgroundColor: s.color }}
          />
        ))}
      </div>

      {/* -------- MAIN CONTENT -------- */}
      <div className="max-w-[896px] mx-auto px-4 md:px-6 py-10 md:py-16 relative z-10">

        {/* Donation Card */}
        <div className="bg-[#f5f3ee] rounded-[24px] shadow-[0px_25px_80px_0px_rgba(0,0,0,0.35)] relative overflow-hidden">

          {/* Corner decorations */}
          <div
            className="absolute top-0 left-0 w-[128px] h-[128px] rounded-tl-[24px]"
            style={{ backgroundImage: "linear-gradient(135deg, rgba(198,166,70,0.2) 0%, rgba(0,0,0,0) 100%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[128px] h-[128px] rounded-br-[24px]"
            style={{ backgroundImage: "linear-gradient(-45deg, rgba(198,166,70,0.2) 0%, rgba(0,0,0,0) 100%)" }}
          />

          <div className="relative px-6 md:px-14 py-10 md:py-14">

            {/* Heart icon & heading */}
            <div className="text-center mb-10">
              <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-b from-[#c6a646] to-[#b89536] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white fill-white" />
              </div>
              <h2 className="font-['DM_Serif_Display',serif] text-[#2c2c2c] text-[36px] md:text-[48px] leading-[1.1] mb-4">
                Make an Impact Today
              </h2>
              <p className="font-['Inter',sans-serif] text-[#4a5565] text-[16px] md:text-[20px] leading-[1.6] max-w-[634px] mx-auto">
                Your generosity transforms lives and builds stronger communities.
                Every donation creates lasting change.
              </p>
            </div>

            {/* ---- Givebutter form widget ---- */}
            {/*
              The widget renders inside a shadow DOM, so Tailwind classes won't
              pierce it. We wrap it in a styled container so it sits flush with
              the card aesthetic. Givebutter picks up brand colours from your
              campaign settings on givebutter.com.
            */}
            <div className="mb-8 rounded-[16px] overflow-hidden border-[2.667px] border-[#d1d5dc] bg-white">
              <givebutter-widget id="j2Obxa" />
            </div>

            {/* QR Code button */}
            <div className="mb-6">
              <button
                onClick={() => setShowQRModal(true)}
                className="w-full h-[72px] bg-white border-[2.667px] border-[#c6a646] rounded-[16px] shadow-[0px_15px_35px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#f5f3ee] transition"
              >
                <span className="font-['Inter',sans-serif] text-[#c6a646] text-[20px]">
                  Prefer to scan? Use QR Code
                </span>
              </button>
            </div>

            {/* QR Code Modal */}
            {showQRModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative">
                  <button
                    onClick={() => setShowQRModal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <h3 className="text-2xl font-bold text-center mb-6">Scan to Pay</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <h4 className="text-xl font-semibold mb-4">Pay with Zelle®</h4>
                      <div className="w-48 h-48 mx-auto rounded-lg shadow-md bg-white p-2 flex items-center justify-center overflow-hidden">
                        <img
                          src="https://i.imgur.com/CZID90b.png"
                          alt="Zelle QR Code"
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "https://placehold.co/192x192/9333ea/FFFFFF?text=Zelle+QR"; }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Use your <strong className="text-gray-800">mobile banking app</strong> to scan.
                      </p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-semibold mb-4">Pay with Givebutter</h4>
                      <div className="w-48 h-48 mx-auto rounded-lg shadow-md bg-white p-2 flex items-center justify-center">
                        <img
                          src="https://i.imgur.com/qGIfPuL.png"
                          alt="Givebutter QR Code"
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => { e.currentTarget.src = "https://placehold.co/192x192/059669/FFFFFF?text=Givebutter+QR"; }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-4">Scan here for Givebutter donations.</p>
                    </div>
                  </div>

                  <p className="text-xs text-center mt-8 text-burnt-orange font-semibold">
                    Important: To receive a tax receipt, please close this window after donating and fill
                    out the "QR Code Donation Receipt" form on our page.
                  </p>
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 py-4 border-t border-[#d1d5dc] mb-4">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#00A63E]" />
                <span className="font-['Inter',sans-serif] text-[#4a5565] text-[14px]">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#00A63E]" />
                <span className="font-['Inter',sans-serif] text-[#4a5565] text-[14px]">Tax-Deductible</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00A63E]" />
                <span className="font-['Inter',sans-serif] text-[#4a5565] text-[14px]">100% Confidential</span>
              </div>
            </div>

            {/* Tax ID */}
            <p className="font-['Inter',sans-serif] text-[#6a7282] text-[14px] text-center">
              Tax ID: 33-4782640
            </p>

          </div>
        </div>
      </div>

      
    </section>
  );
}