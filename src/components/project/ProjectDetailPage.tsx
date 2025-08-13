// src/components/project/ProjectDetailPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProjectHeader from "./ProjectHeader";
import TaskList from "./TaskList";
import ProjectSidebar from "./ProjectSideBar";
import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";
import { mockProject, mockTasks, mockActivities } from "@/lib/mock-data";

// Definisikan tipe untuk Task agar type-safe
export type Task = (typeof mockTasks)[0];

export default function ProjectDetailPage({
  projectId,
}: {
  projectId: string;
}) {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // State utama untuk daftar tugas
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleAddTask = (
    newTaskData: Omit<Task, "id" | "createdAt" | "updatedAt" | "assignee"> & { assignee?: string }
  ) => {
    const newTask: Task = {
      ...newTaskData,
      assignee: newTaskData.assignee ?? "",
      id: Date.now(), // Generate ID sederhana
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsAddTaskModalOpen(false); // Tutup modal setelah menambah
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsEditTaskModalOpen(true);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setIsEditTaskModalOpen(false);
    setSelectedTask(null);
  };

  const handleDeleteTask = (taskId: number) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
  };

  const handleUpdateTaskStatus = (taskId: number, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus, updatedAt: new Date().toISOString() }
          : task
      )
    );
  };

  return (
    <div className="p-6">
      <Breadcrumb />
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 space-y-6">
          <ProjectHeader
            project={mockProject}
            onAddTask={() => setIsAddTaskModalOpen(true)}
          />
          <TaskList
            tasks={tasks}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            onUpdateTaskStatus={handleUpdateTaskStatus}
          />
        </div>
        <div className="xl:col-span-1">
          <ProjectSidebar project={mockProject} activities={mockActivities} />
        </div>
      </div>
      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onAddTask={handleAddTask}
        teamMembers={mockProject.teamMembers}
      />
      <EditTaskModal
        isOpen={isEditTaskModalOpen}
        onClose={() => setIsEditTaskModalOpen(false)}
        onUpdateTask={handleUpdateTask}
        task={selectedTask}
        teamMembers={mockProject.teamMembers}
      />
    </div>
  );
}
