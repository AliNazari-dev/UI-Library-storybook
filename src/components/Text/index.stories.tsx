import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children:
      "شرکت با ارایه ترکیبی از راهکارهای نرم افزاری بر بستر وب و تامین زیرساختهای سخت افزاری و ارتباطی توانسته است شرایط توسعه فن آوری اطلاعات در بخشهای مدیریت، پردازش و دسترسی به اطلاعات را به صورت همگون در بازار سرمایه فراهم آورد",
  },
};
export const H2: Story = {
  args: {
    as: "h2",
    children:
      "شرکت با ارایه ترکیبی از راهکارهای نرم افزاری بر بستر وب و تامین زیرساختهای سخت افزاری و ارتباطی توانسته است شرایط توسعه فن آوری اطلاعات در بخشهای مدیریت، پردازش و دسترسی به اطلاعات را به صورت همگون در بازار سرمایه فراهم آورد",
  },
};
