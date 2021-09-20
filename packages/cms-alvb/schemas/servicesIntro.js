export default {
  title: 'Services Intro',
  name: 'servicesIntro',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'servicesList',
      title: ' ',
      type: 'servicesList',
    },
  ],
};
