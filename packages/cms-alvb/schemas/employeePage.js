export default {
  name: 'employeePage',
  title: 'Employee Page',
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
      title: 'Section 2: Title, text, button and Image',
      name: 'section2',
      type: 'imageTitleTextButton',
    },
  ],
};
