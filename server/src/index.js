import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// Allowed origins (local + deployed frontend)
const allowedOrigins = [
  "http://localhost:5173",               // local dev
  "https://sih-six-sand.vercel.app"     // replace with your actual Vercel domain
];

// CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Handle preflight OPTIONS requests
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/api/test", (req, res) => res.send("✅ Server working"));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ DB connection error:", err));
