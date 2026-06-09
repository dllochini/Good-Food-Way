import { Lock, Mail, Salad } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue tracking your meals, deliveries, and wellness streak."
      footer={
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <button
            className="font-semibold text-primary hover:underline"
            onClick={() => navigate("/register")}
            type="button"
          >
            Create account
          </button>
        </p>
      }
    >
      <div className="mb-6 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Salad className="h-8 w-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="email" placeholder="Email address" className="h-12 pl-10" />
        </div>

        <div className="relative">
          <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="password" placeholder="Password" className="h-12 pl-10" />
        </div>
      </div>

      <div className="mt-3 text-right">
        <button className="text-sm font-medium text-primary hover:underline" type="button">
          Forgot password?
        </button>
      </div>

      <Button className="mt-5 h-12 w-full" onClick={() => navigate("/dashboard")}>
        Sign in
      </Button>
    </AuthLayout>
  );
}
