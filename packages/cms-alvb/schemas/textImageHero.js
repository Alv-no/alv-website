export default {
  title: 'Hero - text/image split',
  name: 'textImageHero',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'heroText',
      title: 'Text',
      type: 'localeHeroBlockContent',
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
