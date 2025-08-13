"use client";

import React, { useState } from "react";
import Icon from "../AppIcon";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import { type Task } from "./ProjectDetailPage"; // Impor tipe Task

interface TaskListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  onUpdateTaskStatus: (taskId: number, newStatus: string) => void;
}

export default function TaskList({
  tasks,
  onEditTask,
  onDeleteTask,
  onUpdateTaskStatus,
}: TaskListProps) {
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("dueDate");

  const statusOptions = [
    { value: "all", label: "All Tasks" },
    { value: "todo", label: "To Do" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];

  const sortOptions = [
    { value: "dueDate", label: "Due Date" },
    { value: "priority", label: "Priority" },
    { value: "name", label: "Task Name" },
    { value: "status", label: "Status" },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "text-success bg-success/10 border-success/20";
      case "in-progress":
        return "text-warning bg-warning/10 border-warning/20";
      case "todo":
        return "text-muted-foreground bg-muted border-border";
      default:
        return "text-muted-foreground bg-muted border-border";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
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
    switch (priority.toLowerCase()) {
      case "high":
        return "AlertTriangle";
      case "medium":
        return "AlertCircle";
      case "low":
        return "Info";
      default:
        return "Minus";
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "all") return true;
    return task.status === filterStatus;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sortBy) {
      case "dueDate":
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      case "priority":
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return (
          (priorityOrder[b.priority as keyof typeof priorityOrder] || 0) -
          (priorityOrder[a.priority as keyof typeof priorityOrder] || 0)
        );
      case "name":
        return a.name.localeCompare(b.name);
      case "status":
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isOverdue = (dueDate: string, status: string) => {
    return new Date(dueDate) < new Date() && status !== "completed";
  };

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold text-foreground">Tasks</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select
              options={statusOptions}
              value={filterStatus}
              onChange={(value) => setFilterStatus(value as string)}
              className="w-full sm:w-40"
            />
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={(value) => setSortBy(value as string)}
              className="w-full sm:w-40"
            />
          </div>
        </div>
      </div>
      <div className="divide-y divide-border">
        {sortedTasks.length === 0 ? (
          <div className="p-8 text-center">
            <Icon
              name="CheckSquare"
              size={48}
              className="text-muted-foreground mx-auto mb-4"
            />
            <h3 className="text-lg font-medium text-foreground mb-2">
              No tasks found
            </h3>
            <p className="text-muted-foreground">
              {filterStatus === "all"
                ? "Start by adding your first task."
                : `No tasks with status "${filterStatus}" found.`}
            </p>
          </div>
        ) : (
          sortedTasks.map((task) => (
            <div
              key={task.id}
              className="p-6 hover:bg-muted/50 transition-smooth"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Icon
                        name={getPriorityIcon(task.priority) as any}
                        size={16}
                        className={getPriorityColor(task.priority)}
                      />
                      <h3 className="font-medium text-foreground">
                        {task.name}
                      </h3>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        task.status
                      )}`}
                    >
                      {task.status.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {task.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon
                        name="Calendar"
                        size={14}
                        className="text-muted-foreground"
                      />
                      <span
                        className={`${
                          isOverdue(task.dueDate, task.status)
                            ? "text-error font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {formatDate(task.dueDate)}
                        {isOverdue(task.dueDate, task.status) && " (Overdue)"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Select
                    options={statusOptions.filter((opt) => opt.value !== "all")}
                    value={task.status}
                    onChange={(newStatus) =>
                      onUpdateTaskStatus(task.id, newStatus as string)
                    }
                    className="w-32"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEditTask(task)}
                  >
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
