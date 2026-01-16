import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { showToast } from "@/providers/toast/api";
import ToastProvider from "@/providers/toast/Provider";

type ToastType = "default" | "error";

type ToastStoryArgs = {
  type: ToastType;
  message: string;
  actionLabel?: string;
};

const meta: Meta<ToastStoryArgs> = {
  title: "providers/toast/Toast",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <ToastProvider />
        <Story />
      </>
    ),
  ],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["default", "error"],
    },
    message: {
      control: { type: "text" },
    },
    actionLabel: {
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      description: {},
    },
  },
};

export default meta;

type Story = StoryObj<ToastStoryArgs>;

export const Default: Story = {
  args: {
    type: "default",
    message: "こんにちは！",
    actionLabel: "アクション",
  },
  render: (args) => {
    return (
      <button
        type="button"
        className="px-3 py-2 border rounded"
        onClick={() => {
          const options = {
            message: args.message,
            actionLabel: args.actionLabel,
            onAction: () => console.log("action here"),
          };

          if (args.type === "error") {
            showToast.error(options);
            return;
          }

          showToast.success(options);
        }}
      >
        トーストを表示
      </button>
    );
  },
};
