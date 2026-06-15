import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Crown,
  Dumbbell,
  Flame,
  Heart,
  Scale,
  Sparkles,
  Target,
  User,
  Activity,
  BadgeCheck,
  Clock3,
  Droplets,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function OnboardingPage() {
  const navigate = useNavigate();

  const TOTAL_STEPS = 9;

  const [step, setStep] = useState(1);
  const [generationStep, setGenerationStep] = useState(0);

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
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const goals = [
    {
      title: "Lose Weight",
      icon: Scale,
      description: "Reduce body fat and improve fitness",
    },
    {
      title: "Build Muscle",
      icon: Dumbbell,
      description: "Gain strength and muscle mass",
    },
    {
      title: "Maintain Weight",
      icon: Target,
      description: "Stay consistent and healthy",
    },
    {
      title: "Improve Health",
      icon: Heart,
      description: "Better habits and nutrition",
    },
  ];

  const activityLevels = [
    {
      title: "Sedentary",
      icon: "🪑",
      description: "Desk job with little exercise",
    },
    {
      title: "Lightly Active",
      icon: "🚶",
      description: "Walking regularly, exercise 1-2 times/week",
    },
    {
      title: "Moderately Active",
      icon: "🏃",
      description: "Exercise 3-5 times/week",
    },
    {
      title: "Highly Active",
      icon: "🏋️",
      description: "Training most days or physical work",
    },
  ];

  const foodOptions = [
    {
      title: "Vegetarian",
      emoji: "🥦",
    },
    {
      title: "Non Vegetarian",
      emoji: "🍗",
    },
    {
      title: "No Preference",
      emoji: "🌎",
    },
  ];

  const plans = [
    {
      title: "Free Plan",
      icon: Sparkles,
      price: "Free",
      description: "Basic nutrition guidance",
      features: [
        "Nutrition targets",
        "Water tracking",
        "Progress monitoring",
      ],
    },
    {
      title: "Plan A",
      icon: CheckCircle2,
      price: "Rs. XXXX / month",
      description: "One personalized meal daily",
      recommended: true,
      features: [
        "1 personalized meal",
        "Dietitian support",
        "Progress tracking",
      ],
    },
    {
      title: "Plan B",
      icon: Crown,
      price: "Rs. YYYY / month",
      description: "Complete nutrition support",
      features: [
        "2 personalized meals",
        "Advanced recommendations",
        "Priority support",
      ],
    },
  ];

  const generationTasks = [
    "Analyzing your lifestyle",
    "Calculating calorie targets",
    "Building nutrition profile",
    "Generating recommendations",
    "Finalizing success plan",
  ];

  const titles = {
    1: {
      title: "What are your goals?",
      subtitle: "Choose all that apply.",
    },

    2: {
      title: "Tell us about yourself",
      subtitle:
        "Help us personalize your nutrition recommendations.",
    },

    3: {
      title: "How active are you?",
      subtitle:
        "Choose the option that best matches your lifestyle.",
    },

    4: {
      title: "Food preferences",
      subtitle:
        "Let's tailor meals to your preferences.",
    },

    5: {
      title: "Additional preferences",
      subtitle:
        "Optional information to improve recommendations.",
    },

    6: {
      title: "Creating your plan",
      subtitle: "",
    },

    7: {
      title: "Your Success Plan",
      subtitle:
        "Based on your goals and lifestyle.",
    },

    8: {
      title: "Choose your plan",
      subtitle:
        "Unlock personalized support and guidance.",
    },

    9: {
      title: "You're all set",
      subtitle:
        "Let's start your journey.",
    },
  };

  const activityFactor = useMemo(() => {
    switch (data.activity) {
      case "Sedentary":
        return 1.2;

      case "Lightly Active":
        return 1.375;

      case "Moderately Active":
        return 1.55;

      case "Highly Active":
        return 1.725;

      default:
        return 1.35;
    }
  }, [data.activity]);

  const age = Number(data.age || 30);

  const estimatedCalories = useMemo(() => {
    const weight = Number(data.weight || 0);
    const height = Number(data.height || 0);

    const genderFactor =
      data.gender === "Male"
        ? 5
        : data.gender === "Female"
          ? -161
          : -78;

    const bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      genderFactor;

    const tdee = Math.round(bmr * activityFactor);

    if (data.goals.includes("Lose Weight")) {
      return Math.max(1200, tdee - 350);
    }

    if (data.goals.includes("Build Muscle")) {
      return tdee + 250;
    }

    return tdee;
  }, [
    data.weight,
    data.height,
    data.gender,
    data.goals,
    age,
    activityFactor,
  ]);

  const proteinTarget = useMemo(() => {
    const weight = Number(data.weight || 0);

    if (data.goals.includes("Build Muscle")) {
      return Math.round(weight * 1.8);
    }

    if (data.goals.includes("Lose Weight")) {
      return Math.round(weight * 1.6);
    }

    return Math.round(weight * 1.4);
  }, [data.weight, data.goals]);

  const waterTarget = useMemo(() => {
    const weight = Number(data.weight || 0);

    return Math.max(2, (weight * 0.035).toFixed(1));
  }, [data.weight]);

  const expectedTimeline = useMemo(() => {
    if (data.goals.includes("Lose Weight")) {
      return "8 - 12 weeks";
    }

    if (data.goals.includes("Build Muscle")) {
      return "12 - 16 weeks";
    }

    if (data.goals.includes("Improve Health")) {
      return "4 - 8 weeks";
    }

    return "Ongoing";
  }, [data.goals]);

  const progress = useMemo(() => {
    return ((step - 1) / (TOTAL_STEPS - 1)) * 100;
  }, [step]);

  const canContinue = () => {
    switch (step) {
      case 1:
        return data.goals.length > 0;

      case 2:
        return (
          data.gender &&
          Number(data.age) > 0 &&
          Number(data.height) > 0 &&
          Number(data.weight) > 0
        );

      case 3:
        return data.activity !== "";

      case 4:
        return data.foodType !== "";

      case 5:
        return data.selectedPlan !== "";

      default:
        return true;
    }
  };

  const nextStep = () => {
    if (!canContinue()) return;

    if (step === 6) {
      setStep(7);
      return;
    }

    if (step === 8) {
      setStep(9);
      return;
    }

    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const skipFoodPreferences = () => {
    updateData("foodType", "No Preference");
    setStep(5);
  };

  const skipAdditionalPreferences = () => {
    updateData("allergies", "");
    updateData("dislikes", "");
    setStep(6);
  };

  useEffect(() => {
    if (step !== 6) return;

    setGenerationStep(0);

    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      setGenerationStep(current);

      if (current >= generationTasks.length) {
        clearInterval(interval);

        setTimeout(() => {
          setStep(8);
        }, 700);
      }
    }, 900);

    return () => clearInterval(interval);
  }, [step]);

  const pageTitle = titles[step];

  const nextButtonLabel = () => {
    switch (step) {
      case 5:
        return "Continue";

      case 6:
        return "Generate Plan";

      case 8:
        return "Choose Plan";

      case 9:
        return "Finish";

      default:
        return "Continue";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto min-h-screen max-w-md px-5 py-6 sm:px-6">
        {step !== 7 && (
          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>
                Step {Math.min(step, TOTAL_STEPS)} of {TOTAL_STEPS}
              </span>

              <span>{Math.round(progress)}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -16,
            }}
            transition={{
              duration: 0.22,
            }}
          >
            {step !== 7 && (
              <div className="mb-6">
                <h1 className="text-3xl font-bold leading-tight">
                  {pageTitle.title}
                </h1>

                <p className="mt-2 text-muted-foreground">
                  {pageTitle.subtitle}
                </p>
              </div>
            )}

            {/* STEP 1 */}

            {step === 1 && (
              <div className="space-y-3">
                {goals.map((goal) => {
                  const Icon = goal.icon;

                  const selected =
                    data.goals.includes(goal.title);

                  return (
                    <Card
                      key={goal.title}
                      onClick={() =>
                        toggleGoal(goal.title)
                      }
                      className={`cursor-pointer rounded-3xl p-5 transition-all ${selected
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/40 hover:bg-primary/5"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-primary/10 p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold">
                            {goal.title}
                          </h3>

                          <p className="mt-1 text-sm text-muted-foreground">
                            {goal.description}
                          </p>
                        </div>

                        {selected ? (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        ) : (
                          <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <div className="space-y-4">
                <Card className="rounded-3xl p-5">
                  <p className="mb-3 font-medium">
                    Gender
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {["Male", "Female", "Other"].map(
                      (gender) => {
                        const selected =
                          data.gender === gender;

                        return (
                          <button
                            key={gender}
                            onClick={() =>
                              updateData("gender", gender)
                            }
                            className={`rounded-2xl border p-4 text-sm font-medium transition-all ${selected
                                ? "border-primary bg-primary/5"
                                : "hover:border-primary/40"
                              }`}
                          >
                            {gender}
                          </button>
                        );
                      }
                    )}
                  </div>
                </Card>

                <Card className="rounded-3xl p-5">
                  <p className="mb-3 font-medium">
                    Age
                  </p>

                  <Input
                    type="number"
                    placeholder="25"
                    value={data.age}
                    onChange={(e) =>
                      updateData("age", e.target.value)
                    }
                  />
                </Card>

                <Card className="rounded-3xl p-5">
                  <p className="mb-3 font-medium">
                    Height
                  </p>

                  <div className="flex items-center gap-3">
                    <Input
                      type="number"
                      placeholder="170"
                      value={data.height}
                      onChange={(e) =>
                        updateData(
                          "height",
                          e.target.value
                        )
                      }
                    />
                    <span>cm</span>
                  </div>
                </Card>

                <Card className="rounded-3xl p-5">
                  <p className="mb-3 font-medium">
                    Weight
                  </p>

                  <div className="flex items-center gap-3">
                    <Input
                      type="number"
                      placeholder="65"
                      value={data.weight}
                      onChange={(e) =>
                        updateData(
                          "weight",
                          e.target.value
                        )
                      }
                    />
                    <span>kg</span>
                  </div>
                </Card>
              </div>
            )}

            {/* STEP 4 */}

            {step === 3 && (
              <div className="space-y-3">
                {activityLevels.map((activity) => {
                  const selected =
                    data.activity === activity.title;

                  return (
                    <Card
                      key={activity.title}
                      onClick={() =>
                        updateData(
                          "activity",
                          activity.title
                        )
                      }
                      className={`cursor-pointer rounded-3xl p-5 transition-all ${selected
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/40 hover:bg-primary/5"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">
                          {activity.icon}
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold">
                            {activity.title}
                          </h3>

                          <p className="text-sm text-muted-foreground">
                            {activity.description}
                          </p>
                        </div>

                        {selected ? (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        ) : (
                          <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* STEP 5 */}

            {step === 4 && (
              <div className="space-y-4">
                {foodOptions.map((food) => {
                  const selected =
                    data.foodType === food.title;

                  return (
                    <Card
                      key={food.title}
                      onClick={() =>
                        updateData(
                          "foodType",
                          food.title
                        )
                      }
                      className={`cursor-pointer rounded-3xl p-5 transition-all ${selected
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/40 hover:bg-primary/5"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">
                          {food.emoji}
                        </span>

                        <div className="flex-1">
                          <h3 className="font-semibold">
                            {food.title}
                          </h3>
                        </div>

                        {selected ? (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        ) : (
                          <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </Card>
                  );
                })}

                <Button
                  variant="ghost"
                  className="w-full rounded-2xl"
                  onClick={skipFoodPreferences}
                >
                  Skip for now
                </Button>
              </div>
            )}

            {/* STEP 6 */}

            {step === 5 && (
              <div className="space-y-4">
                <Card className="rounded-3xl p-5">
                  <label className="mb-3 block font-medium">
                    Any allergies?
                  </label>

                  <Input
                    placeholder="Peanuts, dairy, shellfish..."
                    value={data.allergies}
                    onChange={(e) =>
                      updateData(
                        "allergies",
                        e.target.value
                      )
                    }
                  />

                  <p className="mt-2 text-xs text-muted-foreground">
                    Optional
                  </p>
                </Card>

                <Card className="rounded-3xl p-5">
                  <label className="mb-3 block font-medium">
                    Foods you'd like to avoid
                  </label>

                  <Input
                    placeholder="Mushrooms, olives..."
                    value={data.dislikes}
                    onChange={(e) =>
                      updateData(
                        "dislikes",
                        e.target.value
                      )
                    }
                  />

                  <p className="mt-2 text-xs text-muted-foreground">
                    Optional
                  </p>
                </Card>

                <Button
                  variant="ghost"
                  className="w-full rounded-2xl"
                  onClick={skipAdditionalPreferences}
                >
                  Skip for now
                </Button>
              </div>
            )}

            {/* STEP 7 */}

            {step === 6 && (
              <div className="py-16">
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-10 w-10 animate-pulse text-primary" />
                  </div>

                  <h1 className="text-3xl font-bold">
                    Creating your plan
                  </h1>

                  <p className="mt-2 text-muted-foreground">
                    This usually takes a few seconds.
                  </p>
                </div>

                <div className="space-y-4">
                  {generationTasks.map(
                    (task, index) => (
                      <div
                        key={task}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${generationStep > index
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                            }`}
                        >
                          {generationStep > index ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            index + 1
                          )}
                        </div>

                        <span>{task}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            {/* STEP 8 */}

            {step === 7 && (
              <div className="space-y-5">
                <Card className="rounded-3xl bg-primary/5 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Flame className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-semibold">
                        Daily Calories
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Recommended starting target
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 text-4xl font-bold">
                    {estimatedCalories} kcal
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="rounded-3xl p-4">
                    <BadgeCheck className="mb-2 h-5 w-5 text-primary" />

                    <p className="text-xs text-muted-foreground">
                      Protein
                    </p>

                    <p className="font-semibold">
                      {proteinTarget}g/day
                    </p>
                  </Card>

                  <Card className="rounded-3xl p-4">
                    <Droplets className="mb-2 h-5 w-5 text-primary" />

                    <p className="text-xs text-muted-foreground">
                      Water
                    </p>

                    <p className="font-semibold">
                      {waterTarget} L/day
                    </p>
                  </Card>
                </div>

                <Card className="rounded-3xl p-5">
                  <Clock3 className="mb-3 h-5 w-5 text-primary" />

                  <p className="text-sm text-muted-foreground">
                    Expected Timeline
                  </p>

                  <p className="mt-1 font-semibold">
                    {expectedTimeline}
                  </p>
                </Card>

                <Card className="rounded-3xl p-5">
                  <Target className="mb-3 h-5 w-5 text-primary" />

                  <p className="text-sm text-muted-foreground">
                    Your Goals
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.goals.map((goal) => (
                      <span
                        key={goal}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* STEP 9 */}

            {step === 8 && (
              <div className="space-y-4">
                {plans.map((plan) => {
                  const Icon = plan.icon;

                  const selected =
                    data.selectedPlan === plan.title;

                  return (
                    <Card
                      key={plan.title}
                      onClick={() =>
                        updateData(
                          "selectedPlan",
                          plan.title
                        )
                      }
                      className={`cursor-pointer rounded-3xl p-5 transition-all ${selected
                        ? "border-primary bg-primary/5 shadow-md"
                        : "hover:border-primary/40 hover:bg-primary/5"
                        }`}
                    >
                      <div className="flex justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <Icon className="h-5 w-5 text-primary" />

                            <h3 className="font-bold">
                              {plan.title}
                            </h3>

                            {plan.recommended && (
                              <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                                Recommended
                              </span>
                            )}
                          </div>

                          <p className="mt-1 text-sm text-muted-foreground">
                            {plan.description}
                          </p>
                        </div>

                        <p className="font-bold whitespace-nowrap">
                          {plan.price}
                        </p>
                      </div>

                      <div className="mt-4 space-y-2">
                        {plan.features.map(
                          (feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-sm"
                            >
                              <Check className="h-4 w-4 text-primary" />
                              {feature}
                            </div>
                          )
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {/* STEP 10 */}

            {step === 9 && (
              <div className="py-10 text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                </div>

                <h1 className="text-3xl font-bold">
                  You're all set!
                </h1>

                <p className="mt-3 text-muted-foreground">
                  Your personalized nutrition journey
                  is ready.
                </p>

                <Card className="mt-6 rounded-3xl bg-primary/5 p-5 text-left">
                  <p className="font-semibold">
                    Selected Plan
                  </p>

                  <p className="mt-2 text-muted-foreground">
                    {data.selectedPlan}
                  </p>
                </Card>

                <Button
                  className="mt-8 h-14 w-full rounded-2xl"
                  onClick={() =>
                    navigate("/dashboard")
                  }
                >
                  Go To Dashboard
                </Button>
              </div>
            )}

            {/* NAVIGATION */}

            {step !== 6 && step !== 9 && (
              <div className="mt-8 flex gap-3">
                <Button
                  variant="outline"
                  className="h-14 rounded-2xl"
                  disabled={step === 1}
                  onClick={previousStep}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>

                <Button
                  className="h-14 flex-1 rounded-2xl"
                  disabled={!canContinue()}
                  onClick={() => {
                    if (step === 9) {
                      setStep(10);
                      return;
                    }

                    nextStep();
                  }}
                >
                  {nextButtonLabel()}

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}