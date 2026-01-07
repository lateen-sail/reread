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
  const variantClassName: Record<
    NonNullable<ShadcnButtonProps["variant"]>,
    string
  > = {
    default: "",
    secondary: "",
    destructive: "",
    outline: "",
    ghost: "",
    link: "",
  };

  const sizeClassName: Record<
    NonNullable<ShadcnButtonProps["size"]>,
    string
  > = {
    default: "",
    sm: "",
    lg: "",
    icon: "",
    "icon-sm": "",
    "icon-lg": "",
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
        loading ? "cursor-wait" : "",
        variantClassName[variant ?? "default"],
        sizeClassName[size ?? "default"],
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </ShadcnButton>
  );
};

export default Button;
