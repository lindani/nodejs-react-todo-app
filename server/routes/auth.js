import express from "express";
import { signup, signin } from "../controllers/auth.js";

const router = express.Router();

// Create a new user
router.post("/signup", signup);

// Sign a new user
router.post("/signin", signin);

// Google Auth for a new user
// router.post("/google", googleAuth);

export default router;
