import React from "react";
import {
  Command as ShadcnCommand,
  CommandEmpty as ShadcnCommandEmpty,
  CommandItem as ShadcnCommandItem,
  CommandList as ShadcnCommandList,
  CommandInput as ShadcnCommandInput,
} from "@/components/ui/command";
import { Popover as ShadcnPopover } from "@/components/ui/popover";
import { Clock, Search } from "lucide-react";
import { cn } from "@/lib/utils";

type ShadcnCommandInputProps = React.ComponentPropsWithoutRef<
  typeof ShadcnCommandInput
>;

type Props = Omit<
  ShadcnCommandInputProps,
  "className" | "ref" | "placeholder" | "value" | "onValueChange"
> & {
  ref?: React.Ref<HTMLInputElement>;
  value?: string;
  lastSearchLabel?: string;
  suggestions?: string[];
  onSelectSuggestion?: (value: string) => void;
  onValueChange?: (value: string) => void;
};

const SearchByBookTitle = ({
  ref,
  disabled,
  value,
  onValueChange,
  onSelectSuggestion,
  suggestions = [],
  lastSearchLabel = "前回の検索: 本のタイトル",
  ...props
}: Props) => {
  const [open, setOpen] = React.useState(false);

  const hasSuggestions = suggestions.length > 0;

  const commitValue = React.useCallback(
    (next: string) => {
      onValueChange?.(next);
      onSelectSuggestion?.(next);
    },
    [onSelectSuggestion, onValueChange]
  );

  const handleFocus = () => {
    if (disabled) return;
    if (hasSuggestions) setOpen(true);
  };

  const handleClick = () => {
    if (disabled) return;
    if (hasSuggestions) setOpen(true);
  };

  const handleValueChange = (next: string) => {
    onValueChange?.(next);
    if (!disabled && hasSuggestions) setOpen(true);
  };

  return (
    <ShadcnPopover open={open} onOpenChange={setOpen}>
      <div className="relative w-full">
        <ShadcnCommand
          className={cn(
            "w-full",
            disabled && "opacity-50",
            !disabled && "disabled:opacity-50"
          )}
        >
          <ShadcnCommandInput
            {...props}
            ref={ref}
            value={value}
            onValueChange={handleValueChange}
            onFocus={handleFocus}
            onClick={handleClick}
            placeholder="どんな本が読みたい気分ですか？"
            disabled={disabled}
            aria-expanded={open}
            aria-haspopup={hasSuggestions ? "listbox" : undefined}
            aria-disabled={disabled || undefined}
          />
        </ShadcnCommand>

        {open && hasSuggestions && !disabled && (
          <div
            className="absolute top-12 left-0 top-full z-50 mt-2 w-full rounded-md border bg-popover p-0 text-popover-foreground shadow-md outline-none"
            role="dialog"
            aria-label="Suggestions"
          >
            <ShadcnCommand>
              <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{lastSearchLabel}</span>
              </div>

              <div className="h-px w-full bg-border" />

              <ShadcnCommandList className="max-h-64">
                <ShadcnCommandEmpty className="px-3 py-2 text-sm text-muted-foreground">
                  候補がありません
                </ShadcnCommandEmpty>

                {suggestions.map((item) => (
                  <ShadcnCommandItem
                    key={item}
                    value={item}
                    onSelect={(v) => {
                      commitValue(v);
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Search className="h-4 w-4" aria-hidden="true" />
                    <span className="truncate">{item}</span>
                  </ShadcnCommandItem>
                ))}
              </ShadcnCommandList>
            </ShadcnCommand>
          </div>
        )}
      </div>
    </ShadcnPopover>
  );
};

export default SearchByBookTitle;
