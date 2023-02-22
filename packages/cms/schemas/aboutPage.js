export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title (meta)",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    {
      name: "pageDescription",
      title: "Page Description (meta)",
      type: "text",
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: "brands",
      title: "Brands",
      type: "brands",
    },
    {
      name: "blogCarousel",
      title: "Blog carousel",
      type: "blogCarousel",
    },
  ],
};
