// src/components/layout/Sidebar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../AppIcon";
import Button from "../ui/Button";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({
  isCollapsed = false,
  onToggle,
}: SidebarProps) {
  const pathname = usePathname();

  const navigationItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: "LayoutDashboard",
      tooltip: "Project overview",
    },
    // --- PERUBAHAN DI SINI ---
    {
      path: "/project/1",
      label: "Projects",
      icon: "FolderOpen",
      tooltip: "Manage projects",
    },
    {
      path: "/settings",
      label: "Settings",
      icon: "Settings",
      tooltip: "Profile and preferences",
    },
  ];

  const isActive = (path: string) => {
    if (path.startsWith("/project")) {
      return pathname && pathname.startsWith("/project");
    }
    return pathname === path;
  };

  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 z-[999] bg-card border-r border-border transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-end p-2 border-b border-border">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="h-8 w-8"
          >
            <Icon
              name={isCollapsed ? "ChevronRight" : "ChevronLeft"}
              size={16}
            />
          </Button>
        </div>
        <nav className="flex-1 p-2">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <div className="relative group">
                  <Link
                    href={item.path}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-smooth ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    } ${isCollapsed ? "justify-center" : ""}`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    {!isCollapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </Link>
                  {isCollapsed && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {item.tooltip}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
