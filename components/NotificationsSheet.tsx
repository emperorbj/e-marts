"use client";

import { useState } from "react";
import { HiOutlineBell } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NotificationsSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type NotifTab = "all" | "unread";

export const NotificationsSheet = ({ open, onOpenChange }: NotificationsSheetProps) => {
  const [tab, setTab] = useState<NotifTab>("all");
  const allCount = 0;
  const unreadCount = 0;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton
        className={cn("flex h-full w-full max-w-md flex-col gap-0 border-l p-0 sm:max-w-md")}
      >
        <SheetHeader className="shrink-0 space-y-0 border-b border-border px-4 py-4 pr-12 text-left">
          <SheetTitle className="text-lg font-bold text-foreground">Notifications</SheetTitle>
        </SheetHeader>

        <div className="flex shrink-0 border-b border-border bg-muted/40">
          <button
            type="button"
            onClick={() => setTab("all")}
            className={cn(
              "flex-1 border-b-2 py-3 text-center text-sm font-medium transition-colors",
              tab === "all"
                ? "border-slate-900 text-slate-900"
                : "border-transparent text-slate-500 hover:text-slate-700",
            )}
          >
            All ({allCount})
          </button>
          <button
            type="button"
            onClick={() => setTab("unread")}
            className={cn(
              "flex-1 border-b-2 py-3 text-center text-sm font-medium transition-colors",
              tab === "unread"
                ? "border-slate-900 text-slate-900"
                : "border-transparent text-slate-500 hover:text-slate-700",
            )}
          >
            Unread ({unreadCount})
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-6 py-12">
          <HiOutlineBell
            className="h-20 w-20 text-amber-400"
            aria-hidden
          />
          <p className="mt-6 text-center text-base font-semibold text-slate-800">No notifications</p>
          <p className="mt-1 max-w-xs text-center text-sm text-slate-500">
            You don&apos;t have any notifications yet.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
