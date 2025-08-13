"use client";

import React, { useState, useEffect } from "react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { type Task } from "./ProjectDetailPage";

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

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (field: string, value: string) => {
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
        {/* Tambahkan input dan select lain yang sesuai */}
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
