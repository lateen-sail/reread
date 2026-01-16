"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "./hooks/useLogin";
import GuestLayout from "@/components/layout/GuestLayout";
import Card from "@/components/reread-ui/display/Card/Index";
import Input from "@/components/reread-ui/input/Input";
import InputPassword from "@/components/reread-ui/input/InputPassword";
import Button from "@/components/reread-ui/action/Button";
import LinkText from "@/components/reread-ui/action/LinkText";

export default function LoginPage() {
  const { data, errors, loading, handleChange, handleNext } = useLogin();
  const router = useRouter();

  const loadingView = () => {
    if (!loading) return null;
    return (
      <>
        <span className="absolute top-0 left-0 z-20 right-0 h-1 w-full">
          <svg
            className="w-full h-full block"
            viewBox="0 0 100 4"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="progressbar"
            aria-label="読み込み中"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="2"
              fill="var(--muted)"
            />
            <rect
              x="-40%"
              y="0"
              width="40%"
              height="100%"
              rx="2"
              fill="var(--foreground)"
            >
              <animate
                attributeName="x"
                values="-40%;100%"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </span>
        <span className="absolute inset-0 z-10 bg-background opacity-70"></span>
      </>
    );
  };

  return (
    <GuestLayout>
      <Card title="お帰りなさい！">
        {loadingView()}
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
          <InputPassword
            label="パスワード"
            value={data.password}
            onChange={(e) => handleChange("password", e.target.value)}
            hasError={!!errors.password}
            errorMessage={errors.password}
            required
          />
          <Button label="次へ" variant="default" size="lg" type="submit" />
          <LinkText
            label="サインアップする"
            onClick={() => router.push("/signup")}
          />
        </form>
      </Card>
    </GuestLayout>
  );
}
