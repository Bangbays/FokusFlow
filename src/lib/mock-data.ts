export type Task = {
  id: number;
  name: string;
  description: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  status: "completed" | "in-progress" | "todo";
  assignee: string;
  createdAt: string;
  updatedAt: string;
};

export const mockProject = {
  id: 1,
  name: "E-commerce Website Redesign",
  description:
    "Complete redesign of the client's e-commerce platform with modern UI/UX, improved performance, and mobile responsiveness.",
  client: "TechCorp Solutions",
  clientEmail: "contact@techcorp.com",
  manager: "Sarah Johnson",
  status: "In Progress",
  dueDate: "2025-02-15",
  startDate: "2024-12-01",
  budget: 45000,
  category: "Web Development",
  teamMembers: [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      status: "online" as const,
    },
    {
      name: "Mike Chen",
      role: "Frontend Developer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      status: "online" as const,
    },
  ],
  files: [
    { name: "Design_Mockups_v2.fig", size: "2.4 MB", uploadedAt: "2 days ago" },
  ],
};

// 2. Pastikan array ini sesuai dengan tipe Task yang baru
export const mockTasks: Task[] = [
  {
    id: 1,
    name: "Create wireframes for homepage",
    description: "Design low-fidelity wireframes...",
    dueDate: "2025-01-15",
    priority: "high",
    status: "completed",
    assignee: "Emily Davis",
    createdAt: "2024-12-15T10:00:00Z",
    updatedAt: "2025-01-10T14:30:00Z",
  },
  {
    id: 2,
    name: "Implement responsive navigation",
    description: "Build a mobile-first responsive navigation...",
    dueDate: "2025-01-20",
    priority: "high",
    status: "in-progress",
    assignee: "Mike Chen",
    createdAt: "2024-12-20T09:15:00Z",
    updatedAt: "2025-01-08T16:45:00Z",
  },
  {
    id: 3,
    name: "Set up product database schema",
    description: "Design and implement the database schema...",
    dueDate: "2025-01-25",
    priority: "medium",
    status: "todo",
    assignee: "Alex Rodriguez",
    createdAt: "2025-01-05T11:30:00Z",
    updatedAt: "2025-01-05T11:30:00Z",
  },
];

export const mockActivities = [
  {
    type: "task_completed",
    description: "Emily Davis completed 'Create wireframes for homepage'",
    timestamp: "2 hours ago",
  },
  {
    type: "task_updated",
    description:
      "Mike Chen updated status of 'Implement responsive navigation'",
    timestamp: "4 hours ago",
  },
];
