import Image from "next/image";

export const LoadingOverlay = () => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white/45 backdrop-blur-md backdrop-saturate-150"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/50 bg-white/40 px-10 py-8">
        <Image
          src="/emart-logo.svg"
          alt=""
          width={208}
          height={60}
          priority
          className="h-12 w-auto animate-pulse sm:h-14"
        />
        <span className="text-sm font-medium text-slate-600">Loading…</span>
      </div>
    </div>
  );
};
