export default {
  title: 'Title, text, and image',
  name: 'titleTextImage',
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
      type: 'localeText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
