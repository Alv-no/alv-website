export default {
  title: "CTA",
  name: "cta",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      rows: 3,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "videoMp4",
      title: "Video Mp4",
      type: "file",
    },
    {
      name: "videoWebM",
      title: "Video WebM",
      type: "file",
    },
    {
      title: "Link (url)",
      name: "link",
      type: "string",
    },
  ],
};
