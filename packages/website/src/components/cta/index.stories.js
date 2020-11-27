import React from 'react';
import { Cta } from '.';

export default {
  title: 'components/cta',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838', padding: '20px 0' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Cta {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me!',
  description:
    'This is the description. This is the description. This is the description. This is the description. This is the description.',
  internalLink: '/',
};
Default.argType = {
  children: 'text',
  description: 'text',
  internalLink: 'text',
};
