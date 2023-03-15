export default {
  title: "UrlWithText",
  name: "urlWithText",
  type: "object",
  fields: [
    {
      title: "Link",
      name: "link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Text",
      name: "text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
