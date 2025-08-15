"use client";

import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import MetricsCard from "@/components/dashboard/MetricsCard";
import ProjectCard from "@/components/dashboard/ProjectCard";
import ProjectTable from "@/components/dashboard/ProjectTable";
import QuickActions from "@/components/dashboard/QuickActions";
import SearchAndFilter from "@/components/dashboard/SearchAndFilter";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";
import Icon from "@/components/AppIcon";
import Button from "@/components/ui/Button";

type Project = {
  id: number;
  name: string;
  client: string;
  status: string;
  progress: number;
  dueDate: string;
  completedTasks: number;
  totalTasks: number;
  priority: "high" | "medium" | "low";
};

// Data Project Dummy
const projects: Project[] = [
  {
    id: 1,
    name: "TechCorp Website Redesign",
    client: "TechCorp Solutions",
    status: "in-progress",
    progress: 75,
    dueDate: "2025-08-25",
    completedTasks: 8,
    totalTasks: 12,
    priority: "high",
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "Startup Innovations",
    status: "in-progress",
    progress: 45,
    dueDate: "2025-09-15",
    completedTasks: 5,
    totalTasks: 15,
    priority: "high",
  },
  {
    id: 3,
    name: "Brand Identity Design",
    client: "Creative Design Studio",
    status: "completed",
    progress: 100,
    dueDate: "2025-08-10",
    completedTasks: 6,
    totalTasks: 6,
    priority: "medium",
  },
  {
    id: 4,
    name: "E-commerce Platform",
    client: "E-commerce Plus",
    status: "pending",
    progress: 20,
    dueDate: "2025-10-01",
    completedTasks: 2,
    totalTasks: 18,
    priority: "medium",
  },
  {
    id: 5,
    name: "Business Consulting Report",
    client: "Business Consulting",
    status: "overdue",
    progress: 60,
    dueDate: "2025-08-05",
    completedTasks: 4,
    totalTasks: 8,
    priority: "high",
  },
  {
    id: 6,
    name: "Social Media Campaign",
    client: "Creative Design Studio",
    status: "on-hold",
    progress: 30,
    dueDate: "2025-09-30",
    completedTasks: 3,
    totalTasks: 10,
    priority: "low",
  },
];

type MetricsCardType = {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  trend: "up" | "neutral" | "down";
  trendValue: string;
  color: "primary" | "success" | "warning" | "accent";
};

const metrics: MetricsCardType[] = [
  {
    title: "Total Projects",
    value: "12",
    subtitle: "3 completed this month",
    icon: "FolderOpen",
    trend: "up",
    trendValue: "+2 from last month",
    color: "primary",
  },
  {
    title: "Active Tasks",
    value: "28",
    subtitle: "8 due this week",
    icon: "CheckSquare",
    trend: "up",
    trendValue: "+5 from last week",
    color: "success",
  },
  {
    title: "Upcoming Deadlines",
    value: "5",
    subtitle: "2 critical",
    icon: "Clock",
    trend: "neutral",
    trendValue: "Same as last week",
    color: "warning",
  },
  {
    title: "Revenue This Month",
    value: "$8,450",
    subtitle: "From 4 projects",
    icon: "DollarSign",
    trend: "up",
    trendValue: "+12% from last month",
    color: "accent",
  },
];

export default function DashboardPage() {
  const [currentView, setCurrentView] = useState<"table" | "cards">("table");
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ status: "all", client: "all" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let filtered = projects;
    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filters.status !== "all") {
      filtered = filtered.filter((p) => p.status === filters.status);
    }
    setFilteredProjects(filtered);
  }, [searchTerm, filters]);

  return (
    <div className="p-6">
      <Breadcrumb />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your projects and tasks.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <QuickActions
            onNewProject={() => setIsNewProjectModalOpen(true)}
            onQuickTask={() => {}}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2 space-y-6">
          <SearchAndFilter
            onSearch={setSearchTerm}
            onFilter={setFilters}
            onViewChange={setCurrentView}
            currentView={currentView}
          />

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Projects ({filteredProjects.length})
            </h2>
            {isClient && (
              <>
                {currentView === "table" ? (
                  <div className="hidden md:block">
                    <ProjectTable projects={filteredProjects} />
                  </div>
                ) : null}

                {currentView === "cards" || window.innerWidth < 768 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : null}

                <div className="md:hidden">
                  {currentView === "table" && (
                    <div className="grid grid-cols-1 gap-6">
                      {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="space-y-6">
          <RecentActivity />
          <UpcomingDeadlines />
        </div>
      </div>

      <Modal
        isOpen={isNewProjectModalOpen}
        onClose={() => setIsNewProjectModalOpen(false)}
        title="Create New Project"
      >
        <p>Form untuk membuat proyek baru akan muncul di sini.</p>
      </Modal>
    </div>
  );
}
