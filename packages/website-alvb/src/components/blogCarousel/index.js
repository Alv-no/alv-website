import React from "react";
import { BlogSlider } from "shared-components";
import { useBlogQueryRecent } from "../../hookspages/useBlogQueryRecent";

export const BlogCarousel = ({ textColor, maxWidth }) => {
  const articles = useBlogQueryRecent().articles.nodes;
  return (
    <BlogSlider
      articles={articles}
      textColor={textColor}
      maxWidth={maxWidth}
      heading="Blog"
      readMoreText="Read more"
      postPrefix="blog"
    />
  );
};
