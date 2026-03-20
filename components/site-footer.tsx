import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-medium">
              DinePerks
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Discover exceptional dining experiences with exclusive perks and
              credits at participating restaurants.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Discover
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  All Restaurants
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Browse by Area
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  For Restaurants
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} DinePerks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
