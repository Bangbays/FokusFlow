"use client";

import React, { useState } from "react";
import Link from "next/link";
// 1. Impor useRouter bersama dengan usePathname
import { usePathname, useRouter } from "next/navigation";
import Icon from "../AppIcon";
import Button from "../ui/Button";

export default function Header() {
  // 2. Dapatkan instance router
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { path: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
    { path: "/project/1", label: "Projects", icon: "FolderOpen" },
    { path: "/settings", label: "Settings", icon: "Settings" },
  ];

  const isActive = (path: string) => {
    if (path.startsWith("/project")) {
      return pathname && pathname.startsWith("/project");
    }
    return pathname === path;
  };

  // 3. Buat fungsi handleLogout
  const handleLogout = () => {
    // Arahkan pengguna kembali ke halaman login
    router.push("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-card border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Zap" size={20} color="white" />
          </div>
          <span className="text-xl font-semibold text-foreground">
            FokusFlow
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth ${
                isActive(item.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon name={item.icon as any} size={18} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
          </Button>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="rounded-full"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="User" size={16} color="white" />
              </div>
            </Button>
            {isProfileOpen && (
              <div className="absolute right-0 top-12 w-48 bg-popover border border-border rounded-lg shadow-elevation-3 py-2">
                <Link
                  href="/settings"
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-smooth"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <Icon name="User" size={16} />
                  <span>Profile</span>
                </Link>
                <hr className="my-2 border-border" />
                {/* 4. Tambahkan onClick ke tombol */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-popover-foreground hover:bg-muted transition-smooth w-full text-left"
                >
                  <Icon name="LogOut" size={16} />
                  <span>Sign out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
