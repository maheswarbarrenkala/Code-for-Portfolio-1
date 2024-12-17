import { MobileAi } from ".";

export default {
  title: "Components/MobileAi",
  component: MobileAi,
  argTypes: {
    property1: {
      options: ["variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
  },
};
