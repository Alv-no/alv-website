import React from 'react';
import { EmployeeCard } from './index';
import jpg from '../../assets/fallback.jpg';

export default { title: 'components/employeeCard' };

const Template = (data) => <EmployeeCard {...data} />;

export const Default = Template.bind({});
Default.args = {
  id: '123',
  firstname: 'Eirik',
  lastname: 'Helgesen',
  experience: 5,
  tags: ['Information Security'],
  title: 'Leder',
  image: {
    asset: {
      fluid: {
        src: jpg,
      },
    },
  },
};
