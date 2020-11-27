import React from 'react';
import { EmployeeGroup } from '.';

export default {
  title: 'components/employeeGroup',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = ({ ...args }) => <EmployeeGroup {...args} />;
Default.args = {
  group: [],
  activeBio: undefined,
  updateActiveBio: () => {},
  filteredEmployees: [],
};
