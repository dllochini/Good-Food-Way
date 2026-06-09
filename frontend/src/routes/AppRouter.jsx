import { Navigate, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/auth/LandingPage";
import Login from "../pages/auth/Login";

import ProtectedRoute from "../components/ProtectedRoute";

import PaymentPortal from "../pages/PaymentPortal";
import Dashboard from "../pages/Dashboard";
import MealsPage from "../pages/meals/MealsPage";
import TrackPage from "../pages/trackpge/TrackPage";
import ReportsPage from "../pages/ReportsPage";
import ConsultPage from "../pages/ConsultPage";
import ProfilePage from "../pages/ProfilePage";
import MealTrackPage from "../pages/meals/MealTrackPage";
import MealDetailPage from "../pages/meals/MealDetailPage";

import SignupPage from "@/pages/auth/Signup";
import GoalPage from "@/pages/onboarding/GoalPage";
import AboutYouPage from "@/pages/onboarding/AboutYouPage";
import DietaryPage from "@/pages/onboarding/DietaryPage";
import ReportPage from "@/pages/onboarding/ReportPage";
import ChoosePlan from "@/pages/onboarding/ChoosePlan";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landingpage" replace />} />

      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/signup" element={<Navigate to="/register" replace />} />

      <Route path="/onboarding/goal" element={<GoalPage />} />
      <Route path="/onboarding/about" element={<AboutYouPage />} />
      <Route path="/onboarding/dietary" element={<DietaryPage />} />
      <Route path="/onboarding/report" element={<ReportPage />} />
      <Route path="/chooseplan" element={<ChoosePlan />} />

      <Route path="/meals" element={<MealsPage />} />
      <Route path="/track" element={<TrackPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/consult" element={<ConsultPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/mealtrack" element={<MealTrackPage />} />
      <Route path="/mealdetail" element={<MealDetailPage />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/paymentportal" element={<PaymentPortal />} />

      <Route element={<ProtectedRoute />}>
        {/* put protected routes here later if needed */}
      </Route>
    </Routes>
  );
};

export default AppRouter;