import React from "react";
import GuestLayout from "@/components/layout/GuestLayout";
import Card from "@/components/reread-ui/display/Card/Index";
import Input from "@/components/reread-ui/input/Input";
import Button from "@/components/reread-ui/action/Button";

export default function SignupPage() {
  return (
    <GuestLayout>
      <div className="flex flex-col justify-center items-center flex-1 gap-2.5 px-5 py-28 md:py-20">
        <div className="w-full max-w-xl">
          <Card
            title="サインアップ"
            subtitle="1/3"
            description="メールアドレスを入力してください"
          >
            <div className="flex flex-col items-center w-full gap-2.5">
              <form className="flex flex-col items-center w-full gap-8">
                <Input placeholder="sample@reread.com" type="email" />
                <Button
                  label="次へ"
                  variant="default"
                  size="lg"
                  className="w-fit"
                />
              </form>
            </div>
          </Card>
        </div>
      </div>
    </GuestLayout>
  );
}
