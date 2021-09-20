export default {
  title: 'Service item',
  name: 'serviceItem',
  type: 'object',
  fields: [
    {
      title: 'Title',
      rows: 1,
      name: 'title',
      type: 'text',
    },
    {
      title: 'Subtitle',
      rows: 1,
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 3,
      options: {
        maxLength: 180,
      },
    },
    {
      title: 'Link',
      name: 'link',
      rows: 3,
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'subtitle',
      subtitle: 'title',
    },
  },
};
