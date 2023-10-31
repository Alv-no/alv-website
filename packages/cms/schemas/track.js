export default {
  name: "tracker",
  title: "Tracking info",
  type: "object",
  fields: [
    {
      name: "linkedin",
      title: "Linkedin id",
      description: "Linkedin tracking id",
      type: "number",
    },
    {
      name: "plausible",
      title: "Plausible",
      description: "Plausible goal",
      type: "string",
    },
    {
      name: "gtm",
      title: "Google tag manager",
      description: "Custom event trigger name",
      type: "string",
    },
  ],
};
