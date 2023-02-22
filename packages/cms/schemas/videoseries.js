export default {
  name: "videoseries",
  title: "Videoseries",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "videoseriesTitle",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().warning("This field cannot be empty"),
    },
    {
      name: "videoseriesTitle",
      title: "Videoseries Title",
      type: "string",
      options: {
        maxLength: 60,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      options: {
        maxLength: 160,
      },
    },
    {
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "featuredVideo",
      title: "Featured Video ID",
      type: "string",
    },
    {
      name: "playlists",
      title: "Playlist IDs",
      type: "playlists",
    },
  ],
};
