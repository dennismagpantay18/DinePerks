"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Users,
  Gift,
  ChevronLeft,
  Check,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Restaurant } from "@/lib/types";

interface ReservationConfirmationProps {
  restaurant: Restaurant;
  date: string;
  time: string;
  guests: number;
  onBack: () => void;
  onConfirm: () => void;
}

export function ReservationConfirmation({
  restaurant,
  date,
  time,
  guests,
  onBack,
  onConfirm,
}: ReservationConfirmationProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      setTimeout(() => {
        onConfirm();
      }, 2000);
    }, 1500);
  };

  if (isConfirmed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-perk">
            <Check className="h-10 w-10 text-perk-foreground" />
          </div>
          <h1 className="mt-6 font-serif text-3xl font-medium text-foreground">
            Reservation Confirmed!
          </h1>
          <p className="mt-2 text-muted-foreground">
            A confirmation email has been sent to {formData.email}
          </p>
          <div className="mt-8 rounded-2xl bg-card p-6 text-left shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-card-foreground">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {date} at {time} · {guests}{" "}
                  {guests === 1 ? "guest" : "guests"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <h1 className="font-serif text-xl font-medium text-foreground">
            Complete Reservation
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-serif text-xl font-medium text-foreground">
                  Guest Information
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Please provide your details to complete the reservation
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="mt-1"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                    className="mt-1"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="mt-1"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="mt-1"
                  placeholder="(415) 555-0123"
                />
              </div>

              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-sm font-medium text-foreground"
                >
                  Special Requests{" "}
                  <span className="font-normal text-muted-foreground">
                    (optional)
                  </span>
                </label>
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      specialRequests: e.target.value,
                    })
                  }
                  className="mt-1"
                  placeholder="Allergies, celebrations, seating preferences..."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Confirming..." : "Confirm Reservation"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By clicking confirm, you agree to our cancellation policy and
                terms of service.
              </p>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-medium text-card-foreground">
                Reservation Summary
              </h3>

              {/* Restaurant info */}
              <div className="mt-4 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground">
                    {restaurant.name}
                  </h4>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {restaurant.neighborhood}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-card-foreground">{date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-card-foreground">{time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-card-foreground">
                    {guests} {guests === 1 ? "guest" : "guests"}
                  </span>
                </div>
              </div>

              {/* Perk */}
              {restaurant.perk && (
                <div className="mt-6 rounded-xl bg-perk/10 p-4">
                  <div className="flex items-center gap-3">
                    <Gift className="h-5 w-5 text-perk" />
                    <div>
                      <p className="font-medium text-perk">
                        {restaurant.perk.amount} Credit
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Will be applied to your bill
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
