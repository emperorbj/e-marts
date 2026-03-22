import { HiChevronRight } from "react-icons/hi2";

export const Breadcrumb = () => {
  const breadCrumbItems = ["Home", "Market", "Search", "Mens-Clothing"];
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-2">
        {breadCrumbItems.map((label, index) => (
          <li key={label} className="flex items-center gap-2">
            {index > 0 && (
              <HiChevronRight className="h-4 w-4 shrink-0 text-gray-300" aria-hidden />
            )}
            <span
              className={
                index === breadCrumbItems.length - 1 ? "text-gray-400" : "hover:text-gray-700"
              }
            >
              {label}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};
