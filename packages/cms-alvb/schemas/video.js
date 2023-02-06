export default {
  title: 'Video',
  name: 'video',
  type: 'object',
  fields: [
    {
      name: 'videoWebM',
      title: 'Video WebM',
      description:
        'WebM format is the most performant video format and it is also required for Firefox support.',
      type: 'file',
      validation: (rule) => rule.required(),
    },
    {
      name: 'videoMp4',
      title: 'Video Mp4',
      description:
        'Mp4 format is required for Safari and IE11 support and will only be served to users of those browser types.',
      type: 'file',
      validation: (rule) => rule.required(),
    },
  ],
};
