export default {
  title: "Text Overlap Video",
  name: "textOverlapVideo",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "videoWebm",
      title: "Video Introduction: webm",
      type: "file",
    },
    {
      name: "videoMp4",
      title: "Video Introduction - mp4",
      type: "file",
    },
    {
      name: "videoTextOverlay",
      title: "Video Text Overlay",
      type: "localeString",
    },
  ],
};
