"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock } from "lucide-react";
import type { Restaurant } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface RestaurantGridProps {
  restaurants: Restaurant[];
  filterChips: string[];
  selectedArea: string;
  onSelectArea: (area: string) => void;
  onSelectRestaurant?: (id: string) => void;
}

export function RestaurantGrid({
  restaurants,
  filterChips,
  selectedArea,
  onSelectArea,
  onSelectRestaurant,
}: RestaurantGridProps) {
  const getPerkBadgeText = (restaurant: Restaurant) => {
    if (restaurant.perk === "Dining Credit") {
      return `$${restaurant.perkAmount} Credit`;
    }

    return `${restaurant.perkAmount}% Off`;
  };

  const getPriceLevelText = (priceLevel: number) => {
    return "$".repeat(priceLevel);
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
              Featured Restaurants
            </h2>
            <p className="mt-2 text-muted-foreground">
              Explore curated dining offers by area
            </p>
          </div>
          <Link
            href="/restaurants"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            View all restaurants
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {filterChips.map((filter) => {
            const isActive = selectedArea === filter;

            return (
              <button
                key={filter}
                onClick={() => onSelectArea(filter)}
               className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
  isActive
    ? "bg-primary text-primary-foreground shadow"
    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:shadow hover:-translate-y-0.5"
}`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-6">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{selectedArea}</span>{" "}
            • {restaurants.length} restaurant{restaurants.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-lg"
              onClick={() => onSelectRestaurant?.(restaurant.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-3 top-3">
                  <Badge className="bg-perk text-perk-foreground hover:bg-perk/90">
                    {getPerkBadgeText(restaurant)}
                  </Badge>
                </div>

                <button
                  className="absolute right-3 top-3 rounded-full bg-card/80 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
                  aria-label="Save restaurant"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    className="h-5 w-5 text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg font-medium text-card-foreground">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-card-foreground">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{restaurant.cuisine}</span>
                  <span>·</span>
                  <span>{getPriceLevelText(restaurant.priceLevel)}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {restaurant.location}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {restaurant.availableTimes.slice(0, 3).map((time) => (
                    <button
                      key={time}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectRestaurant?.(restaurant.id);
                      }}
                      className="flex items-center gap-1 rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      <Clock className="h-3 w-3" />
                      {time}
                    </button>
                  ))}
                  {restaurant.availableTimes.length > 3 && (
                    <span className="flex items-center px-2 text-xs text-muted-foreground">
                      +{restaurant.availableTimes.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {restaurants.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-8 text-center">
            <h3 className="text-lg font-medium text-card-foreground">
              No restaurants available in {selectedArea}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try selecting another city.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
