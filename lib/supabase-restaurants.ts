import { supabase } from "@/lib/supabase";

export type RestaurantCardData = {
  id: string;
  name: string;
  city: string | null;
  description: string | null;
  hero_image_url: string | null;
  offer_title: string | null;
  offer_value: number | null;
  offer_type: string | null;
};

export async function getFeaturedRestaurants(): Promise<RestaurantCardData[]> {
  const { data, error } = await supabase
    .from("restaurants")
    .select(`
      id,
      name,
      city,
      description,
      hero_image_url,
      offers (
        title,
        value,
        offer_type,
        is_active
      )
    `)
    .eq("is_active", true);

  if (error) {
    console.error("Error fetching restaurants:", error);
    return [];
  }

  return (data || []).map((restaurant: any) => {
    const activeOffer =
      restaurant.offers?.find((offer: any) => offer.is_active) || null;

    return {
      id: restaurant.id,
      name: restaurant.name,
      city: restaurant.city,
      description: restaurant.description,
      hero_image_url: restaurant.hero_image_url,
      offer_title: activeOffer?.title ?? null,
      offer_value: activeOffer?.value ?? null,
      offer_type: activeOffer?.offer_type ?? null,
    };
  });
}
