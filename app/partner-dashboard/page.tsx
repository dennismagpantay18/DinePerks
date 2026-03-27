"use client";

import Link from "next/link";

const timeSlots = ["4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"];

export default function PartnerDashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
              Demo Restaurant Dashboard
            </div>
            <h1 className="text-3xl font-semibold">Demo Bistro</h1>
            <p className="mt-2 text-white/70">
              Park City, Utah • Manage your listing, perks, and early dining
              availability.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-2xl bg-emerald-500 px-4 py-3 font-medium text-black transition hover:bg-emerald-400">
              Edit Offer
            </button>
            <button className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 font-medium text-white transition hover:bg-white/10">
              Pause Offer
            </button>
            <button className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 font-medium text-white transition hover:bg-white/10">
              Update Photos
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/60">Today’s Offer</div>
            <div className="mt-3 text-2xl font-semibold">
              20% Off Early Dinner
            </div>
            <div className="mt-2 text-sm text-white/70">
              Valid for same-day bookings only
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/60">Available Window</div>
            <div className="mt-3 text-2xl font-semibold">4:00 PM – 5:30 PM</div>
            <div className="mt-2 text-sm text-white/70">
              Restaurants can adjust this anytime
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/60">Status</div>
            <div className="mt-3 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
              Active
            </div>
            <div className="mt-3 text-sm text-white/70">
              Pause instantly when traffic picks up
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Listing Preview</h2>
            <p className="mt-2 text-sm text-white/65">
              This is how your restaurant can appear to diners.
            </p>

            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black/40">
              <div className="relative h-56 bg-[url('/elegant-restaurant-interior.png')] bg-cover bg-center">
                <div className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-black">
                  20% Off
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Demo Bistro</h3>
                    <p className="mt-1 text-white/65">
                      Modern comfort dining • Park City
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                    ★ 4.8
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-3 text-sm text-white/60">
                    Available Time Slots
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Quick Actions</h2>
            <p className="mt-2 text-sm text-white/65">
              Simple controls restaurants can understand fast.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm text-white/60">Offer Type</div>
                <div className="mt-2 text-lg font-medium">Percentage Discount</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm text-white/60">Offer Value</div>
                <div className="mt-2 text-lg font-medium">20% Off</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm text-white/60">Max Party Size</div>
                <div className="mt-2 text-lg font-medium">Up to 4 guests</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-sm text-white/60">Photo Updates</div>
                <div className="mt-2 text-lg font-medium">Restaurant controlled</div>
              </div>
            </div>

            <Link
              href="/partner-login"
              className="mt-6 block rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center font-medium text-white transition hover:bg-white/10"
            >
              Back to Login
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
