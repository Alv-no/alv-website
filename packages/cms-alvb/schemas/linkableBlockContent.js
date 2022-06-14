export default {
  title: 'Linkable Block Content',
  name: 'linkableBlockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      title: 'Linkable heading',
      type: 'linkableHeading',
    },
    {
      title: 'Text image flip',
      type: 'imageTextFlip',
    },
    {
      title: 'Product CTA',
      type: 'productCta',
    },
  ],
};
