import React from 'react';
import { Title } from '.';

export default {
  title: 'components/title',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = ({ children }) => <Title>{children}</Title>;
Default.args = { children: 'Hello world' };
Default.argType = {
  children: 'text',
};
