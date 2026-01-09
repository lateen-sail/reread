import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Card from "@/components/reread-ui/display/Card/Index";

const meta: Meta<typeof Card> = {
  title: "display/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "カードタイトル",
    subtitle: "サブタイトル",
    description: "ここに説明文が入ります。",
  },
  argTypes: {
    title: {
      control: "text",
      description: "カードのタイトル",
    },
    subtitle: {
      control: "text",
      description: "タイトル下に表示される補足テキスト",
    },
    description: {
      control: "text",
      description: "カードの説明文",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "情報をひとまとまりで表示するカードコンポーネント。",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <div className="text-body-sm">
        ここに本文が入ります。情報をひとまとまりとして提示します。
      </div>
    </Card>
  ),
};
