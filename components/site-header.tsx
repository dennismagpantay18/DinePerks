"use client";

import Link from "next/link";
import { Settings } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <div className="font-serif text-2xl font-semibold tracking-tight text-white">
          DinePerks
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Link
            href="/partner-login"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <Settings className="h-4 w-4" />
            <span>For Restaurants</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
