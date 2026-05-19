import { POLICY_LINKS, SOCIAL_LINKS, FONT_GASOEK } from "../../constants/Data";
import { Button } from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-[#D9D9D9] border-t border-gray-400 px-6 py-12 md:px-16 w-screen relative left-1/2 -translate-x-1/2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-start gap-12">
        {/* Left: Brand & Policy */}
        <div className="flex flex-col">
          <p className="font-bold text-black mb-4 text-base">Stay Connected</p>

          {/* Brand logo */}
          <div className="flex items-center ml-1 md:ml-4">
            <span
              className="text-3xl md:text-4xl tracking-wider text-black-900 flex items-center gap-1"
              style={FONT_GASOEK}
            >
              ANUGRAH F
            </span>
            <img
              src="/Sofa.svg"
              alt="sofa icon"
              className="h-10 md:h-14 w-auto object-contain -mx-1 md:-mx-2"
            />
            <span
              className="text-3xl md:text-4xl tracking-wider text-black-900 flex items-center gap-1"
              style={FONT_GASOEK}
            >
              RNITURE
            </span>
          </div>

          {/* Policy links */}
          <div className="flex flex-row gap-8 md:gap-14 mt-4 ml-2 md:ml-6">
            {POLICY_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] md:text-xs text-gray-800 font-medium hover:underline whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 mt-14">
            <span className="font-bold text-base text-black">©</span>
            <p className="text-[14px] font-bold text-black">
              2026 Anugrah Furniture. All Rights Reserved
            </p>
          </div>
        </div>

        {/* Right: Social & Newsletter */}
        <div className="flex flex-col text-left mt-8 md:mt-0">
          <p className="font-bold text-black text-base">Follow Us</p>
          <div className="flex flex-row gap-4 mt-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-8 h-8 object-contain"
                />
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <p className="font-bold text-black text-base mt-6">
            Member's Benefit
          </p>
          <p className="text-[14px] text-black font-medium mt-1 max-w-75">
            Receive our latest updates about our products & promotions.
          </p>

          {/* Shop Now Button */}
          <Button
            variant="outline-black"
            className="mt-4 self-start px-12 py-1.5 text-sm"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </footer>
  );
}
