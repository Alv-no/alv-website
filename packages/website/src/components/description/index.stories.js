import React from 'react';
import { Description } from '.';

export default {
  title: 'components/Description',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = ({ children }) => <Description>{children}</Description>;
