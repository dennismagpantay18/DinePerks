"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { RestaurantGrid } from "@/components/restaurant-grid";
import { PerksSection } from "@/components/perks-section";
import { RestaurantDetail } from "@/components/restaurant-detail";
import { ReservationConfirmation } from "@/components/reservation-confirmation";
import { filterChips } from "@/lib/data";
import { getFeaturedRestaurants } from "@/lib/supabase-restaurants";
import type { Restaurant } from "@/lib/types";

type Screen = "home" | "detail" | "confirmation";

interface ReservationData {
  date: string;
  time: string;
  guests: number;
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [reservationData, setReservationData] =
    useState<ReservationData | null>(null);
  const [selectedArea, setSelectedArea] = useState("Park City");
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRestaurants() {
      setLoading(true);

      const data = await getFeaturedRestaurants();

      const mappedRestaurants: Restaurant[] = data.map((restaurant, index) => ({
        id: restaurant.id,
        name: restaurant.name,
        cuisine: "Featured Dining",
        priceRange: "$$",
        location: restaurant.city || "Park City",
        rating: 4.8,
        reviewCount: 120 + index,
        image: restaurant.hero_image_url || "/elegant-restaurant-interior.png",
        perk: restaurant.offer_title
          ? restaurant.offer_title
          : restaurant.offer_type === "credit" && restaurant.offer_value
            ? `$${restaurant.offer_value} Credit`
            : restaurant.offer_type === "discount" && restaurant.offer_value
              ? `${restaurant.offer_value}% Off`
              : "Dining Perk",
        availableTimes: ["4:00 PM", "4:30 PM", "5:00 PM"],
        description:
          restaurant.description ||
          "A great local restaurant featured on DinePerks.",
      }));

      setRestaurants(mappedRestaurants);
      setLoading(false);
    }

    loadRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.location === selectedArea
  );

  const handleSelectRestaurant = (id: string) => {
    const restaurant = restaurants.find((r) => r.id === id);
    if (restaurant) {
      setSelectedRestaurant(restaurant);
      setCurrentScreen("detail");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReserve = (date: string, time: string, guests: number) => {
    setReservationData({ date, time, guests });
    setCurrentScreen("confirmation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
    setSelectedRestaurant(null);
    setReservationData(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToDetail = () => {
    setCurrentScreen("detail");
    setReservationData(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConfirmReservation = () => {
    handleBackToHome();
  };

  if (
    currentScreen === "confirmation" &&
    selectedRestaurant &&
    reservationData
  ) {
    return (
      <ReservationConfirmation
        restaurant={selectedRestaurant}
        date={reservationData.date}
        time={reservationData.time}
        guests={reservationData.guests}
        onBack={handleBackToDetail}
        onConfirm={handleConfirmReservation}
      />
    );
  }

  if (currentScreen === "detail" && selectedRestaurant) {
    return (
      <>
        <SiteHeader />
        <main>
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onBack={handleBackToHome}
            onReserve={handleReserve}
          />
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        {loading ? (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center text-muted-foreground">
              Loading restaurants...
            </div>
          </section>
        ) : (
          <RestaurantGrid
            restaurants={filteredRestaurants}
            filterChips={filterChips}
            selectedArea={selectedArea}
            onSelectArea={setSelectedArea}
            onSelectRestaurant={handleSelectRestaurant}
          />
        )}
        <PerksSection />
      </main>
      <SiteFooter />
    </>
  );
}
