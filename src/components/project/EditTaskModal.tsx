"use client";

import React, { useState, useEffect } from "react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { type Task } from "@/lib/mock-data";

interface EditTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateTask: (task: Task) => void;
  task: Task | null;
  teamMembers: { name: string }[];
}

export default function EditTaskModal({
  isOpen,
  onClose,
  onUpdateTask,
  task,
  teamMembers,
}: EditTaskModalProps) {
  const [formData, setFormData] = useState<Task | null>(null);

  // Efek ini akan mengisi form dengan data task yang dipilih saat modal dibuka
  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (field: keyof Task, value: string) => {
    if (formData) {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData) {
      onUpdateTask(formData);
    }
  };

  if (!isOpen || !formData) return null;

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

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Task" size="lg">
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
            label="Status"
            options={statusOptions}
            value={formData.status}
            onChange={(value) => handleSelectChange("status", value as string)}
          />
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" iconName="Save" iconPosition="left">
            Update Task
          </Button>
        </div>
      </form>
    </Modal>
  );
}
