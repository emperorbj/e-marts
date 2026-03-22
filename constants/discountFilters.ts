export const DISCOUNT_FILTER_OPTIONS = [
  { value: "all" as const, label: "Show All" },
  { value: "with" as const, label: "With Discount" },
  { value: "without" as const, label: "Without Discount" },
] as const;

export type DiscountFilter = (typeof DISCOUNT_FILTER_OPTIONS)[number]["value"];
