import React from 'react';
import { GridContainer } from '.';

export default {
  title: 'components/gridContainer',
};

export const Default = ({ ...args }) => <GridContainer {...args} />;
Default.args = {
  filteredContent: [],
};
