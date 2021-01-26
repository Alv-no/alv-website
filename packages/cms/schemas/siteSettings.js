export default {
  name: 'siteSettings',
  title: 'Article Tags',
  type: 'document',
  fields: [
    {
      name: 'postSlider',
      title: 'Blog posts featured in slider',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'article' } }],
    },
    {
      title: 'Default to newest (overrides selection)',
      name: 'postSliderBool',
      type: 'boolean',
    },
    {
      name: 'featuredPost',
      title: 'Featured blog post',
      type: 'reference',
      to: { type: 'article' },
    },
    {
      title: 'Default to newest (overrides selection)',
      name: 'featuredPostBool',
      type: 'boolean',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
  ],
};
