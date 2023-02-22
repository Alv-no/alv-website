export default {
  title: "Image and text",
  name: "localeImageText",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "text",
      title: "Text",
      type: "localeString",
    },
  ],
};
