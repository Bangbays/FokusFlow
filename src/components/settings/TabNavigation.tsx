"use client";

import React from "react";
import Icon from "../AppIcon";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabNavigation({
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  const tabs = [
    { id: "profile", label: "Profile", icon: "User" },
    { id: "password", label: "Password", icon: "Lock" },
    { id: "notifications", label: "Notifications", icon: "Bell" },
  ];

  return (
    <div className="border-b border-border mb-8">
      <nav className="flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-smooth ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
            }`}
          >
            <Icon name={tab.icon as any} size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
