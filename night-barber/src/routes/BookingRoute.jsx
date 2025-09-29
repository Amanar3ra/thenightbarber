import React from "react";
import { Routes, Route } from "react-router-dom";
import ServiceSelection from "./ServiceSelection";
import DateSelection from "./DateSelection";
import Checkout from "./Checkout";

export default function BookingRoute() {
  return (
    <Routes>
      <Route index element={<ServiceSelection />} />
      <Route path="date" element={<DateSelection />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}
