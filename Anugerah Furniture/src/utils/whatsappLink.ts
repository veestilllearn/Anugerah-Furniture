export interface CartItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
}

const WA_BASE_URL = "https://wa.me/";

/**
 * Generate Dynamic WhatsApp Link for Checkout
 * @param phone WhatsApp Number (format: 628xxx)
 * @param cartItems Array of items in the cart
 * @returns Encoded URL ready for href
 */
export function generateWhatsAppLink(
  phone: string,
  cartItems: CartItem[],
): string {
  // Fallback jika keranjang kosong
  if (!cartItems || cartItems.length === 0) {
    const defaultText =
      "Halo Anugrah Furniture, saya tertarik dengan koleksi furnitur Anda dan ingin berdiskusi lebih lanjut.";
    return `${WA_BASE_URL}${phone}?text=${encodeURIComponent(defaultText)}`;
  }

  // Template Pembuka
  const header =
    "Halo Anugrah Furniture,\n\nSaya ingin mendiskusikan pesanan furnitur berikut:\n\n";

  // Mapping Item Keranjang (Lebih clean dari forEach)
  const body = cartItems
    .map(
      (item, index) =>
        `${index + 1}. *${item.name}*\n   • Kategori: ${item.category}\n   • Jumlah: ${item.quantity} Unit\n`,
    )
    .join("\n"); // Menggabungkan setiap item dengan jarak baris baru

  // Template Penutup
  const footer =
    "Mohon informasi lebih lanjut mengenai ketersediaan bahan, estimasi waktu pengerjaan, serta ongkos kirim ke lokasi saya. Terima kasih!";

  // Gabungkan dan Encode
  const fullMessage = `${header}${body}\n${footer}`;

  return `${WA_BASE_URL}${phone}?text=${encodeURIComponent(fullMessage)}`;
}
