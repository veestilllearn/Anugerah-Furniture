import { Link } from "react-router-dom";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export default function LoginForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()} 
      className="flex flex-col w-full max-w-md mx-auto gap-6"
    >
      <div className="text-center mb-6">
        <h2
          className="text-3xl md:text-4xl text-white tracking-widest uppercase mb-3"
          style={{ fontFamily: "'Libertinus Serif', serif" }}
        >
          LOGIN
        </h2>
        <p className="text-gray-400 text-sm tracking-wide">
          Welcome back to Anugerah Furniture
        </p>
      </div>

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
        placeholder="Enter your password"
      />

      {/* Area Tombol */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Button variant="primary" className="w-full sm:flex-1 py-3.5">
          SIGN IN
        </Button>

        {/* Link pindah ke halaman Register */}
        <Link to="/register" className="w-full sm:flex-1">
          <Button
            variant="outline-white"
            className="w-full py-3.5"
            type="button"
          >
            CREATE ACCOUNT
          </Button>
        </Link>
      </div>
    </form>
  );
}
