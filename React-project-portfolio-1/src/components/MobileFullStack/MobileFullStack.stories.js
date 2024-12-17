import { MobileFullStack } from ".";

export default {
  title: "Components/MobileFullStack",
  component: MobileFullStack,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-3", "variant-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    groupClassName: {},
    frameClassName: {},
    elementClassName: {},
    element: "/img/31-1-32.png",
    rectangleClassName: {},
  },
};
