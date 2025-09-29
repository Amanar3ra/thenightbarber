import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function DateSelection() {
  const navigate = useNavigate();
  const service = JSON.parse(localStorage.getItem("service"));
  const today = dayjs();
  const dates = Array.from({ length: 3 }, (_, i) => today.add(i + 1, "day")); // next 3 days

  const generateRange = (startHour, endHour) => {
    const slots = [];
    for (let h = startHour; h <= endHour; h++) {
      slots.push(dayjs().hour(h).minute(0).format("h:mm A"));
      if (h !== endHour) slots.push(dayjs().hour(h).minute(30).format("h:mm A"));
    }
    return slots;
  };

  const morning = generateRange(9, 11);     // 9:00 – 11:30
  const afternoon = generateRange(12, 15);  // 12:00 – 3:30
  const evening = generateRange(16, 22);    // 4:00 – 10:30
  evening.push("11:00 PM");

  const [selectedDate, setSelectedDate] = useState(dates[0].format("YYYY-MM-DD"));
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [barber, setBarber] = useState("Rishabh");

  const handleNext = () => {
    if (!selectedSlot) return alert("Choose a time");
    localStorage.setItem("slot", `${selectedDate} ${selectedSlot}`);
    localStorage.setItem("barber", barber);
    navigate("/booking/checkout");
  };

  return (
    <div style={{ maxWidth: 1100, margin: "20px auto", padding: 16, display: "flex", gap: 20 }}>
      <div style={{ flex: 1 }}>
        <h2>Select date & time</h2>

        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          {dates.map(d => {
            const id = d.format("YYYY-MM-DD");
            return (
              <button key={id} onClick={() => setSelectedDate(id)}
                style={{ padding: "10px 12px", borderRadius: 8, border: selectedDate === id ? "2px solid #facc15" : "1px solid #ddd", background: selectedDate === id ? "#fffbea" : "#fff" }}>
                <div style={{ fontSize: 12 }}>{d.format("MMM D, YYYY")}</div>
                <div style={{ fontWeight: 600 }}>{d.format("ddd")}</div>
              </button>
            );
          })}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Barber</label>
          <select value={barber} onChange={e => setBarber(e.target.value)} style={{ padding: 8, borderRadius: 8 }}>
            <option>Rishabh</option>
            <option>Preet</option>
            <option>Alex</option>
            <option>Jordan</option>
          </select>
        </div>

        <h4>Morning </h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 8, marginBottom: 12 }}>
          {morning.map((s, i) => (
            <button key={i} onClick={() => setSelectedSlot(s)} style={{
              padding: 12,
              borderRadius: 8,
              border: selectedSlot === s ? "2px solid #000" : "1px solid #ddd",
              background: selectedSlot === s ? "#000" : "#fff",
              color: selectedSlot === s ? "#fff" : "#000"
            }}>{s}</button>
          ))}
        </div>

        <h4>Afternoon </h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 8, marginBottom: 12 }}>
          {afternoon.map((s, i) => (
            <button key={i} onClick={() => setSelectedSlot(s)} style={{
              padding: 12,
              borderRadius: 8,
              border: selectedSlot === s ? "2px solid #000" : "1px solid #ddd",
              background: selectedSlot === s ? "#000" : "#fff",
              color: selectedSlot === s ? "#fff" : "#000"
            }}>{s}</button>
          ))}
        </div>

        <h4>Evening </h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 8 }}>
          {evening.map((s, i) => (
            <button key={i} onClick={() => setSelectedSlot(s)} style={{
              padding: 12,
              borderRadius: 8,
              border: selectedSlot === s ? "2px solid #000" : "1px solid #ddd",
              background: selectedSlot === s ? "#000" : "#fff",
              color: selectedSlot === s ? "#fff" : "#000"
            }}>{s}</button>
          ))}
        </div>

        <div style={{ marginTop: 16 }}>
          <button onClick={handleNext} style={{ padding: "10px 16px", background: "#facc15", border: "none", borderRadius: 8 }}>Next →</button>
        </div>
      </div>

      <aside style={{ width: 320, border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
        <h3>Summary</h3>
        <p><strong>{service?.name}</strong></p>
        <p>{dayjs(selectedDate).format("MMMM D, YYYY")} {selectedSlot || ""}</p>
        <p>Barber: {barber}</p>
        <p>Price: CA${service?.price}</p>
      </aside>
    </div>
  );
}
