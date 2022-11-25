import React from 'react';
import { BlogSlider } from 'shared-components';
import { useBlogQueryRecent } from '../../hookspages/useBlogQueryRecent';

export const BlogCarousel = ({ blue, blueText, maxWidth }) => (
  <BlogSlider
    blue={blue}
    useBlogQuery={useBlogQueryRecent}
    blueText={blueText}
    maxWidth={maxWidth}
    heading="Blog"
    readMoreText="Read more"
    postPrefix="blog"
  />
);
