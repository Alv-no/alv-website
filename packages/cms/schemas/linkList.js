export default {
  title: "linkList",
  name: "linkList",
  type: "object",
  fields: [
    {
      title: "List",
      name: "list",
      type: "array",
      of: [{ type: "urlWithText" }],
      validation: (Rule) => Rule.required().min(1),
    },
  ],

  preview: {
    select: {
      title: "list.length",
    },

    prepare({ title }) {
      return {
        title: `Links: ${title}`,
      };
    },
  },
};
