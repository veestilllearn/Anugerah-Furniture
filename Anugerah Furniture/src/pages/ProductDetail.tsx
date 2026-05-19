import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_PRODUCTS } from "../constants/Products";

// ─── IMPORT KOMPONEN & UTILS ──────────────────────────
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { generateWhatsAppLink, type CartItem } from "../utils/whatsappLink";

// ─── HELPERS ─────────────────────────────────────────────────
function formatRupiah(num: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(num);
}

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={star <= Math.round(rating) ? "#eab308" : "none"}
          stroke="#eab308"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  );
}

// ─── KOMPONEN UTAMA ───────────────────────────────────────────
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = ALL_PRODUCTS.find((p) => p.id === Number(id));

  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState<"desc" | "spec" | "review">(
    "desc",
  );
  const [selectedImage, setSelectedImage] = useState(0);

  // ─── RENDER JIKA PRODUK TIDAK DITEMUKAN (404) ───
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[#EAEAEA] antialiased font-sans overflow-x-hidden">
        <Navbar />
        <main className="flex-1 bg-[#1c1c1e] text-white flex flex-col items-center justify-center gap-6 py-32">
          <h1 className="text-4xl font-bold text-zinc-400">404</h1>
          <p className="text-zinc-500 text-sm">
            Produk dengan ID <span className="text-white font-mono">#{id}</span>{" "}
            tidak ditemukan.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="text-xs uppercase tracking-wider text-zinc-300 border border-zinc-700 px-6 py-3 rounded hover:border-zinc-500 hover:text-white transition-all"
          >
            ← Kembali ke Products
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  // ─── HANDLERS ───
  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleOrder = () => {
    // PENGGUNAAN CLEAN CODE: Memanggil fungsi utilitas yang sudah kita buat!
    const orderItem: CartItem = {
      id: product.id,
      name: product.name,
      category: "Furniture", // Bebas, sebagai pelengkap
      quantity: quantity,
    };

    // Generate link WA secara dinamis (ganti nomor sesuai kodingan aslimu)
    const waLink = generateWhatsAppLink("6281572894402", [orderItem]);
    window.open(waLink, "_blank");
  };

  // ─── RENDER UTAMA ───
  return (
    // Pembungkus utama terang untuk mencegah CSS Bleed ke Navbar/Footer
    <div className="min-h-screen flex flex-col bg-[#EAEAEA] antialiased font-sans overflow-x-hidden">
      {/* 1. GLOBAL NAVBAR */}
      <Navbar />

      {/* 2. MAIN CONTENT AREA (Gelap) */}
      <main className="flex-1 bg-[#1c1c1e] text-white selection:bg-zinc-800 pb-16">
        {/* BREADCRUMB / BACK */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-xs font-normal uppercase tracking-wider cursor-pointer focus:outline-none"
          >
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Products
          </button>
        </div>

        {/* MAIN CONTAINER */}
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* GALLERY AREA (Kiri) */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden bg-[#242426] border border-zinc-800 aspect-4/3 flex items-center justify-center p-4">
              <img
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain transition-all duration-300"
              />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-zinc-800 hover:bg-zinc-900 transition-all cursor-pointer focus:outline-none"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={isFavorite ? "#ffffff" : "none"}
                  stroke="white"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </button>
            </div>

            {product.images && product.images.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-24 h-18 aspect-4/3 rounded bg-[#242426] border p-2 flex items-center justify-center transition-all shrink-0 snap-start cursor-pointer focus:outline-none ${
                      selectedImage === i
                        ? "border-white opacity-100 scale-95"
                        : "border-zinc-800/80 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`view-${i}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFO & CONTROL AREA (Kanan) */}
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold tracking-normal text-white">
              {product.name}
            </h1>

            <div className="flex items-center gap-3">
              <StarRating rating={product.rating} />
              <span className="text-zinc-300 font-medium text-xs pt-0.5">
                {product.rating}
              </span>
              <span className="text-zinc-500 text-xs pt-0.5">
                ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="space-y-1 pt-2">
              <div className="text-2xl font-semibold tracking-normal text-white transition-all">
                {formatRupiah(product.price * quantity)}
              </div>
              {quantity > 1 && (
                <div className="text-[11px] text-zinc-500">
                  {formatRupiah(product.price)} / pcs
                </div>
              )}
            </div>

            <div className="h-px bg-zinc-800/80 my-4" />

            <p className="text-zinc-400 text-xs leading-relaxed font-normal">
              {product.description}
            </p>

            {/* QUANTITY CONTROL */}
            <div className="pt-2 space-y-2">
              <label className="text-zinc-500 text-[10px] font-medium uppercase tracking-widest block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-zinc-800 rounded bg-[#242426]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-sm cursor-pointer focus:outline-none"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-medium text-xs text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-sm cursor-pointer focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleOrder}
                className="flex-1 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold py-3 px-6 rounded text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className={`flex-1 border font-semibold py-3 px-6 rounded text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none ${
                  addedToCart
                    ? "border-zinc-600 text-zinc-400 bg-zinc-900"
                    : "border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white"
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {addedToCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>

        {/* DETAIL TABS */}
        <div className="max-w-7xl mx-auto px-6 mt-12">
          <div className="flex border-b border-zinc-800/80 mb-6">
            {(
              [
                { key: "desc", label: "Description" },
                { key: "spec", label: "Specification" },
                { key: "review", label: `Reviews (${product.reviewCount})` },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-colors relative cursor-pointer focus:outline-none ${
                  activeTab === tab.key
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
            ))}
          </div>

          <div className="text-zinc-400 text-xs leading-relaxed max-w-3xl">
            {activeTab === "desc" && <p>{product.description}</p>}

            {activeTab === "spec" && (
              <div className="max-w-md rounded border border-zinc-800 bg-[#242426]/30 p-1">
                <table className="w-full border-collapse">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr
                        key={i}
                        className="border-b border-zinc-800/50 last:border-0"
                      >
                        <td className="py-3 px-4 text-zinc-500 font-medium w-40 uppercase tracking-wider text-[10px]">
                          {spec.label}
                        </td>
                        <td className="py-3 text-zinc-300 font-normal">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "review" && (
              <div className="space-y-4 max-w-2xl">
                {product.reviews.length > 0 ? (
                  product.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-[#242426]/30 border border-zinc-800 p-4 rounded"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-zinc-200">
                          {review.name}
                        </span>
                        <span className="text-[10px] text-zinc-500">
                          {review.date}
                        </span>
                      </div>
                      <StarRating rating={review.rating} />
                      <p className="text-zinc-400 mt-2">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-zinc-600 py-8 text-center border border-dashed border-zinc-800 rounded">
                    No reviews yet.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 3. GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
