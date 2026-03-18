import { Gift, CreditCard, Calendar, Sparkles } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Exclusive Credits",
    description:
      "Enjoy dining credits at participating restaurants, applied during eligible reservation times.",
  },
  {
    icon: CreditCard,
    title: "No Hidden Fees",
    description:
      "See perks clearly before you book. No membership fees and no unexpected charges.",
  },
  {
    icon: Calendar,
    title: "Easy Reservations",
    description:
      "Book available dining times in seconds and view eligible perks before confirming.",
  },
  {
    icon: Sparkles,
    title: "Discover New Favorites",
    description:
      "Explore standout local restaurants and enjoy great reasons to try something new.",
  },
];

export function PerksSection() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
            Dining perks, reimagined
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Experience the difference with DinePerks. Discover great restaurants
            and enjoy exclusive dining perks at select times.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-perk/10">
                <feature.icon className="h-6 w-6 text-perk" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-medium text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
