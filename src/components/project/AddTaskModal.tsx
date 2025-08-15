"use client";

import React, { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { type Task } from "@/lib/mock-data";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (taskData: Omit<Task, "id" | "createdAt" | "updatedAt">) => void;
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
    priority: "medium" as Task["priority"],
    assignee: "",
    status: "todo" as Task["status"],
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormState);
      setErrors({});
    }
  }, [isOpen]);

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
  };

  const handleSelectChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onAddTask(formData);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Task" size="lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Task Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Description"
          name="description"
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
