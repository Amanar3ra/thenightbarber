import Booking from "../models/Booking.js";
import { sendBookingEmails } from "../utils/email.js";

/**
 * Create booking with integrity check:
 * For same barber + date + time reject if already exists (any status except Cancelled).
 */
export const createBooking = async (req, res) => {
  try {
    const { name, email, phone, service, price, barber, date, time } = req.body;
    if (!name || !email || !service || !barber || !date || !time) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // check double booking for same barber/date/time
    const exists = await Booking.findOne({ barber, date, time, status: { $ne: "Cancelled" } });
    if (exists) {
      return res.status(409).json({ error: "Selected slot is already booked. Choose another slot." });
    }

    const booking = new Booking({ name, email, phone, service, price, barber, date, time, status: "Pending" });
    await booking.save();

    // send emails (non-blocking)
    sendBookingEmails(booking, "receipt").catch(err => console.warn("Email error:", err));

    return res.status(201).json({ booking });
  } catch (err) {
    console.error("createBooking error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// admin: list bookings (protected by x-api-key header)
export const listBookings = async (req, res) => {
  const key = req.headers["x-api-key"];
  if (key !== process.env.ADMIN_API_KEY) return res.status(401).json({ error: "Unauthorized" });
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json({ bookings });
};

// admin: confirm booking (send confirmation emails)
export const confirmBooking = async (req, res) => {
  const key = req.headers["x-api-key"];
  if (key !== process.env.ADMIN_API_KEY) return res.status(401).json({ error: "Unauthorized" });

  try {
    const id = req.params.id;
    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ error: "Not found" });

    booking.status = "Confirmed";
    await booking.save();

    // send confirmation emails
    sendBookingEmails(booking, "confirm").catch(err => console.warn("Email error:", err));

    res.json({ booking });
  } catch (err) {
    console.error("confirmBooking error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
