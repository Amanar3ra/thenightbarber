import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { id: 1, name: "Haircut", price: 25, duration: "30 min" },
  { id: 2, name: "Haircut + Beard", price: 40, duration: "45 min" },
  { id: 3, name: "Beard", price: 15, duration: "20 min" }
];

export default function ServiceSelection() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const next = () => {
    if (!selected) return alert("Select a service");
    localStorage.setItem("service", JSON.stringify(selected));
    navigate("/booking/date");
  };

  return (
    <div style={{ maxWidth: 1000, margin: "24px auto", padding: 16 }}>
      <h2 style={{ fontSize: 28, marginBottom: 12 }}>Select a Service</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
        {services.map(s => (
          <div key={s.id} onClick={() => setSelected(s)}
            style={{
              padding: 16,
              borderRadius: 12,
              cursor: "pointer",
              border: selected?.id === s.id ? "2px solid #facc15" : "1px solid #e5e7eb",
              background: selected?.id === s.id ? "#fffbea" : "#fff"
            }}>
            <h3 style={{ margin: 0 }}>{s.name}</h3>
            <p style={{ marginTop: 8 }}>{s.duration} • CA${s.price}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={next} style={{ padding: "10px 18px", borderRadius: 8, background: "#facc15", border: "none" }}>Next →</button>
      </div>
    </div>
  );
}
