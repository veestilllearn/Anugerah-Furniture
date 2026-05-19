import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MARQUEE_ITEMS,
  NAV_LINKS,
  NAV_ICONS,
  FONT_GASOEK,
} from "../../constants/Data";
import CartSidebar from "../shop/CartSidebar"; // <-- Import Sidebar Keranjang

export default function Navbar() {
  // SAKLAR SEPUH: Mengontrol Drawer Sidebar Keranjang
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* ── Auto-scrolling Discount Banner ── */}
      <div className="w-full bg-[#EAEAEA] border-b border-gray-300 overflow-hidden flex">
        <div className="animate-marquee flex w-max text-[13px] text-black-400 whitespace-nowrap py-2">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-center h-full gap-12 pr-12"
            >
              {MARQUEE_ITEMS.map((text, i) => (
                <span key={`${groupIndex}-${i}`}>{text}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Currency Selector Bar ── */}
      <div className="w-full bg-[#EAEAEA] shadow-[inset_0_4px_6px_-2px_rgba(0,0,0,0.1),inset_0_-4px_4px_-2px_rgba(0,0,0,0.1)] border-y border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-start text-[13px] text-black-400">
          Indonesia (IDR)
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <header className="w-full bg-[#EAEAEA] sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Left Nav Links */}
          <div className="flex items-center gap-8 text-sm text-black-400">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-1 hover:opacity-70 transition"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 mt-px"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Center Brand Logo */}
          <Link to="/">
            <h1
              className="text-3xl md:text-4xl tracking-wider text-black-900 flex items-center gap-1"
              style={FONT_GASOEK}
            >
              ANUGRAH F
              <span className="inline-flex items-center justify-center w-13 h-12 align-middle">
                <span className="flex items-center justify-center mx-2 shrink-0">
                  <img
                    src="/Sofa.svg"
                    alt="Corduroy Sofa Icon"
                    className="h-full w-20 object-fill hover:scale-110 transition-transform duration-300"
                  />
                </span>
              </span>
              RNITURE
            </h1>
          </Link>

          {/* Right Action Icons (Account, Cart, Wishlist) */}
          <div className="flex items-center gap-5 text-black-900">
            {NAV_ICONS.map((item) => {
              const isCart = item.label.toLowerCase() === "cart";

              if (isCart) {
                // Render sebagai tombol yang membuka sidebar
                return (
                  <button
                    key={item.label}
                    onClick={() => setIsCartOpen(true)}
                    aria-label="Open Shopping Cart"
                    className="hover:opacity-65 transition cursor-pointer focus:outline-none"
                  >
                    <img
                      src={item.icon}
                      alt={`${item.label} Icon`}
                      className="w-5 h-5 object-contain"
                    />
                  </button>
                );
              }

              // Render (Account, Wishlist)
              return (
                <Link
                  key={item.label}
                  to={item.link || "#"}
                  aria-label={item.label}
                  className="hover:opacity-65 transition"
                >
                  <img
                    src={item.icon}
                    alt={`${item.label} Icon`}
                    className="w-5 h-5 object-contain"
                  />
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* ── Sidebar Keranjang ── */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
