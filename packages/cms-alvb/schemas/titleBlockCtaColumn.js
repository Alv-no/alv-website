export default {
  title: "Title, block, and cta column",
  name: "titleBlockCtaColumn",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "block",
      title: "Text",
      type: "localeSimpleBlock",
    },
    {
      name: "button",
      title: "Button",
      type: "localeButton",
    },
  ],
};
