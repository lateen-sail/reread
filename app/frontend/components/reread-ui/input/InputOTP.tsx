import React from "react";
import {
  InputOTP as ShadcnInputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

type Props = {
  value?: number[];
  length?: number;
  groupSize?: number;
  hasError?: boolean;
  errorMessage?: string;
} & Omit<
  React.ComponentPropsWithoutRef<typeof ShadcnInputOTP>,
  "children" | "value" | "render"
>;

const InputOTP = ({
  value = [],
  length = 6,
  groupSize,
  hasError,
  errorMessage,
  ...props
}: Props) => {
  const normalized = value.map(String);
  const otpValue = normalized.join("").slice(0, length);

  const groups = groupSize
    ? Array.from({ length: Math.ceil(length / groupSize) })
    : [null];

  return (
    <div className="flex flex-col gap-1.5">
      <ShadcnInputOTP
        value={otpValue}
        aria-invalid={hasError || undefined}
        {...props}
      >
        {groups.map((_, groupIndex) => {
          const start = groupSize ? groupIndex * groupSize : 0;
          const end = groupSize ? Math.min(start + groupSize, length) : length;

          return (
            <React.Fragment key={groupIndex}>
              <InputOTPGroup>
                {Array.from({ length: end - start }).map((_, i) => {
                  const index = start + i;
                  return <InputOTPSlot key={index} index={index} />;
                })}
              </InputOTPGroup>

              {groupSize && groupIndex < groups.length - 1 && (
                <InputOTPSeparator />
              )}
            </React.Fragment>
          );
        })}
      </ShadcnInputOTP>

      {hasError && errorMessage && (
        <p className="text-body-xs font-bold text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputOTP;
