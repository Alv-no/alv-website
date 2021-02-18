export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page title',
      type: 'string',
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
