export default {
  name: 'bioBank',
  title: 'Bio Bank',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title (meta)',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'pageDescription',
      title: 'Page Description (meta)',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: 'heading',
      title: 'Hero Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'section2Block',
      title: 'Section 2: Text',
      type: 'blockContent',
    },
    {
      name: 'section2Image',
      title: 'Section 2: Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
