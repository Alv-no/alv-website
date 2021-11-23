import supportedLanguages from '../utils/supportedLanguages';

export default {
  name: 'localeBlockContent',
  type: 'object',
  options: { collapsible: true },
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'blockContent',
    fieldset: lang.isDefault ? null : 'translations',
  })),
};
