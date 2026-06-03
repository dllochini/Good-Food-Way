import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
// import Dashboard from "../pages/Dashboard";
import Welcome from "../pages/onboarding/Welcome";

import ProtectedRoute from "../components/ProtectedRoute";
import Personal from "../pages/onboarding/Personal";
import HealthGoals from "@/pages/onboarding/HealthGoals";
import DietaryPreferences from "@/pages/onboarding/DietaryPreference";
import AllergiesAndDislikes from "@/pages/onboarding/AllergiesAndDislikes";
import AllSet from "@/pages/onboarding/AllSet";
import ChoosePlan from "@/pages/ChoosePlan";
import PaymentPortal from "@/pages/PaymentPortal";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />

        <Route path="/onboarding/page1" element={<Welcome />} />
        <Route path="/onboarding/page2" element={<Personal />} />
        <Route path="/onboarding/page3" element={<HealthGoals />} />
        <Route path="/onboarding/page4" element={<DietaryPreferences />} />
        <Route path="/onboarding/page5" element={<AllergiesAndDislikes />} />
        <Route path="/onboarding/page6" element={<AllSet />} />
        <Route path="/chooseplan" element={<ChoosePlan />} />

        <Route path="/paymentportal" element={<PaymentPortal />} />
        
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>


      </Route>
    </Routes>
  );
};

export default AppRouter;