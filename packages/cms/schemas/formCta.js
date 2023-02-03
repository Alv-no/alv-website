export default {
  name: 'formCta',
  title: 'Form Cta',
  type: 'object',
  fields: [
    {
      name: 'identifier',
      title: 'Identifier',
      description: 'To identify which form the submission came from.',
      type: 'string',
    },
    {
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'whiteOnBlue',
      title: 'White on blue',
      type: 'boolean',
    },
  ],
};
