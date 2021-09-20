export default {
  name: 'ourServicesPage',
  title: 'Our Services Page',
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
      name: 'mainImage',
      title: 'Hero background image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'section2Title',
      title: 'Section 2: Title',
      type: 'string',
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
    {
      name: 'section3Title',
      title: 'Section 3: Title',
      type: 'string',
    },
    {
      name: 'section3Block',
      title: 'Section 3: Text',
      type: 'blockContent',
    },
    {
      name: 'section3Image',
      title: 'Section 3: Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'section4Block',
      title: 'Section 4: Text',
      type: 'blockContent',
    },
  ],
};
