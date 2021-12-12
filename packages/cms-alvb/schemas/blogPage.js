export default {
  name: 'blogPage',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      title: 'Meta data',
      name: 'meta',
      type: 'localeMeta',
    },
    {
      title: 'Section 1: Hero',
      name: 'section',
      type: 'titleText',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Pages - Blog',
      };
    },
  },
};
