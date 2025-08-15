"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProjectHeader from "@/components/project/ProjectHeader";
import TaskList from "@/components/project/TaskList";
import ProjectSidebar from "@/components/project/ProjectSideBar";
import AddTaskModal from "@/components/project/AddTaskModal";
import EditTaskModal from "@/components/project/EditTaskModal";
import {
  mockProject,
  mockTasks,
  mockActivities,
  type Task,
} from "@/lib/mock-data";

export default function ProjectClientPage() {
  const params = useParams();
  const projectId = params?.projectId as string;
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
    setTasks((prev) => [...prev, newTask]);
    setIsAddTaskModalOpen(false);
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setIsEditTaskModalOpen(true);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setIsEditTaskModalOpen(false);
  };

  const handleDeleteTask = (taskId: number) => {
    if (window.confirm("Are you sure?")) {
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
    }
  };

  const handleUpdateTaskStatus = (taskId: number, newStatus: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, status: newStatus as Task["status"] } : t
      )
    );
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
