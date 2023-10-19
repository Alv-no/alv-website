const BAD_RUNTIME_ERROR = new Error(
  "Cookie code is only intended to run in the browser. It was run in an environment where there is no document-property"
);

/** Checks if document is available and throws if it is not.
 * If this code is ran at the wrong place we won't put bad code in production
 * It is more of a canary solution and it fails with a good explanation
 * */
export const runtimeCheck = () => {
  if (document === undefined) {
    throw BAD_RUNTIME_ERROR;
  }
};

/**
 * @param {string} platformName
 * @returns {'CONSENT' | 'DISMISSED' | 'EMPTY'}
 * */
export const getPlatformConsent = (platformName) => {
  runtimeCheck();

  const cookieValue = getCookieValue(platformName);
  if (cookieValue === null) {
    return "EMPTY";
  }
  return cookieValue === "true" ? "CONSENT" : "DISMISSED";
};

/**
 * @param {string} platformName
 * */
const getCookieValue = (platformName) => {
  const cookieName = createCookieName(platformName);

  const cookies = document.cookie.split(" ");

  if (cookies.some((cookie) => cookie.startsWith(cookieName))) {
    const cookieText = cookies.find((cookie) => cookie.startsWith(cookieName));
    const cookieValue = cookieText.split(`${cookieName}=`)[1];
    return cookieValue.split(";")[0];
  }

  return null;
};

/** @param {string} platformName */
export const isPlatformEnabled = (platformName) => {
  runtimeCheck();
  const consent = getPlatformConsent(platformName);

  return consent === "CONSENT";
};

/**
 * @param {string} platformName
 * @param {number} expiration - amount of days before the cookie expires
 * */
export const enableTracking = (platformName, expiration = 30) => {
  runtimeCheck();
  const d = new Date();
  d.setTime(d.getTime() + expiration * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${createCookieName(
    platformName
  )}=true;SameSite=Strict;${expires};path=/`;
};

/**
 * @param {string} platformName
 * */
export const disableTracking = (platformName) => {
  runtimeCheck();
  document.cookie = `${createCookieName(platformName)}=false;SameSite=Strict`;
};

/**
 * @param {string} platformName
 * */
const createCookieName = (platformName) => {
  return `isPlatformEnabled-${platformName}`;
};
