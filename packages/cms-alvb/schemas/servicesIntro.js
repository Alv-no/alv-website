export default {
  title: "Services Intro",
  name: "servicesIntro",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: "Title",
      name: "title",
      type: "localeString",
    },
    {
      title: "Description",
      name: "description",
      type: "localeText",
    },
    {
      title: "Button",
      name: "button",
      type: "localeButton",
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
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
