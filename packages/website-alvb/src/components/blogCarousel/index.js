import React from 'react';
import { BlogSlider } from 'shared-components';
import { useBlogQueryRecent } from '../../hookspages/useBlogQueryRecent';

export const BlogCarousel = ({ blue, isEnLocale, blueText, maxWidth }) => (
  <BlogSlider
    blue={blue}
    useBlogQuery={useBlogQueryRecent}
    isEnLocale={isEnLocale}
    blueText={blueText}
    maxWidth={maxWidth}
  />
);
