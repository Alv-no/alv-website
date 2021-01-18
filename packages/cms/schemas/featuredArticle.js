export default {
  name: 'featuredArticle',
  title: 'Featured Article',
  type: 'document',
  fields: [
    {
      name: 'article',
      title: 'Article',
      type: 'reference',
      to: { type: 'article' },
    },
    {
      title: 'Default to newest (overrides selection)',
      name: 'released',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'article.title',
      author: 'article.author.name',
      image: 'article.mainImage',
    },
    prepare(selection) {
      const { title, author, image } = selection;
      return {
        title: title,
        subtitle: `by: ${author ? author : 'unknown'}`,
        media: image,
      };
    },
  },
};
