import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Icon from "../AppIcon";

interface SearchAndFilterProps {
  onSearch: (term: string) => void;
  onFilter: (filters: { status: string; client: string }) => void;
  onViewChange: (view: "table" | "cards") => void;
  currentView: "table" | "cards";
}

export default function SearchAndFilter({
  onSearch,
  onFilter,
  onViewChange,
  currentView,
}: SearchAndFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [clientFilter, setClientFilter] = useState("all");

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "completed", label: "Completed" },
    { value: "in-progress", label: "In Progress" },
    { value: "pending", label: "Pending" },
  ];

  const clientOptions = [
    { value: "all", label: "All Clients" },
    { value: "techcorp", label: "TechCorp Solutions" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    onFilter({ status: value, client: clientFilter });
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 lg:max-w-md">
          <Input
            type="search"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 lg:flex-1">
          <Select
            options={statusOptions}
            value={statusFilter}
            onChange={(value) => handleStatusChange(value as string)}
            placeholder="Filter by status"
            className="flex-1"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center border border-border rounded-lg p-1">
            <Button
              variant={currentView === "table" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("table")}
              className="px-3"
            >
              <Icon name="Table" size={16} />
            </Button>
            <Button
              variant={currentView === "cards" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("cards")}
              className="px-3"
            >
              <Icon name="Grid3x3" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
