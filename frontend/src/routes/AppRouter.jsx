import { Navigate, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/common/ProtectedRoute";
import AppLayout from "@/components/layouts/AppLayout";

import Dashboard from "../pages/dashboard/Dashboard";

import PaymentPortal from "../pages/PaymentPortal";
import ReportsPage from "../pages/ReportsPage";
import ConsultPage from "../pages/ConsultPage";
import TrackPage from "../pages/TrackPage";

import MealsPage from "../pages/meals/MealsPage";
import MealTrackPage from "../pages/meals/MealTrackPage";
import MealDetailPage from "../pages/meals/MealDetailPage";

import ProfilePage from "../pages/settings/ProfilePage";
import NotificationsPage from "@/pages/settings/NotificationsPage";
import PrivacySecurityPage from "@/pages/settings/PrivacySecurityPage";
import SubscriptionPage from "@/pages/settings/SubscriptionPage";
import AppSettingsPage from "@/pages/settings/AppSettingsPage";
import HelpSupportPage from "@/pages/settings/HelpSupportPage";
import EditProfilePage from "@/pages/settings/EditProfilePage";

import AICoachPage from "@/pages/support/AICoachPage";
import Login from "@/pages/auth/Login";

import DietitianChatPage from "@/pages/support/DietitianChatPage";
import LandingPage from "@/pages/auth/LandingPage";

import CompleteStep from "@/pages/onboarding/components/CompleteStep";
import PlanSelection from "@/pages/onboarding/components/PlanSelection";
import SuccessPlan from "@/pages/onboarding/components/SuccessPlan";
import GeneratingPlan from "@/pages/onboarding/components/GeneratingPlan";
import PreferencesStep from "@/pages/onboarding/components/PreferencesStep";
import FoodPreferenceStep from "@/pages/onboarding/components/FoodPreferenceStep";
import ActivityStep from "@/pages/onboarding/components/ActivityStep";
import AboutYouStep from "@/pages/onboarding/components/AboutYouStep";
import GoalStep from "@/pages/onboarding/components/GoalStep";

import { OnboardingProvider } from "@/pages/onboarding/context/OnboardingContext";

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
        {/* <Route path="/onboarding" element={<OnboardingPage />} /> */}

        <Route element={<AppLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/meals" element={<MealsPage />} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/mealtrack" element={<MealTrackPage />} />
          <Route path="/mealdetail" element={<MealDetailPage />} />

          <Route path="/paymentportal" element={<PaymentPortal />} />

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