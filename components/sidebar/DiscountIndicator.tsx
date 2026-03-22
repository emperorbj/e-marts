import { HiCheck } from "react-icons/hi2";

type DiscountIndicatorProps = {
  selected: boolean;
};

export const DiscountIndicator = ({ selected }: DiscountIndicatorProps) => {
  if (selected) {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
        <HiCheck className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
      </span>
    );
  }
  return (
    <span
      className="h-5 w-5 shrink-0 rounded-full border-2 border-gray-300 bg-white"
      aria-hidden
    />
  );
};
