export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">About DinePerks</h1>

      <p className="text-sm text-gray-500 mb-10">Updated: June 2026</p>

      <p className="mb-8 text-lg">
        DinePerks helps restaurants fill early and off-peak dining hours while
        giving diners access to exclusive offers and incentives.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>

        <p>
          Our mission is simple: help restaurants make better use of slower
          dining hours while giving diners more reasons to explore local food.
        </p>

        <h2 className="text-2xl font-semibold">How It Works</h2>

        <p>
          Participating restaurants choose their own offers, dining windows,
          and eligibility rules. DinePerks provides the platform that connects
          diners to those opportunities.
        </p>

        <h2 className="text-2xl font-semibold">Built for Restaurants and Diners</h2>

        <p>
          DinePerks is designed to create value on both sides: diners discover
          new places and restaurants can attract guests during slower times
          without disrupting peak service.
        </p>
      </section>
    </main>
  )
}
