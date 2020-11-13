import React from 'react';
import { EmployeeCard } from './index';

export default { title: 'components/employeeCard' };

const Template = (data) => <EmployeeCard {...data} />;

export const Default = Template.bind({});
Default.args = {
  id: '123',
  firstname: 'Marcus Sahlin',
  lastname: 'Pettersen',
  title: 'Daglig leder og Prosjektleder',
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Laboris nisi ut aliquip ex ea commodo consequat.',
  videoEmbed: 'https://player.vimeo.com/video/76979871',
};
