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
  { id: 1, time: "4:00 PM", tables: 2, guestsPerTable: "2" },
  { id: 2, time: "4:15 PM", tables: 4, guestsPerTable: "4" },
  { id: 3, time: "4:30 PM", tables: 4, guestsPerTable: "4/6" },
  { id: 4, time: "5:00 PM", tables: 4, guestsPerTable: "4" },
  { id: 5, time: "7:30 PM", tables: 2, guestsPerTable: "2" },
  { id: 6, time: "8:00 PM", tables: 1, guestsPerTable: "2" },
];

export default function PartnerDashboardPage() {
  const [isPaused, setIsPaused] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [offerType, setOfferType] = useState<OfferType>("percentage");
  const [offerValue, setOfferValue] = useState("20");
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(initialTimeSlots);

  const offerText = useMemo(() => {
    return offerType === "credit"
      ? `$${offerValue} Credit`
      : `${offerValue}% Off Early Dinner`;
  }, [offerType, offerValue]);

  const availableWindow = useMemo(() => {
    if (timeSlots.length === 0) return "";
    return `${timeSlots[0].time} – ${timeSlots[timeSlots.length - 1].time}`;
  }, [timeSlots]);

  const togglePause = () => setIsPaused((prev) => !prev);

  const updateSlot = (id: number, field: keyof TimeSlot, value: any) => {
    setTimeSlots((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const changeTables = (id: number, delta: number) => {
    setTimeSlots((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, tables: Math.max(1, s.tables + delta) } : s
      )
    );
  };

  const addTimeSlot = () => {
    setTimeSlots((prev) => [
      ...prev,
      {
        id: Date.now(),
        time: "8:30 PM",
        tables: 2,
        guestsPerTable: "2",
      },
    ]);
  };

  const removeSlot = (id: number) => {
    setTimeSlots((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <main className="relative min-h-screen text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[url('/restaurant-hero-bg.png')] bg-cover bg-center opacity-25 blur-sm" />
      <div className="absolute inset-0 -z-10 bg-black/80" />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-semibold">
          Demo Restaurant Dashboard
        </h1>

        {/* TOP CARD */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/60">Today's Offer</p>
              <h2 className="text-3xl mt-2">{offerText}</h2>
              <p className="text-white/70 mt-2">{availableWindow}</p>
            </div>

            <div className="flex rounded-full border border-white/10 bg-black/30 p-1">
              <button
                onClick={() => setIsPaused(false)}
                className={`px-4 py-1 rounded-full ${
                  !isPaused ? "bg-emerald-500 text-black" : "text-white/60"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setIsPaused(true)}
                className={`px-4 py-1 rounded-full ${
                  isPaused ? "bg-emerald-500 text-black" : "text-white/60"
                }`}
              >
                Paused
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setShowEditModal(true)}
              className="bg-emerald-500 text-black px-4 py-2 rounded-xl"
            >
              Edit Offer
            </button>

            <button
              onClick={togglePause}
              className="border border-white/20 px-4 py-2 rounded-xl"
            >
              {isPaused ? "Resume Offer" : "Pause Offer"}
            </button>

            <button className="border border-white/20 px-4 py-2 rounded-xl">
              Update Photos
            </button>
          </div>
        </section>

        {/* LISTING PREVIEW */}
        <section className="mt-10">
          <h2 className="text-2xl mb-4">Listing Preview</h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid lg:grid-cols-[300px_1fr]">
              {/* IMAGE */}
              <div className="h-[250px] bg-[url('/elegant-restaurant-interior.png')] bg-cover bg-center relative">
                <div className="absolute top-4 left-4 bg-emerald-500 text-black px-3 py-1 rounded-full">
                  {offerType === "credit"
                    ? `$${offerValue}`
                    : `${offerValue}% Off`}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl">Demo Bistro</h3>
                <p className="text-white/60">★ 4.8 • Park City</p>

                {!isPaused ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <div
                        key={slot.id}
                        className="border border-white/10 px-3 py-2 rounded-lg text-sm"
                      >
                        <div>{slot.time}</div>
                        <div className="text-xs text-white/50">
                          {slot.tables} tables • {slot.guestsPerTable}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-6 text-white/60">
                    Offer paused. No time slots visible.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* EDIT MODAL */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/restaurant-hero-bg.png')] bg-cover opacity-20 blur-md" />
          <div className="absolute inset-0 bg-black/80" />

          <div className="relative w-full max-w-2xl bg-[#121018] rounded-3xl p-6 border border-white/10">
            <h2 className="text-2xl mb-4">Edit Offer</h2>

            <select
              value={offerType}
              onChange={(e) =>
                setOfferType(e.target.value as OfferType)
              }
              className="w-full mb-4 p-3 bg-black border border-white/10 rounded-xl"
            >
              <option value="percentage">Percentage Off</option>
              <option value="credit">Dining Credit</option>
            </select>

            <input
              value={offerValue}
              onChange={(e) => setOfferValue(e.target.value)}
              className="w-full mb-4 p-3 bg-black border border-white/10 rounded-xl"
            />

            {/* TIME SLOTS */}
            <div className="space-y-3">
              {timeSlots.map((slot) => (
                <div key={slot.id} className="flex gap-2">
                  <input
                    value={slot.time}
                    onChange={(e) =>
                      updateSlot(slot.id, "time", e.target.value)
                    }
                    className="flex-1 p-2 bg-black border border-white/10 rounded"
                  />

                  <button onClick={() => changeTables(slot.id, -1)}>
                    -
                  </button>
                  <span>{slot.tables}</span>
                  <button onClick={() => changeTables(slot.id, 1)}>
                    +
                  </button>

                  <input
                    value={slot.guestsPerTable}
                    onChange={(e) =>
                      updateSlot(
                        slot.id,
                        "guestsPerTable",
                        e.target.value
                      )
                    }
                    className="w-20 p-2 bg-black border border-white/10 rounded"
                  />

                  <button onClick={() => removeSlot(slot.id)}>
                    ❌
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={addTimeSlot}
              className="mt-4 border px-3 py-2 rounded"
            >
              + Add Time Slot
            </button>

            <div className="mt-6 flex justify-between">
              <button onClick={() => setShowEditModal(false)}>
                Cancel
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-emerald-500 px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
