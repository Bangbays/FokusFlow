"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import Icon from "../AppIcon";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const mockCredentials = {
    email: "john@freelancer.com",
    password: "password123",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      if (
        formData.email === mockCredentials.email &&
        formData.password === mockCredentials.password
      ) {
        router.push("/dashboard");
      } else {
        setErrors({
          general: "Invalid email or password. Please try again.",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleForgotPassword = () => {
    alert("Password reset functionality would be implemented here");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="p-4 bg-error/10 border border-error/20 rounded-lg">
            <div className="flex items-center space-x-2">
              <Icon name="AlertCircle" size={16} className="text-error" />
              <p className="text-sm text-error">{errors.general}</p>
            </div>
          </div>
        )}

        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          required
          className="w-full"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          required
          className="w-full"
        />

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            size={16}
          />

          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-primary hover:text-primary/80 transition-smooth"
            suppressHydrationWarning
          >
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={isLoading}
          fullWidth
          iconName="LogIn"
          iconPosition="left"
          suppressHydrationWarning
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>

        <div className="p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground mb-2">
            Demo Credentials:
          </p>
          <p className="text-xs text-foreground">
            Email: {mockCredentials.email}
          </p>
          <p className="text-xs text-foreground">
            Password: {mockCredentials.password}
          </p>
        </div>
      </form>
    </div>
  );
}
