import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InputPassword from "@/components/reread-ui/input/InputPassword";

const meta: Meta<typeof InputPassword> = {
  title: "input/InputPassword",
  component: InputPassword,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "パスワード入力コンポーネント。ラベル/必須/エラー表示に対応し、右側の目アイコンでパスワード表示の切り替えができます。",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  args: {
    label: "パスワード",
  },
};

export const Required: Story = {
  args: {
    label: "パスワード",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "パスワード",
    hasError: true,
    errorMessage: "パスワードを入力してください",
  },
};

export const Disabled: Story = {
  args: {
    label: "パスワード",
    disabled: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "パスワード",
  },
};
