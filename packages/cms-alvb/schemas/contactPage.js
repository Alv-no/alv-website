export default {
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      title: 'Meta data',
      name: 'meta',
      type: 'localeMeta',
    },
    {
      title: 'Section 1: Content left side',
      name: 'section1',
      type: 'titleTextImage',
    },
    {
      title: 'Section 2: Content right side',
      name: 'section2',
      type: 'titleText',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Pages - Contact',
      };
    },
  },
};
