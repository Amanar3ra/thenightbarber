import express from "express";
import { createBooking, listBookings, confirmBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", listBookings);
router.patch("/:id/confirm", confirmBooking);

export default router;
