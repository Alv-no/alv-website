import React from 'react';
import { BlogSlider } from 'shared-components';
import { useBlogQueryRecent } from '../../hookspages/useBlogQueryRecent';

export const BlogCarousel = ({ blue, blueText, maxWidth }) => {
  const articles = useBlogQueryRecent().articles.nodes;
  return (
    <BlogSlider
      blue={blue}
      articles={articles}
      blueText={blueText}
      maxWidth={maxWidth}
      heading="Blog"
      readMoreText="Read more"
      postPrefix="blog"
    />
  );
};
