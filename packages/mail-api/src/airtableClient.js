import request from "axios";

export class AirtableClient {
  /**
   * @param {string} appId
   * @param {string} tableId
   * @param {string} apiKey
   * */
  appId = "";
  tableId = "";
  apiKey = "";

  /**
   * @param {string} appId
   * @param {string} tableId
   * @param {string} apiKey
   * */
  constructor(appId, tableId, apiKey) {
    this.appId = appId;
    this.tableId = tableId;
    this.apiKey = apiKey;

    if (!appId || !tableId || !apiKey) {
      console.log(
        "Missing configuration. Need at least appId, tableId, apiKey to send data to airtable"
      );
      return;
    }
  }

  /**
   * @param {string} name
   * @param {string} email
   * @param {string} subject
   * @param {import("./logger").Logger} logger
   * */
  async sendEmployeeInformationToAirtable(name, email, subject, logger) {
    let data = {
      fields: {
        Navn: name,
        Epost: email,
        Emne: subject,
      },
    };

    try {
      await request({
        url: `https://api.airtable.com/v0/${this.appId}/${this.tableId}`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        data: JSON.stringify(data),
      });
      logger.info("Updated airtable");
    } catch (e) {
      logger.error("Unable to update airtable: " + e.message);
    }
  }
}
