// src/components/project/ProjectHeader.tsx
"use client"; // WAJIB ADA karena menerima prop fungsi (onAddTask)

import React from "react";
import Button from "@/components/ui/Button";
import { type Task } from "@/lib/mock-data";

interface Project {
  name?: string;
  status?: string;
  description?: string;
  client?: string;
  dueDate?: string;
  budget?: number;
  tasks?: Task[];
}

interface ProjectHeaderProps {
  project: Project;
  onAddTask: () => void;
}

export default function ProjectHeader({
  project,
  onAddTask,
}: ProjectHeaderProps) {
  const getProgressPercentage = () => {
    if (!project?.tasks || project.tasks.length === 0) return 0;
    const completedTasks = project.tasks.filter(
      (task) => task.status === "completed"
    ).length;
    return Math.round((completedTasks / project.tasks.length) * 100);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-semibold text-foreground">
              {project.name}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium`}>
              {project.status}
            </span>
          </div>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
            <span className="text-sm font-medium text-foreground">
              {getProgressPercentage()}%
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" iconName="Edit" iconPosition="left">
            Edit Project
          </Button>
          <Button
            variant="default"
            iconName="Plus"
            iconPosition="left"
            onClick={onAddTask}
          >
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
}
  