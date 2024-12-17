import { MobileItu } from ".";

export default {
  title: "Components/MobileItu",
  component: MobileItu,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
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
