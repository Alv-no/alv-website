export default {
  name: "guestAuthor",
  title: "Guest Author",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "guestAuthor",
      title: "External Profiles",
      type: "reference",
      to: { type: "externalProfiles" },
    },
  ],
};
