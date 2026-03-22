"use client";

import Image from "next/image";
import { useState } from "react";
import { MobileTabNav } from "@/components/MobileTabNav";
import {
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineXMark,
} from "react-icons/hi2";

export const Header = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/65 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <a href="/" className="flex shrink-0 items-center">
            <Image
              src="/emart-logo.svg"
              alt="E-Marts"
              width={208}
              height={60}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </a>

          <div className="relative hidden min-w-0 flex-1 lg:block">
            <input
              type="search"
              placeholder="Search products, brands and categories..."
              className="w-full rounded-full border border-brand bg-white/80 py-3 pl-4 pr-12 text-sm text-slate-900 shadow-inner shadow-slate-900/5 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
              readOnly
              aria-label="Search products"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <HiOutlineMagnifyingGlass className="h-5 w-5" aria-hidden />
            </span>
          </div>

          <div className="ml-auto hidden shrink-0 items-center gap-3 lg:flex">
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand/90"
              aria-label="Cart"
            >
              <HiOutlineShoppingCart className="h-5 w-5" aria-hidden />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-semibold text-slate-900 ring-1 ring-gray-200">
                0
              </span>
            </button>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand/90"
              aria-label="Notifications"
            >
              <HiOutlineBell className="h-5 w-5" aria-hidden />
            </button>

            <details className="relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-slate-900 [&::-webkit-details-marker]:hidden">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/80 bg-white/80">
                  <HiOutlineUser className="h-5 w-5" aria-hidden />
                </span>
                <span className="hidden sm:inline">Sign In / Up</span>
              </summary>
              <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white/95 py-1 shadow-lg backdrop-blur-sm">
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Create account
                </button>
              </div>
            </details>
          </div>

          <div className="ml-auto flex shrink-0 items-center lg:hidden">
            <details className="relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-slate-900 [&::-webkit-details-marker]:hidden">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/80 bg-white/80">
                  <HiOutlineUser className="h-5 w-5" aria-hidden />
                </span>
                <span className="sr-only sm:not-sr-only sm:inline">Sign In / Up</span>
              </summary>
              <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white/95 py-1 shadow-lg backdrop-blur-sm">
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                >
                  Create account
                </button>
              </div>
            </details>
          </div>
        </div>

        {mobileSearchOpen ? (
          <div className="relative lg:hidden">
            <input
              type="search"
              placeholder="Search products, brands and categories..."
              className="w-full rounded-full border border-brand bg-white/80 py-3 pl-4 pr-24 text-sm text-slate-900 shadow-inner shadow-slate-900/5 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25"
              readOnly
              aria-label="Search products"
            />
            <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 text-gray-400">
              <HiOutlineMagnifyingGlass className="h-5 w-5" aria-hidden />
            </span>
            <button
              type="button"
              onClick={() => setMobileSearchOpen(false)}
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              aria-label="Close search"
            >
              <HiOutlineXMark className="h-5 w-5" aria-hidden />
            </button>
          </div>
        ) : null}
      </div>
    </header>
    <MobileTabNav
      mobileSearchOpen={mobileSearchOpen}
      onSearchPress={() => setMobileSearchOpen((open) => !open)}
    />
    </>
  );
};
