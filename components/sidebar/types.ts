import type { DiscountFilter } from "@/constants/discountFilters";

export type SidebarProps = {
  discount: DiscountFilter;
  onDiscountChange: (value: DiscountFilter) => void;
  priceMin: string;
  priceMax: string;
  onPriceMinChange: (value: string) => void;
  onPriceMaxChange: (value: string) => void;
  onSavePrice: () => void;
  onClearPrice: () => void;
  onClearAll: () => void;
  showCategoryTag: boolean;
  onDismissCategoryTag: () => void;
  appliedMin: number | null;
  appliedMax: number | null;
  catalogMin: number;
  catalogMax: number;
};
