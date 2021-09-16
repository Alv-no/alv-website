import React from 'react';
import { BlogSlider } from 'shared-components';
import { useBlogQuery } from '../../hooks/useBlogQuery';

export const BlogCarousel = () => <BlogSlider useBlogQuery={useBlogQuery} />;
