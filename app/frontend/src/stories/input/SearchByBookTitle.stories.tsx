import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import SearchByBookTitle from "@/components/reread-ui/input/SearchByBookTitle";

const meta: Meta<typeof SearchByBookTitle> = {
  title: "input/SearchByBookTitle",
  component: SearchByBookTitle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {},
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchByBookTitle>;

const baseSuggestions = [
  "誰のためのデザイン？",
  "カーム・テクノロジー",
  "誰のためのデザイン？",
  "ロボット",
  "困った人たち",
];

export const Default: Story = {
  args: {
    suggestions: baseSuggestions,
    lastSearchLabel: "前回の検索: 本のタイトル",
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = React.useState<string>("");

    return (
      <SearchByBookTitle
        {...args}
        value={value}
        onValueChange={setValue}
        onSelectSuggestion={(v) => {
          setValue(v);
        }}
      />
    );
  },
};
