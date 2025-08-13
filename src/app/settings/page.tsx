"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TabNavigation from "@/components/settings/TabNavigation";
import ProfileTab from "@/components/settings/ProfileTab";
import PasswordTab from "@/components/settings/PasswordTab";
import NotificationsTab from "@/components/settings/NotificationTab";

export default function SettingsProfileManagementPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab />;
      case "password":
        return <PasswordTab />;
      case "notifications":
        return <NotificationsTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Breadcrumb />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="min-h-[600px]">{renderTabContent()}</div>
    </div>
  );
}
