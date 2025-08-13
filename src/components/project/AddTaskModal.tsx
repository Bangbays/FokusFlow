"use client";

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { type Task } from "./ProjectDetailPage";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (
    taskData: Omit<Task, "id" | "createdAt" | "updatedAt" | "assignee"> & {
      assignee?: string;
    }
  ) => void;
  teamMembers: { name: string }[];
}

export default function AddTaskModal({
  isOpen,
  onClose,
  onAddTask,
  teamMembers,
}: AddTaskModalProps) {
  const initialFormState = {
    name: "",
    description: "",
    dueDate: "",
    priority: "medium",
    assignee: "",
    status: "todo",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const priorityOptions = [
    { value: "low", label: "Low Priority" },
    { value: "medium", label: "Medium Priority" },
    { value: "high", label: "High Priority" },
  ];

  const statusOptions = [
    { value: "todo", label: "To Do" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];

  const assigneeOptions = [
    { value: "", label: "Unassigned" },
    ...teamMembers.map((member) => ({
      value: member.name,
      label: member.name,
    })),
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    // Validasi sederhana
    if (!formData.name.trim()) {
      setErrors({ name: "Task name is required" });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onAddTask(formData);
      setFormData(initialFormState); // Reset form
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Task" size="lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Task Name"
          type="text"
          name="name"
          placeholder="Enter task name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
          required
        />
        <Input
          label="Description"
          type="text"
          name="description"
          placeholder="Describe what needs to be done"
          value={formData.description}
          onChange={handleInputChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Due Date"
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
          />
          <Select
            label="Priority"
            options={priorityOptions}
            value={formData.priority}
            onChange={(value) =>
              handleSelectChange("priority", value as string)
            }
          />
          <Select
            label="Assign To"
            options={assigneeOptions}
            value={formData.assignee}
            onChange={(value) =>
              handleSelectChange("assignee", value as string)
            }
          />
          <Select
            label="Initial Status"
            options={statusOptions}
            value={formData.status}
            onChange={(value) => handleSelectChange("status", value as string)}
          />
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            loading={isSubmitting}
            iconName="Plus"
            iconPosition="left"
          >
            Add Task
          </Button>
        </div>
      </form>
    </Modal>
  );
}
