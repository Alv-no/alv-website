export default {
  title: "Image",
  name: "imageWithText",
  type: "object",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Text",
      name: "text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "text",
      media: "image",
    },
  },
};
