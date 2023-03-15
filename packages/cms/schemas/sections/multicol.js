import { MdOutlineViewColumn } from "react-icons/md";

export default {
  title: "Multicol",
  name: "multicol",
  type: "object",
  icon: MdOutlineViewColumn,
  fields: [
    {
      name: "theme",
      type: "theme",
    },
    {
      name: "eyebrow",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "icons",
      title: "Icons",
      type: "array",
      of: [
        {
          type: "imageWithText",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "body",
      subtitle: "icons.length",
    },

    prepare({ title, subtitle }) {
      return {
        title: title[0].children[0].text,
        subtitle: `Icons: ${subtitle}`,
      };
    },
  },
};
