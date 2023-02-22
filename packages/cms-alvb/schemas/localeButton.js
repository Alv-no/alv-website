import supportedLanguages from "../utils/supportedLanguages";

export default {
  name: "localeButton",
  type: "object",
  options: {
    collapsible: true,
  },
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "button",
    fieldset: lang.isDefault ? null : "translations",
  })),
};
