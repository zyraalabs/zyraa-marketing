"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  email: string;
  image?: string;
}

export function UserMenu({ name, email, image }: Props) {
  const [open, setOpen] = useState(false);

  const initial = name[0]?.toUpperCase() ?? "U";
  const signOutUrl = "/api/auth/logout";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="size-8 rounded-full overflow-hidden flex items-center justify-center bg-brand text-white text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 shrink-0 cursor-pointer"
      >
        {image ? (
          <Image
            src={image}
            alt={name}
            width={32}
            height={32}
            className="size-full object-cover"
          />
        ) : (
          initial
        )}
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-10 z-50 min-w-52 rounded-xl border border-border-mid bg-card shadow-lg">
            <div className="px-4 py-3">
              <p className="text-sm font-medium text-foreground truncate">
                {name}
              </p>
              <p className="text-xs text-muted-foreground truncate">{email}</p>
            </div>
            <div className={cn("border-t border-border")} />
            <div className="p-1.5">
              <a
                href={signOutUrl}
                className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                Sign out
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
