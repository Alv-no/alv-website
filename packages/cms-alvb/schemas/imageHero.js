export default {
  title: 'Hero - text/image split',
  name: 'textImageHero',
  type: 'object',
  fields: [
    {
      name: 'heroText',
      title: 'Text',
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
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
