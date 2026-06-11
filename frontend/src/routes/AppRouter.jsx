import { Navigate, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/auth/LandingPage";
import Login from "../pages/auth/Login";

import ProtectedRoute from "../components/common/ProtectedRoute";

import PaymentPortal from "../pages/PaymentPortal";
import Dashboard from "../pages/dashboard/Dashboard";
import MealsPage from "../pages/meals/MealsPage";
import TrackPage from "../pages/TrackPage";
import ReportsPage from "../pages/ReportsPage";
import ConsultPage from "../pages/ConsultPage";
import ProfilePage from "../pages/settings/ProfilePage";
import MealTrackPage from "../pages/meals/MealTrackPage";
import MealDetailPage from "../pages/meals/MealDetailPage";

import SignupPage from "@/pages/auth/Signup";
import WelcomePage from "@/pages/onboarding/WelcomePage";
import GoalPage from "@/pages/onboarding/GoalPage";
import AboutYouPage from "@/pages/onboarding/AboutYouPage";
import ActivityPage from "@/pages/onboarding/ActivityPage";
import FoodPage from "@/pages/onboarding/FoodPage";
import DietaryPage from "@/pages/onboarding/DietaryPage";
import ReportPage from "@/pages/onboarding/ReportPage";
import ChoosePlan from "@/pages/onboarding/ChoosePlan";

import NotificationsPage from "@/pages/settings/NotificationsPage";
import PrivacySecurityPage from "@/pages/settings/PrivacySecurityPage";
import SubscriptionPage from "@/pages/settings/SubscriptionPage";
import AppSettingsPage from "@/pages/settings/AppSettingsPage";
import HelpSupportPage from "@/pages/settings/HelpSupportPage";
import EditProfilePage from "@/pages/settings/EditProfilePage";
import AppLayout from "@/components/layouts/AppLayout";
import AICoachPage from "@/pages/support/AICoachPage";
import DietitianChatPage from "@/pages/support/DietitianChatPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landingpage" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/signup" element={<Navigate to="/register" replace />} />
      <Route path="/landingpage" element={<LandingPage />} />

      <Route element={<AppLayout />}>

        <Route path="/onboarding/welcome" element={<WelcomePage />} />
        <Route path="/onboarding/goal" element={<GoalPage />} />
        <Route path="/onboarding/about" element={<AboutYouPage />} />
        <Route path="/onboarding/activity" element={<ActivityPage />} />
        <Route path="/onboarding/food" element={<FoodPage />} />
        <Route path="/onboarding/dietary" element={<DietaryPage />} />
        <Route path="/onboarding/report" element={<ReportPage />} />
        <Route path="/chooseplan" element={<ChoosePlan />} />

        <Route path="/meals" element={<MealsPage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/consult" element={<ConsultPage />} />
        <Route path="/mealtrack" element={<MealTrackPage />} />
        <Route path="/mealdetail" element={<MealDetailPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/paymentportal" element={<PaymentPortal />} />

        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/profile/edit" element={<EditProfilePage />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/settings/notifications" element={<NotificationsPage />} />
        <Route path="/settings/privacy" element={<PrivacySecurityPage />} />
        <Route path="/settings/subscription" element={<SubscriptionPage />} />
        <Route path="/settings/app" element={<AppSettingsPage />} />
        <Route path="/settings/help" element={<HelpSupportPage />} />


        <Route path="/aicoach" element={<AICoachPage />} />
        <Route path="/dietitianchat" element={<DietitianChatPage />} />
        <Route path="/appointments" element={<ConsultPage />} />
        



      </Route>

      <Route element={<ProtectedRoute />}>
        {/* put protected routes here later if needed */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
