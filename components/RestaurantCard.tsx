"use client"

import { useState } from "react"
import ReservationModal from "./ReservationModal"

type RestaurantCardProps = {
  name: string
  cuisine: string
  offer: string
  image: string
  times: string[]
}

export default function RestaurantCard({
  name,
  cuisine,
  offer,
  image,
  times,
}: RestaurantCardProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover"
        />

        <div className="p-5">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-gray-500 mt-1">{cuisine}</p>

          <div className="mt-4 inline-block bg-black text-white text-sm px-3 py-2 rounded-full">
            {offer}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className="border rounded-full px-4 py-2 text-sm hover:bg-black hover:text-white transition"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedTime && (
        <ReservationModal
          restaurant={name}
          time={selectedTime}
          offer={offer}
          onClose={() => setSelectedTime(null)}
        />
      )}
    </>
  )
}
