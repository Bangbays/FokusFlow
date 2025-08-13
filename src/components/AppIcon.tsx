"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideIcons.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

// Pastikan tipe ini di-ekspor
export type IconName = keyof typeof LucideIcons;

interface IconProps extends LucideIcons.LucideProps {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  // Beri tahu TypeScript bahwa IconComponent adalah tipe LucideIcon
  const IconComponent = LucideIcons[name] as LucideIcon;

  if (!IconComponent) {
    // Fallback jika nama ikon tidak ditemukan
    return <LucideIcons.HelpCircle {...props} />;
  }

  return <IconComponent {...props} />;
}
