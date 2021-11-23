export default {
  title: 'Title and block',
  name: 'titleBlock',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'localeBlockContent',
    },
  ],
};
