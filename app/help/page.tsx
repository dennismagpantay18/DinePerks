import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function HelpPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen pt-16 lg:pt-20">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-3xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur sm:p-8 lg:p-10">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              Help Center
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Updated: June 2026
            </p>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Need help with a reservation, restaurant offer, or general question?
              We’re here to help.
            </p>

            <section className="mt-10 space-y-10 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Contact Support
                </h2>
                <div className="mt-4 space-y-2 leading-7">
                  <p>
                    Email:{" "}
                    <span className="font-medium text-foreground">
                      support@dineperks.com
                    </span>
                  </p>
                  <p>
                    Phone:{" "}
                    <span className="font-medium text-foreground">
                      (000) 000-0000
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Reservation Support
                </h2>
                <p className="mt-4 leading-7">
                  For booking issues, timing questions, or reservation updates,
                  please contact us as soon as possible so we can help coordinate
                  with the restaurant when appropriate.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Restaurant Offer Questions
                </h2>
                <p className="mt-4 leading-7">
                  Questions about specific credits, discounts, exclusions, or
                  minimum purchase requirements may depend on the participating
                  restaurant’s listed terms and availability.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Response Time
                </h2>
                <p className="mt-4 leading-7">
                  We typically respond within 24 hours.
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
