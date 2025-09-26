// src/routes/BookingRoute.jsx
import {Routes, Route} from 'react-router-dom'
import ServiceSelection from './ServiceSelection';
import DateSelection from './DateSelection';
import Checkout from './Checkout';
// import BookingForm from "../components/BookingForm";

const BookingRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<ServiceSelection />} />
        <Route path="/date" element={<DateSelection />} />
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default BookingRoute;
