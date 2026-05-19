import { Link } from "react-router-dom";

// Komponen Modular
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/Button";

export default function Wishlist() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#1C1C1C] font-['Inter'] overflow-x-hidden">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Main Content Area */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 w-full max-w-6xl mx-auto text-center">
        {/* Page Header */}
        <header className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-normal tracking-widest text-white uppercase mb-4"
            style={{ fontFamily: "'Libertinus Serif', serif" }}
          >
            MY WISHLIST
          </h2>
          <p className="text-gray-400 text-sm tracking-wide">
            Keep track of premium items you desire
          </p>
        </header>

        {/* Empty State Card */}
        <article className="w-full max-w-xl bg-[#222222] border border-gray-800 rounded-3xl p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col items-center">
          <div className="w-20 h-20 bg-[#1C1C1C] rounded-full flex items-center justify-center mb-6">
            <img
              src="/Wishlist.svg"
              alt="Empty Wishlist"
              className="w-8 h-8 invert opacity-30"
            />
          </div>

          <h4 className="text-xl font-semibold text-white tracking-wide mb-3">
            Your wishlist is empty
          </h4>

          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            Explore our architectural furniture designs and tap the heart icon
            on your favorite pieces to save them here.
          </p>

          <Link to="/" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full px-12 py-3.5">
              BACK TO SHOP
            </Button>
          </Link>
        </article>
      </section>

      {/* 3. Global Footer */}
      <Footer />
    </main>
  );
}
