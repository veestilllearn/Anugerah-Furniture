import React from "react";

// Mendefinisikan tipe props agar autocomplete di VSCode jalan (TypeScript magic!)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline-white" | "outline-black";
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Style dasar yang selalu ada di setiap tombol
  let baseStyle =
    "rounded-full px-10 py-4 text-xs font-semibold tracking-[0.2em] transition-colors duration-200 ";

  // Menentukan warna berdasarkan varian yang dipilih
  if (variant === "primary") {
    // Contoh tombol "SHOP NOW" di Hero
    baseStyle +=
      "bg-[#D9D9D9] text-gray-900 border border-[#D9D9D9] hover:bg-white";
  } else if (variant === "outline-white") {
    // Contoh tombol "PROJECTORY (360°)" di Hero
    baseStyle +=
      "bg-transparent border border-white text-white hover:bg-white hover:text-gray-900";
  } else if (variant === "outline-black") {
    // Contoh tombol "Shop Now" di Footer
    baseStyle +=
      "bg-transparent border border-black text-black hover:bg-black hover:text-white";
  }

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
