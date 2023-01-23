const shouldShow = (parent, condition) => parent.ctaType === condition;

const validateIfRequired = (rule, type) => {
  return rule.custom((currentValue, { parent }) => {
    if (shouldShow(parent, type) && currentValue === undefined)
      return `This is required when Type is set to ${type}`;
    return true;
  });
};

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
          { title: 'Youtube', value: 'youtube' },
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
      hidden: ({ parent }) => !shouldShow(parent, 'image'),
      validation: (rule) => validateIfRequired(rule, 'image'),
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
      hidden: ({ parent }) => !shouldShow(parent, 'video'),
      validation: (rule) => validateIfRequired(rule, 'video'),
    },
    {
      name: 'videoMp4',
      title: 'Video Mp4',
      description:
        'Mp4 format is required for Safari and IE11 support and will only be served to users of those browser types.',
      type: 'file',
      hidden: ({ parent }) => !shouldShow(parent, 'video'),
      validation: (rule) => validateIfRequired(rule, 'video'),
    },
    {
      title: 'Youtube video id',
      name: 'videoId',
      type: 'string',
      hidden: ({ parent }) => !shouldShow(parent, 'youtube'),
      validation: (rule) => validateIfRequired(rule, 'youtube'),
    },
    {
      title: 'Text section',
      name: 'textSection',
      type: 'textCta',
    },
  ],
};
