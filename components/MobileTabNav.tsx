"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineBell,
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

type MobileTabNavProps = {
  mobileSearchOpen: boolean;
  onSearchPress: () => void;
  onCartPress: () => void;
  onNotificationsPress: () => void;
};

export const MobileTabNav = ({
  mobileSearchOpen,
  onSearchPress,
  onCartPress,
  onNotificationsPress,
}: MobileTabNavProps) => {
  const pathname = usePathname();
  const homeActive = pathname === "/";

  const tabClass = (active: boolean) =>
    `flex flex-1 flex-col items-center justify-center gap-1 py-2 text-xs font-medium transition ${
      active ? "text-brand" : "text-gray-500 hover:text-gray-800"
    }`;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
      aria-label="Mobile navigation"
    >
      <div className="mx-auto flex max-w-7xl">
        <Link href="/" className={tabClass(homeActive)} aria-current={homeActive ? "page" : undefined}>
          <HiOutlineHome className="h-6 w-6" aria-hidden />
          <span>Home</span>
        </Link>

        <button
          type="button"
          className={tabClass(mobileSearchOpen)}
          onClick={onSearchPress}
          aria-expanded={mobileSearchOpen}
          aria-label="Search"
        >
          <HiOutlineMagnifyingGlass className="h-6 w-6" aria-hidden />
          <span>Search</span>
        </button>

        <button
          type="button"
          className={tabClass(false)}
          aria-label="Cart"
          onClick={onCartPress}
        >
          <span className="relative inline-flex">
            <HiOutlineShoppingCart className="h-6 w-6" aria-hidden />
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-0.5 text-[10px] font-semibold text-white">
              0
            </span>
          </span>
          <span>Cart</span>
        </button>

        <button
          type="button"
          className={tabClass(false)}
          aria-label="Notifications"
          onClick={onNotificationsPress}
        >
          <HiOutlineBell className="h-6 w-6" aria-hidden />
          <span>Alerts</span>
        </button>
      </div>
    </nav>
  );
};
