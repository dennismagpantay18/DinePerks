import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function RestaurantsPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen pt-16 lg:pt-20">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-3xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur sm:p-8 lg:p-10">

            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              For Restaurants
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Fill more tables. Stay in control. No complicated systems.
            </p>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              DinePerks helps restaurants turn slower hours into additional
              revenue by connecting you with diners actively looking for
              reservations. You control your offers, availability, and rules —
              we simply bring the guests.
            </p>

            <section className="mt-10 space-y-10 text-muted-foreground">

              {/* WHY JOIN */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Why Join DinePerks
                </h2>
                <ul className="mt-4 space-y-3 leading-7 list-disc pl-6">
                  <li>Fill empty tables during early and off-peak hours</li>
                  <li>Bring in new local customers</li>
                  <li>Increase revenue without increasing costs</li>
                  <li>No disruption to peak service</li>
                  <li>Simple setup, no extra systems for your staff</li>
                </ul>
              </div>

              {/* HOW IT WORKS */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  How It Works
                </h2>
                <ul className="mt-4 space-y-3 leading-7 list-disc pl-6">
                  <li>You choose your available time slots</li>
                  <li>You set your own incentives or offers</li>
                  <li>DinePerks brings diners to your restaurant</li>
                  <li>Your team seats guests like normal — no new workflow</li>
                </ul>
              </div>

              {/* LOW RISK */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  No Risk, Full Control
                </h2>
                <p className="mt-4 leading-7">
                  You decide when and how to participate. Offers can be adjusted,
                  paused, or removed at any time. There are no changes to your
                  core operations — just additional opportunities to fill seats.
                </p>
              </div>

              {/* EARLY PARTNER (THIS IS YOUR SECRET WEAPON) */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Early Partner Opportunity
                </h2>
                <p className="mt-4 leading-7">
                  We are currently onboarding a limited number of restaurants as
                  early partners. Early partners receive priority visibility on
                  the platform and additional promotional support during launch.
                </p>
              </div>

              {/* CTA */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Get Started
                </h2>
                <p className="mt-4 leading-7">
                  Interested in joining DinePerks? Reach out and we’ll walk you
                  through how it works and how it can fit your restaurant.
                </p>

                <p className="mt-4 font-medium text-foreground">
                  support@dineperks.com
                </p>
              </div>

            </section>

          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
