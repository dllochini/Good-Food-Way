import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../hooks/auth.hook";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const { mutate, isPending, error } = useUserLogin();

  const [form, setForm] = useState({
    email: "",
    password: "",
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
      onSuccess: (data) => {
        // save JWT
        localStorage.setItem("token", data.token);

        // redirect after login
        navigate("/landingpage");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4">

      {/* CENTER CARD */}
      <Card className="w-full max-w-md shadow-xl rounded-2xl p-6">

        {/* LOGO */}
        <div className="flex justify-center  m-0">
          <img src={logo} alt="logo" className="w-30 h-30 " />
        </div>

        {/* TITLE */}
        <CardHeader className="text-center ">
          <CardTitle className="text-2xl font-semibold">
            Welcome back
          </CardTitle>
          <p className="text-sm text-gray-500">
            Food that works for you
          </p>
        </CardHeader>

        {/* FORM */}
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4  ">

            <Input
              name="email"
              placeholder="Enter your email"
              type="email"
              onChange={handleChange}
            />

            <Input
              name="password"
              placeholder="Enter your password"
              type="password"
              onChange={handleChange}
            />

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-sm">
                {error?.response?.data?.message}
              </p>
            )}

            {/* BUTTON */}
            <Button
              type="submit"
              className="w-full rounded-full"
              disabled={isPending}
            >
              {isPending ? "Signing in..." : "Sign in →"}
            </Button>

          </form>

          {/* FOOTER */}
          <div className="text-center mt-4 space-y-2">

            <p className="text-sm">
              Don’t have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="font-semibold"
              >
                Sign up
              </button>
            </p>

            <p className="text-xs text-gray-400">
              By continuing you agree to our Terms & Privacy Policy
            </p>

          </div>
        </CardContent>

      </Card>
    </div>
  );
};

export default Login;