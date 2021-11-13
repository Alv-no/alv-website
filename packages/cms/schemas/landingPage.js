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
    // Hero section
    {
      name: 'heroVideoWebm',
      title: 'Hero Video: webm',
      type: 'file',
    },
    {
      name: 'heroVideoMp4',
      title: 'Hero Video: mp4',
      type: 'file',
    },
    {
      name: 'heroCta',
      title: 'Hero Cta',
      type: 'heroCta',
    },
    {
      name: 'videoWebm',
      title: 'Video Introduction: webm',
      type: 'file',
    },
    {
      name: 'videoMp4',
      title: 'Video Introduction: mp4',
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
    // Section 1
    {
      name: 'flipSection1Image',
      title: 'Section 1: image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'flipSection1Title',
      title: 'Section 1: title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'flipSection1Text',
      title: 'Section 1: text',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: 'flipSection1ButtonText',
      title: 'Section 1: button text',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'flipSection1ButtonLink',
      title: 'Section 1: button link',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    // Section 2
    {
      name: 'section2Services',
      title: 'Section 2: Services',
      type: 'servicesIntro',
    },
    // Section 3
    {
      name: 'flipSection3Image',
      title: 'Section 3: image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'flipSection3Title',
      title: 'Section 3: title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'flipSection3Text',
      title: 'Section 3: text',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: 'flipSection3TextOverImage',
      title: 'Section 3: text over image',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
  ],
};
