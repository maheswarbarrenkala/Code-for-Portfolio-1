import { SocialMedia } from ".";

export default {
  title: "Components/SocialMedia",
  component: SocialMedia,
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
