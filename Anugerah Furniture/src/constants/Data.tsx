// Kumpulan Data Constants untuk berbagai bagian website.
export const FONT_GASOEK = { fontFamily: "'Gasoek One', sans-serif" };
export const FONT_LIBERTINUS = { fontFamily: "'Libertinus Serif', serif" };

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Emily Davis",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    review:
      "Not just furniture, but a true statement piece. The Balinese teak wood craftsmanship on my new dining table is absolutely flawless. Worth every penny.",
  },
  {
    id: 2,
    name: "Marcus Lee",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    review:
      "The Projectory 360 feature blew my mind! I was able to see exactly how the Mira Sofa would look in my living room before buying. Brilliant service.",
  },
  {
    id: 3,
    name: "Sarah Chen",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    review:
      "Finding modern minimalist designs with sustainable materials is rare. Anugerah Furniture delivered beyond my expectations. Highly recommended!",
  },
];

export const MARQUEE_ITEMS = [
  "Subscribe to get 10% discounts",
  "Gets free delivery with min purchase of IDR 2 mil",
  "Subscribe to get 10% discounts",
  "Gets free delivery with min purchase of IDR 2 mil",
];

export const POLICY_LINKS = [
  "Terms and Condition",
  "Refund Policy",
  "Privacy Policy",
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: "/Instagram.svg",
    link: "https://www.instagram.com/anugerah_furniturebali?igsh=OWp5cXU2Y3BudmVx",
  },
  {
    label: "TikTok",
    icon: "/Tiktok.svg",
    link: "https://www.tiktok.com/@anugerahfurniturebali?_r=1&_t=ZS-96UD4wC0tHO",
  },
];

export const NAV_LINKS = [
  { to: "/products", label: "Products", hasDropdown: true },
  { to: "/about", label: "About Us", hasDropdown: false },
];

export const NAV_ICONS = [
  { label: "Account", icon: "/Account.svg", link: "/Login" },
  { label: "Cart", icon: "/Cart.svg" },
  { label: "Wishlist", icon: "/Wishlist.svg", link: "/Wishlist" },
];

export const FEATURES = [
  {
    image: "/Wood.svg",
    alt: "Teak Wood",
    imgClass: "w-16 h-16 md:w-20 md:h-20",
    align: "justify-center md:justify-start",
    title: "100%",
    subtitle: (
      <>
        Made of Teak
        <br />
        Wood
      </>
    ),
    subtitleWeight: "font-bold",
    subtitleColor: "text-black-400",
  },
  {
    image: "/Quality.svg",
    alt: "Quality Certificate",
    imgClass: "w-14 h-14 md:w-16 md:h-16",
    align: "justify-center",
    title: "QUALITY",
    subtitle: "You Can Trust",
    subtitleWeight: "font-semibold",
    subtitleColor: "text-black-900",
  },
  {
    image: "/Balinese.svg",
    alt: "Pura Bali",
    imgClass: "w-20 h-14 md:w-24 md:h-16",
    align: "justify-center md:justify-end",
    title: "BALINESE",
    subtitle: "Made by Local",
    subtitleWeight: "font-bold",
    subtitleColor: "text-black-900",
  },
];

export const HERO_COLLECTION = {
  to: "/bedroom",
  image: "/Coll-1.svg",
  alt: "Bedroom",
  title: "Bedroom Collection",
  desc: "Transform your personal space into a luxurious sanctuary, designed for ultimate comfort and restorative rest.",
};

export const GRID_COLLECTIONS = [
  {
    to: "/livingroom",
    image: "/Coll-3.svg",
    alt: "Living Room",
    title: "Living & Family Room Collection",
    desc: "The heart of your home. Elegant designs crafted for intimate family gatherings and striking first impressions.",
  },
  {
    to: "/diningroom",
    image: "/Coll-2.svg",
    alt: "Dining Room",
    title: "Dining Room Collection",
    desc: "Set the table for cherished memories. Timeless pieces that bring warmth and elegance to every shared meal.",
  },
];

export const PROJECTORY_CATALOG = [
  {
    id: 1,
    name: "Dipan Bed",
    category: "Bedroom",
    modelSrc: "/models/O-Dipan.glb",
    thumbnail: "/Dipan.svg",
  },
];
