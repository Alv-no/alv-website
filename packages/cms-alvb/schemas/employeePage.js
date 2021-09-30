export default {
  name: 'employeePage',
  title: 'Employee Page',
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
    {
      name: 'section2Title',
      title: 'Section 2: Title',
      type: 'string',
    },
    {
      name: 'section2Text',
      title: 'Section 2: Text',
      rows: 3,
      type: 'text',
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
