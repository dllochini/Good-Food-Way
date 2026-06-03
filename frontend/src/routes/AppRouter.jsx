import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/LandingPage";
import Page1 from "../pages/onboarding/Personal";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />

      {/* PROTECTED ROUTES */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* ONBOARDING (protected) */}
      <Route
        path="/onboarding/page1"
        element={
          <ProtectedRoute>
            <Page1 />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRouter;