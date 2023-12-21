import sgMail from "@sendgrid/mail";

export class EmailClient {
  apiKey = "";

  /**
   * @param {string} apiKey
   * */
  constructor(apiKey) {
    this.apiKey = apiKey;

    if (!apiKey) {
      console.log("Missing configuration. Need apiKey to send data to email");
      return;
    }
  }

  /**
   * @param {import("formidable").Fields<string>} fields
   * @param {string} subject
   * @param {import("./logger.js").Logger} logger
   **/
  async sendEmail(fields, subject, logger) {
    sgMail.setApiKey(this.apiKey);
    let mailbody = "";
    for (const key in fields) {
      if (key !== "subject") {
        mailbody += "\n" + key + ": " + fields[key][0];
      }
    }
    /** @type {import("@sendgrid/mail").MailDataRequired} */
    const msg = {
      to: process.env.MAILTO,
      from: process.env.MAILFROM || "itadmin@alv.no",
      subject: subject,
      text: mailbody,
    };
    try {
      await sgMail.send(msg);
      logger.info("Email sent to " + process.env.MAILTO);
    } catch (e) {
      logger.error(e);
      throw new Error(
        "Unable to send email to sendGrid due to unexpected error: " + e
      );
    }
  }
}
