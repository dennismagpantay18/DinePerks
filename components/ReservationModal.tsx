"use client"

import { useState } from "react"

export default function ReservationModal({ restaurant, time, offer, onClose }: any) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [partySize, setPartySize] = useState("2")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: any) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Reservation Request Sent</h2>

          <p className="mb-6">
            The restaurant will honor the listed offer if you arrive within the
            15 minute grace period.
          </p>

          <button
            onClick={onClose}
            className="bg-black text-white px-6 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">

        <h2 className="text-2xl font-bold mb-4">Complete Reservation</h2>

        <div className="mb-6 text-sm text-gray-600">
          <p><strong>{restaurant}</strong></p>
          <p>Time: {time}</p>
          <p>Offer: {offer}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            required
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            required
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />

          <input
            required
            type="email"
            placeholder="Email Address"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <select
            className="w-full border p-2 rounded"
            value={partySize}
            onChange={(e)=>setPartySize(e.target.value)}
          >
            {[1,2,3,4,5,6,7,8].map(n=>(
              <option key={n}>{n}</option>
            ))}
          </select>

          <div className="text-xs bg-gray-100 p-3 rounded mt-4">
            <p>Reservations include a <strong>15 minute grace period</strong>.</p>
            <p>Restaurants may cancel reservations if guests arrive later.</p>
            <p>Dining credits and discounts are set by the restaurant.</p>
            <p>DinePerks only provides the reservation platform.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Confirm Reservation
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full border py-2 rounded"
          >
            Cancel
          </button>

        </form>

      </div>
    </div>
  )
}
