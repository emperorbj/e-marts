import { HiXMark } from "react-icons/hi2";

type SidebarCategoryTagProps = {
  show: boolean;
  onDismiss: () => void;
};

export const SidebarCategoryTag = ({ show, onDismiss }: SidebarCategoryTagProps) => {
  if (!show) return null;

  return (
    <div className="flex flex-wrap gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800">
        Mens-Clothing
        <button
          type="button"
          onClick={onDismiss}
          className="text-gray-400 hover:text-slate-700"
          aria-label="Remove category filter"
        >
          <HiXMark className="h-3.5 w-3.5" aria-hidden />
        </button>
      </span>
    </div>
  );
};
