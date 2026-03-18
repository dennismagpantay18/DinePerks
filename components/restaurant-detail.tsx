"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Globe,
  ChevronLeft,
  Minus,
  Plus,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Restaurant } from "@/lib/types";

interface RestaurantDetailProps {
  restaurant: Restaurant;
  onBack: () => void;
  onReserve: (date: string, time: string, guests: number) => void;
}

const dates = [
  { day: "Today", date: "Mar 15" },
  { day: "Sun", date: "Mar 16" },
  { day: "Mon", date: "Mar 17" },
  { day: "Tue", date: "Mar 18" },
  { day: "Wed", date: "Mar 19" },
  { day: "Thu", date: "Mar 20" },
  { day: "Fri", date: "Mar 21" },
];

export function RestaurantDetail({
  restaurant,
  onBack,
  onReserve,
}: RestaurantDetailProps) {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);

  const handleReserve = () => {
    if (selectedTime) {
      onReserve(dates[selectedDate].date, selectedTime, guests);
    }
  };

  const getPerkTitle = () => {
    if (restaurant.perk.includes("%")) {
      return restaurant.perk;
    }
    return `$${restaurant.perkAmount} Dining Credit`;
  };

  const getPerkReminder = () => {
    if (restaurant.perk.includes("%")) {
      return `${restaurant.perk} will be applied`;
    }
    return `$${restaurant.perkAmount} credit will be applied`;
  };

  const getPerkDescription = () => {
    if (restaurant.perk.includes("%")) {
      return "Available during selected reservation times.";
    }

    if (restaurant.id === "1") {
      return "Valid with a minimum spend of $50.";
    }

    return "Available during selected reservation times.";
  };

  const getPerkTerms = () => {
    if (restaurant.perk.includes("%")) {
      return "Offer applies during listed time slots. No minimum spend required.";
    }

    if (restaurant.id === "1") {
      return "Credit applies to qualifying dine-in purchases during selected times only.";
    }

    return "Credit applies during selected reservation times.";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] w-full lg:h-[60vh]">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

        <button
          onClick={onBack}
          className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-medium text-card-foreground backdrop-blur-sm transition-colors hover:bg-card lg:left-8 lg:top-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-serif text-4xl font-medium text-primary-foreground lg:text-6xl">
              {restaurant.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-primary-foreground/80">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="font-medium">{restaurant.rating}</span>
              </div>
              <span>{restaurant.cuisine}</span>
              <span>{restaurant.priceLevel}</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {restaurant.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {restaurant.perk && (
              <div className="rounded-2xl bg-perk/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-perk">
                    <Gift className="h-6 w-6 text-perk-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground">
                      {getPerkTitle()}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {getPerkDescription()}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {getPerkTerms()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8">
              <h2 className="font-serif text-2xl font-medium text-foreground">
                About
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {restaurant.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-secondary p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Hours</span>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">
                  5:00 PM - 10:00 PM
                </p>
              </div>
              <div className="rounded-xl bg-secondary p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">Phone</span>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">
                  (415) 555-0123
                </p>
              </div>
              <div className="rounded-xl bg-secondary p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">Website</span>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">
                  Visit site
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-serif text-2xl font-medium text-foreground">
                Gallery
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-xl"
                  >
                    <Image
                      src={restaurant.image}
                      alt={`${restaurant.name} gallery ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-serif text-xl font-medium text-card-foreground">
                Make a Reservation
              </h3>

              <div className="mt-6">
                <label className="text-sm font-medium text-muted-foreground">
                  Select Date
                </label>
                <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
                  {dates.map((d, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(index)}
                      className={`flex min-w-[60px] flex-col items-center rounded-xl px-3 py-2 text-center transition-colors ${
                        selectedDate === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      <span className="text-xs">{d.day}</span>
                      <span className="text-sm font-medium">{d.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-medium text-muted-foreground">
                  Party Size
                </label>
                <div className="mt-2 flex items-center justify-between rounded-xl bg-secondary px-4 py-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="rounded-lg p-1 transition-colors hover:bg-background"
                    aria-label="Decrease guests"
                  >
                    <Minus className="h-5 w-5 text-muted-foreground" />
                  </button>
                  <span className="font-medium text-secondary-foreground">
                    {guests} {guests === 1 ? "Guest" : "Guests"}
                  </span>
                  <button
                    onClick={() => setGuests(Math.min(10, guests + 1))}
                    className="rounded-lg p-1 transition-colors hover:bg-background"
                    aria-label="Increase guests"
                  >
                    <Plus className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-medium text-muted-foreground">
                  Available Times
                </label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {restaurant.availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        selectedTime === time
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {restaurant.perk && (
                <div className="mt-6 flex items-center gap-2 rounded-xl bg-perk/10 p-3">
                  <Gift className="h-5 w-5 text-perk" />
                  <span className="text-sm font-medium text-perk">
                    {getPerkReminder()}
                  </span>
                </div>
              )}

              <Button
                className="mt-6 w-full py-6 text-base"
                disabled={!selectedTime}
                onClick={handleReserve}
              >
                {selectedTime ? `Reserve for ${selectedTime}` : "Select a time"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
