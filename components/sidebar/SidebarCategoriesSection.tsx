import { HiMinus } from "react-icons/hi2";

export const SidebarCategoriesSection = () => {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-slate-900">Categories</p>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="flex items-center justify-between bg-slate-100 px-3 py-2.5">
          <span className="text-sm font-bold text-slate-900">Fashion</span>
          <HiMinus className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />
        </div>
        <div className="border-t border-gray-100 px-3 py-3">
          <div className="flex items-center gap-3 text-sm text-slate-800">
            <span
              className="h-4 w-4 shrink-0 rounded-full border-2 border-gray-300 bg-white"
              aria-hidden
            />
            Men&apos;s Clothing
          </div>
        </div>
      </div>
    </div>
  );
};
