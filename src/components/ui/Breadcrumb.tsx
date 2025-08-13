// src/components/ui/Breadcrumb.tsx
"use client"; // usePathname adalah Client Component hook

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Impor usePathname
import Icon from "../AppIcon";

// Definisikan tipe untuk item breadcrumb
interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export default function Breadcrumb({ items = [] }: BreadcrumbProps) {
  const pathname = usePathname();

  if (!pathname || pathname === "/dashboard") {
    return null;
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  ];

  if (pathname.startsWith("/project")) {
    breadcrumbItems.push({
      label: "Projects",
      href: "/project/1",
      icon: "FolderOpen",
    });
    breadcrumbItems.push({
      label: "Project Detail",
      href: pathname,
      current: true,
    });
  } else if (pathname.startsWith("/settings")) {
    breadcrumbItems.push({
      label: "Settings",
      href: "/settings",
      icon: "Settings",
      current: true,
    });
  }

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <Icon
              name="ChevronRight"
              size={14}
              className="text-muted-foreground"
            />
          )}

          {item.current ? (
            <span className="flex items-center space-x-1 text-foreground font-medium">
              {item.icon && <Icon name={item.icon as any} size={14} />}
              <span>{item.label}</span>
            </span>
          ) : (
            <Link
              href={item.href}
              className="flex items-center space-x-1 hover:text-foreground transition-smooth"
            >
              {item.icon && <Icon name={item.icon as any} size={14} />}
              <span>{item.label}</span>
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
