import React from "react";
import Icon from "../AppIcon";
import Image from "@/components/AppImage";

interface Member {
  name: string;
  role: string;
  avatar: string;
  status: "online" | "offline";
}

interface ProjectFile {
  name: string;
  size: string;
  uploadedAt: string;
}

interface Activity {
  type: string;
  description: string;
  timestamp: string;
}

interface Project {
  client?: string;
  clientEmail?: string;
  manager?: string;
  startDate?: string;
  dueDate?: string;
  budget?: number;
  category?: string;
  teamMembers?: Member[];
  files?: ProjectFile[];
}

interface ProjectSidebarProps {
  project: Project;
  activities: Activity[];
}

export default function ProjectSidebar({
  project,
  activities,
}: ProjectSidebarProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "task_created":
        return "Plus";
      case "task_completed":
        return "CheckCircle";
      case "task_updated":
        return "Edit";
      case "comment_added":
        return "MessageCircle";
      case "file_uploaded":
        return "Upload";
      default:
        return "Activity";
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "task_created":
        return "text-primary";
      case "task_completed":
        return "text-success";
      case "task_updated":
        return "text-warning";
      case "comment_added":
        return "text-accent";
      case "file_uploaded":
        return "text-secondary";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Project Details
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Client</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Building" size={16} color="white" />
              </div>
              <div>
                <p className="font-medium text-foreground">{project.client}</p>
                <p className="text-sm text-muted-foreground">
                  {project.clientEmail}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Project Manager
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="Project Manager"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{project.manager}</p>
                <p className="text-sm text-muted-foreground">Project Lead</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Start Date</p>
              <p className="font-medium text-foreground">
                {formatDate(project.startDate)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">End Date</p>
              <p className="font-medium text-foreground">
                {formatDate(project.dueDate)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Team Members
        </h3>
        <div className="space-y-3">
          {project.teamMembers?.map((member, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-medium text-foreground">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
              <div
                className={`w-2 h-2 rounded-full ${
                  member.status === "online"
                    ? "bg-success"
                    : "bg-muted-foreground"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {activities.slice(0, 5).map((activity, index) => (
            <div key={index} className="flex gap-3">
              <div
                className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 ${getActivityColor(
                  activity.type
                )}`}
              >
                <Icon name={getActivityIcon(activity.type) as any} size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
