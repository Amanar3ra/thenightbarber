import React, { useEffect, useState } from "react";
import { fetchBookingsAdmin, confirmBookingAdmin } from "../api/bookingApi";

export default function AdminBookings(){
  const [bookings, setBookings] = useState([]);

  async function load(){
    const res = await fetchBookingsAdmin();
    setBookings(res.bookings || []);
  }

  useEffect(()=>{ load(); }, []);

  const confirm = async (id) => {
    await confirmBookingAdmin(id);
    load();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin — Bookings</h2>
      {bookings.length === 0 && <p>No bookings</p>}
      {bookings.map(b => (
        <div key={b._id} style={{ border: "1px solid #eee", padding: 12, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <strong>{b.service}</strong><br />
              {b.date} {b.time}<br />
              {b.name} • {b.phone}<br />
              <small>{b.email}</small>
            </div>
            <div>
              <div style={{ marginBottom: 8 }}>{b.status}</div>
              {b.status !== "Confirmed" && <button onClick={() => confirm(b._id)}>Confirm</button>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
