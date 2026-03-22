"use client";

import Image from "next/image";
import { useState } from "react";
import { CartSheet } from "@/components/CartSheet";
import { MobileTabNav } from "@/components/MobileTabNav";
import { NotificationsSheet } from "@/components/NotificationsSheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineXMark,
} from "react-icons/hi2";

export const Header = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const accountTrigger = (
    <Button
      type="button"
      variant="ghost"
      className="h-auto cursor-pointer gap-2 px-0 font-medium text-slate-900 hover:bg-transparent"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/80 bg-white/80">
        <HiOutlineUser className="h-5 w-5" aria-hidden />
      </span>
      <span className="hidden sm:inline">Sign In / Up</span>
    </Button>
  );

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
                onClick={() => setCartOpen(true)}
                className="relative cursor-pointer flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand/90"
                aria-label="Cart"
              >
                <HiOutlineShoppingCart className="h-5 w-5" aria-hidden />
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-semibold text-slate-900 ring-1 ring-gray-200">
                  0
                </span>
              </button>

              <button
                type="button"
                onClick={() => setNotificationsOpen(true)}
                className="flex cursor-pointer h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand/90"
                aria-label="Notifications"
              >
                <HiOutlineBell className="h-5 w-5" aria-hidden />
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>{accountTrigger}</DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-48">
                  <DropdownMenuItem className="cursor-pointer">Sign in</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">As a customer</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">As a vendor</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="ml-auto flex shrink-0 items-center lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-gray-200/80 bg-white/80"
                    aria-label="Sign In / Up"
                  >
                    <HiOutlineUser className="h-5 w-5" aria-hidden />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-48">
                  <DropdownMenuItem className="cursor-pointer">Sign in</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">As a customer</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">As a vendor</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
      <NotificationsSheet open={notificationsOpen} onOpenChange={setNotificationsOpen} />

      <MobileTabNav
        mobileSearchOpen={mobileSearchOpen}
        onSearchPress={() => setMobileSearchOpen((open) => !open)}
        onCartPress={() => setCartOpen(true)}
        onNotificationsPress={() => setNotificationsOpen(true)}
      />
    </>
  );
};
