export default {
  title: 'Playlist',
  name: 'playlist',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Playlist Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Playlist Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'id',
      title: 'Playlist ID',
      type: 'string',
    },
  ],
};
