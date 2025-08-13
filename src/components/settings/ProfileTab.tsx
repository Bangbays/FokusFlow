"use client";

import React, { useState } from "react";
import Icon from "@/components/AppIcon";
import Image from "@/components/AppImage";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ProfileTab() {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Freelancer",
    email: "john@example.com",
    jobTitle: "Full Stack Developer",
    bio: "Experienced freelance developer specializing in React and Node.js.",
  });
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
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
            Profile updated successfully!
          </span>
        </div>
      )}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Profile Photo
        </h3>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-muted">
              <Image
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <label className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90 transition-smooth">
              <Icon name="Camera" size={14} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium mb-1">
              Upload a new photo
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              JPG, PNG or GIF. Max size 2MB.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            value={profileData.firstName}
            onChange={handleInputChange}
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            value={profileData.lastName}
            onChange={handleInputChange}
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={profileData.email}
            onChange={handleInputChange}
            className="md:col-span-2"
          />
        </div>
      </div>
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Professional Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Job Title"
            name="jobTitle"
            type="text"
            value={profileData.jobTitle}
            onChange={handleInputChange}
          />
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          variant="default"
          loading={isLoading}
          onClick={handleSaveChanges}
          iconName="Save"
          iconPosition="left"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
