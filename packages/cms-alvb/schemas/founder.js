export default {
  title: 'Founder',
  name: 'founder',
  type: 'object',
  fields: [
    {
      title: 'Title',
      rows: 1,
      name: 'title',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      options: {
        maxLength: 350,
      },
    },
    {
      title: 'Name',
      name: 'name',
      rows: 1,
      type: 'string',
    },
    {
      title: 'Role',
      name: 'role',
      rows: 1,
      type: 'string',
    },
    {
      name: 'founderImage',
      title: 'Founder image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'signatureImage',
      title: 'Signature PNG',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
