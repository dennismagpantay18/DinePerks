"use client";

import Link from "next/link";

export default function PartnerLoginPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
              DinePerks Partner Demo
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Partner Portal
            </h1>
            <p className="mt-3 text-sm text-white/70">
              Manage your restaurant offers, times, and availability.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Restaurant Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="partner@restaurant.com"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-emerald-400"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-emerald-400"
              />
            </div>

            <Link
              href="/partner-dashboard"
              className="block w-full rounded-2xl bg-emerald-500 px-4 py-3 text-center font-medium text-black transition hover:bg-emerald-400"
            >
              Sign In
            </Link>
          </form>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/60">
            Demo only: this shows restaurants how simple it is to log in and
            manage their listing.
          </div>

          <div className="mt-6 text-center text-sm text-white/50">
            Need help? Contact DinePerks support
          </div>
        </div>
      </div>
    </main>
  );
}
