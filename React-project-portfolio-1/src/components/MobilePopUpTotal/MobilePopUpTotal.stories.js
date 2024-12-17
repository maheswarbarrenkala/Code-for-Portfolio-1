import { MobilePopUpTotal } from ".";

export default {
  title: "Components/MobilePopUpTotal",
  component: MobilePopUpTotal,
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
