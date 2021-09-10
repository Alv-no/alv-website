export default {
  name: 'landingPage',
  title: 'Landing Page',
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
      name: 'heroVideoWebm',
      title: 'Hero Video - webm',
      type: 'file',
    },
    {
      name: 'heroVideoMp4',
      title: 'Hero Video - mp4',
      type: 'file',
    },
    {
      name: 'videoWebm',
      title: 'Video Introduction - webm',
      type: 'file',
    },
    {
      name: 'videoMp4',
      title: 'Video Introduction - mp4',
      type: 'file',
    },
    {
      name: 'videoTextOverlay',
      title: 'Video Text Overlay',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'aboutText',
      title: 'About Text',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'flipSection1Image',
      title: 'Flip section 1 - image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'flipSection1Title',
      title: 'Flip section 1 - title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'flipSection1Text',
      title: 'Flip section 1 - text',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: 'flipSection2Image',
      title: 'Flip section 2 - image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'flipSection2Title',
      title: 'Flip section 2 - title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'flipSection2Text',
      title: 'Flip section 2 - text',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: 'flipSection3Image',
      title: 'Flip section 3 - image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'flipSection3Title',
      title: 'Flip section 3 - title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'flipSection3Text',
      title: 'Flip section 3 - text',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: 'flipSection3TextOverImage',
      title: 'Flip section 3 - text over image',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
  ],
};
