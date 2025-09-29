import React, { useState } from "react";
import { createBooking } from "../api/bookingApi";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const service = JSON.parse(localStorage.getItem("service"));
  const slot = localStorage.getItem("slot"); // "YYYY-MM-DD 9:30 AM"
  const barber = localStorage.getItem("barber") || "Any";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBook = async () => {
    if (!firstName || !lastName || !email) return alert("Fill name and email");
    setLoading(true);
    const [date, ...timeParts] = slot.split(" ");
    const time = timeParts.join(" ");
    const payload = {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      service: service?.name,
      price: service?.price,
      barber,
      date,
      time
    };

    const res = await createBooking(payload);
    setLoading(false);
    if (res?.booking) {
      alert("Booking received — check your email");
      localStorage.removeItem("service");
      localStorage.removeItem("slot");
      localStorage.removeItem("barber");
      navigate("/");
    } else if (res?.error) {
      alert(res.error);
    } else {
      alert("Booking failed. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: 1000, margin: "20px auto", padding: 16, display: "flex", gap: 20 }}>
      <div style={{ flex: 1 }}>
        <h2>Checkout</h2>
        <input placeholder="First name" value={firstName} onChange={e=>setFirstName(e.target.value)} style={{ width:"100%", padding:8, marginBottom:8 }} />
        <input placeholder="Last name" value={lastName} onChange={e=>setLastName(e.target.value)} style={{ width:"100%", padding:8, marginBottom:8 }} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{ width:"100%", padding:8, marginBottom:8 }} />
        <input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} style={{ width:"100%", padding:8, marginBottom:8 }} />

        <button onClick={handleBook} disabled={loading} style={{ padding: "10px 16px", background: "#000", color:"#fff", borderRadius:8 }}>
          {loading ? "Booking..." : "Book appointment"}
        </button>
      </div>

      <aside style={{ width: 320, border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
        <h3>Appointment summary</h3>
        <p><strong>{service?.name}</strong></p>
        <p>{slot}</p>
        <p>Barber: {barber}</p>
        <p>Price: CA${service?.price}</p>
      </aside>
    </div>
  );
}
