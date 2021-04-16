export default {
  name: 'externalProfiles',
  title: 'External Profiles',
  type: 'document',
  fields: [
    {
      name: 'firstname',
      title: 'Firstname',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Lastname',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'firstname',
      subtitle: 'lastname',
      media: 'image',
    },
  },
};
