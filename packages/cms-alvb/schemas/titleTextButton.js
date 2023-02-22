export default {
  title: "Title, text, and button",
  name: "titleTextButton",
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
      name: "text",
      title: "Text",
      type: "localeText",
    },
    {
      name: "button",
      title: "Button",
      type: "localeButton",
    },
  ],
};
