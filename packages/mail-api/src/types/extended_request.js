/**
 * @typedef {Object} MailContext
 * @property {import("../logger.js").Logger} logger
 **/

/**
 * @typedef {import("express").Request & MailContext} MailRequest
 * */

/**
 * @type {MailRequest}
 */
export let MR;
