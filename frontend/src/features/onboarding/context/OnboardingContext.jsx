import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const OnboardingContext = createContext();

const defaultData = {
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
};

export function OnboardingProvider({ children }) {

  const [data, setData] = useState(() => {

    const saved = localStorage.getItem("onboardingData");
    return saved ? JSON.parse(saved) : defaultData;

  });

  useEffect(() => {

    if (data) {
      localStorage.setItem("onboardingData", JSON.stringify(data));
    }
  }, [data]);

  const updateData = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal) => {
  setData((prev) => {
    const exists = prev.goals.find((g) => g.id === goal.id);

    const updatedGoals = exists
      ? prev.goals.filter((g) => g.id !== goal.id)
      : [...prev.goals, goal];

    // localStorage.setItem(
    //   "onboarding",
    //   JSON.stringify({
    //     ...prev,
    //     goals: updatedGoals,
    //   })
    // );

    return { ...prev, goals: updatedGoals };
  });
};

  const clearData = () => {
    localStorage.removeItem("onboardingData");
    setData(defaultData);
  };

  return (

    <OnboardingContext.Provider
      value={{
        data,
        updateData,
        toggleGoal,
        clearData
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => {

  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("Wrap app with OnboardingProvider");
  }

  return context;
};