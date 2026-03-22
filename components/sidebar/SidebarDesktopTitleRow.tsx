type SidebarDesktopTitleRowProps = {
  onClearAll: () => void;
};

export const SidebarDesktopTitleRow = ({ onClearAll }: SidebarDesktopTitleRowProps) => {
  return (
    <div className="hidden items-center justify-between lg:flex">
      <h2 className="text-base font-bold text-slate-900">Filters</h2>
      <button
        type="button"
        onClick={onClearAll}
        className="text-sm font-medium text-brand hover:text-brand/90"
      >
        Clear All
      </button>
    </div>
  );
};
