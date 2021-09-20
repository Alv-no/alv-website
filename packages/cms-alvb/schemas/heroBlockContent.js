export default {
  title: 'Hero Block Content',
  name: 'heroBlockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
      ],
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }],
      },
    },
  ],
};
