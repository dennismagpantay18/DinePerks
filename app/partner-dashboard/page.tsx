"use client";

import { useMemo, useState } from "react";

type OfferType = "percentage" | "credit";

type TimeSlot = {
  id: number;
  time: string;
  tables: number;
  guestsPerTable: string;
};

const initialTimeSlots: TimeSlot[] = [
  { id: 1, time: "4:00 PM", tables: 5, guestsPerTable: "2" },
  { id: 2, time: "4:15 PM", tables: 4, guestsPerTable: "4" },
  { id: 3, time: "4:30 PM", tables: 4, guestsPerTable: "4/6" },
  { id: 4, time: "4:45 PM", tables: 3, guestsPerTable: "2" },
  { id: 5, time: "5:00 PM", tables: 4, guestsPerTable: "4" },
  { id: 6, time: "6:15 PM", tables: 3, guestsPerTable: "4" },
  { id: 7, time: "6:30 PM", tables: 3, guestsPerTable: "2" },
  { id: 8, time: "6:45 PM", tables: 2, guestsPerTable: "2" },
  { id: 9, time: "7:00 PM", tables: 2, guestsPerTable: "4" },
  { id: 10, time: "7:15 PM", tables: 2, guestsPerTable: "2" },
  { id: 11, time: "7:30 PM", tables: 2, guestsPerTable: "2" },
  { id: 12, time: "8:00 PM", tables: 1, guestsPerTable: "2" },
];

export default function PartnerDashboardPage() {
  const [isPaused, setIsPaused] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [offerType, setOfferType] = useState<OfferType>("percentage");
  const [offerValue, setOfferValue] = useState("20");
  const [dateLabel, setDateLabel] = useState("Today");
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(initialTimeSlots);

  const offerText = useMemo(() => {
    if (offerType === "credit") {
      return `$${offerValue} Credit`;
    }
    return `${offerValue}% Off Early Dinner`;
  }, [offerType, offerValue]);

  const availableWindow = useMemo(() => {
    if (timeSlots.length === 0) return "No active time slots";
    return `${timeSlots[0].time} – ${timeSlots[timeSlots.length - 1].time}`;
  }, [timeSlots]);

  const handlePauseToggle = () => {
    setIsPaused((prev) => !prev);
  };

  const updateSlot = (
    id: number,
    field: keyof TimeSlot,
    value: string | number
  ) => {
    setTimeSlots((prev) =>
      prev.map((slot) =>
        slot.id === id ? { ...slot, [field]: value } : slot
      )
    );
  };

  const changeTables = (id: number, delta: number) => {
    setTimeSlots((prev) =>
      prev.map((slot) =>
        slot.id === id
          ? { ...slot, tables: Math.max(1, slot.tables + delta) }
          : slot
      )
    );
  };

  const addTimeSlot = () => {
    const newSlot: TimeSlot = {
      id: Date.now(),
      time: "8:15 PM",
      tables: 2,
      guestsPerTable: "2",
    };
    setTimeSlots((prev) => [...prev, newSlot]);
  };

  const removeTimeSlot = (id: number) => {
    setTimeSlots((prev) => prev.filter((slot) => slot.id !== id));
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-semibold tracking-tight">
          Demo Restaurant Dashboard
        </h1>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-[url('/elegant-restaurant-interior.png')] bg-cover bg-center" />

                <div>
                  <h2 className="text-2xl font-semibold">Demo Bistro</h2>
                  <p className="text-sm text-white/60">Park City</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-white/60">Today’s Offer</p>
                <h2 className="mt-3 text-3xl font-semibold">{offerText}</h2>
                <p className="mt-3 text-xl text-white/80">{availableWindow}</p>
              </div>
            </div>

            <div className="inline-flex rounded-full border border-white/10 bg-black/30 p-1">
              <button
                type="button"
                onClick={() => setIsPaused(false)}
                className={`rounded-full px-6 py-2 text-lg font-medium transition ${
                  !isPaused
                    ? "bg-emerald-500 text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Active
              </button>
              <button
                type="button"
                onClick={() => setIsPaused(true)}
                className={`rounded-full px-6 py-2 text-lg font-medium transition ${
                  isPaused
                    ? "bg-emerald-500 text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Paused
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <button
              type="button"
              onClick={() => setShowEditModal(true)}
              className="rounded-2xl bg-emerald-500 px-6 py-4 text-lg font-medium text-black transition hover:bg-emerald-400"
            >
              Edit Offer
            </button>

            <button
              type="button"
              onClick={handlePauseToggle}
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-lg font-medium text-white transition hover:bg-white/10"
            >
              {isPaused ? "Resume Offer" : "Pause Offer"}
            </button>

            <button
              type="button"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-lg font-medium text-white transition hover:bg-white/10"
            >
              Update Photos
            </button>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-3xl font-semibold">Listing Preview</h2>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
              <div className="relative min-h-[300px] bg-[url('/elegant-restaurant-interior.png')] bg-cover bg-center">
                <div className="absolute left-4 top-4 rounded-full bg-emerald-500 px-4 py-2 text-xl font-semibold text-black">
                  {offerType === "credit" ? `$${offerValue} Credit` : `${offerValue}% Off`}
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-4xl font-semibold">Demo Bistro</h3>
                    <p className="mt-2 text-xl text-white/65">★ 4.8 &nbsp; Park City</p>
                  </div>
                </div>

                {!isPaused ? (
                  <>
                    <p className="mt-8 text-xl font-medium text-white/80">
                      Available Time Slots
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot.id}
                          className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                        >
                          <div className="text-lg font-medium">{slot.time}</div>
                          <div className="mt-1 text-sm text-white/55">
                            {slot.tables} tables • up to {slot.guestsPerTable} guests
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-2xl font-medium text-white/85">
                      Offer paused. Time slots removed.
                    </p>
                    <p className="mt-2 text-white/55">
                      Diners will not see any available time slots until you resume the offer.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[#121018] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <h2 className="text-3xl font-semibold">Edit Offer</h2>
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="text-3xl text-white/50 transition hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="space-y-6 px-6 py-6">
              <div>
                <label className="mb-2 block text-lg font-medium text-white/80">
                  Offer Type
                </label>
                <select
                  value={offerType}
                  onChange={(e) => setOfferType(e.target.value as OfferType)}
                  className="w-full rounded-2xl border border-white/10 bg-emerald-500/20 px-4 py-4 text-lg text-white outline-none"
                >
                  <option value="percentage" className="bg-black">
                    Percentage Off
                  </option>
                  <option value="credit" className="bg-black">
                    Dining Credit
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-lg font-medium text-white/80">
                  {offerType === "credit" ? "Credit Amount" : "Discount"}
                </label>
                <div className="flex items-center rounded-2xl border border-white/10 bg-black/30 px-4">
                  <input
                    value={offerValue}
                    onChange={(e) => setOfferValue(e.target.value)}
                    className="w-full bg-transparent py-4 text-2xl text-white outline-none"
                  />
                  <span className="text-2xl text-white/60">
                    {offerType === "credit" ? "$" : "%"}
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-lg font-medium text-white/80">
                  Date
                </label>
                <input
                  value={dateLabel}
                  onChange={(e) => setDateLabel(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-lg text-white outline-none"
                />
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-lg font-medium text-white/80">
                    Time Slots
                  </label>
                  <button
                    type="button"
                    onClick={addTimeSlot}
                    className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20"
                  >
                    + Add Time Slot
                  </button>
                </div>

                <div className="space-y-3">
                  {timeSlots.map((slot) => (
                    <div
                      key={slot.id}
                      className="grid gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 md:grid-cols-[1.2fr_1fr_1fr_auto]"
                    >
                      <div>
                        <label className="mb-2 block text-sm text-white/55">
                          Time
                        </label>
                        <input
                          value={slot.time}
                          onChange={(e) =>
                            updateSlot(slot.id, "time", e.target.value)
                          }
                          className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm text-white/55">
                          Tables
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => changeTables(slot.id, -1)}
                            className="rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-white"
                          >
                            −
                          </button>
                          <div className="min-w-[52px] rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-center text-white">
                            {slot.tables}
                          </div>
                          <button
                            type="button"
                            onClick={() => changeTables(slot.id, 1)}
                            className="rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm text-white/55">
                          Guests per Table
                        </label>
                        <input
                          value={slot.guestsPerTable}
                          onChange={(e) =>
                            updateSlot(slot.id, "guestsPerTable", e.target.value)
                          }
                          className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-white outline-none"
                          placeholder="2 or 4/6"
                        />
                      </div>

                      <div className="flex items-end">
                        <button
                          type="button"
                          onClick={() => removeTimeSlot(slot.id)}
                          className="w-full rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-3 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-lg font-medium text-white transition hover:bg-white/10"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="rounded-2xl bg-emerald-500 px-8 py-3 text-lg font-medium text-black transition hover:bg-emerald-400"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
