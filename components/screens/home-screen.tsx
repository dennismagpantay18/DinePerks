"use client";

import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { RestaurantCard } from "@/components/restaurant-card";
import { restaurants, filterChips } from "@/lib/data";
import { Restaurant } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface HomeScreenProps {
  onSelectRestaurant: (restaurant: Restaurant) => void;
  onReserve: (restaurant: Restaurant, time: string) => void;
}

export function HomeScreen({ onSelectRestaurant, onReserve }: HomeScreenProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-md z-40 border-b border-border/50">
        <div className="px-4 pt-4 pb-3">
          {/* Location */}
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center gap-1.5 text-foreground">
              <MapPin className="size-4 text-accent" />
              <span className="text-sm font-medium">New York City</span>
              <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="text-right">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Tonight</p>
              <p className="text-sm font-medium text-foreground">Mar 13, 2026</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search restaurants, cuisines..."
              className="w-full h-11 pl-10 pr-12 bg-secondary rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 size-8 bg-card rounded-lg flex items-center justify-center border border-border/50">
              <SlidersHorizontal className="size-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="px-4 pb-3 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2">
            {filterChips.map((chip) => (
              <button
                key={chip}
                onClick={() => setSelectedFilter(selectedFilter === chip ? null : chip)}
                className={cn(
                  "shrink-0 h-8 px-4 rounded-full text-xs font-medium transition-all",
                  selectedFilter === chip
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-serif text-xl font-semibold text-foreground">
              Available Tonight
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Exclusive perks at top restaurants
            </p>
          </div>
          <button className="text-sm font-medium text-accent">
            See all
          </button>
        </div>

        {/* Restaurant List */}
        <div className="space-y-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onSelect={onSelectRestaurant}
              onReserve={onReserve}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
