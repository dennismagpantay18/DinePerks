"use client";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand */}
        <div className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          DinePerks
        </div>

      </div>
    </header>
  );
}
