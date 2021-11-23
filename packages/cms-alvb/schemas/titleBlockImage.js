export default {
  title: 'Title, block, and image',
  name: 'titleBlockImage',
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
      type: 'localeSimpleBlock',
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
