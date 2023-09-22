/**
 * @param {string | undefined} text
 * @returns {string}
 * */
export const removeHyphensFromText = (text) => {
  if (!text) {
    return "";
  }
  return text.replaceAll("-", " ");
};
