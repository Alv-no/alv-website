import React from 'react';
import { CtaButton } from '.';

export default {
  title: 'components/ctaButton',
};

export const Default = ({ ...args }) => <CtaButton {...args} />;
Default.args = {
  children: 'Click Me!',
  internalLink: '/',
};
