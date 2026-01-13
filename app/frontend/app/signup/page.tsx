"use client";
import React from "react";
import { useSignup } from "./hooks/useSignup";
import GuestLayout from "@/components/layout/GuestLayout";
import Card from "@/components/reread-ui/display/Card/Index";
import Input from "@/components/reread-ui/input/Input";
import InputOTP from "@/components/reread-ui/input/InputOTP";
import InputPassword from "@/components/reread-ui/input/InputPassword";
import Button from "@/components/reread-ui/action/Button";
import { SignupStep, SignupData } from "./types";

const SignupPage: React.FC = () => {
  const { step, data, errors, handleChange, handleNext, handleSubmit } =
    useSignup();

  return (
    <GuestLayout>
      {step === 1 && (
        <Card
          title="サインアップ"
          subtitle="1/3"
          description="メールアドレスを入力してください"
        >
          <form
            className="flex flex-col items-center w-full gap-8 max-w-sm mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
          >
            <Input
              label="メールアドレス"
              placeholder="sample@reread.com"
              type="email"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              hasError={!!errors.email}
              errorMessage={errors.email}
              required
            />
            <Button label="次へ" variant="default" size="lg" type="submit" />
          </form>
        </Card>
      )}
      {step === 2 && (
        <Card
          title="2段階認証"
          subtitle="2/3"
          description="メールにお送りした認証番号を入力してください"
        >
          <form
            className="flex flex-col items-center w-full gap-8 max-w-sm mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
          >
            <InputOTP
              value={data.otp.split("").map(Number)}
              length={6}
              maxLength={6}
              onChange={(val) =>
                handleChange(
                  "otp",
                  Array.isArray(val) ? val.join("") : String(val)
                )
              }
              hasError={!!errors.otp}
              errorMessage={errors.otp}
            />
            <Button label="次へ" variant="default" size="lg" type="submit" />
            <button
              type="button"
              className="underline text-xs text-foreground"
              onClick={() => alert("認証番号再送（ダミー）")}
              aria-label="認証番号を再送する"
            >
              {data.email}に再送する
            </button>
          </form>
        </Card>
      )}
      {step === 3 && (
        <Card
          title="アカウント情報の登録"
          subtitle="3/3"
          description="登録後でも変更ができます"
        >
          <form
            className="flex flex-col items-center w-full gap-8 max-w-sm mx-auto"
            onSubmit={handleSubmit}
          >
            <Input
              label="ハンドル名"
              value={data.name}
              onChange={(e) => handleChange("name", e.target.value)}
              hasError={!!errors.name}
              errorMessage={errors.name}
              required
            />
            <InputPassword
              label="パスワード"
              value={data.password}
              onChange={(e) => handleChange("password", e.target.value)}
              hasError={!!errors.password}
              errorMessage={errors.password}
              required
            />
            <div className="w-28 self-start">
              <Input
                label="郵便番号"
                value={data.postal}
                onChange={(e) => handleChange("postal", e.target.value)}
                hasError={!!errors.postal}
                errorMessage={errors.postal}
                required
                placeholder="000-0000"
              />
            </div>
            <Button
              label="はじめよう！"
              variant="default"
              size="lg"
              className="w-fit"
              type="submit"
            />
          </form>
        </Card>
      )}
    </GuestLayout>
  );
};

export default SignupPage;
