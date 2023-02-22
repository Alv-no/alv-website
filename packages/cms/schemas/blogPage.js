export default {
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title (meta)",
      type: "string",
      options: {
        maxLength: 60,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageDescription",
      title: "Page Description (meta)",
      type: "text",
      rows: 2,
      options: {
        maxLength: 160,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
