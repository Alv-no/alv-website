import React from 'react';
import { Description } from '.';

export default {
  title: 'components/description',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
};
