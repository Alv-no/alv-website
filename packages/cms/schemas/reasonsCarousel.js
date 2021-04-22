export default {
  title: 'Reasons Carousel',
  name: 'reasonsCarousel',
  type: 'object',
  fields: [
    {
      title: 'Main Heading',
      name: 'mainHeading',
      type: 'string',
      options: {
        maxLength: 40,
      },
    },
    {
      title: 'Reasons Cards',
      name: 'process',
      type: 'array',
      of: [{ type: 'reasonsCard' }],
    },
  ],
};
