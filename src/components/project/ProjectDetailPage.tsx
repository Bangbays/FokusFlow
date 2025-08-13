// src/components/project/ProjectDetailPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import Breadcrumb from "../ui/Breadcrumb";
import ProjectHeader from "./ProjectHeader";
import TaskList from "./TaskList";
import ProjectSidebar from "./ProjectSideBar";
import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";
import {
  mockProject,
  mockTasks,
  mockActivities,
  type Task,
} from "@/lib/mock-data";

export default function ProjectDetailPage({
  projectId,
}: {
  projectId: string;
}) {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(mockTasks);
  }, [projectId]);

  const handleAddTask = (
    newTaskData: Omit<Task, "id" | "createdAt" | "updatedAt">
  ) => {
    const newTask: Task = {
      ...newTaskData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsAddTaskModalOpen(false);
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsEditTaskModalOpen(true);
  };

  return (
    <div className="p-6">
      <Breadcrumb />
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 space-y-6">
          <ProjectHeader
            project={{ ...mockProject, tasks: tasks }}
            onAddTask={() => setIsAddTaskModalOpen(true)}
          />
          <TaskList
            tasks={tasks}
            onEditTask={handleEditTask}
            onDeleteTask={() => {}}
            onUpdateTaskStatus={() => {}}
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
    </div>
  );
}
