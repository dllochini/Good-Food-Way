import { createContext, useContext, useState } from "react";

const OnboardingContext = createContext();

export function OnboardingProvider({ children }) {
  const [data, setData] = useState({
    goal: "",
    gender: "",
    age: 25,
    height: 170,
    weight: 60,
    activity: "",
    foodType: "",
    allergies: "",
  });

  const updateData = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <OnboardingContext.Provider
      value={{
        data,
        updateData,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  return useContext(OnboardingContext);
}