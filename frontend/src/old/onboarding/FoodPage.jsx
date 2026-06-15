import { useNavigate } from "react-router-dom";


import OnboardingLayout from "@/old/OnboardingLayout";

import { useOnboarding } from "@/old/context/OnboardingContext";
import SelectionCard from "./components/SelectionCard";

export default function GenderPage() {
  const navigate = useNavigate();

  const { data, updateData } = useOnboarding();

  const options = [
    "Vegetarian",
  "Non Vegetarian",
  ];

  return (
    <OnboardingLayout
      step={2}
      total={8}
      title="What's your gender?"
      subtitle="This helps personalize recommendations."
    >
      <div className="space-y-3">

        {options.map((option) => (
          <SelectionCard
            key={option}
            label={option}
            selected={data.option === option}
            onClick={() => {
              updateData("option", option);
              navigate("/onboarding/allergies");
            }}
          />
        ))}

      </div>
    </OnboardingLayout>
  );
}