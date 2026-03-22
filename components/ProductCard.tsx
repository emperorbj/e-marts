import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi2";

import {
  discountPercent,
  formatPriceInNaira,
  getFirstImage,
  isOnSale,
} from "@/lib/productUtils";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const onSale = isOnSale(product);
  const discountPercentage = discountPercent(product);
  const lowStock = product.quantity <= 5;

  return (
    <article className="flex flex-col rounded-lg border border-gray-100 bg-white p-3 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={getFirstImage(product)}
          alt={product.name}
          fill
          className="object-cover"
        />
        {onSale && discountPercentage > 0 && (
          <span className="absolute right-2 top-2 rounded bg-brand px-2 py-0.5 text-xs font-semibold text-white">
            -{discountPercentage}%
          </span>
        )}
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="line-clamp-2 flex-1 text-sm font-bold text-gray-900">{product.name}</h3>
        <button
          type="button"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
          aria-label={`Add ${product.name} to cart`}
        >
          <HiOutlineShoppingCart className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="mt-2 flex flex-wrap items-baseline gap-2">
        {onSale ? (
          <>
            <span className="text-sm font-bold text-gray-900">{formatPriceInNaira(product.sale_price)}</span>
            <span className="text-sm text-gray-400 line-through">{formatPriceInNaira(product.price)}</span>
          </>
        ) : (
          <span className="text-sm font-bold text-gray-900">{formatPriceInNaira(product.price)}</span>
        )}
      </div>

      <p
        className={`mt-2 text-xs font-medium ${lowStock ? "text-amber-600" : "text-gray-500"}`}
      >
        {lowStock ? "Few Units Left" : "In Stock"}
      </p>
    </article>
  );
};
