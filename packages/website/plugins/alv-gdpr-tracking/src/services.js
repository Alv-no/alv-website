import {
  disableTracking,
  enableTracking,
  getPlatformConsent,
  isPlatformEnabled,
} from "./utils";

/**
 * @interface TrackingService
 **/

/**
 * @function
 * @name TrackingService#initialise
 **/

/** @function
 * @name TrackingService#getConsent
 * @returns {'CONSENT' | 'DISMISSED' | 'EMPTY'} **/

/**
 * @function
 * @name TrackingService#constructor
 * @param {string} trackingId
 **/

/**
 * @function
 * @name TrackingService#enable
 **/

/**
 * @function
 * @name TrackingService#disable
 **/

const NOT_IMPLEMENTED_ERROR = new Error(
  "Method is for a base class. Should not be used, only overridden"
);

class TrackingBaseClass {
  constructor(trackingId, name) {
    this.trackingId = trackingId;
    this.name = name;
  }

  enable() {
    enableTracking(this.name);
    this.initialize();
  }

  disable() {
    disableTracking(this.name);
  }

  getConsent() {
    return getPlatformConsent(this.name);
  }

  initialize() {
    if (isPlatformEnabled(this.name) && this.trackingId.length > 0) {
      this.init();
    }
  }

  init() {
    throw NOT_IMPLEMENTED_ERROR;
  }
}

/** @implements {TrackingService} */
export class GoogleTagManager extends TrackingBaseClass {
  constructor(trackingId) {
    super(trackingId, "google-tag-manager");
  }

  init() {
    this._activateGoogleTagManager(
      window,
      window.document,
      "script",
      "dataLayer",
      this.trackingId
    );
  }

  _activateGoogleTagManager(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  }
}

/**
 * @implements {TrackingService}
 */
export class LinkedinTag extends TrackingBaseClass {
  constructor(trackingId) {
    super(trackingId, "linkedin-pixel");
  }

  init() {
    this._activateLinkedinTag();
  }

  _activateLinkedinTag() {
    const _linkedin_partner_id = this.trackingId;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);

    (function (l) {
      if (!l) {
        window.lintrk = function (a, b) {
          window.lintrk.q.push([a, b]);
        };
        window.lintrk.q = [];
      }
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript";
      b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);
    })(window.lintrk);
  }
}
