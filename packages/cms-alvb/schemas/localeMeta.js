import supportedLanguages from '../utils/supportedLanguages';

export default {
  name: 'localeMeta',
  type: 'object',
  options: {
    collapsible: true,
  },
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'meta',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
