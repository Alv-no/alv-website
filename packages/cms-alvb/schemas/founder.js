export default {
  title: 'Founder',
  name: 'founder',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'localeText',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'localeString',
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
      title: 'Signature image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
