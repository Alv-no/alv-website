export default {
  title: 'CTA',
  name: 'cta',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Video Link',
      name: 'videoLink',
      type: 'string',
    },
    {
      title: 'Link (url)',
      name: 'link',
      type: 'string',
    },
  ],
};
