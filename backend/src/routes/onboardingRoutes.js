import express from "express";
import {
  updateProfile,
  updateHealthGoals,
  updateDietPreferences,
  updateAllergies,
  getStatus,
} from "../controllers/onboardingController.js";

const router = express.Router();

router.post("/profile", updateProfile);
router.post("/health-goals", updateHealthGoals);
router.post("/diet", updateDietPreferences);
router.post("/allergies", updateAllergies);

router.get("/status", getStatus);

export default router;