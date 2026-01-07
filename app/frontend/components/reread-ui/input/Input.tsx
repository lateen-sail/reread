import React from "react";
import { Input as ShadcnInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ShadcnInputProps = React.ComponentPropsWithoutRef<typeof ShadcnInput>;

type Props = Omit<
  ShadcnInputProps,
  "className" | "ref" | "required" | "placeholder" | "id"
> & {
  ref?: React.Ref<HTMLInputElement>;
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
};

const Input = ({
  ref,
  label,
  hasError,
  errorMessage,
  placeholder,
  required,
  id,
  disabled,
  ...props
}: Props) => {
  const reactId = React.useId();
  const inputId = id ?? reactId;
  const errorId = `${inputId}-error`;
  const describedBy = errorMessage ? errorId : undefined;

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-body-sm font-bold">
          {label}
          {required && (
            <span aria-hidden="true" className="pl-1 text-destructive">
              *
            </span>
          )}
        </label>
      )}

      <ShadcnInput
        {...props}
        id={inputId}
        ref={ref}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-required={required || undefined}
        aria-invalid={hasError || props["aria-invalid"] || undefined}
        aria-describedby={describedBy || props["aria-describedby"]}
        className={cn(
          hasError &&
            "border-destructive focus-visible:ring-destructive/30 focus-visible:border-destructive",
          disabled && "opacity-50",
          !disabled && "disabled:opacity-50"
        )}
      />

      {errorMessage && (
        <p
          id={errorId}
          role="alert"
          className="text-body-xs font-bold text-destructive"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
