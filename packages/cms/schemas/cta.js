export default {
  title: 'CTA',
  name: 'cta',
  type: 'object',
  fields: [
    {
      title: 'Type',
      name: 'ctaType',
      type: 'string',
      options: {
        defaultValue: '',
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Self-hosted video', value: 'video' },
          { title: 'Youtube link', value: 'youtubeLink' },
          { title: 'Text', value: 'text' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({ parent }) => parent?.ctaType !== 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'videoWebM',
      title: 'Video WebM',
      description:
        'WebM format is the most performant video format and it is also required for Firefox support.',
      type: 'file',
      hidden: ({ parent }) => parent?.ctaType !== 'video',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoMp4',
      title: 'Video Mp4',
      description:
        'Mp4 format is required for Safari and IE11 support and will only be served to users of those browser types.',
      type: 'file',
      hidden: ({ parent }) => parent?.ctaType !== 'video',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Youtube link',
      name: 'youtubeLink',
      type: 'string',
      hidden: ({ parent }) => parent?.ctaType !== 'youtubeLink',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Text section',
      name: 'textSection',
      type: 'object',
      options: {
        collapsible: true,
      },
      hidden: ({ parent }) => !parent?.ctaType,
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
          rows: 3,
        },
        {
          title: 'Link (url)',
          name: 'link',
          type: 'string',
        },
        {
          title: 'Button text',
          description: "Leave empty if you don't want a button",
          name: 'buttonText',
          type: 'string',
          hidden: ({ parent }) => !parent?.link,
        },
      ],
    },
  ],
};
