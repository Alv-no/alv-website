export default {
  name: "ourServicesPage",
  title: "Our Services Page",
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
      name: "heading",
      title: "Hero Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Hero Description",
      type: "text",
      rows: 3,
    },
    {
      name: "mainImage",
      title: "Hero background image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "section2Eyebrow",
      title: "Eyebrow - section 2",
      type: "string",
    },
    {
      name: "section2Title",
      title: "Title - section 2",
      type: "string",
    },
    {
      name: "section2block",
      title: "Text block - section 2",
      type: "blockContent",
    },
    {
      name: "section1Image",
      title: "Image - section 2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "section2cards",
      title: "Cards - section 2",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "services" },
        },
      ],
    },
    {
      name: "section3link",
      title: "Category Page Link - section 3",
      type: "reference",
      to: { type: "categoryPage" },
    },
    {
      name: "section3cards",
      title: "Cards - section 3",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "services" },
        },
      ],
    },
    {
      name: "section3description",
      title: "Description - section 3",
      type: "text",
      rows: 3,
    },
    {
      name: "section4link",
      title: "Category Page Link - section 4",
      type: "reference",
      to: { type: "categoryPage" },
    },
    {
      name: "section4block",
      title: "Text block - section 4",
      type: "blockContent",
    },
    {
      name: "section4Image",
      title: "Image - section 4",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "section5link",
      title: "Category Page Link - section 5",
      type: "reference",
      to: { type: "categoryPage" },
    },
    {
      name: "section5cards",
      title: "Cards - section 5",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "services" },
        },
      ],
    },
    {
      name: "section5block",
      title: "Text block - section 5",
      type: "blockContent",
    },
    {
      name: "section5Image",
      title: "Image - section 5",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "section6link",
      title: "Category Page Link - section 6",
      type: "reference",
      to: { type: "categoryPage" },
    },
    {
      name: "section6cards",
      title: "Cards - section 6",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "services" },
        },
      ],
    },
    {
      name: "section6description",
      title: "Description - section 6",
      type: "text",
      rows: 3,
    },
    {
      name: "section7link",
      title: "Category Page Link - section 7",
      type: "reference",
      to: { type: "categoryPage" },
    },
    {
      name: "section7cards",
      title: "Cards - section 7",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "services" },
        },
      ],
    },
    {
      name: "section7description",
      title: "Description - section 7",
      type: "text",
      rows: 4,
    },
    {
      name: "section7Image",
      title: "Image - section 7",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
