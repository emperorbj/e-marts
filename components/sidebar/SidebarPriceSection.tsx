import { formatNairaNum } from "./formatNaira";

type SidebarPriceSectionProps = {
  priceMin: string;
  priceMax: string;
  onPriceMinChange: (value: string) => void;
  onPriceMaxChange: (value: string) => void;
  labelMin: number;
  labelMax: number;
  onClearPrice: () => void;
  onSavePrice: () => void;
};

export const SidebarPriceSection = ({
  priceMin,
  priceMax,
  onPriceMinChange,
  onPriceMaxChange,
  labelMin,
  labelMax,
  onClearPrice,
  onSavePrice,
}: SidebarPriceSectionProps) => {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-slate-900">Price (₦)</p>
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex gap-3">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs text-gray-400">{formatNairaNum(labelMin)}</p>
            <label className="sr-only" htmlFor="price-min">
              Minimum price
            </label>
            <input
              id="price-min"
              type="number"
              min={0}
              value={priceMin}
              onChange={(e) => onPriceMinChange(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              placeholder="Min"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs text-gray-400">{formatNairaNum(labelMax)}</p>
            <label className="sr-only" htmlFor="price-max">
              Maximum price
            </label>
            <input
              id="price-max"
              type="number"
              min={0}
              value={priceMax}
              onChange={(e) => onPriceMaxChange(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              placeholder="Max"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <button
            type="button"
            onClick={onClearPrice}
            className="text-sm font-medium text-slate-900 hover:text-slate-700"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={onSavePrice}
            className="text-sm font-semibold text-brand hover:text-brand/90"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
