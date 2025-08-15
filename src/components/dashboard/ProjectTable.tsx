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

interface ProjectTableProps {
  projects: Project[];
}

export default function ProjectTable({ projects }: ProjectTableProps) {
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
    <div className="bg-card rounded-lg border border-border shadow-elevation-1 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-foreground">
                Project
              </th>
              <th className="text-left py-4 px-6 font-medium text-foreground">
                Client
              </th>
              <th className="text-left py-4 px-6 font-medium text-foreground">
                Status
              </th>
              <th className="text-left py-4 px-6 font-medium text-foreground">
                Progress
              </th>
              <th className="text-left py-4 px-6 font-medium text-foreground">
                Due Date
              </th>
              <th className="text-left py-4 px-6 font-medium text-foreground">
                Tasks
              </th>
              <th className="text-right py-4 px-6 font-medium text-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={project.id}
                className={`border-t border-border hover:bg-muted/50 transition-smooth`}
              >
                <td className="py-4 px-6">
                  <Link
                    href={`/project/${project.id}`}
                    className="font-medium text-foreground hover:text-primary transition-smooth"
                  >
                    {project.name}
                  </Link>
                </td>
                <td className="py-4 px-6 text-muted-foreground">
                  {project.client}
                </td>
                <td className="py-4 px-6">
                  <StatusBadge status={project.status} size="sm" />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-muted rounded-full h-2 max-w-[100px]">
                      <div
                        className={`h-2 rounded-full transition-smooth ${getProgressColor(
                          project.progress
                        )}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-foreground min-w-[40px]">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-muted-foreground">
                  {formatDate(project.dueDate)}
                </td>
                <td className="py-4 px-6 text-muted-foreground">
                  {project.completedTasks}/{project.totalTasks}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end space-x-2">
                    <Link
                      href={`/project/${project.id}`}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth"
                      title="View Project"
                    >
                      <Icon name="Eye" size={16} />
                    </Link>
                    <button
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth"
                      title="Edit Project"
                    >
                      <Icon name="Edit" size={16} />
                    </button>
                    <button
                      className="p-2 text-muted-foreground hover:text-error hover:bg-muted rounded-lg transition-smooth"
                      title="Delete Project"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
