import React from 'react';
import { EmployeeGroup } from '.';

export default {
  title: 'components/employeeGroup',
};

export const Default = ({ ...args }) => <EmployeeGroup {...args} />;
Default.args = {
  group: [],
  activeBio: undefined,
  updateActiveBio: () => {},
};
