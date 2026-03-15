export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  priceLevel: number;
  image: string;
  location: string;
  description: string;
  availableTimes: string[];
  perk: string;
  perkAmount: number;
}

export interface Reservation {
  restaurant: Restaurant;
  date: string;
  time: string;
  partySize: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
}
