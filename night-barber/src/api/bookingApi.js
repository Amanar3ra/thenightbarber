const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function createBooking(payload) {
  try {
    const res = await fetch(`${API_URL}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return await res.json();
  } catch (err) {
    console.error("createBooking error", err);
    return { error: err.message || "Network error" };
  }
}

export async function fetchBookingsAdmin() {
  const key = import.meta.env.VITE_ADMIN_API_KEY;
  const res = await fetch(`${API_URL}/api/bookings`, {
    headers: { "x-api-key": key }
  });
  return res.json();
}

export async function confirmBookingAdmin(id) {
  const key = import.meta.env.VITE_ADMIN_API_KEY;
  const res = await fetch(`${API_URL}/api/bookings/${id}/confirm`, {
    method: "PATCH",
    headers: { "x-api-key": key }
  });
  return res.json();
}
