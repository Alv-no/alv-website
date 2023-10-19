import { GoogleTagManager, LinkedinTag } from "./services";
import { window, exists } from "browser-monads";

/** @param {Record<string, string>} options */
export const addTracking = (options) => {
  const trackers = [
    new GoogleTagManager(options.googleTagManagerId || ""),
    new LinkedinTag(options.linkedInPixelId || ""),
  ];
  window.cookieTrackers = trackers;
  if (trackers.every((tracker) => tracker.getConsent() === "CONSENT")) {
    trackers.forEach((tracker) => tracker.initialize());
  }
};

export const shouldShowCookieBanner = () => {
  if (exists(window)) {
    return false;
  }
  return window.cookieTrackers.some(
    (tracker) => tracker.getConsent() === "EMPTY"
  );
};

export const dismissCookies = () => {
  window.cookieTrackers.forEach((tracker) => tracker.disable());
};

export const enableCookies = () => {
  window.cookieTrackers.forEach((tracker) => tracker.enable());
};
