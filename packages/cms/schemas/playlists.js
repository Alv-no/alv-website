export default {
  title: "Playlists",
  name: "playlists",
  type: "object",
  fields: [
    {
      title: "Playlist",
      name: "process",
      type: "array",
      of: [{ type: "playlist" }],
    },
  ],
};
