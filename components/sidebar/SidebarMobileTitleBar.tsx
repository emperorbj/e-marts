import { HiXMark } from "react-icons/hi2";

type SidebarMobileTitleBarProps = {
  onClearAll: () => void;
  onClose: () => void;
};

export const SidebarMobileTitleBar = ({ onClearAll, onClose }: SidebarMobileTitleBarProps) => {
  return (
    <div className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
      <h2 className="text-base font-bold text-slate-900">Filters</h2>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onClearAll}
          className="text-sm font-medium text-brand hover:text-brand/90"
        >
          Clear All
        </button>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-2 text-slate-600 hover:bg-gray-100"
          aria-label="Close filters"
        >
          <HiXMark className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
