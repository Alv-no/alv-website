export default {
  title: "Menu column",
  name: "menuColumn",
  type: "object",
  options: { collapsible: true },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      description:
        "If you don't want this to be a link, just leave this empty.",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "menuItem" }],
    },
  ],
};
