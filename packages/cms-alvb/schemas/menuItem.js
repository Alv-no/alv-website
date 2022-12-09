export default {
  title: 'Menu item',
  name: 'menuItem',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
