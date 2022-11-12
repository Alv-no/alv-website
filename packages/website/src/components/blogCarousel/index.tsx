import React from 'react';
import { BlogSlider } from 'shared-components';
import { useBlogQuery } from '../../hooks/useBlogQuery';

interface Props {
  blue?: boolean,
  blueText?: boolean,
}

export const BlogCarousel : React.FC<Props>= ({
  blue = false,
  blueText = false,
}) => (
  <BlogSlider blue={blue} blueText={blueText} useBlogQuery={useBlogQuery} />
);
