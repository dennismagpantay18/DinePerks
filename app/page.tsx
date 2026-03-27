"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { RestaurantGrid } from "@/components/restaurant-grid";
import { PerksSection } from "@/components/perks-section";
import { RestaurantDetail } from "@/components/restaurant-detail";
import { ReservationConfirmation } from "@/components/reservation-confirmation";
import { restaurants, filterChips } from "@/lib/data";
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
        <RestaurantGrid
          restaurants={filteredRestaurants}
          filterChips={filterChips}
          selectedArea={selectedArea}
          onSelectArea={setSelectedArea}
          onSelectRestaurant={handleSelectRestaurant}
        />
        <PerksSection />
      </main>
      <SiteFooter />
    </>
  );
}
