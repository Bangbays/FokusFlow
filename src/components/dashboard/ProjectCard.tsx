import React from "react";
import Link from "next/link";
import Icon from "@/components/AppIcon";
import StatusBadge from "./StatusBadge";

interface Project {
  id: number;
  name: string;
  client: string;
  status: string;
  progress: number;
  dueDate: string;
  completedTasks: number;
  totalTasks: number;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-success";
    if (progress >= 50) return "bg-warning";
    return "bg-error";
  };

  return (
    <Link href={`/project/${project.id}`} className="block">
      <div className="bg-card rounded-lg border border-border p-6 shadow-elevation-1 hover:shadow-elevation-2 transition-smooth cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground">{project.client}</p>
          </div>
          <StatusBadge status={project.status} size="sm" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">
              {project.progress}%
            </span>
          </div>

          <div className="w-full bg-muted rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-smooth ${getProgressColor(
                project.progress
              )}`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Icon name="Calendar" size={16} className="mr-1" />
              <span>Due {formatDate(project.dueDate)}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Icon name="CheckSquare" size={16} className="mr-1" />
              <span>
                {project.completedTasks}/{project.totalTasks} tasks
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
