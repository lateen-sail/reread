import React from "react";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
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
  required?: boolean;
  id?: string;
};

const InputPassword = ({
  ref,
  label,
  hasError,
  errorMessage,
  required,
  id,
  disabled,
  ...props
}: Props) => {
  const reactId = React.useId();
  const inputId = id ?? reactId;
  const errorId = `${inputId}-error`;
  const describedBy = errorMessage ? errorId : undefined;

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const inputType = isPasswordVisible ? "text" : "password";

  const handleToggleVisibility = () => {
    if (disabled) return;
    setIsPasswordVisible((prev) => !prev);
  };

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

      <div className="relative">
        <ShadcnInput
          {...props}
          id={inputId}
          ref={ref}
          type={inputType}
          placeholder="半角・英数字で入力ください"
          required={required}
          disabled={disabled}
          aria-required={required || undefined}
          aria-invalid={hasError || props["aria-invalid"] || undefined}
          aria-describedby={describedBy || props["aria-describedby"]}
          className={cn(
            "pr-10",
            hasError &&
              "border-destructive focus-visible:ring-destructive/30 focus-visible:border-destructive",
            disabled && "opacity-50",
            !disabled && "disabled:opacity-50"
          )}
        />

        <button
          type="button"
          onClick={handleToggleVisibility}
          disabled={disabled}
          aria-label={
            isPasswordVisible ? "パスワードを非表示" : "パスワードを表示"
          }
          aria-pressed={isPasswordVisible}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2",
            "text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            disabled && "cursor-not-allowed"
          )}
        >
          {isPasswordVisible ? (
            <Eye className="h-5 w-5" aria-hidden="true" />
          ) : (
            <EyeClosed className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

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

export default InputPassword;
