import React from "react";
import { Footer } from ".";

export default {
  title: "components/footer",
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  org: "Org.nr: 822 70 4042",
  address: "Youngstorget 3, 0181 Oslo",
  email: "hei@alv.no",
  ctaText:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
};
