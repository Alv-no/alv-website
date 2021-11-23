export default {
  title: 'Service item',
  name: 'serviceItem',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'localeString',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'localeText',
    },
    {
      title: 'Button',
      name: 'button',
      type: 'localeButton',
    },
  ],
  preview: {
    select: {
      title: 'subtitle',
      subtitle: 'title',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: subtitle.en,
        subtitle: title.en,
      };
    },
  },
};
