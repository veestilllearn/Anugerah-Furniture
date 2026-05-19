import { useEffect } from "react";
import { Button } from "../ui/Button";
// IMPORT FUNGSI GENERATE WA DARI UTILS
import { generateWhatsAppLink, type CartItem } from "../../utils/whatsappLink";

// DATA SIMULASI KERANJANG (MOCK DATA)
const MOCK_CART_ITEMS: CartItem[] = [];

const WA_BUSINESS_NUMBER = "6281572894402";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // Mencegah body bisa di-scroll ketika keranjang terbuka
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // 3. JALANKAN FUNGSI GENERATE WA
  const whatsappUrl = generateWhatsAppLink(WA_BUSINESS_NUMBER, MOCK_CART_ITEMS);
  const totalItems = MOCK_CART_ITEMS.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  // Jika tidak open, render struktur pembungkus saja dengan state tersembunyi
  return (
    <>
      {/* 1. OVERLAY (Backdrop Blur) */}
      <div
        className={`fixed inset-0 z-140 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* SIDEBAR PANEL */}
      <div
        className={`fixed top-0 right-0 z-150 w-full sm:w-105 h-full bg-[#171717] border-l border-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping Cart"
      >
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b border-gray-800">
          <h3
            className="text-xl tracking-widest text-white"
            style={{ fontFamily: "'Gasoek One', sans-serif" }}
          >
            YOUR CART
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white font-medium text-xs tracking-widest transition-colors p-2"
            aria-label="Close Cart"
          >
            CLOSE ✕
          </button>
        </header>

        {/* BODY - CONDITIONAL RENDERING (Pemisahan Isi vs Kosong) */}
        <main className="flex-1 overflow-y-auto flex flex-col p-6 custom-scrollbar">
          {MOCK_CART_ITEMS.length === 0 ? (
            // TAMPILAN KALAU KERANJANG KOSONG
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#222222] rounded-full flex items-center justify-center mb-6">
                <img
                  src="/Cart.svg"
                  alt="Empty Cart"
                  className="w-8 h-8 invert opacity-40"
                />
              </div>
              <p className="text-white font-semibold tracking-wide">
                Your cart is currently empty.
              </p>
              <p className="text-gray-500 text-sm mt-2 max-w-65 leading-relaxed">
                Discover our premium collections and add your favorite pieces
                here.
              </p>
            </div>
          ) : (
            // TAMPILAN KALAU ADA BARANG (MOCK DATA)
            <ul className="flex flex-col gap-4">
              {MOCK_CART_ITEMS.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-[#222222] p-4 rounded-xl border border-gray-700"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {item.name}
                    </span>
                  </div>
                  <div className="bg-[#1C1C1C] px-3 py-1.5 rounded-lg border border-gray-600">
                    <span className="text-xs text-white font-bold">
                      {item.quantity}x
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </main>

        {/* Footer - Checkout Action */}
        <footer className="p-6 border-t border-gray-800 bg-[#171717]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-400 font-medium tracking-wide">
              Total Items
            </span>
            <span className="text-lg font-bold text-white tracking-wider">
              {totalItems} Unit
            </span>
          </div>

          {/* 5. GANTI LINK WA MENJADI URL DINAMIS */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block"
          >
            <Button
              variant="primary"
              className="w-full py-4 text-xs font-bold tracking-[0.2em] hover:scale-[1.02] transition-transform"
            >
              CHECKOUT VIA WHATSAPP
            </Button>
          </a>
        </footer>
      </div>
    </>
  );
}
