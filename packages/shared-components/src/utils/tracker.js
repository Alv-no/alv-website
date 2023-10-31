import { trackCustomEvent as trackGtmEvent } from "./google-tag-manager";
import { trackCustomEvent as trackLinkedInEvent } from "./linkedin";
import { trackCustomEvent as trackPlausibleEvent } from "./plausible";

const LINKEDIN_KEY_NAME = "linkedin";
const GOOGLE_TAG_MANAGER_KEY_NAME = "gtm";
const PLAUSIBLE_KEY_NAME = "plausible";

/**
 * @typedef TrackingConfigs
 * @type {Record<string, number | string> }
 */

/**
 * @param {TrackingConfigs?} configs
 * */
export const trackEverything = (configs) => {
  if (!configs) {
    return;
  }

  const configurations = Object.entries(configs);

  configurations.forEach((config) => {
    switch (config[0]) {
      case LINKEDIN_KEY_NAME:
        trackLinkedInEvent(config[1]);
        break;
      case GOOGLE_TAG_MANAGER_KEY_NAME:
        trackGtmEvent(config[1]);
        break;
      case PLAUSIBLE_KEY_NAME:
        trackPlausibleEvent(config[1], {});
        break;
      default:
        return;
    }
  });
};
