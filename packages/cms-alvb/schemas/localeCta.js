export default {
  title: 'Cta',
  name: 'localeCta',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'localeString',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title.en,
      };
    },
  },
};
