import React from "react";
import Icon from "../AppIcon";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "task_completed",
      message: 'Completed "Homepage Design" task',
      project: "TechCorp Website",
      timestamp: "2 hours ago",
      icon: "CheckCircle",
      iconColor: "text-success",
    },
    {
      id: 2,
      type: "project_updated",
      message: "Updated project status to In Progress",
      project: "Mobile App Development",
      timestamp: "4 hours ago",
      icon: "Edit",
      iconColor: "text-primary",
    },
    {
      id: 3,
      type: "task_created",
      message: 'Created new task "API Integration"',
      project: "E-commerce Platform",
      timestamp: "6 hours ago",
      icon: "Plus",
      iconColor: "text-accent",
    },
    {
      id: 4,
      type: "deadline_approaching",
      message: "Deadline approaching for Brand Identity project",
      project: "Creative Design Studio",
      timestamp: "8 hours ago",
      icon: "Clock",
      iconColor: "text-warning",
    },
    {
      id: 5,
      type: "client_message",
      message: "New message from client",
      project: "Business Consulting",
      timestamp: "1 day ago",
      icon: "MessageCircle",
      iconColor: "text-secondary",
    },
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-elevation-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Recent Activity
        </h3>
        <button className="text-sm text-primary hover:text-primary/80 transition-smooth">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div
              className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 ${activity.iconColor}`}
            >
              <Icon name={activity.icon as any} size={16} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground font-medium mb-1">
                {activity.message}
              </p>
              <p className="text-xs text-muted-foreground mb-1">
                {activity.project}
              </p>
              <p className="text-xs text-muted-foreground">
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
