import React from 'react';
import { BlogSlider } from 'shared-components';
import { useBlogQuery } from '../../hooks/useBlogQuery';

export const BlogCarousel = ({ blue, blueText }) => (
  <BlogSlider blue={blue} blueText={blueText} useBlogQuery={useBlogQuery} />
);
