import express from "express";
import { signup, login, getMe } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Get logged-in user
router.get("/me", authMiddleware, getMe);

export default router;