import React from "react";
import Link from "next/link";
import Icon from "../AppIcon";
import StatusBadge from "./StatusBadge";

export default function UpcomingDeadlines() {
  const deadlines = [
    {
      id: 1,
      project: "TechCorp Website",
      task: "Final Review & Testing",
      dueDate: "2025-08-13",
      priority: "high",
      status: "in-progress",
      daysLeft: 2,
    },
    {
      id: 2,
      project: "Mobile App Development",
      task: "UI/UX Design Completion",
      dueDate: "2025-08-15",
      priority: "medium",
      status: "in-progress",
      daysLeft: 4,
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-error";
      case "medium":
        return "text-warning";
      case "low":
        return "text-success";
      default:
        return "text-muted-foreground";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return "AlertTriangle";
      case "medium":
        return "Clock";
      case "low":
        return "CheckCircle";
      default:
        return "Circle";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-elevation-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Upcoming Deadlines
        </h3>
        <Link
          href="/project/1"
          className="text-sm text-primary hover:text-primary/80 transition-smooth"
        >
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {deadlines.map((deadline) => (
          <div
            key={deadline.id}
            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
          >
            <div className="flex items-center space-x-3 flex-1">
              <Icon
                name={getPriorityIcon(deadline.priority) as any}
                size={16}
                className={getPriorityColor(deadline.priority)}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {deadline.task}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {deadline.project}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <StatusBadge status={deadline.status} size="sm" />
              <div className="text-right">
                <p className="text-xs text-muted-foreground">
                  {formatDate(deadline.dueDate)}
                </p>
                <p
                  className={`text-xs font-medium ${
                    deadline.daysLeft <= 3 ? "text-error" : "text-success"
                  }`}
                >
                  {deadline.daysLeft} days left
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
