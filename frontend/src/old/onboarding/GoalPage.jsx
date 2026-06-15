import { useNavigate } from "react-router-dom";

import OnboardingLayout from "@/old/OnboardingLayout";

import { useOnboarding } from "@/old/context/OnboardingContext";
import SelectionCard from "./components/SelectionCard";

export default function GoalPage() {
  const navigate = useNavigate();

  const { data, updateData } =
    useOnboarding();

  const goals = [
    "Lose Weight",
    "Build Muscle",
    "Eat Healthier",
    "More Energy",
  ];

  return (
    <OnboardingLayout
      step={1}
      total={5}
      title="What brings you here?"
    >
      <div className="space-y-3">

        {goals.map((goal) => (
          <SelectionCard
            key={goal}
            label={goal}
            selected={data.goal === goal}
            onClick={() => {
              updateData("goal", goal);

              navigate(
                "/onboarding/profile"
              );
            }}
          />
        ))}

      </div>
    </OnboardingLayout>
  );
}