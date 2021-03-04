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
      name: 'section2Eyebrow',
      title: 'Eyebrow - section 2',
      type: 'string',
    },
    {
      name: 'section2Title',
      title: 'Title - section 2',
      type: 'string',
    },
    {
      name: 'section2block',
      title: 'Text block - section 2',
      type: 'blockContent',
    },
    {
      name: 'section1Image',
      title: 'Image - section 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'section1ImageText',
      title: 'Text over image - section 2',
      type: 'string',
      options: {
        maxLength: 50,
      },
    },
    {
      name: 'section3description',
      title: 'Description - section 3',
      type: 'text',
      rows: 3,
    },
    {
      name: 'section4title',
      title: 'Title - section 4',
      type: 'string',
    },
    {
      name: 'section4block',
      title: 'Text block - section 4',
      type: 'blockContent',
    },
    {
      name: 'section4Image',
      title: 'Image - section 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'section5title',
      title: 'Title - section 5',
      type: 'string',
    },
    {
      name: 'section5block',
      title: 'Text block - section 5',
      type: 'blockContent',
    },
    {
      name: 'section5Image',
      title: 'Image - section 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'section6description',
      title: 'Description - section 6',
      type: 'text',
      rows: 3,
    },
    {
      name: 'section7description',
      title: 'Description - section 7',
      type: 'text',
      rows: 4,
    },
    {
      name: 'section7Image',
      title: 'Image - section 7',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
