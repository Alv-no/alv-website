export default {
  title: 'Social Share',
  name: 'socials',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'socialImage',
      title: 'Image (social media)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'socialTitle',
      title: 'Title (social media) ',
      type: 'string',
    },
    {
      name: 'socialSubtitle',
      title: 'Subtitle (social media)',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
  ],
};
