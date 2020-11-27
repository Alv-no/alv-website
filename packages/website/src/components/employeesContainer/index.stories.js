import React from 'react';
import { EmployeesContainer } from '.';

export default {
  title: 'components/employeeContainer',
  decorators: [
    (Story) => (
      <div style={{ background: '#061838' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = ({ ...args }) => <EmployeesContainer {...args} />;
Default.args = {
  filteredEmployees: [],
};
