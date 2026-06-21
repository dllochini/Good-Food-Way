import express from "express";
import {
  completeOnboarding,
  getDietPreferencesController,
  getGoalsController,
  getPlansController,
} from "./onboarding.controller.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/complete", protect, completeOnboarding);
router.get("/goals", getGoalsController);
router.get("/diet-preferences", getDietPreferencesController);
router.get("/plans", getPlansController);

export default router;
