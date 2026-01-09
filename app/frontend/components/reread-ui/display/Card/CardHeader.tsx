import React from "react";
import { cn } from "@/lib/utils";

export type CardHeaderProps = {
  title: string;
  description?: string;
  subtitle?: string;
};

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  description,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      {subtitle && <p className="opacity-30">{subtitle}</p>}
      <h4 className="text-heading-2xl font-bold">{title}</h4>
      {description && <p className="text-body-sm">{description}</p>}
    </div>
  );
};

export default CardHeader;
