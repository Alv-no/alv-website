import React from 'react';
import { Tags } from '.';

export default {
  title: 'components/tagbar',
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

const Template = (args) => <Tags {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    'Data and analytics',
    'Information security',
    'Project management',
    'Development',
  ],
};
