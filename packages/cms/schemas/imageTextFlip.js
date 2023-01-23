export default {
  title: 'Image and text - flippable',
  name: 'imageTextFlip',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    { name: 'flip', title: 'Flip', type: 'boolean', initialValue: false },
    {
      name: 'linkableBlock',
      title: 'Text',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      media: 'image',
      subtitle: 'flip',
    },
  },
};
