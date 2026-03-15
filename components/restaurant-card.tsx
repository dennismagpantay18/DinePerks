"use client";

import Image from "next/image";
import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Restaurant } from "@/lib/types";
import { cn } from "@/lib/utils";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onSelect: (restaurant: Restaurant) => void;
  onReserve: (restaurant: Restaurant, time: string) => void;
}

export function RestaurantCard({ restaurant, onSelect, onReserve }: RestaurantCardProps) {
  const priceSymbol = "$".repeat(restaurant.priceLevel);

  return (
    <div 
      className="bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 transition-all hover:shadow-md"
      onClick={() => onSelect(restaurant)}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        
        {/* Perk Badge */}
        <div className="absolute top-3 left-3 bg-perk text-perk-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
          ${restaurant.perkAmount} {restaurant.perk}
        </div>
        
        {/* Favorite Button */}
        <button 
          className="absolute top-3 right-3 size-9 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:bg-card hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
          }}
          aria-label="Add to favorites"
        >
          <Heart className="size-4 text-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">
              {restaurant.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              {restaurant.cuisine} · {restaurant.location}
            </p>
          </div>
          
          <div className="flex items-center gap-1 shrink-0">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium text-foreground">{restaurant.rating}</span>
          </div>
        </div>

        {/* Price Level */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-foreground">{priceSymbol}</span>
          <span className="text-sm text-muted-foreground">
            {restaurant.priceLevel >= 4 ? "Fine Dining" : restaurant.priceLevel >= 3 ? "Upscale" : "Casual"}
          </span>
        </div>

        {/* Available Times */}
        <div className="flex items-center gap-2 flex-wrap">
          {restaurant.availableTimes.slice(0, 4).map((time) => (
            <Button
              key={time}
              variant="outline"
              size="sm"
              className="h-8 px-3 text-xs font-medium border-border hover:bg-accent hover:text-accent-foreground hover:border-accent"
              onClick={(e) => {
                e.stopPropagation();
                onReserve(restaurant, time);
              }}
            >
              {time}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
