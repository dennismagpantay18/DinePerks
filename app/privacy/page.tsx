import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen pt-16 lg:pt-20">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-3xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur sm:p-8 lg:p-10">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm text-muted-foreground">
              Effective Date: June 2026
            </p>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              DinePerks respects your privacy. This Privacy Policy explains what
              information we collect, how we use it, and how we protect it when
              you use the DinePerks platform.
            </p>

            <section className="mt-10 space-y-10 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  1. Information We Collect
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    When you request a reservation or interact with DinePerks, we
                    may collect basic information such as:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>full name</li>
                    <li>phone number</li>
                    <li>email address</li>
                    <li>reservation date and time</li>
                    <li>restaurant selection</li>
                    <li>basic usage or device information</li>
                  </ul>
                  <p>
                    DinePerks does not require payment card information to hold
                    standard reservations unless clearly stated otherwise in the
                    future.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  2. How We Use Information
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>We use collected information to:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>process and confirm reservations</li>
                    <li>send booking-related messages and updates</li>
                    <li>help restaurants manage guest arrivals</li>
                    <li>improve platform functionality and user experience</li>
                    <li>protect the platform from abuse, fraud, or misuse</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  3. Sharing of Information
                </h2>
                <div className="mt-4 space-y-4 leading-7">
                  <p>
                    DinePerks may share necessary reservation information with
                    participating restaurants to confirm and manage your booking.
                  </p>
                  <p>
                    We may also share information with service providers who help
                    operate the platform, such as hosting, analytics,
                    communication, or support tools.
                  </p>
                  <p>DinePerks does not sell your personal information.</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  4. Data Retention
                </h2>
                <p className="mt-4 leading-7">
                  We retain information for as long as reasonably necessary to
                  operate the platform, maintain records, resolve disputes,
                  enforce our terms, and comply with legal obligations.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  5. Security
                </h2>
                <p className="mt-4 leading-7">
                  DinePerks uses reasonable administrative, technical, and
                  organizational measures to protect information from unauthorized
                  access, loss, misuse, or disclosure. However, no online platform
                  can guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  6. Your Rights and Choices
                </h2>
                <p className="mt-4 leading-7">
                  You may request access to, correction of, or deletion of your
                  personal information by contacting us. We will respond in
                  accordance with applicable laws.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  7. Third-Party Services
                </h2>
                <p className="mt-4 leading-7">
                  DinePerks may use third-party services such as hosting,
                  analytics, or communication tools. These providers may process
                  information on our behalf in accordance with their own privacy
                  policies.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  8. Children&apos;s Privacy
                </h2>
                <p className="mt-4 leading-7">
                  DinePerks is not intended for children to use independently. We
                  do not knowingly collect personal information directly from
                  children without appropriate legal basis.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  9. Changes to This Policy
                </h2>
                <p className="mt-4 leading-7">
                  DinePerks may update this Privacy Policy periodically to reflect
                  platform changes or legal requirements. Continued use of the
                  platform after updates indicates acceptance of the revised
                  policy.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  10. Contact
                </h2>
                <div className="mt-4 space-y-2 leading-7">
                  <p>If you have questions about this Privacy Policy:</p>
                  <p className="font-medium text-foreground">
                    support@dineperks.com
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
