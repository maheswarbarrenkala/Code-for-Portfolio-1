import { PropertyDefaultWrapper } from ".";

export default {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,
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
    rectangleClassName: {},
    rectangle: "/img/31-1-32.png",
  },
};
