import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/reread-ui/action/Button";

const meta: Meta<typeof Button> = {
  title: "action/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {},
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
    label: "ラベル",
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
