export default {
  title: 'Featured Team',
  name: 'featuredTeam',
  type: 'object',
  fields: [
    {
      title: 'Employee 1',
      name: 'employee1',
      type: 'reference',
      of: [{ type: 'employee' }],
    },
    {
      title: 'Employee 2',
      name: 'employee2',
      type: 'reference',
      of: [{ type: 'employee' }],
    },
    {
      title: 'Employee 3',
      name: 'employee3',
      type: 'reference',
      of: [{ type: 'employee' }],
    },
    {
      title: 'Employee 4',
      name: 'employee4',
      type: 'reference',
      of: [{ type: 'employee' }],
    },
  ],
};
