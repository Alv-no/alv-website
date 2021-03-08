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
  ],
};
