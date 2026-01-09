import React from "react";
import { cn } from "@/lib/utils";
import { Card as ShadcnCard } from "@/components/ui/card";
import CardHeader, { CardHeaderProps } from "./CardHeader";

type Props = CardHeaderProps & {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children, ...headerProps }) => {
  return (
    <ShadcnCard className="flex flex-col gap-10 py-12 px-5 rounded-3xl bg-card text-card-foreground shadow-[0_0_0.5rem_0.375rem_rgba(0,0,0,0.02)]">
      <CardHeader {...headerProps} />
      {children}
    </ShadcnCard>
  );
};

export default Card;
