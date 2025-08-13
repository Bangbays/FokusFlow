import React from "react";
import BrandHeader from "@/components/register/BrandHeader";
import RegistrationForm from "@/components/register/RegistrationForm";
import LoginPrompt from "@/components/register/LoginPrompt";
import FeatureHighlights from "@/components/register/FeatureHighlights";

export default function UserRegistrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Registration Form Section */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <BrandHeader />
            <div className="bg-card border border-border rounded-xl shadow-elevation-2 p-8">
              <RegistrationForm />
              <LoginPrompt />
            </div>
          </div>
          {/* Feature Highlights Section */}
          <div className="lg:pl-8">
            <FeatureHighlights />
          </div>
        </div>
      </div>
    </div>
  );
}
