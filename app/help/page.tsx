export default function HelpPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Help Center</h1>

      <p className="text-sm text-gray-500 mb-10">Updated: June 2026</p>

      <p className="mb-8 text-lg">
        Need help with a reservation, restaurant offer, or general question?
        We are here to help.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Contact Support</h2>

        <p>Email: support@dineperks.com</p>
        <p>Phone: (000) 000-0000</p>

        <h2 className="text-2xl font-semibold">Reservation Support</h2>

        <p>
          For booking issues, timing questions, or reservation updates, please
          contact us as soon as possible so we can help coordinate with the
          restaurant when appropriate.
        </p>

        <h2 className="text-2xl font-semibold">Restaurant Offer Questions</h2>

        <p>
          Questions about specific credits, discounts, exclusions, or minimum
          purchase requirements may depend on the participating restaurant’s
          listed terms and availability.
        </p>

        <h2 className="text-2xl font-semibold">Response Time</h2>

        <p>We typically respond within 24 hours.</p>
      </section>
    </main>
  )
}
