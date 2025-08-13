import React from "react";
import Icon from "../AppIcon";

interface MetricsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  color?: "primary" | "success" | "warning" | "accent";
}

export default function MetricsCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  color = "primary",
}: MetricsCardProps) {
  const colorClasses = {
    primary: "bg-primary text-primary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  const trendColorClasses = {
    up: "text-success",
    down: "text-error",
    neutral: "text-muted-foreground",
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-elevation-1">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <p className="text-2xl font-semibold text-foreground mb-1">{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
          {trend && trendValue && (
            <div className="flex items-center mt-2">
              <Icon
                name={
                  trend === "up"
                    ? "TrendingUp"
                    : trend === "down"
                    ? "TrendingDown"
                    : "Minus"
                }
                size={16}
                className={trendColorClasses[trend]}
              />
              <span className={`text-sm ml-1 ${trendColorClasses[trend]}`}>
                {trendValue}
              </span>
            </div>
          )}
        </div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}
        >
          <Icon name={icon as any} size={24} />
        </div>
      </div>
    </div>
  );
}
