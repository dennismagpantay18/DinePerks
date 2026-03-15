"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [location, setLocation] = useState("San Francisco");
  const [date, setDate] = useState("Tonight");
  const [guests, setGuests] = useState("2 guests");

  return (
    <section className="w-full bg-background">
      {/* Compact Hero Banner */}
      <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-80">
        <Image
          src="/images/hero-banner.jpg"
          alt="Fine dining ambiance"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-card sm:text-4xl md:text-5xl">
            <span className="drop-shadow-lg">Reserve your table</span>
          </h1>
          <p className="mt-2 max-w-xl text-center text-sm text-card/90 drop-shadow-md sm:text-base">
            Exclusive dining perks at the finest restaurants
          </p>
        </div>
      </div>

      {/* Search Section - Below Hero */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-10 relative z-10">

          {/* Search Box */}
          <div className="rounded-2xl border border-border bg-card p-4 shadow-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              {/* Location */}
              <div className="group flex flex-1 items-center gap-3 rounded-xl bg-muted/50 px-4 py-3 transition-colors hover:bg-muted">
                <MapPin className="h-5 w-5 text-accent" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium text-muted-foreground">
                    Location
                  </span>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground"
                    placeholder="Enter city"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="group flex flex-1 items-center gap-3 rounded-xl bg-muted/50 px-4 py-3 transition-colors hover:bg-muted">
                <Calendar className="h-5 w-5 text-accent" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium text-muted-foreground">
                    Date
                  </span>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
                  >
                    <option>Tonight</option>
                    <option>Tomorrow</option>
                    <option>This Weekend</option>
                    <option>Next Week</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="group flex flex-1 items-center gap-3 rounded-xl bg-muted/50 px-4 py-3 transition-colors hover:bg-muted">
                <Users className="h-5 w-5 text-accent" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium text-muted-foreground">
                    Guests
                  </span>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
                  >
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                    <option>5+ guests</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <Button
                size="lg"
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-primary-foreground hover:bg-primary/90"
              >
                <Search className="h-5 w-5" />
                <span>Find a Table</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Cuisine Filters */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium text-muted-foreground">Popular cuisines</p>
        <div className="flex flex-wrap gap-2">
          {["Fine Dining", "Italian", "Japanese", "Steakhouse", "Seafood", "French", "Mexican"].map(
            (cuisine) => (
              <button
                key={cuisine}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
              >
                {cuisine}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
