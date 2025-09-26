import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function DateSelection() {
  const navigate = useNavigate();
  const service = JSON.parse(localStorage.getItem("service"));

  const today = dayjs();
  // Only next 2 days
  const dates = Array.from({ length: 2 }, (_, i) => today.add(i, "day"));

  // Generate 30-min slots in a given range
  const generateSlots = (startHour, endHour) => {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(dayjs().hour(hour).minute(0).format("h:mm A"));
      slots.push(dayjs().hour(hour).minute(30).format("h:mm A"));
    }
    return slots;
  };

  const morningSlots = generateSlots(9, 12);  // 9AM – 12PM
  const afternoonSlots = generateSlots(12, 16); // 12PM – 4PM
  const eveningSlots = generateSlots(16, 23);   // 4PM – 11PM
  eveningSlots.push("11:00 PM");

  const [selectedDate, setSelectedDate] = useState(dates[0].format("YYYY-MM-DD"));
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleNext = () => {
    if (selectedDate && selectedSlot) {
      localStorage.setItem("slot", `${selectedDate} ${selectedSlot}`);
      navigate("/booking/checkout");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-8">
      {/* Left side: calendar + slots */}
      <div className="flex-1">
        {/* Date selection like calendar row */}
        <div className="flex gap-3 mb-6">
          {dates.map((d) => {
            const formatted = d.format("YYYY-MM-DD");
            return (
              <button
                key={formatted}
                onClick={() => setSelectedDate(formatted)}
                className={`flex flex-col items-center px-4 py-3 rounded-lg border w-16 transition ${
                  selectedDate === formatted
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300 hover:bg-gray-100"
                }`}
              >
                <span className="text-sm">{d.format("dd")}</span>
                <span className="font-semibold">{d.format("D")}</span>
              </button>
            );
          })}
        </div>

        <p className="text-gray-500 text-sm mb-4">
          Times are shown in <span className="font-semibold">ADT</span>.
        </p>

        <h3 className="font-semibold text-lg mb-4">
          {dayjs(selectedDate).format("dddd, MMM D, YYYY")}
        </h3>

        {/* Slots grouped */}
        <div className="space-y-8">
          {/* Morning */}
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Morning</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {morningSlots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-xl px-4 py-3 font-medium border transition shadow-sm ${
                    selectedSlot === slot
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Afternoon */}
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Afternoon</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {afternoonSlots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-xl px-4 py-3 font-medium border transition shadow-sm ${
                    selectedSlot === slot
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Evening */}
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Evening</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {eveningSlots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-xl px-4 py-3 font-medium border transition shadow-sm ${
                    selectedSlot === slot
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side: summary */}
      <div className="lg:w-1/3 border rounded-lg p-6 h-fit shadow-md">
        <h2 className="text-xl font-bold mb-4">Appointment Summary</h2>
        {service ? (
          <>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{service.name}</span>
              <span className="font-semibold">CA${service.price}.00</span>
            </div>
            {selectedSlot && (
              <p className="mt-3 text-gray-600">
                {dayjs(selectedDate).format("MMMM D, YYYY")} at {selectedSlot}
              </p>
            )}
          </>
        ) : (
          <p className="text-gray-500">No service selected</p>
        )}

        <button
          disabled={!selectedSlot}
          onClick={handleNext}
          className={`mt-6 w-full py-3 rounded-lg font-semibold text-lg ${
            selectedSlot
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
