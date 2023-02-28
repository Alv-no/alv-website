export default {
  name: "company",
  title: "Company Pages",
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
      name: "showInNavigation",
      title: "Show in navigation",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "heroHeading",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().warning("This field cannot be empty"),
    },
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroDescription",
      title: "Hero Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroButtonText",
      title: "Hero Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroButtonLink",
      title: "Hero Button Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "blockHeading",
      title: "Heading",
      type: "string",
    },
    {
      name: "blockText",
      title: "Text Block",
      type: "blockContent",
    },
    {
      name: "blogCarousel",
      title: "Blog carousel",
      type: "blogCarousel",
    },
  ],
  preview: {
    select: {
      title: "heroHeading",
      subtitle: "heroDescription",
      media: "heroImage",
    },
  },
};
