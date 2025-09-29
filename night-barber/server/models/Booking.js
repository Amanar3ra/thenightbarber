import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  service: { type: String, required: true },
  price: { type: Number },
  barber: { type: String, required: true },
  date: { type: String, required: true }, // YYYY-MM-DD
  time: { type: String, required: true }, // e.g. "9:30 AM"
  status: { type: String, default: "Pending" }, // Pending | Confirmed | Cancelled
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);
