export default {
  title: "Text and image",
  name: "blockImage",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "block",
      title: "Text",
      type: "localeBlockContent",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
