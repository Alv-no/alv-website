export default {
  title: 'What we do',
  name: 'whatWeDo',
  type: 'object',
  fields: [
    {
      title: 'Image and Text',
      name: 'process',
      type: 'array',
      of: [{ type: 'imageAndText' }],
    },
  ],
};
