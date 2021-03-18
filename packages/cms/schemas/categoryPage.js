export default {
  name: 'categoryPage',
  title: 'Category Pages',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title (meta)',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'pageDescription',
      title: 'Page Description (meta)',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heroHeading',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().warning('This field cannot be empty'),
    },
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'text',
      title: 'Block content - Overview',
      type: 'blockContent',
    },
    {
      name: 'whatWeDo',
      title: 'What We Do (add in pairs)',
      type: 'whatWeDo',
    },
    // {
    //   name: 'featuredTeam',
    //   title: 'Featured Team',
    //   type: 'featuredTeam',
    // },
    {
      name: 'featuredTeam',
      title: 'Featured Team',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'employee' } }],
    },
  ],
  preview: {
    select: {
      title: 'heroHeading',
      subtitle: 'heroDescription',
      media: 'heroImage',
    },
  },
};
