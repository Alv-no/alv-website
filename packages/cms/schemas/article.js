export default {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "employee" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "socials",
      title: "Social Media",
      type: "socials",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "articleTag" } }],
    },
    {
      name: "guestAuthor",
      title: "Guest Author",
      type: "guestAuthor",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
