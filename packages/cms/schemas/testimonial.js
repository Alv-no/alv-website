export default {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "company",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "image",
    },
  },
};
