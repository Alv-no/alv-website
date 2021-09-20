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
      name: 'imageHero',
      title: 'Section 1: Hero Component',
      type: 'textImageHero',
    },
    // section 2: video and block text
    {
      name: 'videoWebm',
      title: 'Video Introduction: webm',
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
      name: 'section2Title',
      title: 'Section 2: Title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'section2Text',
      title: 'Section 2: Text',
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
    // section 3: image, title and text
    {
      name: 'section3Image',
      title: 'Section 3: Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'section3Title',
      title: 'Section 3: Title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'section3Text',
      title: 'Flip section 3: Text',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    // section 4: title, text and services
    {
      name: 'section4Services',
      title: 'Section 4: Services',
      type: 'servicesIntro',
    },
    // section 5: founder component
    {
      name: 'section5Founder',
      title: 'Section 5: Founder',
      type: 'founder',
    },
  ],
};
