import React from 'react';
import { BlogSlider } from 'shared-components';
import { useBlogQuery } from '../../hookspages/useBlogQuery';

export const BlogCarousel = ({ blue }) => (
  <BlogSlider blue={blue} useBlogQuery={useBlogQuery} />
);
