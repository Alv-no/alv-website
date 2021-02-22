export default {
  name: 'services',
  title: 'Service Pages',
  type: 'document',
  fields: [
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
      name: 'parentPage',
      title: 'Parent Category Page',
      type: 'reference',
      to: { type: 'categoryPage' },
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
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutSection',
      title: 'About Heading',
      type: 'string',
    },
    {
      name: 'aboutText',
      title: 'About Text',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      name: 'aboutBlock',
      title: 'About Block',
      type: 'blockContent',
    },
    {
      name: 'servicesBool',
      title: 'Enable / Disable Services List',
      type: 'boolean',
    },
    {
      name: 'servicesListText',
      title: 'Services Text/Image Overlap',
      type: 'string',
    },
    {
      name: 'ctaBool',
      title: 'Enable / Disable CTA Section',
      type: 'boolean',
    },
    {
      name: 'ctaEyebrow',
      title: 'CTA Eyebrow Text',
      type: 'string',
    },
    {
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
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
