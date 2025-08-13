// src/components/settings/NotificationsTab.tsx
"use client";

import React, { useState } from "react";
import Icon from "@/components/AppIcon";
import Button from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";

export default function NotificationsTab() {
  const [notifications, setNotifications] = useState({
    email: {
      projectUpdates: true,
      taskReminders: true,
      deadlineAlerts: true,
      weeklyReports: false,
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailToggle = (setting: string, checked: boolean) => {
    setNotifications((prev) => ({
      ...prev,
      email: { ...prev.email, [setting]: checked },
    }));
  };

  const handleSaveSettings = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-8">
      {showSuccess && (
        <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex items-center space-x-3">
          <Icon name="CheckCircle" size={20} className="text-success" />
          <span className="text-success font-medium">
            Notification settings saved successfully!
          </span>
        </div>
      )}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Mail" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Email Notifications
          </h3>
        </div>
        <div className="space-y-4">
          <Checkbox
            label="Project Updates"
            description="Get notified when projects are updated or status changes"
            checked={notifications.email.projectUpdates}
            onChange={(e) =>
              handleEmailToggle("projectUpdates", e.target.checked)
            }
          />
          <Checkbox
            label="Task Reminders"
            description="Receive reminders for upcoming task deadlines"
            checked={notifications.email.taskReminders}
            onChange={(e) =>
              handleEmailToggle("taskReminders", e.target.checked)
            }
          />
          <Checkbox
            label="Deadline Alerts"
            description="Critical alerts for approaching or missed deadlines"
            checked={notifications.email.deadlineAlerts}
            onChange={(e) =>
              handleEmailToggle("deadlineAlerts", e.target.checked)
            }
          />
        </div>
      </div>
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Clock" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Quiet Hours</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Start Time
            </label>
            <input
              type="time"
              defaultValue="22:00"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              End Time
            </label>
            <input
              type="time"
              defaultValue="08:00"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          variant="default"
          loading={isLoading}
          onClick={handleSaveSettings}
          iconName="Save"
          iconPosition="left"
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
}
