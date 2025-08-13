"use client";

import React from "react";
import Header from "@/components/marketing/Header";
import HeroSection from "@/components/marketing/HeroSection";
import FeaturesSection from "@/components/marketing/FeaturesSection";
import TestimonialsSection from "@/components/marketing/TestimonialsSection";
import CTASection from "@/components/marketing/CTASection";
import Footer from "@/components/marketing/Footer";

export default function MarketingLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
