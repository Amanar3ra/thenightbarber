import React from "react";

export default function Checkout() {
  const service = JSON.parse(localStorage.getItem("service"));
  const slot = localStorage.getItem("slot");

  return (
    <div className="flex p-6">
      {/* Contact Info */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <input className="w-full border p-2 rounded" placeholder="First name" />
        <input className="w-full border p-2 rounded" placeholder="Last name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <input className="w-full border p-2 rounded" placeholder="Phone number" />
        <button className="mt-4 w-full py-2 bg-black text-white rounded-lg">
          Book appointment
        </button>
      </div>

      {/* Summary */}
      <div className="w-1/3 ml-6 border rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Appointment summary</h2>
        <p>{slot}</p>
        <div className="flex justify-between mt-2">
          <span>{service?.name}</span>
          <span>CA${service?.price}.00</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>CA${service?.price}.00</span>
        </div>
      </div>
    </div>
  );
}
