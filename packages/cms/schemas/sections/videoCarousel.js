import { MdVideocam } from "react-icons/md";

export default {
  title: "Video Carousel",
  name: "videoCarousel",
  icon: MdVideocam,
  type: "object",

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
      of: [{ type: "videoCard" }],
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
