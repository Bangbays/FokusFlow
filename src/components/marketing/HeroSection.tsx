"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Icon from "@/components/AppIcon";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Trusted by 10,000+ freelancers</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Streamline Your
              <span className="text-primary block">Freelance Projects</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl">
              FokusFlow helps independent freelancers organize client projects,
              track tasks with visual status indicators, and maintain
              professional organization—all in one intuitive platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/register">
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  Get Started Free
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-success" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-success" />
                <span>10K+ Users</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl shadow-elevation-3 p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="text-xs text-muted-foreground">
                  FokusFlow Dashboard
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground">
                      Website Redesign
                    </h3>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-success/10 text-success">
                      <div className="w-2 h-2 bg-success rounded-full mr-1"></div>
                      Completed
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Client: TechCorp Inc.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground">
                      Mobile App UI
                    </h3>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-warning/10 text-warning">
                      <div className="w-2 h-2 bg-warning rounded-full mr-1"></div>
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Client: StartupXYZ
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground">
                      Brand Identity
                    </h3>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full mr-1"></div>
                      Planning
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Client: Creative Agency
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-elevation-2">
              <Icon name="TrendingUp" size={20} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground rounded-full p-3 shadow-elevation-2">
              <Icon name="CheckCircle" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
