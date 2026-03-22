import {
  DISCOUNT_FILTER_OPTIONS,
  type DiscountFilter,
} from "@/constants/discountFilters";
import { DiscountIndicator } from "./DiscountIndicator";

type SidebarDiscountSectionProps = {
  discount: DiscountFilter;
  onDiscountSelect: (value: DiscountFilter) => void;
};

export const SidebarDiscountSection = ({
  discount,
  onDiscountSelect,
}: SidebarDiscountSectionProps) => {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-slate-900">Discount</p>
      <div className="divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {DISCOUNT_FILTER_OPTIONS.map(({ value, label }) => (
          <label
            key={value}
            className="flex cursor-pointer items-center gap-3 px-3 py-3.5 text-sm text-slate-800"
          >
            <input
              type="radio"
              name="discount"
              value={value}
              checked={discount === value}
              onChange={() => onDiscountSelect(value)}
              className="sr-only"
            />
            <DiscountIndicator selected={discount === value} />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
