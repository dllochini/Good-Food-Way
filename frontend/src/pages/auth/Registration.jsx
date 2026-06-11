import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useUserRegister } from "../../hooks/useAuth";

const Registration = () => {
  
  const navigate = useNavigate();
  const { mutate, isPending, error } = useUserRegister();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    referralCode: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(form, {
      onSuccess: () => {
        navigate("/onboarding/goal");
      },
    });
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">

        {/* Card */}
        <div className="rounded-lg border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10">

          {/* Logo */}
          <div className="h-20 w-20 rounded-full bg-primary mx-auto flex items-center justify-center text-white font-bold">
            GFW
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
              <span>Step 1 of 4</span>
              <span>25%</span>
            </div>

            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 w-1/4 rounded-full bg-primary" />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-bold">
              Create Your Account
            </h1>

            <p className="mt-3 text-muted-foreground">
              Let's start with a few basic details to
              personalize your nutrition journey.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className="h-12 rounded-xl"
                required
              />

              <Input
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className="h-12 rounded-xl"
                required
              />
            </div>

            <Input
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="h-12 rounded-xl"
              required
            />

            <div>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="h-12 rounded-xl"
                required
              />

              <p className="mt-2 text-xs text-muted-foreground">
                Use at least 8 characters.
              </p>
            </div>

            <Collapsible className="rounded-xl border">
              <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-sm font-medium">
                Referral Code (Optional)

                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>

              <CollapsibleContent className="px-4 pb-4">
                <Input
                  name="referralCode"
                  placeholder="Enter referral code"
                  value={form.referralCode}
                  onChange={handleChange}
                  className="h-12 rounded-xl"
                />
              </CollapsibleContent>
            </Collapsible>

            {error && (
              <p className="text-sm text-red-500">
                {error?.response?.data?.message ||
                  "Registration failed"}
              </p>
            )}

            <Button
              type="submit"
              disabled={isPending}
              className="
                h-14
                w-full
                rounded-xl
                text-base
                font-semibold
                transition-all
                hover:scale-[1.02]
              "
            >
              {isPending ? (
                "Creating Account..."
              ) : (
                <>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Sign In */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-primary hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Registration;
