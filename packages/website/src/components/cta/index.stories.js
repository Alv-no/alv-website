import React from 'react';
import { Cta } from '.';

export default {
  title: 'components/cta',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Cta {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me!',
  internalLink: '/',
};
Default.argType = {
  children: 'text',
  internalLink: 'text',
};
