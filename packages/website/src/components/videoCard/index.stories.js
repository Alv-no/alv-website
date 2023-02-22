import React from "react";
import { VideoCard } from ".";

export default {
  title: "components/videoCard",
};

export const Default = ({ ...args }) => <VideoCard {...args} />;
Default.args = {
  slug: "",
  title: "title",
  thumbnail: "",
};
