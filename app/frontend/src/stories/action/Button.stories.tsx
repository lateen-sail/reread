import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/reread-ui/action/Button";

const meta: Meta<typeof Button> = {
  title: "action/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "役割: クリック操作を実行するための基本ボタン。\n\n改善案:\n1) `loading` 時のラベル置き換え/`aria-live` などの通知強化\n2) `disabled` と `loading` の優先順位をProps設計で明示\n3) `variant`/`size` の選択肢を Storybook 上で分かりやすく整理（カテゴリ分け/説明追加）",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
    },
  },
  args: {
    label: "Button",
    loading: false,
    disabled: false,
    variant: "default",
    size: "default",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="default" label="default" />
      <Button {...args} variant="secondary" label="secondary" />
      <Button {...args} variant="destructive" label="destructive" />
      <Button {...args} variant="outline" label="outline" />
      <Button {...args} variant="ghost" label="ghost" />
      <Button {...args} variant="link" label="link" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="default" label="default" />
      <Button {...args} size="sm" label="sm" />
      <Button {...args} size="lg" label="lg" />
      <Button {...args} size="icon" label="★" aria-label="icon" />
      <Button {...args} size="icon-sm" label="★" aria-label="icon-sm" />
      <Button {...args} size="icon-lg" label="★" aria-label="icon-lg" />
    </div>
  ),
};

export const InteractiveLoading: Story = {
  args: {
    label: "Click to load",
  },
  render: (args) => {
    const [isLoading, setIsLoading] = React.useState(false);

    return (
      <Button
        {...args}
        loading={isLoading}
        disabled={args.disabled}
        onClick={() => {
          if (isLoading) return;
          setIsLoading(true);
          window.setTimeout(() => setIsLoading(false), 1200);
        }}
      />
    );
  },
};
