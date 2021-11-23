export default {
  title: 'Image, title, text and button',
  name: 'imageTitleTextButton',
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
      name: 'button',
      title: 'Button',
      type: 'localeButton',
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
