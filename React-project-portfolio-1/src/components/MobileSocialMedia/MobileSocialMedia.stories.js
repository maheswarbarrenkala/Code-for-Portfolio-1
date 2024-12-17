import { MobileSocialMedia } from ".";

export default {
  title: "Components/MobileSocialMedia",
  component: MobileSocialMedia,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    rectangleClassName: {},
  },
};
