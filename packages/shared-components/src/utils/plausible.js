const PLAUSIBLE_WHITESPACE_REPLACEMENTS = "+";
const PLAUSIBLE_EVENT_CLASSNAME = "plausible-event-name";
const PLAUSIBLE_EVENT_PROPERTY_PREFIX = "plausible-event";

/**
 * @typedef EventProperty
 * @type {object}
 * @property {string} key
 * @property {string} value
 */

/** Creates classes enabling tracking
 * @param {string} eventName
 * @param {...EventProperty} eventProperties */
export const generatePlausibleClass = (eventName, ...eventProperties) =>
  ` ${PLAUSIBLE_EVENT_CLASSNAME}=${replaceWhitespace(
    eventName
  )} ${eventProperties.map((eventProperty) =>
    generatePlausibleEventPropertyClass(eventProperty)
  )}`;

const generatePlausibleEventPropertyClass = (eventProperty) =>
  `${PLAUSIBLE_EVENT_PROPERTY_PREFIX}-${eventProperty.key}=${replaceWhitespace(
    eventProperty.value
  )} `;

/**
 * @param {string} eventName
 * @param {object} eventDetails
 * */
export const trackCustomEvent = (eventName, eventDetails) => {
  if (typeof window === "undefined" || !window.plausible) {
    return;
  }

  window.plausible(eventName, {
    props: { ...eventDetails },
  });
};

const replaceWhitespace = (eventName) =>
  eventName.replaceAll(" ", PLAUSIBLE_WHITESPACE_REPLACEMENTS);
