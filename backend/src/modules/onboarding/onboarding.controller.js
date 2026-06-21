import {
  getDietPreferences,
  getHealthGoals,
  getPlans,
  saveOnboarding,
} from "./onboarding.repository.js";

export const completeOnboarding = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await saveOnboarding(userId, req.body);

    res.status(200).json({
      message: "Onboarding completed",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Onboarding failed" });
  }
};

export const getGoalsController = async (req, res) => {
  const goals = await getHealthGoals();
  res.json(goals);
};

export const getDietPreferencesController = async (req, res) => {
  const preferences = await getDietPreferences();
  res.json(preferences);
};

export const getPlansController = async (req, res) => {
  const plans = await getPlans();
  res.json(plans);
};
