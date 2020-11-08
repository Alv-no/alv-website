import React from 'react';
import { Title } from './Title';

export default {
  title: 'components/Title',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Ansatte',
};
