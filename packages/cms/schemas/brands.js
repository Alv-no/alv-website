export default {
  title: "Brands",
  name: "brands",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "blockContent",
    },
    {
      title: "Logos",
      name: "logos",
      type: "array",
      of: [{ type: "imageWithAlt" }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: "Button text",
      name: "buttonText",
      type: "string",
    },
    {
      title: "Button link",
      name: "buttonLink",
      type: "string",
    },
  ],
};
