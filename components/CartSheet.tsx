"use client";

import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type CartSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton
        className={cn(
          "flex h-full w-full max-w-md flex-col gap-0 border-l p-0 sm:max-w-md",
        )}
      >
        <SheetHeader className="shrink-0 space-y-0 border-b border-border px-4 py-4 pr-12 text-left">
          <SheetTitle className="text-lg font-bold text-foreground">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-6 py-12">
          <HiOutlineShoppingCart
            className="h-20 w-20 text-gray-300"
            strokeWidth={1}
            aria-hidden
          />
          <p className="mt-6 text-center text-base font-bold text-slate-900">Your cart is empty.</p>
          <p className="mt-1 text-center text-sm text-slate-500">Add items to get started</p>
        </div>

        <SheetFooter className="shrink-0 gap-4 border-t border-border bg-background px-4 py-4 sm:flex-col">
          <div className="flex w-full items-center justify-between text-sm font-bold text-slate-900">
            <span>Subtotal:</span>
            <span>₦0</span>
          </div>
          <Button
            type="button"
            className="h-12 w-full rounded-full bg-[#8a9a8c] text-base font-bold text-white hover:bg-[#7a8a7c]"
            disabled
          >
            Proceed To Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
