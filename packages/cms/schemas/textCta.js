export default {
  title: 'Text section',
  name: 'textCta',
  type: 'object',
  hidden: ({ parent }) => !parent?.ctaType,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Link (url)',
      name: 'link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Button text',
      description: "Leave empty if you don't want a button",
      name: 'buttonText',
      type: 'string',
      hidden: ({ parent }) => !parent?.link,
    },
  ],
};
