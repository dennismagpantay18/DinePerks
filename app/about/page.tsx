import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen pt-16 lg:pt-20">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-3xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur sm:p-8 lg:p-10">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              About DinePerks
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Updated: June 2026
            </p>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              DinePerks helps restaurants fill early and off-peak dining hours
              while giving diners access to exclusive offers and incentives.
            </p>

            <section className="mt-10 space-y-10 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Our Mission
                </h2>
                <p className="mt-4 leading-7">
                  Our mission is simple: help restaurants make better use of
                  slower dining hours while giving diners more reasons to
                  explore local food.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Why DinePerks Exists
                </h2>
                <p className="mt-4 leading-7">
                  Many restaurants have empty tables during early and off-peak
                  hours. At the same time, diners are always looking for better
                  value and new places to try. DinePerks connects both sides in
                  a way that benefits everyone.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  How It Works
                </h2>
                <p className="mt-4 leading-7">
                  Participating restaurants choose their own offers, dining
                  windows, and eligibility rules. DinePerks provides the
                  platform that connects diners to those opportunities.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Built for Restaurants and Diners
                </h2>
                <p className="mt-4 leading-7">
                  DinePerks is designed to create value on both sides. Diners
                  discover new restaurants and enjoy meaningful incentives,
                  while restaurants attract additional guests without affecting
                  their peak service.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Our Focus
                </h2>
                <p className="mt-4 leading-7">
                  We focus on simplicity, fairness, and real results.
                  Restaurants stay in control of their offers, and diners get a
                  clear, straightforward experience without confusion.
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
