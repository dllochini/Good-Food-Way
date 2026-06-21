import api from "@/shared/lib/axios";

export const saveOnboarding = async (data) => {
  const response = await api.post("/onboarding/complete", data);
  return response.data;
};

export const getGoals = async () => {
  const response = await api.get("/onboarding/goals");
  console.log(response);
  return response.data;
};

export const getDietPreferences = async () => {
  const response = await api.get("/onboarding/diet-preferences");
  return response.data;
};

export const getPlans = async () => {
  const response = await api.get("/onboarding/plans");
  return response.data;
};
