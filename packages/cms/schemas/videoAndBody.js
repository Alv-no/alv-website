export default {
  name: "videoAndBody",
  title: "Video and Body",
  type: "object",
  fields: [
    {
      name: "video",
      title: "Video",
      type: "video",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "body",
    },

    prepare({ title }) {
      return {
        title: title[0].children[0].text,
      };
    },
  },
};
