import { window, exists } from "browser-monads";

const GOOGLE_DATALAYER_VARIABLE = "dataLayer";

/**
 * @param {string} eventName
 * */
export const trackCustomEvent = (eventName) => {
  if (exists(window) && Array.isArray(window[GOOGLE_DATALAYER_VARIABLE])) {
    window[GOOGLE_DATALAYER_VARIABLE].push({ event: eventName });
  }
};
