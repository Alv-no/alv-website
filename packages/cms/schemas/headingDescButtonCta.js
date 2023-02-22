export default {
  title: "HeadingDescButtonCta",
  name: "headingDescButtonCta",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "buttonText",
      title: "Button text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "buttonLink",
      title: "Button link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      initialValue: "horizontal",
      options: {
        list: [
          { title: "Horizontal", value: "horizontal", default: true },
          { title: "Vertical", value: "vertical" },
        ],
        layout: "radio",
      },
    },
    {
      name: "whiteOnBlue",
      title: "White on blue",
      type: "boolean",
      initialValue: false,
    },
  ],
};
