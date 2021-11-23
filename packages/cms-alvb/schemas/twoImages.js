export default {
  title: 'Two images',
  name: 'twoImages',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'image1',
      title: 'First',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image2',
      title: 'Second',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
