export default {
  title: 'Category list',
  name: 'categoryList',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      name: 'categoryList',
      title: 'List',
      type: 'array',
      of: [
        {
          title: 'Title and text',
          name: 'titleText',
          type: 'object',
          options: {
            collapsible: true,
          },
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'localeString',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'localeText',
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
        },
      ],
    },
  ],
};
