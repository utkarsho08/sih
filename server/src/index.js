import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// Allowed origins (local + deployed frontend)
const allowedOrigins = [
  "http://localhost:5173",            // local dev
  "https://sih-six-sand.vercel.app"  // deployed frontend
];

// CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (Postman, mobile apps, etc.)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/api/test", (req, res) => res.send("✅ Server working"));

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ DB connection error:", err));
