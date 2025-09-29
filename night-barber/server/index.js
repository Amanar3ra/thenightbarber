import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookingsRouter from "./routes/bookings.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingsRouter);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(()=> {
    console.log("MongoDB connected");
    app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
