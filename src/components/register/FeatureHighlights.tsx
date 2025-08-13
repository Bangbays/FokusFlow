import React from "react";
import Icon from "../AppIcon";

export default function FeatureHighlights() {
  const features = [
    {
      icon: "LayoutDashboard",
      title: "Project Dashboard",
      description: "Organize all your client projects in one place",
    },
    {
      icon: "CheckSquare",
      title: "Task Management",
      description: "Track progress with visual status indicators",
    },
    {
      icon: "Users",
      title: "Client Organization",
      description: "Keep client information and projects organized",
    },
  ];

  return (
    <div className="hidden lg:block">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Why Choose FokusFlow?
          </h2>
          <p className="text-muted-foreground">
            Built for freelancers who value simplicity and efficiency
          </p>
        </div>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon
                  name={feature.icon as any}
                  size={20}
                  className="text-primary"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
