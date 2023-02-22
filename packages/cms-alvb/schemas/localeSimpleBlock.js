import supportedLanguages from "../utils/supportedLanguages";

export default {
  name: "localeSimpleBlock",
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
    type: "array",
    of: [
      {
        title: "Block",
        type: "block",
        styles: [{ title: "Normal", value: "normal" }],
        lists: [],
      },
    ],
    fieldset: lang.isDefault ? null : "translations",
  })),
};
