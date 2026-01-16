import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ShadcnButtonProps = React.ComponentPropsWithoutRef<typeof ShadcnButton>;

type Props = {
  label: React.ReactNode;
  type?: "default" | "destructive";
  size?: "sm" | "xs";
  loading?: boolean;
  disabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
} & Omit<
  ShadcnButtonProps,
  "children" | "variant" | "size" | "type" | "classname"
>;

const LinkText = ({
  label,
  type = "default",
  size = "sm",
  loading = false,
  disabled,
  ref,
  ...props
}: Props) => {
  return (
    <ShadcnButton
      ref={ref}
      variant="link"
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-loading={loading ? "true" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-1 p-0 h-auto rounded-0 border-0",
        loading && "cursor-wait",
        disabled && "opacity-50 cursor-not-allowed",
        type === "default" && "text-foreground",
        type === "destructive" && "text-destructive"
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      <span
        className={cn(
          "underline hover:no-underline",
          size === "sm" && "text-body-sm",
          size === "xs" && "text-body-xs"
        )}
      >
        {label}
      </span>
    </ShadcnButton>
  );
};

export default LinkText;
