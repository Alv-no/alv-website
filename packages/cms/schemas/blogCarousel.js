export default {
  name: 'blogCarousel',
  title: 'Blog Carousel',
  type: 'document',
  fields: [
    {
      name: 'selectedArticles',
      title: 'Selected articles',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'article' } }],
    },
  ],
};
