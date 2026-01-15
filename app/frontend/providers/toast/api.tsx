import React from "react";
import { toast } from "sonner";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type OptionsType = {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

const buildToast = (type: "default" | "error", options: OptionsType) => {
  toast.custom((t) => (
    <div
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
      className={cn(
        "relative flex items-center gap-3 px-4 py-2.5",
        type === "default" && "text-toast-foreground bg-toast-background",
        type === "error" && "text-toast-foreground bg-toast-error-background"
      )}
    >
      <p className="grow text-body-sm">{options.message}</p>
      {options.actionLabel && (
        <button
          type="button"
          aria-label={options.actionLabel}
          onClick={options.onAction}
          className="px-1.5 py-1 border border-toast-foreground text-toast-foreground text-body-xs rounded"
        >
          {options.actionLabel}
        </button>
      )}
      <button
        type="button"
        aria-label="トーストを閉じる"
        onClick={() => toast.dismiss(t)}
        className="absolute -top-2.5 -right-2.5 shadow w-6 h-6 flex items-center justify-center rounded-full bg-toast-foreground text-toast-background"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  ));
};

export const showToast = {
  success: (options: OptionsType) => buildToast("default", options),
  error: (options: OptionsType) => buildToast("error", options),
};
