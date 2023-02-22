import supportedLanguages from "../utils/supportedLanguages";

export default {
  name: "localeText",
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
    type: "text",
    rows: 2,
    options: {
      maxLength: 160,
    },
    fieldset: lang.isDefault ? null : "translations",
  })),
};
