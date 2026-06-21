import { Navigate, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../../shared/components/ProtectedRoute";
import AppLayout from "@/app/layouts/AppLayout";

import Dashboard from "../../features/dashboard/pages/Dashboard";

// import PaymentPortal from "../pages/PaymentPortal";
import ReportsPage from "../../features/healthreports/pages/ReportsPage";
import ConsultPage from "../../features/dietitian/pages/ConsultPage";
import TrackPage from "../../features/progress/pages/TrackPage";

import MealsPage from "../../features/meals/pages/MealsPage";
import MealTrackPage from "../../features/meals/pages/MealTrackPage";
import MealDetailPage from "../../features/meals/pages/MealDetailPage";

import ProfilePage from "../../features/settings/pages/ProfilePage";
import NotificationsPage from "@/features/settings/pages/NotificationsPage";
import PrivacySecurityPage from "@/features/settings/pages/PrivacySecurityPage";
import SubscriptionPage from "@/features/settings/pages/SubscriptionPage";
import AppSettingsPage from "@/features/settings/pages/AppSettingsPage";
import HelpSupportPage from "@/features/settings/pages/HelpSupportPage";
import EditProfilePage from "@/features/settings/pages/EditProfilePage";

import AICoachPage from "@/features/aicoach/pages/AICoachPage";
import Login from "@/features/auth/pages/Login";
import Signup from "@/features/auth/pages/SignUp";

import DietitianChatPage from "@/features/dietitian/pages/DietitianChatPage";
import LandingPage from "@/features/auth/pages/LandingPage";

import CompleteStep from "@/features/onboarding/components/CompleteStep";
import PlanSelection from "@/features/onboarding/components/PlanSelection";
import SuccessPlan from "@/features/onboarding/components/SuccessPlan";
import GeneratingPlan from "@/features/onboarding/components/GeneratingPlan";
import PreferencesStep from "@/features/onboarding/components/PreferencesStep";
import FoodPreferenceStep from "@/features/onboarding/components/FoodPreferenceStep";
import ActivityStep from "@/features/onboarding/components/ActivityStep";
import AboutYouStep from "@/features/onboarding/components/AboutYouStep";
import GoalStep from "@/features/onboarding/components/GoalStep";

import { OnboardingProvider } from "@/features/onboarding/context/OnboardingContext";

const AppRouter = () => {
  return (
    <>
      <OnboardingProvider>
        <Routes>
          <Route path="/onboarding/goals" element={<GoalStep />} />
          <Route path="/onboarding/about" element={<AboutYouStep />} />
          <Route path="/onboarding/activity" element={<ActivityStep />} />
          <Route path="/onboarding/food" element={<FoodPreferenceStep />} />
          <Route path="/onboarding/preferences" element={<PreferencesStep />} />
          <Route path="/onboarding/generating" element={<GeneratingPlan />} />
          <Route path="/onboarding/success-plan" element={<SuccessPlan />} />
          <Route path="/onboarding/plans" element={<PlanSelection />} />
          <Route path="/onboarding/completed" element={<CompleteStep />} />
        </Routes>
      </OnboardingProvider>

      <Routes>

        <Route path="/" element={<Navigate to="/landing" replace />} />

        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/onboarding" element={<OnboardingPage />} /> */}

        <Route element={<AppLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/meals" element={<MealsPage />} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/mealtrack" element={<MealTrackPage />} />
          <Route path="/mealdetail" element={<MealDetailPage />} />

          {/* {/* <Route path="/paymentportal" element={<PaymentPortal />} /> */}

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

        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;