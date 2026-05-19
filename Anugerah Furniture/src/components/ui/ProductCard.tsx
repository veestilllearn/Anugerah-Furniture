import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number | string;
  image: string;
  name: string;
  description: string;
  available?: boolean;
}

export default function ProductCard({
  id,
  image,
  name,
  description,
  available = true,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="group block w-full">
      {/* 1. Image Frame Container */}
      <div className="relative mb-4 flex aspect-4/3 items-center justify-center overflow-hidden rounded-md border border-zinc-700/60 bg-[#1a1a1a] p-4">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy" // Optimasi performa loading gambar katalog
        />

        {/* Availability Status Badge */}
        {!available && (
          <span className="absolute top-3 right-3 rounded bg-red-700 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Sold Out
          </span>
        )}
      </div>

      {/* 2. Product Information Details */}
      <div className="px-1">
        <h3 className="mb-1 text-base font-bold tracking-wide text-white transition-colors group-hover:text-zinc-300 sm:text-lg">
          {name}
        </h3>
        <p className="text-xs font-normal leading-relaxed text-zinc-400 line-clamp-2 sm:text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}
