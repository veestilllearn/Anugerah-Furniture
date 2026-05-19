import { useState, useMemo } from "react";
// ─── IMPORT KOMPONEN REUSABLE ───
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/ui/ProductCard"; // Sesuaikan path jika bereda (misal: ../components/shop/ProductCard)
import { ALL_PRODUCTS } from "../constants/Products";

// Pindahkan konstanta ke luar komponen agar tidak di-render ulang terus
const ITEMS_PER_PAGE = 6;

export default function Products() {
  // ─── STATE MANAGEMENT ───
  const [availabilityFilter, setAvailabilityFilter] = useState<
    "all" | "available" | "unavailable"
  >("all");
  const [priceFilter, setPriceFilter] = useState<"all" | "low" | "high">("all");
  const [showAvailMenu, setShowAvailMenu] = useState(false);
  const [showPriceMenu, setShowPriceMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // ─── LOGIKA FILTER & SORTING (Dioptimasi dengan useMemo) ───
  // useMemo memastikan filter hanya berjalan jika data atau opsi filter berubah (Performa jauh lebih cepat)
  const filteredAndSortedProducts = useMemo(() => {
    // 1. Filter Ketersediaan
    let result = ALL_PRODUCTS.filter((p) => {
      if (availabilityFilter === "available") return p.available;
      if (availabilityFilter === "unavailable") return !p.available;
      return true;
    });

    // 2. Sorting Harga
    if (priceFilter === "low") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "high") {
      result = result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [availabilityFilter, priceFilter]);

  // ─── LOGIKA PAGINASI ───
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / ITEMS_PER_PAGE,
  );
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = filteredAndSortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // ─── HANDLER ACTIONS ───
  const handlePrevPage = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleAvailSelect = (val: "all" | "available" | "unavailable") => {
    setAvailabilityFilter(val);
    setShowAvailMenu(false);
    setCurrentPage(1); // Reset ke halaman 1 setiap ganti filter
  };

  const handlePriceSelect = (val: "all" | "low" | "high") => {
    setPriceFilter(val);
    setShowPriceMenu(false);
    setCurrentPage(1); // Reset ke halaman 1 setiap ganti filter
  };

  return (
    // Tambahkan min-h-screen dan flex-col agar footer selalu di bawah
    <div className="min-h-screen flex flex-col antialiased font-sans overflow-x-hidden">
      {/* 1. GLOBAL NAVBAR */}
      <Navbar />

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 bg-[#212121] text-white">
        {/* ── HERO SECTION ── */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(240px, 46vw, 620px)" }}
        >
          <img
            src="/images/header.webp"
            alt="New Products Available"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 p-6 sm:p-10 md:p-12 z-10 max-w-3xl text-right">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-widest leading-none">
              NEW PRODUCTS AVAILABLE
            </h2>
          </div>
        </section>

        {/* ── CATALOG & FILTER SECTION ── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-12 md:py-16">
          {/* Header Filter */}
          <header className="mb-10">
            <h2 className="text-white font-bold text-xl mb-3 tracking-wide">
              Products
            </h2>
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="text-zinc-400 font-medium">Filter:</span>

              {/* Dropdown Availability */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowAvailMenu(!showAvailMenu);
                    setShowPriceMenu(false);
                  }}
                  className="flex items-center gap-1 text-zinc-100 hover:text-white transition-colors bg-transparent py-1 px-1 cursor-pointer focus:outline-none"
                >
                  <span>
                    {availabilityFilter === "all"
                      ? "Availability"
                      : availabilityFilter === "available"
                        ? "Available"
                        : "Unavailable"}
                  </span>
                  <svg
                    className={`w-3 h-3 opacity-80 transition-transform ${showAvailMenu ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showAvailMenu && (
                  <div className="absolute top-8 left-0 z-30 bg-[#252525] border border-zinc-800 rounded-md shadow-2xl min-w-35 py-1 overflow-hidden">
                    {(["all", "available", "unavailable"] as const).map(
                      (opt) => (
                        <button
                          key={opt}
                          onClick={() => handleAvailSelect(opt)}
                          className={`block w-full text-left px-4 py-2 text-xs font-bold transition-colors ${availabilityFilter === opt ? "text-white bg-zinc-800" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}
                        >
                          {opt === "all"
                            ? "All"
                            : opt === "available"
                              ? "Available"
                              : "Unavailable"}
                        </button>
                      ),
                    )}
                  </div>
                )}
              </div>

              {/* Dropdown Price */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowPriceMenu(!showPriceMenu);
                    setShowAvailMenu(false);
                  }}
                  className="flex items-center gap-1 text-zinc-100 hover:text-white transition-colors bg-transparent py-1 px-1 cursor-pointer focus:outline-none"
                >
                  <span>
                    {priceFilter === "all"
                      ? "Price"
                      : priceFilter === "low"
                        ? "Price: Low to High"
                        : "Price: High to Low"}
                  </span>
                  <svg
                    className={`w-3 h-3 opacity-80 transition-transform ${showPriceMenu ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showPriceMenu && (
                  <div className="absolute top-8 left-0 z-30 bg-[#252525] border border-zinc-800 rounded-md shadow-2xl min-w-40 py-1 overflow-hidden">
                    {(["all", "low", "high"] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handlePriceSelect(opt)}
                        className={`block w-full text-left px-4 py-2 text-xs font-bold transition-colors ${priceFilter === opt ? "text-white bg-zinc-800" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}
                      >
                        {opt === "all"
                          ? "All"
                          : opt === "low"
                            ? "Price: Low to High"
                            : "Price: High to Low"}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Grid Produk */}
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
              {currentProducts.map((product) => (
                // PENGGUNAAN CLEAN CODE: Memanggil Komponen ProductCard!
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  available={product.available}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-zinc-600 py-32 text-sm font-light">
              Tidak ada produk yang sesuai filter.
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-6 mt-14 pt-8 border-t border-zinc-800/60 font-bold select-none">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`text-xl p-2 transition-colors duration-200 ${currentPage === 1 ? "text-zinc-700 cursor-not-allowed" : "text-zinc-400 hover:text-white cursor-pointer"}`}
            >
              ‹
            </button>
            <span className="text-white text-sm tracking-wide bg-transparent px-1">
              {currentPage}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`text-xl p-2 transition-colors duration-200 ${currentPage === totalPages || totalPages === 0 ? "text-zinc-700 cursor-not-allowed" : "text-zinc-400 hover:text-white cursor-pointer"}`}
            >
              ›
            </button>
          </div>
        </section>
      </main>

      {/* 3. GLOBAL FOOTER */}
      <Footer />

      {/* Click-away overlay untuk menutup dropdown menu */}
      {(showAvailMenu || showPriceMenu) && (
        <div
          className="fixed inset-0 z-20 bg-transparent"
          onClick={() => {
            setShowAvailMenu(false);
            setShowPriceMenu(false);
          }}
        />
      )}
    </div>
  );
}
