export default {
  name: 'blogPage',
  title: 'Blog Page',
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
      name: 'section1Title',
      title: 'Section 1: Title',
      type: 'string',
      options: {
        maxLength: 80,
      },
    },
    {
      name: 'section1Description',
      title: 'Section 1: Description',
      type: 'text',
      rows: 4,
      options: {
        maxLength: 250,
      },
    },
  ],
};
