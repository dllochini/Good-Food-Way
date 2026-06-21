import { useNavigate } from "react-router-dom";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import OnboardingLayout from "../layout/OnboardingLayout";
import { useOnboarding } from "../context/OnboardingContext";
import { getGoals } from "@/features/onboarding/api/onboarding";
import { useEffect, useState } from "react";

export default function GoalStep() {

  const navigate = useNavigate();
  const { data, toggleGoal } = useOnboarding();
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const loadGoals = async () => {
      const result = await getGoals();
      setGoals(result);
    };
    loadGoals();
  }, []);

  return (
    <OnboardingLayout
      step={1}
      totalSteps={9}
      title="What are your goals?"
      subtitle="Choose all that apply."
      showBack={false}
    >

      <div className="space-y-3">

        {goals.map((goal) => {

          const selected = data.goals.some(g => g.id === goal.id);

          return (
            <Card
              key={goal.id}
              onClick={() =>
                toggleGoal(goal)
              }
              className={`cursor-pointer rounded-3xl p-5 transition-all duration-200 ${selected
                ? "border-2 border-primary bg-primary/10 shadow-md scale-[1.02]"
                : "border hover:border-primary/40 hover:bg-muted/50"
                }`}
            >

              <div className="flex items-center gap-4">
                <div className="flex-1">

                  <h3 className="font-semibold">
                    {goal.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {goal.description}
                  </p>

                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Button
        className="mt-8 h-14 w-full rounded-2xl"
        disabled={data.goals.length === 0}
        onClick={() => navigate("/onboarding/about")}
      >
        Continue
      </Button>
    </OnboardingLayout>
  );
}