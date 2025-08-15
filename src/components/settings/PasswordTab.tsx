"use client";

import React, { useState } from "react";
import Icon from "@/components/AppIcon";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function PasswordTab() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setShowSuccess(true);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-8">
      {showSuccess && (
        <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex items-center space-x-3">
          <Icon name="CheckCircle" size={20} className="text-success" />
          <span className="text-success font-medium">
            Password changed successfully!
          </span>
        </div>
      )}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Change Password
        </h3>
        <div className="space-y-6 max-w-md">
          <Input
            label="Current Password"
            name="currentPassword"
            type="password"
            value={passwordData.currentPassword}
            onChange={handleInputChange}
            error={errors.currentPassword}
            required
          />
          <Input
            label="New Password"
            name="newPassword"
            type="password"
            value={passwordData.newPassword}
            onChange={handleInputChange}
            error={errors.newPassword}
            required
          />
          <Input
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            value={passwordData.confirmPassword}
            onChange={handleInputChange}
            error={errors.confirmPassword}
            required
          />
        </div>
      </div>
      <div className="bg-muted/50 rounded-lg border border-border p-6">
        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
          <Icon name="Shield" size={16} className="mr-2" />
          Password Security Tips
        </h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Use a unique password that you don't use elsewhere</li>
          <li>Include a mix of uppercase, lowercase, numbers, and symbols</li>
        </ul>
      </div>
      <div className="flex justify-end">
        <Button
          variant="default"
          loading={isLoading}
          onClick={handleChangePassword}
          iconName="Lock"
          iconPosition="left"
        >
          Change Password
        </Button>
      </div>
    </div>
  );
}
