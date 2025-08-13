// src/components/ui/Breadcrumb.tsx
"use client"; // WAJIB ADA karena menggunakan usePathname

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../AppIcon";

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  // Jangan tampilkan apa-apa jika di root dashboard
  if (pathname === "/dashboard") {
    return null;
  }

  // Bangun breadcrumbs berdasarkan path saat ini
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  ];

  if (pathname && pathname.startsWith("/project")) {
    breadcrumbItems.push({ label: "Project Detail", href: pathname });
  } else if (pathname && pathname.startsWith("/settings")) {
    breadcrumbItems.push({
      label: "Settings",
      href: "/settings",
      icon: "Settings",
    });
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Icon name="ChevronRight" size={14} />}

          <Link
            href={item.href}
            className={`flex items-center space-x-1 transition-smooth ${
              index === breadcrumbItems.length - 1
                ? "text-foreground font-medium"
                : "hover:text-foreground"
            }`}
          >
            {item.icon && <Icon name={item.icon as any} size={14} />}
            <span>{item.label}</span>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}
