export default {
  title: "Video Card",
  name: "videoCard",
  type: "object",

  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnail",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "thumbnail",
    },
  },
};
