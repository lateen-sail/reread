"use client";
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import GuestLayout from "@/components/layout/GuestLayout";
import Card from "@/components/reread-ui/display/Card/Index";
import Input from "@/components/reread-ui/input/Input";
import InputOTP from "@/components/reread-ui/input/InputOTP";
import InputPassword from "@/components/reread-ui/input/InputPassword";
import Button from "@/components/reread-ui/action/Button";

type SignupStep = 1 | 2 | 3;

const LOCAL_KEY = "reread_signup";

type SignupData = {
  email: string;
  otp: string;
  name: string;
  password: string;
  postal: string;
};

const defaultData: SignupData = {
  email: "",
  otp: "",
  name: "",
  password: "",
  postal: "",
};

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState<SignupStep>(1);
  const [data, setData] = useState<SignupData>(defaultData);
  const [errors, setErrors] = useState<Partial<SignupData>>({});

  // localStorageから初期値取得
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData({ ...defaultData, ...parsed });
      } catch {}
    }
  }, []);

  // 値をlocalStorageに保存
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }, [data]);

  // バリデーション
  const validate = (step: SignupStep): boolean => {
    const newErrors: Partial<SignupData> = {};
    if (step === 1) {
      if (!data.email) newErrors.email = "メールアドレスを入力してください";
      else if (!/^[\w\-.]+@[\w\-]+\.[\w\-.]+$/.test(data.email))
        newErrors.email = "メールアドレスの形式が正しくありません";
    }
    if (step === 2) {
      if (!data.otp || data.otp.length !== 6)
        newErrors.otp = "6桁の認証番号を入力してください";
    }
    if (step === 3) {
      if (!data.name) newErrors.name = "ハンドル名を入力してください";
      if (!data.password || data.password.length < 6)
        newErrors.password = "6文字以上のパスワードを入力してください";
      if (!data.postal || !/^\d{3}-?\d{4}$/.test(data.postal))
        newErrors.postal = "郵便番号を正しく入力してください";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 入力変更
  const handleChange = (key: keyof SignupData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  // 次へ
  const handleNext = () => {
    if (!validate(step)) return;
    setStep((prev) => (prev < 3 ? ((prev + 1) as SignupStep) : prev));
  };

  // 完了時にmypageへ遷移
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(3)) return;
    localStorage.removeItem(LOCAL_KEY);
    router.push("/mypage");
  };

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
}
