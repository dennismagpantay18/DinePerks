"use client";

import Image from "next/image";
import { ArrowLeft, MapPin, Calendar, Clock, Users, Gift, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Restaurant } from "@/lib/types";
import { useState } from "react";

interface ConfirmationScreenProps {
  restaurant: Restaurant;
  date: string;
  time: string;
  partySize: number;
  onBack: () => void;
  onConfirm: () => void;
}

export function ConfirmationScreen({ 
  restaurant, 
  date, 
  time, 
  partySize,
  onBack, 
  onConfirm 
}: ConfirmationScreenProps) {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimeout(() => {
      onConfirm();
    }, 2000);
  };

  const isFormValid = guestName.trim() !== "" && guestEmail.trim() !== "" && guestPhone.trim() !== "";

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <div className="size-24 bg-perk rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in-50 duration-500">
            <Check className="size-12 text-perk-foreground" strokeWidth={3} />
          </div>
          <h1 className="font-serif text-2xl font-semibold text-foreground mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            Reservation Confirmed!
          </h1>
          <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            We sent a confirmation to your email
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-md z-40 border-b border-border/50">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={onBack}
            className="size-10 bg-secondary rounded-full flex items-center justify-center transition-all hover:bg-secondary/80"
            aria-label="Go back"
          >
            <ArrowLeft className="size-5 text-foreground" />
          </button>
          <h1 className="font-serif text-xl font-semibold text-foreground">
            Complete Reservation
          </h1>
        </div>
      </header>

      <div className="px-4 py-4">
        {/* Restaurant Summary Card */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 mb-6">
          <div className="flex gap-4 p-4">
            <div className="relative size-20 rounded-xl overflow-hidden shrink-0">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-serif text-lg font-semibold text-foreground truncate">
                {restaurant.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-2">
                {restaurant.cuisine}
              </p>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-3.5" />
                <span className="text-xs">{restaurant.location}</span>
              </div>
            </div>
          </div>
          
          {/* Reservation Details */}
          <div className="border-t border-border/50 bg-secondary/30 p-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-accent" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Date</p>
                  <p className="text-sm font-medium text-foreground">{date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-accent" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Time</p>
                  <p className="text-sm font-medium text-foreground">{time}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-4 text-accent" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Guests</p>
                  <p className="text-sm font-medium text-foreground">{partySize}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perk Summary */}
        <div className="bg-perk/10 border border-perk/20 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-perk rounded-full flex items-center justify-center">
              <Gift className="size-5 text-perk-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                ${restaurant.perkAmount} {restaurant.perk}
              </p>
              <p className="text-sm text-muted-foreground">
                Will be applied to your bill
              </p>
            </div>
          </div>
        </div>

        {/* Guest Information Form */}
        <div className="space-y-4">
          <h2 className="font-serif text-lg font-semibold text-foreground">
            Guest Information
          </h2>
          
          <div className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="h-12 rounded-xl bg-secondary border-0 focus-visible:ring-accent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="h-12 rounded-xl bg-secondary border-0 focus-visible:ring-accent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                Phone <span className="text-destructive">*</span>
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="h-12 rounded-xl bg-secondary border-0 focus-visible:ring-accent"
              />
            </div>
            
            <div>
              <label htmlFor="requests" className="block text-sm font-medium text-foreground mb-1.5">
                Special Requests <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <textarea
                id="requests"
                placeholder="Any dietary restrictions or special occasions?"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full min-h-[100px] px-4 py-3 rounded-xl bg-secondary border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>
          </div>
        </div>

        {/* Terms */}
        <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
          By confirming this reservation, you agree to our terms of service and cancellation policy. A credit card is not required to hold this reservation.
        </p>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 pb-safe z-50">
        <div className="max-w-md mx-auto">
          <Button
            className="w-full h-14 text-base font-semibold rounded-xl"
            disabled={!isFormValid}
            onClick={handleConfirm}
          >
            Confirm Reservation
          </Button>
        </div>
      </div>
    </div>
  );
}
