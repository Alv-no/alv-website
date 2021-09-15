import React from 'react';
import { Description } from '.';

export default {
  title: 'components/description',
};

const Template = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  align: 'left',
};
Default.argType = {
  children: 'text',
  align: 'text',
};
