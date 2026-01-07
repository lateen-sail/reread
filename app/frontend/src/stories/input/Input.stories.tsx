import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/components/reread-ui/input/Input";

const meta: Meta<typeof Input> = {
  title: "input/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "テキスト入力フィールド。ラベル、必須表示、エラーメッセージ表示、disabled 状態に対応。\n\n改善案:\n- `hint`（補足テキスト）を追加して入力意図を明確化\n- `leftIcon` / `rightIcon` などの装飾スロットを追加\n- `isLoading`（入力中のローディング）など状態表現を追加",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const ControlledTemplate = (args: React.ComponentProps<typeof Input>) => {
  const [value, setValue] = React.useState("");

  return (
    <div style={{ maxWidth: 420 }}>
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    label: "Name",
    placeholder: "Type your name",
  },
};

export const Required: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    label: "Email",
    placeholder: "name@example.com",
    required: true,
  },
};

export const WithErrorMessage: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    label: "Email",
    placeholder: "name@example.com",
    required: true,
    hasError: true,
    errorMessage: "メールアドレスの形式が正しくありません",
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    label: "Company",
    placeholder: "Disabled",
    disabled: true,
  },
};

export const WithDefaultValue: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("Hello");

    return (
      <div style={{ maxWidth: 420 }}>
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
  args: {
    label: "Message",
    placeholder: "Type...",
  },
};
