import React, { useState } from 'react';
import { Checkbox } from './index';

export default {
  title: 'components/checkbox',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = ({ ...args }) => {
  const [checked, setChecked] = useState(true);
  const onChange = (e) => setChecked(e.target.checked);

  return <Checkbox value={checked} onChange={onChange} {...args} />;
};
Default.args = {
  children: 'Frontend',
  defaultValue: true,
};
