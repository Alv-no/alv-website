export default {
  name: 'siteSettings',
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
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'org',
      title: 'Org. nr',
      type: 'string',
    },
  ],
};
