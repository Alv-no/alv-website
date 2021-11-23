export const createLocaleTextGetter = (languageCode) => {
  const languages = [languageCode, 'no']; // last language in array is default
  const localize = (value) => {
    if (Array.isArray(value)) {
      return value.map((v) => localize(v, languages));
    } else if (typeof value == 'object') {
      if (/^locale[A-Z]/.test(value._type)) {
        // format sanity blockContent keys (example: "_rawEn" => "en")
        const keys = Object.keys(value);
        keys.forEach((el) => {
          if (el.includes('_raw')) {
            const newLangKey = el.slice(4).toLowerCase();
            return (value[newLangKey] = value[el]);
          }
          return;
        });
        const language = languages.find((lang) => value[lang]);
        return value[language];
      }
      return Object.keys(value).reduce((result, key) => {
        result[key] = localize(value[key], languages);
        return result;
      }, {});
    }
    return value;
  };
  return localize;
};
