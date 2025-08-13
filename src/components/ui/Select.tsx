"use client";

import React, { useState, useId } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Definisikan tipe untuk setiap opsi dalam array
type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

// Definisikan tipe untuk props komponen Select
export interface SelectProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  options?: SelectOption[];
  value?: string | string[];
  placeholder?: string;
  label?: string;
  error?: string;
  onChange?: (value: string | string[]) => void;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      className,
      options = [],
      value,
      placeholder = "Select an option",
      label,
      error,
      id,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const generatedId = useId();
    const selectId = id || generatedId;

    const selectedOption = options.find((opt) => opt.value === value);
    const displayValue = selectedOption ? selectedOption.label : placeholder;

    const handleOptionClick = (optionValue: string) => {
      if (onChange) {
        onChange(optionValue);
      }
      setIsOpen(false);
    };

    return (
      <div className={cn("relative w-full", className)}>
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium mb-2 block">
            {label}
          </label>
        )}
        <div className="relative">
          <button
            type="button"
            ref={ref}
            id={selectId}
            className={cn(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              !value && "text-muted-foreground"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            {...props}
          >
            {displayValue}
            <ChevronDown
              className={`h-4 w-4 opacity-50 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-2 w-full rounded-md border bg-popover text-popover-foreground shadow-md">
              <ul className="max-h-60 overflow-auto p-1">
                {options.map((option) => (
                  <li
                    key={option.value}
                    className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {value === option.value && (
                      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                        <Check className="h-4 w-4" />
                      </span>
                    )}
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {error && <p className="text-sm text-destructive mt-1">{error}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";

export default Select;
