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

export const Default = ({ ...args }) => <CtaButton {...args} />;
Default.args = {
  children: 'Click Me!',
  internalLink: '/',
};
