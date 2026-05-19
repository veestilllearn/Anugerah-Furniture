import { Link } from "react-router-dom";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export default function RegisterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col w-full max-w-md mx-auto gap-5"
    >
      <div className="text-center mb-4">
        <h2
          className="text-3xl md:text-4xl text-white tracking-widest uppercase mb-3"
          style={{ fontFamily: "'Libertinus Serif', serif" }}
        >
          REGISTER
        </h2>
        <p className="text-gray-400 text-sm tracking-wide">
          Create an account to explore our premium collections
        </p>
      </div>

      <Input
        id="name"
        type="text"
        label="Full Name"
        placeholder="Enter your full name"
      />

      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email address"
      />

      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="Create a strong password"
      />

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Button variant="primary" className="w-full sm:flex-1 py-3.5">
          SIGN UP
        </Button>

        {/* Link kembali ke Login */}
        <Link to="/login" className="w-full sm:flex-1">
          <Button
            variant="outline-white"
            className="w-full py-3.5"
            type="button"
          >
            LOGIN INSTEAD
          </Button>
        </Link>
      </div>
    </form>
  );
}
