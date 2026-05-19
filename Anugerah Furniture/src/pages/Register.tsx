import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#1C1C1C] font-['Inter'] overflow-x-hidden">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Area (Register Form) */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 w-full">
        <div className="w-full max-w-xl bg-[#222222] p-10 md:p-14 rounded-3xl border border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-fade-in-up">
          <RegisterForm />
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
