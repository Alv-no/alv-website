export default {
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    {
      name: 'fromPath',
      title: 'From',
      description: 'Original page path (without https://www.alv.no)',
      type: 'string',
    },
    {
      name: 'toPath',
      title: 'To',
      type: 'string',
    },
    {
      name: 'statusCode',
      title: 'Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Permanent - 301', value: '301' },
          { title: 'Temporary - 302', value: '302' },
        ],
      },
    },
  ],
  preview: {
    select: {
      from: 'source',
      to: 'destination',
      type: 'statusCode',
    },
    prepare(selection) {
      const { from, type } = selection;
      return {
        title: `${from}`,
        subtitle: `${type ? type : 'Unknown'}`,
      };
    },
  },
};
