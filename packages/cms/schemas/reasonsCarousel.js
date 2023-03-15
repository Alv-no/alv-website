// import carousel icon
import { MdViewCarousel } from "react-icons/md";

export default {
  title: "Reasons Carousel",
  name: "reasonsCarousel",
  type: "object",
  icon: MdViewCarousel,
  fields: [
    {
      title: "Theme",
      name: "theme",
      type: "theme",
    },
    {
      title: "Main Heading",
      name: "mainHeading",
      type: "string",
      options: {
        maxLength: 40,
      },
    },
    {
      title: "Reasons Cards",
      name: "process",
      type: "array",
      of: [{ type: "reasonsCard" }],
    },
  ],
};
