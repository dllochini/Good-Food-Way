import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "@/components/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Continue your health journey with Good Food Way."
      showBack={false}
      footer={
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="font-semibold text-primary hover:underline"
          >
            Create One
          </button>
        </p>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/dashboard");
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="loginEmail">Email</Label>
          <Input id="loginEmail" type="email" autoComplete="email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="loginPassword">Password</Label>
          <Input
            id="loginPassword"
            type="password"
            autoComplete="current-password"
          />
        </div>

        <Button className="h-12 w-full" type="submit">
          <LogIn className="h-4 w-4" />
          Login
        </Button>
      </form>
    </AuthLayout>
  );
}
