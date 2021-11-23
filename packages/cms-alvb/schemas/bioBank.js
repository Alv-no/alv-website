export default {
  name: 'bioBank',
  title: 'Bio Bank',
  type: 'document',
  fields: [
    {
      title: 'Meta data',
      name: 'meta',
      type: 'localeMeta',
    },
    {
      title: 'Section 1: Hero',
      name: 'section1',
      type: 'titleText',
    },
    {
      title: 'Section 2: Image and text',
      name: 'section2',
      type: 'blockImage',
    },
    {
      title: 'Section 3: Category list',
      name: 'section3',
      type: 'categoryList',
    },
  ],
};
