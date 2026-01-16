"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/providers/toast/api";

type LoginData = {
  email: string;
  password: string;
};

type LoginErrors = {
  email?: string;
  password?: string;
  general?: string;
};

const isValidEmail = (value: string) => {
  // Simple, pragmatic validation (covers most common cases)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const useLogin = () => {
  const router = useRouter();

  const [data, setData] = useState<LoginData>({ email: "", password: "" });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [loading, setLoading] = useState(false);

  const validate = useCallback((next: LoginData) => {
    const nextErrors: LoginErrors = {};

    const email = next.email.trim();
    if (!email) {
      nextErrors.email = "メールアドレスを入力してください";
    } else if (!isValidEmail(email)) {
      nextErrors.email = "メールアドレスの形式が正しくありません";
    }

    const password = next.password;
    if (!password) {
      nextErrors.password = "パスワードを入力してください";
    } else if (password.length < 8) {
      nextErrors.password = "パスワードは8文字以上で入力してください";
    }

    return nextErrors;
  }, []);

  const handleChange = useCallback((key: keyof LoginData, value: string) => {
    setData((prev) => {
      const next = { ...prev, [key]: value } as LoginData;
      // 入力中は当該フィールドのエラーのみ先にクリア
      setErrors((prevErrors) => {
        const { [key]: _ignored, ...rest } = prevErrors;
        return rest;
      });
      return next;
    });
  }, []);

  const handleNext = useCallback(async () => {
    const next: LoginData = {
      email: data.email.trim(),
      password: data.password,
    };
    const nextErrors = validate(next);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // 期待するAPI:
      // - POST /api/auth/login  body: { email, password }
      // モック用: 指定のメール/パスワードのみログイン成功
      const MOCK_EMAIL = "hello@sample.com";
      const MOCK_PASSWORD = "sample1234";

      if (next.email !== MOCK_EMAIL || next.password !== MOCK_PASSWORD) {
        setErrors({ general: "メールアドレスまたはパスワードが違います" });
        return;
      }

      showToast.success({
        message: "サインアップしました",
      });
      router.push("/mypage");
    } catch {
      setErrors({
        general: "通信エラーが発生しました。ネットワーク状況をご確認ください",
      });
    } finally {
      setLoading(false);
    }
  }, [data.email, data.password, router, validate]);

  const value = useMemo(
    () => ({
      data,
      errors,
      loading,
      handleChange,
      handleNext,
    }),
    [data, errors, loading, handleChange, handleNext]
  );

  return value;
};
