import React from 'react';
import { Header } from '.';

export default {
  title: 'components/header',
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#061838',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Header />;
