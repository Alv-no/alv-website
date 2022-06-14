import { SiMinutemailer } from 'react-icons/si';

export default {
  title: 'Product CTA',
  name: 'productCta',
  icon: SiMinutemailer,
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      title: 'productName',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: `CTA: ${title}`,
      };
    },
  },
};
