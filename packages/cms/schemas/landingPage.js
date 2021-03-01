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
      name: 'videoWebm',
      title: 'Video introduction webm',
      type: 'file',
    },
    {
      name: 'videoMp4',
      title: 'Video introduction mp4',
      type: 'file',
    },
  ],
};
