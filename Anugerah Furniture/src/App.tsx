import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rute ke Landing Page Utama */}
        <Route path="/" element={<Home />} />

        {/* Rute ke Halaman Auth*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Rute ke Halaman Lainnya */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
