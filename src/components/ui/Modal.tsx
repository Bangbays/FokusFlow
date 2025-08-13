// src/components/ui/Modal.tsx
"use client";

import React, { useEffect, type ReactNode } from "react";
import Icon from "../AppIcon";
import Button from "./Button";

// Definisikan tipe untuk props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "default" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
}

export default function Modal({
  isOpen = false,
  onClose,
  title,
  children,
  size = "default",
  showCloseButton = true,
  closeOnBackdrop = true,
}: ModalProps) {
  const sizeClasses = {
    sm: "max-w-md",
    default: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4",
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdrop) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1050] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in"
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full ${sizeClasses[size]} bg-card rounded-lg shadow-elevation-3 transition-all animate-in zoom-in-95`}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-border">
            {title && (
              <h2 className="text-lg font-semibold text-foreground">{title}</h2>
            )}
            {showCloseButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 ml-auto"
              >
                <Icon name="X" size={16} />
              </Button>
            )}
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
