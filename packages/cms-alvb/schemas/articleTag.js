import { BsTagsFill } from 'react-icons/bs';

export default {
  name: 'articleTag',
  title: 'Article Tags',
  icon: BsTagsFill,
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      description: 'Used in filtering feature on blog overview page',
      type: 'string',
    },
  ],
};
