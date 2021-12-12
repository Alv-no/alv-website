export default {
  name: 'employeePage',
  title: 'Our team',
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
    {
      name: 'employees',
      title: 'Employees',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'employee' },
          preview: {
            select: {
              title: 'employee.firstname',
              subtitle: 'employee.title',
            },
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Pages - Our team',
      };
    },
  },
};
