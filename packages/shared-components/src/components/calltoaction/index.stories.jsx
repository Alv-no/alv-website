import React from "react";
import CallToAction from "./index";

export default {
  title: "components/calltoaction",
};

export const Default = ({ ...args }) => <CallToAction {...args} />;
Default.args = {
  children: "Go forth and be brave",
  disabled: false,
};
Default.argTypes = {
  onClick: { action: "clicked" },
};
