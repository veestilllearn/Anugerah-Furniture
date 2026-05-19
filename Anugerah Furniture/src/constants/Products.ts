export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  available: boolean;
  sold: number;
  rating: number;
  reviewCount: number;
  specs: { label: string; value: string }[];
  reviews: Review[];
}

export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Glass Serenity Bed",
    description:
      "A clean, low-profile wooden platform that celebrates the purity of natural wood grains. The perfect foundation for a Zen-inspired, clutter-free bedroom.",
    price: 4500000,
    image: "/images/bed3.webp",
    images: ["/images/bed3.webp", "/images/DipanSide.webp"],
    available: true,
    sold: 128,
    rating: 4.7,
    reviewCount: 43,
    specs: [
      { label: "Material", value: "Kayu Jati Premium" },
      { label: "Ukuran", value: "160 x 200 cm (Queen Size)" },
      { label: "Tinggi", value: "25 cm dari lantai" },
      { label: "Finishing", value: "Natural Oil & Wax" },
      { label: "Garansi", value: "2 Tahun" },
    ],
    reviews: [
      {
        id: 1,
        name: "Budi Santoso",
        avatar: "BS",
        rating: 5,
        date: "12 Mei 2026",
        comment:
          "Kualitasnya luar biasa! Kayu jatinya beneran premium, berat dan kokoh. Pengiriman juga aman. Sangat puas.",
      },
    ],
  },
  {
    id: 2,
    name: "Stone Harmony Bed",
    description:
      "An elegant wooden bed crafted from solid oak with luxurious matte finishing. Perfect for modern bedroom spaces looking for a touch of nature.",
    price: 45000000,
    image: "/images/dipan2.png",
    images: [
      "/images/dipan2.png",
      "/images/dipan2.svg",
      "/images/horizon-side.jpg",
    ],
    available: true,
    sold: 56,
    rating: 4.6,
    reviewCount: 31,
    specs: [
      { label: "Material", value: "Kayu Oak Solid" },
      { label: "Ukuran", value: "160 x 200 cm" },
      { label: "Finishing", value: "Matte Lacquer" },
      { label: "Garansi", value: "2 Tahun" },
    ],
    reviews: [],
  },
  {
    id: 3,
    name: "Classic Tall Frame Bed",
    description:
      "A classic tall frame bed designed for warm, cozy, and modern living spaces. Features a sturdy structure for ultimate comfort and durability.",
    price: 11300000,
    image: "/images/DipanOnly.webp",
    images: ["/images/DipanOnly.webp", "/images/zen-sofa-side.jpg"],
    available: true,
    sold: 42,
    rating: 4.8,
    reviewCount: 22,
    specs: [
      { label: "Material", value: "Kayu Walnut Solid" },
      { label: "Ukuran", value: "180 x 200 cm" },
      { label: "Kaki", value: "Kayu Walnut" },
      { label: "Garansi", value: "1 Tahun" },
    ],
    reviews: [],
  },
  {
    id: 4,
    name: "Rattan Harmony Bed",
    description:
      "A timeless wooden frame paired with woven rattan headboard and footboard. This design blends natural textures with simplicity, creating a warm atmosphere.",
    price: 5400000,
    image: "/images/aura-cabinet.jpg",
    images: [
      "/images/aura-cabinet.jpg",
      "/images/aura-cabinet-open.jpg",
      "/images/aura-cabinet-detail.jpg",
    ],
    available: true,
    sold: 63,
    rating: 4.5,
    reviewCount: 17,
    specs: [
      { label: "Material", value: "Engineered Hardwood & Rattan" },
      { label: "Ukuran", value: "120 x 200 cm" },
      { label: "Garansi", value: "1 Tahun" },
    ],
    reviews: [],
  },
  {
    id: 5,
    name: "Storage Elegance Bed",
    description:
      "A solid wood bed with a tall rectangular headboard and integrated storage drawers beneath. Perfect for modern homes that value both style and functionality.",
    price: 6200000,
    image: "/images/silhouette-frame.jpg",
    images: [
      "/images/silhouette-frame.jpg",
      "/images/silhouette-side.jpg",
      "/images/silhouette-detail.jpg",
    ],
    available: true,
    sold: 74,
    rating: 4.5,
    reviewCount: 28,
    specs: [
      { label: "Material", value: "Kayu Walnut Premium" },
      { label: "Ukuran", value: "180 x 200 cm (King Size)" },
      { label: "Laci", value: "4 Laci Penyimpanan" },
      { label: "Garansi", value: "2 Tahun" },
    ],
    reviews: [],
  },
  {
    id: 6,
    name: "Leather Comfort Bed",
    description:
      "Featuring a padded leather-like headboard and matching bedside tables, this bed offers a balance of sophistication and comfort for a cozy retreat.",
    price: 9800000,
    image: "/images/sanctuary-suite.jpg",
    images: [
      "/images/sanctuary-suite.jpg",
      "/images/sanctuary-headboard.jpg",
      "/images/sanctuary-table.jpg",
    ],
    available: true,
    sold: 35,
    rating: 4.9,
    reviewCount: 19,
    specs: [
      { label: "Isi Paket", value: "Bed Frame + Headboard + 2 Nakas" },
      { label: "Material", value: "Kayu Jati Premium & Leather" },
      { label: "Garansi", value: "2 Tahun" },
    ],
    reviews: [],
  },
  {
    id: 7,
    name: "Tropical Retreat Sofa",
    description:
      "A wooden-framed sofa with beige cushions and vibrant red accent pillows. Perfect for lounging by the pool, bringing a warm tropical vibe to your space.",
    price: 7600000,
    image: "/images/sofaa.webp",
    images: ["/images/sofaa.webp", "/images/imperial-desk-side.jpg"],
    available: true,
    sold: 29,
    rating: 4.6,
    reviewCount: 12,
    specs: [
      { label: "Material", value: "Kayu Walnut + Fabric Outdoor" },
      { label: "Kapasitas", value: "3 Dudukan" },
      { label: "Garansi", value: "1 Tahun" },
    ],
    reviews: [],
  },
  {
    id: 8,
    name: "Urban Classic Sofa",
    description:
      "Crafted with a solid wooden frame and dark gray cushions, this sofa exudes timeless elegance. Versatile design suitable for indoor and semi-outdoor settings.",
    price: 3900000,
    image: "/images/luna-chair.jpg",
    images: ["/images/luna-chair.jpg", "/images/luna-chair-side.jpg"],
    available: true,
    sold: 91,
    rating: 4.4,
    reviewCount: 37,
    specs: [
      { label: "Material", value: "Fabric Premium + Busa High-Density" },
      { label: "Kaki", value: "Kayu Solid" },
      { label: "Garansi", value: "1 Tahun" },
    ],
    reviews: [],
  },
  {
    id: 9,
    name: "Garden Serenity Sofa",
    description:
      "A low-profile wooden sofa with cream cushions, designed for outdoor relaxation. Its minimalist look blends seamlessly with natural surroundings.",
    price: 1200000,
    image: "/images/sofacc.webp",
    images: ["/images/sofacc.webp", "/images/sofacbg.webp"],
    available: true,
    sold: 84,
    rating: 4.3,
    reviewCount: 21,
    specs: [
      { label: "Material", value: "Rattan Sintetis + Aluminium Anti Karat" },
      { label: "Kapasitas", value: "2 Dudukan" },
      { label: "Ketahanan", value: "Tahan Cuaca" },
    ],
    reviews: [],
  },
  {
    id: 10,
    name: "Cozy Heritage Sofa",
    description:
      "A brown upholstered sofa with matching pillows, offering comfort and warmth indoors. Classic design fits perfectly in traditional or modern living rooms.",
    price: 4300000,
    image: "/images/sofad.webp", // Disesuaikan dengan aset sofad milikmu
    images: ["/images/sofad.webp"],
    available: true,
    sold: 47,
    rating: 4.6,
    reviewCount: 18,
    specs: [
      { label: "Material", value: "Fabric Suede Premium" },
      { label: "Kapasitas", value: "3 Dudukan" },
      { label: "Ukuran", value: "210 x 85 x 75 cm" },
    ],
    reviews: [],
  },
  {
    id: 11,
    name: "Rustic Charm Sofa",
    description:
      "A sturdy wooden frame with gray cushions, complemented by natural accents. Its rustic appeal makes it perfect for cozy indoor spaces.",
    price: 2500000,
    image: "/images/sofaa.webp", // Dipetakan ke aset sofa milikmu
    images: ["/images/sofaa.webp", "/images/sofacbg.webp"],
    available: true,
    sold: 102,
    rating: 4.7,
    reviewCount: 33,
    specs: [
      { label: "Material", value: "Kayu Solid Jati Belanda" },
      { label: "Kapasitas", value: "2 Dudukan" },
    ],
    reviews: [],
  },
  {
    id: 12,
    name: "Outdoor Breeze Sofa",
    description:
      "A compact two-seater wooden sofa with light gray cushions, designed for outdoor relaxation. Simple yet durable build fits seamlessly into patios.",
    price: 1800000,
    image: "/images/sofacc.webp", // Dipetakan ke aset sofa luar ruangan milikmu
    images: ["/images/sofacc.webp"],
    available: true,
    sold: 65,
    rating: 4.5,
    reviewCount: 24,
    specs: [
      { label: "Kapasitas", value: "2 Dudukan" },
      { label: "Material", value: "Aluminium + Wood Accent" },
    ],
    reviews: [],
  },
  {
    id: 13,
    name: "Rattan Elegance Wardrobe",
    description:
      "A two-door wooden wardrobe with woven rattan panels, blending natural textures with modern craftsmanship. Perfect for adding warmth to a bedroom.",
    price: 4200000,
    image: "/images/lemari3.webp",
    images: ["/images/lemari3.webp"],
    available: true,
    sold: 58,
    rating: 4.6,
    reviewCount: 19,
    specs: [
      { label: "Material", value: "Kayu Solid + Rattan Asli" },
      { label: "Ukuran", value: "100 x 55 x 200 cm" },
      { label: "Pintu", value: "2 Pintu Swing" },
    ],
    reviews: [],
  },
  {
    id: 14,
    name: "Mirror Glow Wardrobe",
    description:
      "Crafted from light-colored wood, this wardrobe features a large mirrored door that enhances brightness and creates a spacious feel in any room.",
    price: 2100000,
    image: "/images/lemari2.webp",
    images: ["/images/lemari2.webp"],
    available: true,
    sold: 72,
    rating: 4.4,
    reviewCount: 16,
    specs: [
      { label: "Material", value: "Engineered Wood" },
      { label: "Ukuran", value: "80 x 50 x 190 cm" },
    ],
    reviews: [],
  },
  {
    id: 15,
    name: "Dark Reflection Wardrobe",
    description:
      "A darker-toned wooden wardrobe with a mirrored door, offering both functionality and a refined aesthetic. Ideal for cozy, elegant interiors.",
    price: 8900000,
    image: "/images/lemari1.webp", // Dipetakan ke aset lemari riil milikmu
    images: ["/images/lemari1.webp", "/images/lemari2.webp"],
    available: true,
    sold: 39,
    rating: 4.7,
    reviewCount: 14,
    specs: [
      { label: "Material", value: "Kayu Oak Solid" },
      { label: "Ukuran", value: "200 x 60 x 220 cm" },
    ],
    reviews: [],
  },
  {
    id: 16,
    name: "Classic Frame Wardrobe",
    description:
      "A light wood wardrobe with a sturdy top frame and mirrored door, designed for timeless appeal and practical storage solutions.",
    price: 7500000,
    image: "/images/lemari1.webp",
    images: ["/images/lemari1.webp"],
    available: true,
    sold: 88,
    rating: 4.8,
    reviewCount: 41,
    specs: [
      { label: "Material", value: "Kayu Mahoni Premium" },
      { label: "Ukuran", value: "160 x 60 x 210 cm" },
    ],
    reviews: [],
  },
  {
    id: 17,
    name: "Mirror Elegance Wardrobe",
    description:
      "A spacious two-door wooden wardrobe with a central mirror panel, combining practicality with a touch of sophistication.",
    price: 3200000,
    image: "/images/lemari2.webp", // Dipetakan ke lemari
    images: ["/images/lemari2.webp", "/images/lemari3.webp"],
    available: true,
    sold: 54,
    rating: 4.5,
    reviewCount: 20,
    specs: [
      { label: "Material", value: "MDF + Solid Wood Trim" },
      { label: "Pintu", value: "2 Pintu Sliding dengan Kaca" },
    ],
    reviews: [],
  },
  {
    id: 18,
    name: "Tall Simplicity Wardrobe",
    description:
      "A sleek, tall wooden wardrobe with clean lines and no mirror, designed for minimalist interiors. Understated look versatile for modern homes.",
    price: 2700000,
    image: "/images/lemari3.webp", // Dipetakan ke lemari
    images: ["/images/lemari3.webp"],
    available: true,
    sold: 61,
    rating: 4.6,
    reviewCount: 22,
    specs: [
      { label: "Material", value: "Plywood Lapis HPL" },
      { label: "Dimensi", value: "90 x 55 x 220 cm" },
    ],
    reviews: [],
  },
  {
    id: 19,
    name: "Modern Noir Round Table",
    description:
      "A sleek black round dining table with matching chairs, perfect for minimalist kitchens and contemporary interiors.",
    price: 6400000,
    image: "/images/mejamakanhitam1.webp",
    images: ["/images/mejamakanhitam1.webp"],
    available: true,
    sold: 33,
    rating: 4.5,
    reviewCount: 15,
    specs: [
      { label: "Isi Paket", value: "1 Meja + 4 Kursi" },
      { label: "Material", value: "Kayu Solid Finishing Duco Hitam" },
    ],
    reviews: [],
  },
  {
    id: 20,
    name: "Poolside Harmony Table",
    description:
      "A rectangular wooden dining table with four chairs, designed for open spaces and outdoor gatherings near natural light.",
    price: 1900000,
    image: "/images/mejamakanb.webp",
    images: ["/images/mejamakanb.webp"],
    available: true,
    sold: 77,
    rating: 4.4,
    reviewCount: 18,
    specs: [
      { label: "Material", value: "Kayu Jati Grade B" },
      { label: "Ukuran Meja", value: "120 x 80 cm" },
    ],
    reviews: [],
  },
  {
    id: 21,
    name: "Cozy Oval Retreat Table",
    description:
      "A small oval wooden table with cushioned chairs, ideal for intimate dining in warm, cozy interiors.",
    price: 1500000,
    image: "/images/mejamakanc.webp",
    images: ["/images/mejamakanc.webp"],
    available: true,
    sold: 69,
    rating: 4.3,
    reviewCount: 14,
    specs: [
      { label: "Material", value: "Kayu Mahoni" },
      { label: "Ukuran", value: "100 x 60 cm Oval" },
    ],
    reviews: [],
  },
  {
    id: 22,
    name: "Classic Simplicity Table",
    description:
      "A rectangular wooden dining table with clean lines, offering timeless appeal for everyday family meals.",
    price: 5600000,
    image: "/images/mejamakanb.webp", // Dipetakan ke meja makan b
    images: ["/images/mejamakanb.webp", "/images/mejamakanc.webp"],
    available: true,
    sold: 41,
    rating: 4.6,
    reviewCount: 17,
    specs: [
      { label: "Material", value: "Kayu Jati + Finishing Natural" },
      { label: "Ukuran", value: "160 x 90 cm" },
    ],
    reviews: [],
  },
  {
    id: 23,
    name: "Rustic Charm Table",
    description:
      "A rectangular wooden table with a rustic finish and four matching chairs, bringing natural warmth to dining spaces.",
    price: 9200000,
    image: "/images/mejamakanc.webp", // Dipetakan ke meja makan c
    images: ["/images/mejamakanc.webp"],
    available: true,
    sold: 27,
    rating: 4.6,
    reviewCount: 13,
    specs: [
      { label: "Material", value: "Kayu Trembesi Solid" },
      { label: "Ukuran", value: "180 x 85 cm" },
    ],
    reviews: [],
  },
  {
    id: 24,
    name: "Compact Square Table",
    description:
      "A polished square wooden table with two chairs, perfect for small apartments or cozy breakfast corners.",
    price: 11500000,
    image: "/images/mejamakanhitam1.webp", // Dipetakan ke meja hitam
    images: ["/images/mejamakanhitam1.webp"],
    available: true,
    sold: 44,
    rating: 4.7,
    reviewCount: 20,
    specs: [
      { label: "Isi Paket", value: "1 Meja + 2 Kursi" },
      { label: "Material", value: "Kayu Oak Premium" },
    ],
    reviews: [],
  },
];
