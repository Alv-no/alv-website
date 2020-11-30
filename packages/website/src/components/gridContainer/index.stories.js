import React from 'react';
import { GridContainer } from '.';

export default {
  title: 'components/gridContainer',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = ({ ...args }) => <GridContainer {...args} />;
Default.args = {
  filteredContent: [],
};
