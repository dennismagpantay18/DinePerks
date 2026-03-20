import { Gift, CreditCard, Calendar, Sparkles } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Dining Credits",
    description:
      "Enjoy select dining credits at participating restaurants during eligible reservation times.",
  },
  {
    icon: CreditCard,
    title: "Clear Terms",
    description:
      "Perks are presented clearly before you book, with no unexpected surprises.",
  },
  {
    icon: Calendar,
    title: "Simple Reservations",
    description:
      "Choose an available time and confirm your reservation in just a few steps.",
  },
  {
    icon: Sparkles,
    title: "Curated Access",
    description:
      "Explore standout restaurants and enjoy thoughtfully timed dining opportunities.",
  },
];

export function PerksSection() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
            Thoughtfully Timed Perks
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Exclusive dining benefits, offered at select times across participating restaurants.
          </p>
        </div>

        {/* FEATURES */}
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
