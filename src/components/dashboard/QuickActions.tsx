import React from "react";
import Button from "@/components/ui/Button";
import Icon from "../AppIcon";

interface QuickActionsProps {
  onNewProject: () => void;
  onQuickTask: () => void;
}

export default function QuickActions({
  onNewProject,
  onQuickTask,
}: QuickActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button
        variant="default"
        iconName="Plus"
        iconPosition="left"
        onClick={onNewProject}
        className="flex-1 sm:flex-none"
      >
        New Project
      </Button>

      <Button
        variant="outline"
        iconName="Zap"
        iconPosition="left"
        onClick={onQuickTask}
        className="flex-1 sm:flex-none"
      >
        Quick Task
      </Button>

      <div className="hidden lg:flex items-center space-x-2 ml-auto">
        <Button variant="ghost" size="icon" title="Refresh">
          <Icon name="RefreshCw" size={18} />
        </Button>

        <Button variant="ghost" size="icon" title="Export">
          <Icon name="Download" size={18} />
        </Button>

        <Button variant="ghost" size="icon" title="Settings">
          <Icon name="Settings" size={18} />
        </Button>
      </div>
    </div>
  );
}
