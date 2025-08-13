// src/app/settings/layout.tsx
"use client"; // Diperlukan karena menggunakan state untuk sidebar

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

// Ini adalah AppLayout yang sama yang digunakan oleh Dashboard dan Project
export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <main
        className={`pt-16 transition-smooth ${
          isSidebarCollapsed ? "ml-16" : "ml-60"
        }`}
      >
        {/* Konten dari page.tsx akan dirender di sini */}
        {children}
      </main>
    </div>
  );
}
