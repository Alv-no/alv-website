import React from 'react';
import { CtaButton } from '.';

export default {
  title: 'components/ctaButton',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <CtaButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me!',
  internalLink: '/',
};
