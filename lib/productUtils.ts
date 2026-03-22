import type { Product } from "@/types/product";

export const formatPriceInNaira = (price: number) => {
  return `₦${price.toLocaleString("en-NG")}`;
};

export const getFirstImage = (product: Product) => {
  if (product.gallery && product.gallery.length > 0) {
    return product.gallery[0];
  }
  return product.image;
};

export const isOnSale = (product: Product) => {
  return product.sale_price > 0 && product.sale_price < product.price;
};

export const discountPercent = (product: Product) => {
  if (!isOnSale(product)) return 0;
  return Math.round((1 - product.sale_price / product.price) * 100);
};
