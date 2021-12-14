import React from 'react';
import { Navigation } from '.';

export default {
  title: 'components/navigation',
};

export const Default = ({ ...args }) => <Navigation {...args} />;

Default.args = {
  open: true,
};
