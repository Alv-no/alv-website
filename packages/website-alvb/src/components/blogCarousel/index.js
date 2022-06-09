import React from 'react';
import { BlogSlider } from 'shared-components';
import { useBlogQuery } from '../../hookspages/useBlogQuery';

export const BlogCarousel = ({ blue, isEnLocale, blueText, maxWidth }) => (
  <BlogSlider
    blue={blue}
    useBlogQuery={useBlogQuery}
    isEnLocale={isEnLocale}
    blueText={blueText}
    maxWidth={maxWidth}
  />
);
