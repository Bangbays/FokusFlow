// src/components/marketing/CTASection.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Icon from "@/components/AppIcon";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Rocket" size={16} />
              <span>Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Start Managing Your Projects
              <span className="text-primary block">Like a Pro Today</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of freelancers who've transformed their project
              management workflow. Get started in less than 2 minutes—no credit
              card required.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 mb-12 max-w-2xl mx-auto shadow-elevation-2">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Get instant access to your dashboard
            </h3>

            {!isSubmitted ? (
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="sm:w-auto"
                >
                  Start Free Trial
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-success py-4">
                <Icon name="CheckCircle" size={20} />
                <span className="font-medium">
                  Thanks! Check your email for next steps.
                </span>
              </div>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time. By signing up, you agree to our
              Terms of Service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/register">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Create Free Account
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                iconName="LogIn"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Sign In to Dashboard
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-success/10 text-success rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={20} />
              </div>
              <span className="text-sm font-medium text-foreground">
                Setup in 2 minutes
              </span>
              <span className="text-xs text-muted-foreground">
                Quick onboarding process
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <Icon name="CreditCard" size={20} />
              </div>
              <span className="text-sm font-medium text-foreground">
                No credit card required
              </span>
              <span className="text-xs text-muted-foreground">
                Start completely free
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                <Icon name="Headphones" size={20} />
              </div>
              <span className="text-sm font-medium text-foreground">
                24/7 support included
              </span>
              <span className="text-xs text-muted-foreground">
                We're here to help
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
