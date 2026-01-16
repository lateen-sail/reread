import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import LinkText from "@/components/reread-ui/action/LinkText";

const meta: Meta<typeof LinkText> = {
  title: "action/LinkText",
  component: LinkText,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "下線付きのリンク風ボタン（Shadcn Button の link variant）です。ローディング表示・無効化・サイズ（sm/xs）・色（default/destructive）を切り替えられます。",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
    },
    type: {
      control: "select",
      options: ["default", "destructive"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["sm", "xs"],
    },
  },
  args: {
    label: "ラベル",
    type: "default",
    loading: false,
    disabled: false,
    size: "sm",
  },
};

export default meta;

type Story = StoryObj<typeof LinkText>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Destructive: Story = {
  args: {
    type: "destructive",
    label: "削除する",
  },
};
