export default {
  name: 'investmentPage',
  title: 'Investment Page',
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
    // section 1: Page title and description
    {
      name: 'section1Title',
      title: 'Section 1: Title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'section1Description',
      title: 'Section 1: Description',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    // section 2: images
    {
      name: 'section2ImageLeft',
      title: 'Section 2: Image left',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'section2ImageRight',
      title: 'Section 2: Image right',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // section 3: text
    {
      name: 'section3Block',
      title: 'Section 3: Text',
      type: 'blockContent',
    },
  ],
};
