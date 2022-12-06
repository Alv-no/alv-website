import React from 'react';
import { BlogSlider } from 'shared-components';

export const BlogCarousel = ({ blue, blueText, articles }) => (
  <BlogSlider
    blue={blue}
    blueText={blueText}
    articles={articles}
    heading="Blogg"
    readMoreText="Les mer"
    postPrefix="blogg"
  />
);
