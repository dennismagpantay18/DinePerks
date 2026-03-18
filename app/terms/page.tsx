import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-background pt-16 lg:pt-20">
        <section className="border-b border-border/60 bg-gradient-to-b from-[#2b1d18]/[0.04] via-background to-background">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              DinePerks
            </p>

            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              Terms of Service
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Effective Date: June 2026
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              DinePerks helps diners discover restaurants and helps restaurants
              fill early dining tables with special incentives. These Terms
              explain how the platform works and the responsibilities of diners,
              restaurants, and DinePerks.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="rounded-3xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur sm:p-8 lg:p-10">
            <section className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  1. What DinePerks Is
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    DinePerks is a technology platform that helps diners discover
                    participating restaurants and access special dining offers
                    during select reservation times.
                  </p>
                  <p>
                    DinePerks does not operate restaurants, prepare food, manage
                    restaurant staff, or control restaurant operations. Dining
                    services are provided directly by the restaurant.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  2. Restaurant Offers
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    All dining credits, discounts, or promotional perks available
                    through DinePerks are created and controlled by the
                    participating restaurant.
                  </p>
                  <p>Restaurants may determine:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>offer value</li>
                    <li>reservation time availability</li>
                    <li>minimum purchase requirements</li>
                    <li>eligible menu items</li>
                    <li>exclusions or restrictions</li>
                  </ul>
                  <p>
                    DinePerks does not fund, reimburse, or guarantee
                    restaurant-created offers.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  3. Reservation Information
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    When requesting a reservation through DinePerks, diners may be
                    asked to provide basic information such as name, phone number,
                    and email address. This information is used to confirm
                    reservations and assist restaurants in managing guest
                    arrivals.
                  </p>
                  <p>
                    DinePerks does not require a credit card to hold reservations
                    unless otherwise stated in the future.
                  </p>
                  <p>
                    Repeated misuse of reservations, including repeated no-shows,
                    repeated late arrivals, false reservation details, or
                    reserving without genuine intent to dine, may result in
                    restricted access, suspension, or removal from DinePerks.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  4. Reservation Timing
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    DinePerks offers are often designed for early or off-peak
                    dining periods. Diners are expected to arrive on time for
                    their reservation.
                  </p>
                  <p>
                    Restaurants may provide a grace period of up to 15 minutes
                    after the scheduled reservation time. If a diner arrives later
                    than 15 minutes, the restaurant may cancel the reservation,
                    decline the associated offer, or reassign the table.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  5. Offer Valid Only During Reserved Time Window
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    Unless otherwise stated by the restaurant, a DinePerks offer
                    is valid only for the specific reservation time and eligible
                    dining window selected through the platform.
                  </p>
                  <p>
                    If a diner arrives outside the applicable reservation window,
                    the restaurant may, at its sole discretion, decline to honor
                    the associated credit, discount, or perk.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  6. Offer Conditions
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    Some restaurant offers may require a minimum purchase amount
                    in order to redeem the credit or discount. For example:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Spend $50, receive $10 off</li>
                    <li>Spend $150, receive $20 off</li>
                    <li>Receive a percentage discount on qualifying purchases</li>
                  </ul>
                  <p>
                    Minimum purchase rules, exclusions, and eligible items are
                    determined by the restaurant.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  7. Food Purchase Requirement and Drink-Only Transactions
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    Certain offers may be intended for food purchases or full
                    dining transactions and not for drinks-only visits.
                  </p>
                  <p>
                    Participating restaurants may define whether an offer applies
                    only to eligible food purchases, minimum subtotals, or
                    qualifying menu categories.
                  </p>
                  <p>
                    Unless a restaurant clearly states otherwise, a restaurant may
                    decline to honor a DinePerks offer where the guest does not
                    meet the listed offer conditions, including where the
                    transaction consists primarily or solely of beverages,
                    excluded items, or non-qualifying purchases.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  8. Restaurant Responsibility
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    Restaurants are solely responsible for their menu, service,
                    availability, pricing, billing, and honoring of offers listed
                    on the platform.
                  </p>
                  <p>
                    Any disputes regarding food quality, service, billing, wait
                    times, or dining experience must be resolved directly with the
                    restaurant.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  9. Platform Fees
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    DinePerks may charge participating restaurants a per-diner
                    platform fee or service fee for reservations or seated diners
                    originating through the DinePerks platform.
                  </p>
                  <p>
                    Any applicable fees will be communicated separately to
                    participating restaurants through onboarding materials,
                    platform settings, or written agreements.
                  </p>
                  <p>
                    DinePerks does not guarantee reservation volume, diner
                    attendance, or revenue for participating restaurants.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  10. Platform Content and Intellectual Property
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    The DinePerks platform, including its branding, design,
                    layout, software, and original content, is owned by or
                    licensed to DinePerks and protected by applicable intellectual
                    property laws.
                  </p>
                  <p>
                    You may not copy, reproduce, scrape, reverse engineer,
                    republish, distribute, or commercially exploit any part of the
                    platform without written permission.
                  </p>
                  <p>
                    Restaurant names, menus, logos, and images remain the property
                    of their respective owners.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  11. Disclaimer of Warranties
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    DinePerks is provided on an as is and as available basis. We
                    do not guarantee that the platform will always be
                    uninterrupted, error-free, fully accurate, or available at all
                    times.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  12. Limitation of Liability
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    To the fullest extent permitted by law, DinePerks and its
                    affiliates, officers, employees, contractors, and licensors
                    will not be liable for indirect, incidental, consequential,
                    special, or punitive damages, or for any loss of profits,
                    revenues, goodwill, data, or business opportunity arising out
                    of or related to the use of the platform.
                  </p>
                  <p>
                    To the fullest extent permitted by law, DinePerks total
                    liability for any claim relating to the platform will not
                    exceed the greater of the amount paid to DinePerks, if any, in
                    the 3 months before the event giving rise to the claim, or
                    $100.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  13. Indemnification
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    You agree to defend, indemnify, and hold harmless DinePerks
                    and its affiliates, officers, employees, contractors, and
                    licensors from and against claims, liabilities, damages,
                    losses, and expenses, including reasonable legal fees, arising
                    out of or related to your misuse of the platform, your
                    violation of these Terms, your violation of applicable law,
                    your dispute with a restaurant or another user, or any
                    information you submit through the platform.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  14. Suspension and Termination
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    DinePerks may suspend, restrict, or terminate access to the
                    platform at any time if we believe a user has violated these
                    Terms, misused reservations or offers, created risk for
                    restaurants or other users, or engaged in fraudulent, abusive,
                    or unlawful conduct.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  15. Changes to These Terms
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    DinePerks may update these Terms periodically to reflect
                    platform changes or legal requirements. Continued use of the
                    platform after updates indicates acceptance of the revised
                    Terms.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  16. Contact
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>For questions about these Terms, please contact:</p>
                  <p className="font-medium text-foreground">
                    support@dineperks.com
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
