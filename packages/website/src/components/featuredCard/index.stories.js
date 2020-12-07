import React from 'react';
import { FeaturedCard } from '.';

export default {
  title: 'components/featuredCard',
};

export const Default = ({ ...args }) => <FeaturedCard {...args} />;
Default.args = {
  children: 'Child',
  mainImage: { asset: { fluid: '' } },
  slug: 'slug',
  title: 'title',
  description: 'desc',
};
