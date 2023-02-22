export default {
  title: "Reasons Card",
  name: "reasonsCard",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "text",
      rows: 2,
      options: {
        maxLength: 140,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
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
