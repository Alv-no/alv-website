import React from 'react';
import { BlogSlider } from 'shared-components';

export const BlogCarousel = ({ textColor, articles }) => (
  <BlogSlider
    textColor={textColor}
    articles={articles}
    heading="Blogg"
    readMoreText="Les mer"
    postPrefix="blogg"
  />
);
