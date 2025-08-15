"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideIcons.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export type IconName = keyof typeof LucideIcons;

interface IconProps extends LucideIcons.LucideProps {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  const IconComponent = LucideIcons[name] as LucideIcon;

  if (!IconComponent) {
    return <LucideIcons.HelpCircle {...props} />;
  }

  return <IconComponent {...props} />;
}
