export default {
  name: 'openPostionPage',
  title: 'Open Position Pages',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pageTitle',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().warning('This field cannot be empty'),
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      options: {
        maxLength: 60,
      },
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'embed',
      title: 'Embed form',
      type: 'string',
    },
    {
      name: 'jobDescription',
      title: 'Job Description',
      type: 'blockContent',
    },
  ],
};
