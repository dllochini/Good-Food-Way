import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./src//modules/auth/auth.routes.js";
import onboardingRoutes from "./src/modules/onboarding/onboarding.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/onboarding", onboardingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
