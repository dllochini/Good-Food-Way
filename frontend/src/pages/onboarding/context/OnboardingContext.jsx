import {
  createContext,
  useContext,
  useState,
} from "react";

const OnboardingContext =
  createContext();

export function OnboardingProvider({
  children,
}) {
  const [data, setData] = useState({
    goals: [],

    gender: "",
    age: "",
    height: "",
    weight: "",

    activity: "",

    foodType: "",

    allergies: "",
    dislikes: "",

    selectedPlan: "",
  });

  const updateData = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleGoal = (goal) => {
    setData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(
            (g) => g !== goal
          )
        : [...prev.goals, goal],
    }));
  };

  return (
    <OnboardingContext.Provider
      value={{
        data,
        updateData,
        toggleGoal,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () =>
  useContext(OnboardingContext);