"use client";

import Image from "next/image";
import { ArrowLeft, Star, MapPin, Clock, Info, ChevronLeft, ChevronRight, Users, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Restaurant } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface RestaurantDetailScreenProps {
  restaurant: Restaurant;
  onBack: () => void;
  onReserve: (restaurant: Restaurant, time: string, date: string, partySize: number) => void;
}

const dates = [
  { day: "Thu", date: "13", month: "Mar" },
  { day: "Fri", date: "14", month: "Mar" },
  { day: "Sat", date: "15", month: "Mar" },
  { day: "Sun", date: "16", month: "Mar" },
  { day: "Mon", date: "17", month: "Mar" },
  { day: "Tue", date: "18", month: "Mar" },
  { day: "Wed", date: "19", month: "Mar" },
];

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

export function RestaurantDetailScreen({ restaurant, onBack, onReserve }: RestaurantDetailScreenProps) {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedPartySize, setSelectedPartySize] = useState(2);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const priceSymbol = "$".repeat(restaurant.priceLevel);

  const handleReserve = () => {
    if (selectedTime) {
      const date = `${dates[selectedDate].month} ${dates[selectedDate].date}`;
      onReserve(restaurant, selectedTime, date, selectedPartySize);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Hero Image */}
      <div className="relative h-72">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 pt-safe">
          <button
            onClick={onBack}
            className="size-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:bg-card"
            aria-label="Go back"
          >
            <ArrowLeft className="size-5 text-foreground" />
          </button>
          
          <div className="flex items-center gap-2">
            <button 
              className="size-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:bg-card"
              aria-label="Share"
            >
              <Share2 className="size-5 text-foreground" />
            </button>
            <button 
              className="size-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:bg-card"
              aria-label="Add to favorites"
            >
              <Heart className="size-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 -mt-8 relative">
        {/* Restaurant Info Card */}
        <div className="bg-card rounded-2xl p-5 shadow-lg border border-border/50">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h1 className="font-serif text-2xl font-semibold text-foreground">
                {restaurant.name}
              </h1>
              <p className="text-muted-foreground mt-1">
                {restaurant.cuisine} · {priceSymbol}
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-foreground">{restaurant.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
            <MapPin className="size-4" />
            <span className="text-sm">{restaurant.location}</span>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {restaurant.description}
          </p>
        </div>

        {/* Perk Section */}
        <div className="mt-4 bg-perk/10 border border-perk/20 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-perk rounded-full flex items-center justify-center">
              <span className="text-perk-foreground font-bold text-lg">$</span>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                ${restaurant.perkAmount} {restaurant.perk}
              </p>
              <p className="text-sm text-muted-foreground">
                Applied automatically at checkout
              </p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-perk/20">
            <div className="flex items-start gap-2">
              <Info className="size-4 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                This perk is valid for reservations between 5-7 PM. Credit will be applied to your final bill. Not combinable with other offers.
              </p>
            </div>
          </div>
        </div>

        {/* Date Selector */}
        <div className="mt-6">
          <h2 className="font-serif text-lg font-semibold text-foreground mb-3">
            Select Date
          </h2>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={cn(
                  "shrink-0 w-16 py-3 rounded-xl text-center transition-all",
                  selectedDate === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <p className="text-[10px] uppercase tracking-wide opacity-70">{date.day}</p>
                <p className="text-xl font-semibold mt-0.5">{date.date}</p>
                <p className="text-[10px] uppercase tracking-wide opacity-70">{date.month}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Party Size Selector */}
        <div className="mt-6">
          <h2 className="font-serif text-lg font-semibold text-foreground mb-3">
            Party Size
          </h2>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {partySizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedPartySize(size)}
                className={cn(
                  "shrink-0 size-12 rounded-xl flex items-center justify-center transition-all",
                  selectedPartySize === size
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <span className="font-semibold">{size}</span>
              </button>
            ))}
            <span className="text-sm text-muted-foreground ml-1">guests</span>
          </div>
        </div>

        {/* Available Times */}
        <div className="mt-6">
          <h2 className="font-serif text-lg font-semibold text-foreground mb-3">
            Available Times
          </h2>
          <div className="grid grid-cols-4 gap-2">
            {restaurant.availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={cn(
                  "py-3 rounded-xl text-sm font-medium transition-all",
                  selectedTime === time
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 pb-safe z-50">
        <div className="max-w-md mx-auto">
          <Button
            className="w-full h-14 text-base font-semibold rounded-xl"
            disabled={!selectedTime}
            onClick={handleReserve}
          >
            {selectedTime 
              ? `Reserve for ${selectedTime}` 
              : "Select a time to continue"
            }
          </Button>
        </div>
      </div>
    </div>
  );
}
