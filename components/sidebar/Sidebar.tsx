"use client";

import { useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SidebarCategoriesSection } from "./SidebarCategoriesSection";
import { SidebarCategoryTag } from "./SidebarCategoryTag";
import { SidebarDesktopTitleRow } from "./SidebarDesktopTitleRow";
import { SidebarDiscountSection } from "./SidebarDiscountSection";
import { SidebarMobileTitleBar } from "./SidebarMobileTitleBar";
import { SidebarPriceSection } from "./SidebarPriceSection";
import type { DiscountFilter } from "@/constants/discountFilters";
import type { SidebarProps } from "./types";

export const Sidebar = ({
  discount,
  onDiscountChange,
  priceMin,
  priceMax,
  onPriceMinChange,
  onPriceMaxChange,
  onSavePrice,
  onClearPrice,
  onClearAll,
  showCategoryTag,
  onDismissCategoryTag,
  appliedMin,
  appliedMax,
  catalogMin,
  catalogMax,
}: SidebarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const discountChange = (value: DiscountFilter) => {
    onDiscountChange(value);
    closeMobile();
  };

  const savePrice = () => {
    onSavePrice();
    closeMobile();
  };

  const dismissTag = () => {
    onDismissCategoryTag();
    closeMobile();
  };

  const clearAll = () => {
    onClearAll();
    closeMobile();
  };

  const labelMin = appliedMin !== null ? appliedMin : catalogMin;
  const labelMax = appliedMax !== null ? appliedMax : catalogMax;

  return (
    <div className="flex w-full flex-col lg:w-72 lg:shrink-0">
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="mb-4 inline-flex items-center gap-2 self-start rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-gray-50 lg:hidden"
      >
        <HiAdjustmentsHorizontal className="h-5 w-5 text-brand" aria-hidden />
        Filters
      </button>

      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          aria-label="Close filters"
          onClick={closeMobile}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col border-r border-gray-200 bg-gray-50 shadow-xl transition-transform duration-300 ease-out lg:static lg:z-auto lg:max-w-none lg:border-0 lg:bg-transparent lg:shadow-none ${
          mobileOpen ? "translate-x-0" : "-translate-x-full pointer-events-none lg:pointer-events-auto lg:translate-x-0"
        }`}
      >
        <SidebarMobileTitleBar onClearAll={clearAll} onClose={closeMobile} />

        <div className="min-h-0 flex-1 overflow-y-auto lg:overflow-visible">
          <aside className="space-y-5 rounded-md bg-white p-4">
            <SidebarDesktopTitleRow onClearAll={onClearAll} />

            <SidebarCategoryTag show={showCategoryTag} onDismiss={dismissTag} />

            <SidebarDiscountSection discount={discount} onDiscountSelect={discountChange} />

            <SidebarPriceSection
              priceMin={priceMin}
              priceMax={priceMax}
              onPriceMinChange={onPriceMinChange}
              onPriceMaxChange={onPriceMaxChange}
              labelMin={labelMin}
              labelMax={labelMax}
              onClearPrice={onClearPrice}
              onSavePrice={savePrice}
            />

            <SidebarCategoriesSection />
          </aside>
        </div>
      </div>
    </div>
  );
};
