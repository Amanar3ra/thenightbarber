import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { id: 1, name: "Haircut", price: 25, duration: "30 min" },
  { id: 2, name: "Haircut + Beard", price: 40, duration: "45 min" },
  { id: 3, name: "Beard", price: 15, duration: "20 min" },
];

export default function ServiceSelection() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected) {
      localStorage.setItem("service", JSON.stringify(selected));
      navigate("/booking/date");
    }
  };

  return (
    <div className="flex p-6">
      {/* Services */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold">Select a Service</h2>
        {services.map((s) => (
          <div
            key={s.id}
            onClick={() => setSelected(s)}
            className={`p-4 border rounded-lg cursor-pointer ${
              selected?.id === s.id ? "border-black" : "border-gray-300"
            }`}
          >
            <h3 className="text-lg font-semibold">{s.name}</h3>
            <p>CA${s.price}.00 · {s.duration}</p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="w-1/3 ml-6 border rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Appointment summary</h2>
        {selected ? (
          <div className="flex justify-between">
            <span>{selected.name}</span>
            <span>CA${selected.price}.00</span>
          </div>
        ) : (
          <p>No services added yet</p>
        )}
        <button
          disabled={!selected}
          onClick={handleNext}
          className={`w-full mt-6 py-2 rounded-lg font-semibold ${
            selected ? "bg-black text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
