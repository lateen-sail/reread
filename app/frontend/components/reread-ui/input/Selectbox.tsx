import React from "react";

import {
  Select as ShadcnSelect,
  SelectTrigger as ShadcnSelectTrigger,
  SelectValue as ShadcnSelectValue,
  SelectContent as ShadcnSelectContent,
  SelectItem as ShadcnSelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type SelectOption = {
  label: string;
  value: string;
};

type MessageTone = "helper" | "error";

const messageToneClass: Record<MessageTone, string> = {
  helper: "text-muted-foreground",
  error: "text-destructive",
};

export type Props = {
  value: string;
  options: SelectOption[];
  placeholder?: string;
  onChange: (value: string) => void;
  disabled?: boolean;

  /** 下部に表示する補助テキスト（error がある場合は error を優先表示） */
  helperText?: string;
  /** エラーメッセージ。指定時は aria-invalid も付与 */
  error?: string;

  /** a11y 用。未指定なら value/placeholder から自動生成 */
  ariaLabel?: string;
};

const SelectBox: React.FC<Props> = ({
  value,
  options,
  placeholder = "選択してください",
  onChange,
  disabled = false,
  helperText,
  error,
  ariaLabel,
}) => {
  const message = error ?? helperText;
  const tone: MessageTone | undefined = error
    ? "error"
    : helperText
    ? "helper"
    : undefined;

  // SelectTriggerに紐づけるメッセージ領域
  const messageId = React.useId();

  return (
    <div className="w-full space-y-1">
      <ShadcnSelect value={value} onValueChange={onChange} disabled={disabled}>
        <ShadcnSelectTrigger
          aria-label={ariaLabel ?? "Select"}
          aria-invalid={Boolean(error)}
          aria-describedby={message ? messageId : undefined}
          className={cn(
            "w-full",
            Boolean(error) && "border-destructive focus:ring-destructive/30",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <ShadcnSelectValue placeholder={placeholder} />
        </ShadcnSelectTrigger>

        <ShadcnSelectContent>
          {options.map((option) => (
            <ShadcnSelectItem key={option.value} value={option.value}>
              {option.label}
            </ShadcnSelectItem>
          ))}
        </ShadcnSelectContent>
      </ShadcnSelect>

      {message ? (
        <p
          id={messageId}
          role={error ? "alert" : undefined}
          aria-live={error ? "polite" : undefined}
          className={cn(
            "text-xs leading-5",
            tone ? messageToneClass[tone] : "text-muted-foreground"
          )}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
};

export default SelectBox;
