import React from 'react';
import { Title } from '.';

export default {
  title: 'components/Title',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: 'text',
  },
};

export const Default = ({ children }) => {
  return <Title>{children}</Title>;
};
