import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InputOTP from "@/components/reread-ui/input/InputOTP";

const meta: Meta<typeof InputOTP> = {
  title: "input/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "ワンタイムパスコード（OTP）の入力コンポーネント。shadcn/ui の InputOTP をベースにし、エラーメッセージ表示（aria-describedby 連携）を追加しています。\n\n改善案: (1) `required` を固定ではなく外部から制御できるようにする (2) `hasError` と `errorMessage` の整合性（片方のみ指定）を型/実行時にガードする (3) 表示レイアウト（グルーピング/セパレータ）用のプリセットを用意する",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Basic: Story = {
  name: "Basic",
  args: {
    length: 6,
    autoFocus: true,
  },
  render: (args) => {
    const [value, setValue] = React.useState<number[]>([]);

    const handleChange = (newValue: string) => {
      const numbers = newValue
        .split("")
        .map(Number)
        .filter((n) => !isNaN(n));
      setValue(numbers);
    };

    return <InputOTP {...args} value={value} onChange={handleChange} />;
  },
};

export const WithSeparator: Story = {
  name: "WithSeparator",
  args: {
    length: 6,
    groupSize: 3,
  },
  render: (args) => {
    const [value, setValue] = React.useState<number[]>([]);

    const handleChange = (newValue: string) => {
      const numbers = newValue
        .split("")
        .map(Number)
        .filter((n) => !isNaN(n));
      setValue(numbers);
    };

    return <InputOTP {...args} value={value} onChange={handleChange} />;
  },
};

export const WithError: Story = {
  name: "WithError",
  args: {
    length: 6,
    hasError: true,
    errorMessage: "確認コードが正しくありません。",
  },
  render: (args) => {
    const [value, setValue] = React.useState<number[]>([]);

    const handleChange = (newValue: string) => {
      const numbers = newValue
        .split("")
        .map(Number)
        .filter((n) => !isNaN(n));
      setValue(numbers);
    };

    return <InputOTP {...args} value={value} onChange={handleChange} />;
  },
};
