"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-xl font-medium tracking-tight text-white lg:text-2xl">
              DinePerks
            </span>
          </Link>

          {/* CTA */}
          <Button className="rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:opacity-90 transition">
            Book a Table
          </Button>

        </div>
      </div>
    </header>
  );
}
