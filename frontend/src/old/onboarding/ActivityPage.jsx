import { useNavigate } from "react-router-dom";


import OnboardingLayout from "@/old/OnboardingLayout";

import { useOnboarding } from "@/old/context/OnboardingContext";
import SelectionCard from "./components/SelectionCard";

export default function ActivityPage() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  const options = [
    "Mostly Sitting",
    "Lightly Active",
    "Active",
    "Very Active",
  ];

  return (
    <OnboardingLayout
      step={4}
      total={5}
      title="How active are you?"
    >
      <div className="space-y-3">

        {options.map((option) => (
          <SelectionCard
            key={option}
            label={option}
            selected={
              data.activity === option
            }
            onClick={() => {
              updateData(
                "activity",
                option
              );

              navigate(
                "/onboarding/preferences"
              );
            }}
          />
        ))}

      </div>
    </OnboardingLayout>
  );
}