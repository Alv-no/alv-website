export default {
  title: 'Image',
  name: 'imageWithAlt',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Alt text',
      name: 'alt',
      type: 'string',
      description: 'Important for SEO and accessiblity.',
      validation: (Rule) => Rule.required(),
    },
  ],
};
