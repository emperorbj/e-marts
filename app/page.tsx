"use client";

import { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductGrid } from "@/components/ProductGrid";
import { Sidebar } from "@/components/sidebar";
import type { DiscountFilter } from "@/constants/discountFilters";
import { products as allProducts } from "@/data/products";
import type { Product } from "@/types/product";

type SortOption = "low" | "high";

const currentPrice = (p: Product) => {
  if (p.sale_price > 0 && p.sale_price < p.price) {
    return p.sale_price;
  }
  return p.price;
};

const Home = () => {
  const mensProducts = useMemo(
    () =>
      allProducts.filter((product) => {
        const subCategory = product.sub_category
          .toLowerCase()
          .replace(/\u2019/g, "'");
        return subCategory.includes("men's clothing");
      }),
    [],
  );

  const catalogPriceBounds = useMemo(() => {
    if (mensProducts.length === 0) return { min: 0, max: 0 };
    const prices = mensProducts.map((product) => product.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, [mensProducts]);

  const [sort, setSort] = useState<SortOption>("high");
  const [discount, setDiscount] = useState<DiscountFilter>("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [appliedMin, setAppliedMin] = useState<number | null>(null);
  const [appliedMax, setAppliedMax] = useState<number | null>(null);
  const [showCategoryTag, setShowCategoryTag] = useState(true);

  const filteredSortedProducts = useMemo(() => {
    let listOfProducts = [...mensProducts];

    if (discount === "with") {
      listOfProducts = listOfProducts.filter((product) => product.sale_price > 0);
    } else if (discount === "without") {
      listOfProducts = listOfProducts.filter((product) => product.sale_price === 0);
    }

    listOfProducts = listOfProducts.filter((product) => {
      if (appliedMin !== null && product.price < appliedMin) return false;
      if (appliedMax !== null && product.price > appliedMax) return false;
      return true;
    });

    listOfProducts.sort((first, second) => {
      const priceA = currentPrice(first);
      const priceB = currentPrice(second);
      return sort === "low" ? priceA - priceB : priceB - priceA;
    });

    return listOfProducts;
  }, [mensProducts, discount, appliedMin, appliedMax, sort]);

  const handleClearPrice = () => {
    setPriceMin("");
    setPriceMax("");
    setAppliedMin(null);
    setAppliedMax(null);
  };

  const handleSavePrice = () => {
    const minRaw = priceMin.trim();
    const maxRaw = priceMax.trim();
    setAppliedMin(minRaw === "" ? null : Number(minRaw));
    setAppliedMax(maxRaw === "" ? null : Number(maxRaw));
  };

  const handleClearAll = () => {
    setDiscount("all");
    handleClearPrice();
    setSort("high");
    setShowCategoryTag(true);
  };

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 bg-gray-100 px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-6 lg:pb-6">
        <div className="mb-6">
          <Breadcrumb />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <Sidebar
            discount={discount}
            onDiscountChange={setDiscount}
            priceMin={priceMin}
            priceMax={priceMax}
            onPriceMinChange={setPriceMin}
            onPriceMaxChange={setPriceMax}
            onSavePrice={handleSavePrice}
            onClearPrice={handleClearPrice}
            onClearAll={handleClearAll}
            showCategoryTag={showCategoryTag}
            onDismissCategoryTag={() => setShowCategoryTag(false)}
            appliedMin={appliedMin}
            appliedMax={appliedMax}
            catalogMin={catalogPriceBounds.min}
            catalogMax={catalogPriceBounds.max}
          />

          <div className="min-w-0 flex-1">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl font-bold text-gray-900">
                Men&apos;s Clothing ({filteredSortedProducts.length} products found)
              </h1>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <span className="whitespace-nowrap">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                >
                  <option value="low">Lowest Price</option>
                  <option value="high">Highest Price</option>
                </select>
              </label>
            </div>
            <ProductGrid products={filteredSortedProducts} />
          </div>
        </div>
    </main>
  );
};

export default Home;
