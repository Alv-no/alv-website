export default {
  title: "Services Intro",
  name: "servicesIntro",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      rows: 3,
    },
    {
      title: "Link",
      name: "link",
      type: "string",
    },
    {
      title: "Text over image",
      name: "textOverImage",
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
      name: "servicesList",
      title: "Services List",
      type: "array",
      of: [
        {
          title: "Service item",
          name: "serviceItem",
          type: "serviceItem",
        },
      ],
    },
  ],
};
