import React from "react";

interface StatusBadgeProps {
  status: string;
  size?: "sm" | "default" | "lg";
}

export default function StatusBadge({
  status,
  size = "default",
}: StatusBadgeProps) {
  const statusConfig: {
    [key: string]: { label: string; className: string; dotColor: string };
  } = {
    completed: {
      label: "Completed",
      className: "bg-success text-success-foreground",
      dotColor: "bg-success",
    },
    "in-progress": {
      label: "In Progress",
      className: "bg-warning text-warning-foreground",
      dotColor: "bg-warning",
    },
    pending: {
      label: "Pending",
      className: "bg-secondary text-secondary-foreground",
      dotColor: "bg-secondary",
    },
    overdue: {
      label: "Overdue",
      className: "bg-error text-error-foreground",
      dotColor: "bg-error",
    },
    "on-hold": {
      label: "On Hold",
      className: "bg-muted text-muted-foreground",
      dotColor: "bg-muted-foreground",
    },
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    default: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const config = statusConfig[status] || statusConfig["pending"];

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${config.className} ${sizeClasses[size]}`}
    >
      <span className={`w-2 h-2 rounded-full mr-2 ${config.dotColor}`}></span>
      {config.label}
    </span>
  );
}
