import React from 'react';
import Breadcrumb from './index';

export default {
  title: 'components/breadcrumb',
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

export const Default = () => <Breadcrumb path={['Home', 'Blog', 'Tech']} />;
