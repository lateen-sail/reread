import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/providers/toast/api";
import { SignupStep, SignupData } from "../types";

const LOCAL_KEY = "reread_signup";

const defaultData: SignupData = {
  email: "",
  otp: "",
  name: "",
  password: "",
  postal: "",
};

export const useSignup = () => {
  const router = useRouter();
  const [step, setStep] = useState<SignupStep>(1);
  const [data, setData] = useState<SignupData>(defaultData);
  const [errors, setErrors] = useState<Partial<SignupData>>({});
  const [loading, setLoading] = useState(false);

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
      if (data.postal && !/^\d{3}-?\d{4}$/.test(data.postal))
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
  // モックAPI: 1秒遅延
  const mockApi = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const handleNext = async () => {
    if (!validate(step)) return;
    setLoading(true);
    await mockApi();
    setStep((prev) => (prev < 3 ? ((prev + 1) as SignupStep) : prev));
    setLoading(false);
  };

  // 完了時にmypageへ遷移
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(3)) return;
    setLoading(true);
    await mockApi();
    localStorage.removeItem(LOCAL_KEY);
    setLoading(false);
    showToast.success({
      message: "サインアップしました",
    });
    router.push("/mypage");
  };

  return {
    step,
    data,
    errors,
    loading,
    handleChange,
    handleNext,
    handleSubmit,
  };
};
