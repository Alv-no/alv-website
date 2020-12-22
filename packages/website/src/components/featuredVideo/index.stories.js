import React from 'react';
import { FeaturedVideo } from '.';

export default {
  title: 'components/featuredVideo',
};

export const Default = ({ ...args }) => <FeaturedVideo {...args} />;
Default.args = {
  children: 'Child',
  mainImage: { asset: { fluid: '' } },
  slug: 'slug',
  title: 'title',
  description: 'desc',
};
