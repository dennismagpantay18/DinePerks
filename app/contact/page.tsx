import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen pt-16 lg:pt-20">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-3xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur sm:p-8 lg:p-10">
            
            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              Contact Us
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Updated: June 2026
            </p>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Have a question about DinePerks, a reservation, or how the platform works?
              We’re here to help.
            </p>

            <section className="mt-10 space-y-10 text-muted-foreground">

              {/* GENERAL */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  General Inquiries
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

              {/* RESTAURANTS */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  For Restaurants
                </h2>
                <p className="mt-4 leading-7">
                  If you’re a restaurant interested in using DinePerks to fill
                  early or off-peak tables, reach out and we’ll explain how the
                  platform works and how you can get started.
                </p>
                <p className="mt-2 leading-7">
                  DinePerks is a technology platform that connects diners and
                  restaurants. We do not operate restaurants or control dining
                  services.
                </p>
              </div>

              {/* RESERVATION */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Reservation Support
                </h2>
                <p className="mt-4 leading-7">
                  For booking questions, timing issues, or reservation updates,
                  please contact us as soon as possible so we can assist where
                  appropriate.
                </p>
              </div>

              {/* RESPONSE */}
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
