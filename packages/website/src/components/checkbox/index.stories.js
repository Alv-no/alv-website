import React from 'react';
import { Checkbox } from './index';

export default {
  title: 'components/checkbox',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: { onChange: { action: 'clicked' } },
};
export const Default = ({ ...args }) => {
  return <Checkbox {...args} />;
};
Default.args = {
  children: 'Frontend',
  defaultValue: true,
};
