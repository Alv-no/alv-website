import React from 'react';
import { VideoCard } from '.';

export default {
  title: 'components/videoCard',
};

export const Default = ({ ...args }) => <VideoCard {...args} />;
Default.args = {
  children: 'Child',
  mainImage: { asset: { fluid: '' } },
  slug: 'slug',
  title: 'title',
  tags: ['Ledelse'],
  description: 'desc',
};
