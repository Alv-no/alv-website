import { window, exists } from "browser-monads";

/**
 * @param {number} eventId
 * */
export const trackCustomEvent = (eventId) => {
  if (exists(window) && window["lintrk"]) {
    window.lintrk("track", { conversion_id: eventId });
  }
};
