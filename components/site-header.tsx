"use client";

import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-medium tracking-tight text-primary-foreground lg:text-2xl">
              DinePerks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Restaurants
            </Link>
            <Link
              href="/perks"
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Perks
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button
              className="hidden rounded-full p-2 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground lg:flex"
              aria-label="Search restaurants"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="hidden rounded-full p-2 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground lg:flex"
              aria-label="User account"
            >
              <User className="h-5 w-5" />
            </button>
            <Button
              variant="outline"
              className="hidden border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary lg:inline-flex"
            >
              Book a Table
            </Button>

            {/* Mobile menu button */}
            <button
              className="rounded-full p-2 text-primary-foreground lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="/"
              className="py-3 text-base font-medium text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Restaurants
            </Link>
            <Link
              href="/perks"
              className="py-3 text-base font-medium text-primary-foreground/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              Perks
            </Link>
            <Link
              href="/about"
              className="py-3 text-base font-medium text-primary-foreground/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-3 text-base font-medium text-primary-foreground/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-primary-foreground/30 bg-transparent text-primary-foreground"
              >
                Sign In
              </Button>
              <Button className="flex-1 bg-primary-foreground text-primary">
                Book a Table
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
