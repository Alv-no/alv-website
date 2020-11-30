import React from 'react';
import { PostCard } from '.';

export default {
  title: 'components/postCard',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = ({ ...args }) => <PostCard {...args} />;
Default.args = {
  children: 'Child',
  mainImage: { asset: { fluid: '' } },
  slug: 'slug',
  title: 'title',
  tags: ['Ledelse'],
  description: 'desc',
};
