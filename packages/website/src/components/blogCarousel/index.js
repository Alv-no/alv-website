import React from 'react';
import { BlogSlider } from 'shared-components';

export const BlogCarousel = ({ blueText, articles }) => (
  <BlogSlider
    blueText={blueText}
    articles={articles}
    heading="Blogg"
    readMoreText="Les mer"
    postPrefix="blogg"
  />
);
