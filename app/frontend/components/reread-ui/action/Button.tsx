import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ShadcnButtonProps = React.ComponentPropsWithoutRef<typeof ShadcnButton>;

type Props = {
  label: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
} & Omit<ShadcnButtonProps, "children">;

const Button = ({
  label,
  loading = false,
  disabled,
  ref,
  variant = "default",
  size = "default",
  className,
  ...props
}: Props) => {
  const backgroundClassName: Record<
    NonNullable<ShadcnButtonProps["variant"]>,
    string
  > = {
    default:
      "bg-button-primary-background hover:bg-button-primary-background/50 shadow-base",
    secondary:
      "bg-button-secondary-background hover:bg-button-secondary-background/50 shadow-base",
    destructive:
      "bg-button-destructive-background hover:bg-button-destructive-background/50 shadow-base",
    outline:
      "border-button-outline-foreground bg-background hover:bg-background/50",
    ghost:
      "bg-button-ghost-background hover:bg-button-ghost-background/50 shadow-base",
    link: "border-button-link-foreground bg-background hover:bg-background/50",
  };
  const textClassName: Record<
    NonNullable<ShadcnButtonProps["variant"]>,
    string
  > = {
    default: "text-button-primary-foreground",
    secondary: "text-button-secondary-foreground",
    destructive: "text-button-destructive-foreground",
    outline: "text-button-outline-foreground",
    ghost: "text-button-ghost-foreground",
    link: "text-button-link-foreground",
  };

  const sizeClassName: Record<
    NonNullable<ShadcnButtonProps["size"]>,
    string
  > = {
    default: "h-10 gap-1 px-4 py-1 text-body-base font-bold",
    sm: "h-8 gap-1 px-3 py-1 text-body-sm font-bold",
    lg: "h-12 gap-1 px-5 py-1 text-body-lg font-bold",
    icon: "w-9 h-9",
    "icon-sm": "w-6 h-6",
    "icon-lg": "w-12 h-12",
  };

  const safeVariant = variant ?? "default";
  const safeSize = size ?? "default";

  return (
    <ShadcnButton
      ref={ref}
      variant={safeVariant}
      size={safeSize}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-loading={loading ? "true" : undefined}
      className={cn(
        loading && "cursor-wait",
        "rounded-full",
        backgroundClassName[variant ?? "default"],
        sizeClassName[size ?? "default"],
        className
      )}
      {...props}
    >
      {loading && (
        <Loader2
          className={cn(
            textClassName[variant ?? "default"],
            "h-4 w-4 animate-spin"
          )}
        />
      )}
      <span className={cn(textClassName[variant ?? "default"])}>{label}</span>
    </ShadcnButton>
  );
};

export default Button;
