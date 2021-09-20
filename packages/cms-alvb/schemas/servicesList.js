export default {
  title: 'Service list',
  name: 'servicesList',
  type: 'object',
  fields: [
    {
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      of: [
        {
          title: 'List item',
          name: 'listItem',
          type: 'serviceItem',
        },
      ],
    },
  ],
};
