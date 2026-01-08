import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import SelectBox, {
  type Props as SelectBoxProps,
  type SelectOption,
} from "@/components/reread-ui/input/Selectbox";

const meta: Meta<typeof SelectBox> = {
  title: "input/SelectBox",
  component: SelectBox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {},
    },
  },
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof SelectBox>;

const OPTIONS: SelectOption[] = [
  { label: "りんご", value: "apple" },
  { label: "みかん", value: "orange" },
  { label: "バナナ", value: "banana" },
];

const ControlledTemplate = (args: SelectBoxProps) => {
  const [value, setValue] = React.useState<string>(args.value ?? "");
  return (
    <div className="max-w-xs">
      <SelectBox
        {...args}
        value={value}
        onChange={(next) => {
          setValue(next);
          args.onChange(next);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    value: "",
    placeholder: "選択してください",
    options: OPTIONS,
    disabled: false,
  },
};

export const WithHelperText: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    value: "",
    placeholder: "果物を選択",
    options: OPTIONS,
    helperText: "1つ選択してください",
  },
};

export const WithError: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    value: "",
    placeholder: "果物を選択",
    options: OPTIONS,
    helperText: "1つ選択してください",
    error: "必須項目です",
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    value: "apple",
    placeholder: "果物を選択",
    options: OPTIONS,
    disabled: true,
    helperText: "無効化されています",
  },
};
