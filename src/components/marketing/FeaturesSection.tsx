// src/components/marketing/FeaturesSection.tsx

import React from "react";
import Icon from "@/components/AppIcon";
import Link from "next/link";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: "LayoutDashboard",
      title: "Project Overview",
      description:
        "Get a bird's-eye view of all your client projects with intuitive dashboard cards showing status, deadlines, and progress at a glance.",
    },
    {
      id: 2,
      icon: "CheckCircle2",
      title: "Visual Task Tracking",
      description:
        "Color-coded status system with green, yellow, and red indicators makes it easy to identify task progress and prioritize your workload.",
    },
    {
      id: 3,
      icon: "Zap",
      title: "Instant Updates",
      description:
        "Add new tasks and update project status in real-time with modal interfaces that keep your workflow smooth and uninterrupted.",
    },
    {
      id: 4,
      icon: "Users",
      title: "Client Management",
      description:
        "Organize multiple client projects efficiently with dedicated project pages and professional task management capabilities.",
    },
    {
      id: 5,
      icon: "Settings",
      title: "Customizable Settings",
      description:
        "Personalize your workspace with profile management, notification preferences, and password security controls.",
    },
    {
      id: 6,
      icon: "Smartphone",
      title: "Responsive Design",
      description:
        "Access your projects anywhere with a mobile-optimized interface that works seamlessly across desktop and tablet devices.",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Why Choose FokusFlow</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="text-primary block">Manage Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built specifically for freelancers who need simple, effective
            project management without the complexity of enterprise tools.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-elevation-2 transition-smooth hover:border-primary/20"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <Icon name={feature.icon as any} size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to streamline your freelance workflow?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth"
            >
              <Icon name="ArrowRight" size={16} className="mr-2" />
              Start Free Trial
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-smooth"
            >
              <Icon name="LogIn" size={16} className="mr-2" />
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
