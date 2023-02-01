export default {
  name: 'careerPage',
  title: 'Career Page',
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
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'positionsListLeft',
      title: 'Positions List Left',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'openPostionPage' } }],
    },
    {
      name: 'positionsListRight',
      title: 'Positions List Right',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'openPostionPage' } }],
    },
    {
      name: 'reasonsCarousel',
      title: 'Reasons Carousel',
      type: 'reasonsCarousel',
    },
  ],
};
