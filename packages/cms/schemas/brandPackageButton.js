export default {
  title: 'Brand package button',
  name: 'brandPackageButton',
  type: 'object',
  fields: [
    {
      name: 'buttonText',
      title: 'Button text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'brandPackage',
      title: 'Brand package',
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
  ],
};
