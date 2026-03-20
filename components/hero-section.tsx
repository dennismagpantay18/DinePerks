"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [location, setLocation] = useState("Park City");
  const [date, setDate] = useState("Tonight");
  const [guests, setGuests] = useState("2 guests");

  return (
    <section className="w-full bg-background">
      {/* HERO */}
      <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-80">
        <Image
          src="/images/hero-banner.jpg"
          alt="Warm restaurant ambiance"
          fill
          className="object-cover object-center"
          priority
        />

        {/* DARK overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* WARM tint */}
        <div className="absolute inset-0 bg-[#3b2a1f]/40" />

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Refined Dining, On Your Terms
          </h1>

          <p className="mt-3 max-w-2xl text-white/80 sm:text-base md:text-lg">
            Discover exceptional restaurants with thoughtfully timed perks.
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-10 relative z-10">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              {/* Location */}
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-muted/50 px-4 py-3">
                <MapPin className="h-5 w-5 text-accent" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">
                    Location
                  </span>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-muted/50 px-4 py-3">
                <Calendar className="h-5 w-5 text-accent" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">
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
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-muted/50 px-4 py-3">
                <Users className="h-5 w-5 text-accent" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">
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

              {/* Button */}
              <Button className="rounded-xl bg-primary px-6 py-3 text-primary-foreground">
                <Search className="mr-2 h-5 w-5" />
                Find a Table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
