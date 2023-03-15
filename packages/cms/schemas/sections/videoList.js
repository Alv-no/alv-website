import { MdVideoLibrary } from "react-icons/md";

// add icon
export default {
  title: "Video List",
  name: "videoList",
  type: "object",
  icon: MdVideoLibrary,
  fields: [
    {
      name: "theme",
      title: "Theme",
      type: "theme",
    },
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "list",
      type: "array",
      of: [{ type: "videoAndBody" }],
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "list.length",
    },

    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: `Videos: ${subtitle}`,
      };
    },
  },
};
